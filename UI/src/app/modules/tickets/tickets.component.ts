import { MatSnackBar } from '@angular/material/snack-bar';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared/model/ICustomer';
import { ILandingPageArea } from 'src/app/shared/model/ILandingPageModel';
import { ILandingTicket, ITicketItem } from 'src/app/shared/model/ILandingTicket';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate('100ms')]),
      transition(':leave', [animate('100ms', style({ height: 0 }))]),
    ]),
  ],
})
export class TicketsComponent implements OnInit {
  eventId!: string;
  areas: ILandingPageArea[] = [];
  areaButton: ILandingPageArea | undefined;
  tickets: ILandingTicket[] = [];
  loader = false;

  constructor(
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    this.eventId = route.snapshot.params.eventId;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.landingPageService.setColors();
    this.getConfig();
  }

  getConfig() {
    if (!this.eventId) {
      return;
    }
    this.loader = true;
    this.landingPageService
      .getLandingPage({
        eventId: this.eventId,
        stage: 2,
      })
      .subscribe({
        next: (data) => {
          this.areas = (data.json as any)['areas'] as ILandingPageArea[];
          this.tickets = (data.json as any)['tickets'];
          this.areaButton = (data.json as any)['bottom-button-bar'];
          this.recoverOrder();
          this.loader = false;
        },
        error: (err) => {
          this.snackbar.open('Este evento não existe', 'Fechar', { duration: 5000 });
          location.href = 'https://appito.com';
        },
      });
  }

  recoverOrder() {
    let customer = this.landingPageService.getCache();
    if (!customer) {
      return;
    }
    const ticket = this.tickets.find((item) => item.name === customer?.order.name);
    if (!ticket) {
      return;
    }
    ticket.expand = true;
    customer.order.items.forEach((item) => {
      const subitem = ticket.items.find((i) => i.name === item.name);
      if (!subitem) {
        return;
      }
      subitem.quantity = item.quantity;
    });
  }

  back() {
    window.history.back();
  }

  expand(ticket: ILandingTicket) {
    if (!ticket.available) {
      return;
    }
    ticket.expand = !ticket.expand;
  }

  more(ticket: ITicketItem) {
    const newQuantity = (ticket.quantity || 0) + 1;
    ticket.quantity = newQuantity > ticket.max ? ticket.quantity : newQuantity;
  }

  less(ticket: ITicketItem) {
    const newQuantity = (ticket.quantity || 0) - 1;
    ticket.quantity = newQuantity < ticket.min ? ticket.quantity : newQuantity;
  }

  get total() {
    return {
      number: this.tickets.reduce(
        (acc, curr) => acc + curr.items.reduce((acc, curr) => acc + (curr.quantity || 0), 0),
        0
      ),
      value: this.tickets.reduce(
        (acc, curr) => acc + curr.items.reduce((acc, curr) => acc + (curr.quantity || 0) * curr.price, 0),
        0
      ),
    };
  }

  next() {
    let customer = this.landingPageService.getCache();
    if (!customer) {
      customer = new Customer({
        order: { date: '', name: '', time: '', items: [] },
      } as any);
    }
    const event = this.tickets.find((item) => item.items.filter((i) => i.quantity && i.quantity > 0));
    if (!event || !customer) {
      return;
    }
    customer.order.date = event.date;
    customer.order.name = event.name;
    customer.order.time = event.time;
    customer.order.items = event.items.map((item) => {
      return {
        name: item.name,
        price: (item.quantity || 0) * item.price,
        quantity: item.quantity || 0,
        priceItem: item.price,
      };
    });

    this.landingPageService.saveCache(customer);

    const route = this.areaButton ? this.areaButton.properties.action : 'cobranca';
    this.router.navigate([`${this.eventId}/${route}`], { queryParamsHandling: 'preserve' });
  }
}
