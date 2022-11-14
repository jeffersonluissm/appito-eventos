import { ILandingPageModel } from './../../shared/model/ILandingPageModel';

export function buildLandingPageSection1(): ILandingPageModel {
  const json = {
    colors: [
      {
        type: 'default-colors',
        title: '#FFFFFF',
        subtitle: '#C6C6C6',
        body: '#C6C6C6',
        accent: '#C4F54B',
        'background-primary': '#1F1F1F',
        'background-secondary': '#282828',
        navigation: '#1B1B1B 60%',
        'on-button': '#303030',
      },
      {
        type: 'page-colors',
        title: '#FFFFFF',
        subtitle: '#C6C6C6',
        body: '#C6C6C6',
        accent: '#EFE610',
        'background-primary': '#181818',
        'background-secondary': '#222222',
        navigation: '#1B1B1B 60%',
        'on-button': '#303030',
      },
    ],
    areas: [
      {
        type: 'navigation',
        section: 'header',
        properties: {
          description: '',
          title: '',
        },
      },
      {
        type: 'header',
        section: 'header',
        properties: {
          description: 'Você foi convocado para fazer parte da torcida Appito na busca pelo hexa',
          dates: ['24/11', '28/11', '02/12'],
          title: 'Mundo Appito na Copa',
        },
      },
      {
        type: 'hero-image',
        section: 'header',
        properties: {
          image: 'https://appito.blob.core.windows.net/image/copa_capa_mob.png',
        },
      },
      {
        type: 'title-body',
        section: 'main',
        properties: {
          title: 'É pra ficar na história',
          body: 'A festa da torcida pelo hexa será incrível e a Appito Arena não poderia ficar de fora dessa. A melhor arena de futebol society do país estará pronta para receber você e aqueles que torcerão contigo em um evento que ficará para a história.<br/><br/><b>24/11 – Brasil x Sérvia</b><br/>A partir das 15h<br/><br/><b>28/11 – Brasil x Suíça</b><br/>A partir das 12h<br/><br/><b>02/12 – Brasil x Camarões</b><br/>A partir das 15h',
        },
      },
      {
        type: 'section-title',
        section: 'main',
        properties: {
          title: 'O que vai rolar por aqui',
        },
      },
      {
        type: 'card-title-image-body',
        section: 'main',
        properties: {
          title: 'Transmissão de jogos',
          body: 'Serão sete televisões espalhadas pelo complexo e um telão para assistirmos a amarelinha em campo',
          image: 'https://appito.blob.core.windows.net/image/copa-Icon-jogo.png',
        },
      },
      {
        type: 'card-title-image-body',
        section: 'main',
        properties: {
          title: 'Roda de samba',
          body: 'Afinal, não há nada mais brasileiro do que um sambinha ao vivo pra animar a festa',
          image: 'https://appito.blob.core.windows.net/image/copa-Icon-samba.png',
        },
      },
      {
        type: 'card-title-image-body',
        section: 'main',
        properties: {
          title: 'Aquele churrasquinho',
          body: 'Para completar a brasilidade, faremos um churrasco de respeito, pra brasileiro nenhum por defeito',
          image: 'https://appito.blob.core.windows.net/image/copa-Icon-espeto.png',
        },
      },
      {
        type: 'card-title-image-body',
        section: 'main',
        properties: {
          title: 'Brahma na mão',
          body: 'Se tem Brasil em campo, tem Brahma na mão. E claro, geladinha do jeito que o povo gosta',
          image: 'https://appito.blob.core.windows.net/image/copa-Icon-cerveja.png',
        },
      },
      {
        type: 'section-title',
        section: 'sidebar',
        properties: {
          title: 'Aqueles que fazem o Mundo Appito acontecer',
        },
      },
      {
        type: 'sponsor-level-1',
        section: 'sidebar',
        properties: {
          category: 'Patrocínio',
          images: ['https://appito.blob.core.windows.net/image/copa-brahma-logo.png'],
        },
      },
      {
        type: 'sponsor-level-2',
        section: 'sidebar',
        properties: {
          category: 'Apoio',
          images: ['https://appito.blob.core.windows.net/image/copa-umbro-logo.png'],
        },
      },
      {
        type: 'sponsor-level-3',
        section: 'sidebar',
        properties: {
          category: 'Realização',
          images: ['https://appito.blob.core.windows.net/image/copa-appito-logo.png'],
        },
      },
      {
        type: 'section-title',
        section: 'sidebar',
        properties: {
          title: 'A casa do futebol amador e da torcida canarinha',
        },
      },
      {
        type: 'card-title-hero-body',
        section: 'sidebar',
        properties: {
          title: 'Appito Arena',
          body: '<a href="https://www.google.com/maps/place/Appito+Arena/@-23.5238656,-46.7455806,17z/data=!3m1!4b1!4m5!3m4!1s0x94cef971273469bb:0x9d8ac7d6b37eb61f!8m2!3d-23.5238656!4d-46.7433919" target="_blank"> Av. Eng. Roberto Zuccolo, 214 - Vl. Leopoldina</a><br/>400m da CPTM Imperatriz Leopoldina<br/>500m da Marginal Tietê e Pinheiros<br/>2.5km do Parque Villa Lobos',
          image: 'https://appito.blob.core.windows.net/image/copa_arena_mob.png',
        },
      },
      {
        type: 'bottom-button-bar',
        section: 'sidebar',
        properties: {
          text: 'Inscreva-se',
          action: 'tickets',
        },
      },
    ],
  };
  return {
    subscriptionId: '4628fe1c-fbc8-40df-90be-7a8cf60393c2',
    eventId: 'copa2022',
    stage: 1,
    stages: [1, 2, 3, 4, 5],
    json: JSON.stringify(json),
    message: null as any,
    error: false,
  };
}

export function buildLandingPageSection3(): ILandingPageModel {
  const json = {
    areas: [
      {
        type: 'form',
        properties: {
          title: 'Dados para cobrança',
          fields: [
            { type: 'T', properties: { label: 'Nome completo', key: 'name', id: '', size: '50' } },
            { type: 'T', properties: { label: 'CPF', key: 'documentNumber', id: '', size: '20', mask: 'CPF' } },
            { type: 'T', properties: { label: 'Celular', key: 'phone', id: '', size: '20', mask: 'PHONE' } },
            { type: 'T', properties: { label: 'E-mail', key: 'email', id: '', size: '100' } },
          ],
        },
      },
      {
        type: 'form-address',
        properties: {
          fields: [
            { type: 'T', properties: { label: 'CEP', key: 'zipcode', id: '', size: '50', mask: 'CEP' } },
            { type: 'T', properties: { label: 'Endereço', key: 'address', id: '', size: '20', mask: '' } },
            { type: 'T', properties: { label: 'Número', key: 'addressNumber', id: '', size: '10' } },
            { type: 'T', properties: { label: 'Complemento', key: 'complement', id: '', size: '10' } },
            { type: 'T', properties: { label: 'Bairro', key: 'neighborhood', id: '', size: '10' } },
            { type: 'T', properties: { label: 'Cidade', key: 'city', id: '', size: '10' } },
            { type: 'T', properties: { label: 'Estado', key: 'state', id: '', size: '10' } },
          ],
        },
      },
      { type: 'bottom-button-bar', properties: { text: 'Ir para confirmação', action: 'confirmation' } },
    ],
  };

  return {
    subscriptionId: '4628fe1c-fbc8-40df-90be-7a8cf60393c2',
    eventId: 'copa2022',
    stage: 3,
    stages: [1, 2, 3, 4, 5],
    json: JSON.stringify(json),
    message: null as any,
    error: false,
  };
}

export function buildLandingPageSection4(): ILandingPageModel {
  const json = {
    areas: [{ type: 'bottom-button-bar', properties: { text: 'Gerar Pix para pagamento', action: 'payment' } }],
  };

  return {
    subscriptionId: '4628fe1c-fbc8-40df-90be-7a8cf60393c2',
    eventId: 'copa2022',
    stage: 4,
    stages: [1, 2, 3, 4, 5],
    json: JSON.stringify(json),
    message: null as any,
    error: false,
  };
}

export function buildLandingPageSection5(): ILandingPageModel {
  const json = {
    areas: [{ type: 'bottom-button-bar', properties: { text: 'Gerar Pix para pagamento', action: 'payment' } }],
  };

  return {
    subscriptionId: '4628fe1c-fbc8-40df-90be-7a8cf60393c2',
    eventId: 'copa2022',
    stage: 4,
    stages: [1, 2, 3, 4, 5],
    json: JSON.stringify(json),
    message: null as any,
    error: false,
  };
}
