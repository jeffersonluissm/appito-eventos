import { ILandingPageModel } from './../../shared/model/ILandingPageModel';

export function buildLandingPageSection1(): ILandingPageModel {
  return {
    subscriptionId: '4628fe1c-fbc8-40df-90be-7a8cf60393c2',
    eventId: 'copa2022',
    stage: 1,
    stages: [1, 2, 3, 4, 5],
    json: '{"colors": [{ "type":"default-colors","title": "#FFFFFF","subtitle": "#C6C6C6","body": "#C6C6C6","accent": "#C4F54B","on-accent": "#1F1F1F","background-primary": "#1F1F1F","background-secondary": "#282828","navigation": "#1B1B1B 60%","on-button": "#303030"},{"type":"page-colors","title": "#FFFFFF","subtitle": "#C6C6C6","body": "#C6C6C6","accent": "#FDCB44","on-accent": "#16528B","background-primary": "#173209","background-secondary": "#223E13","navigation": "#1B1B1B 60%","on-button": "#303030"}],"areas": [{"type": "navigation","properties": {"description": "","title": ""}},{"type": "header","properties": {"description": "Você foi convocado para fazer parte da torcida Appito na busca pelo hexa","dates": ["24/11", "28/11", "02/12"],"title": "Mundo Appito na Copa"}},{"type": "hero-image","properties": {"image": ""}},{"type": "title-body","properties": {"title": "É pra ficar na história","body": "A festa da torcida pelo hexa será incrível e a Appito Arena não poderia ficar de fora dessa. A melhor arena de futebol society do país estará pronta para receber você e aqueles que torcerão contigo em um evento que ficará para a história.<br/><br/><b>24/11 – Brasil x Sérvia</b><br/>A partir das 14h<br/><b>28/11 – Brasil x Suíça</b><br/>A partir das 11h<br/><b>02/12 – Brasil x Camarões</b><br/>A partir das 14h"}},{"type": "section-title","properties": {"title": "O que vai rolar por aqui"}},{"type": "card-title-image-body","properties": {"title": "Transmissão de jogos","body": "Serão sete televisões espalhadas pelo complexo e um telão para assistirmos a amarelinha em campo","image": ""}},{"type": "card-title-image-body","properties": {"title": "Roda de samba","body": "Afinal, não há nada mais brasileiro do que um sambinha ao vivo pra animar a festa","image": ""}},{"type": "card-title-image-body","properties": {"title": "Aquele churrasquinho","body": "Para completar a brasilidade, faremos um churrasco de respeito, pra brasileiro nenhum por defeito","image": ""}},{"type": "card-title-image-body","properties": {"title": "Brahma na mão","body": "Se tem Brasil em campo, tem Brahma na mão. E claro, geladinha do jeito que o povo gosta","image": ""}},{"type": "card-title-image-body","properties": {"title": "Desafios e prêmios","body": "Teremos desafios em campo e prêmios diversos durante todo o evento. Serão prêmios incríveis de Brahma, Umbro e muito mais!","image": ""}},{"type": "card-title-image-body","properties": {"title": "O pé na grama, a caipirinha","body": "Além de poder vivenciar o melhor ambiente do futebol amador, a caipirinha brasileira também não vai faltar","image": ""}},{"type": "section-title","properties": {"title": "Aqueles que fazem o Mundo Appito acontecer"}},{"type": "sponsor-level-1","properties": {"category": "Patrocinador","images": ["", "", ""]}},{"type": "sponsor-level-2","properties": {"category": "Apoiador","images": ["", "", ""]}},{"type": "sponsor-level-3","properties": {"category": "Colaborador","images": ["", "", ""]}},{"type": "section-title","properties": {"title": "A casa do futebol amador e da torcida canarinha"}},{"type": "card-title-hero-body","properties": {"title": "Appito Arena","body": "Av. Eng. Roberto Zuccolo, 214 - Vl. Leopoldina<br/>400m da CPTM Imperatriz Leopoldina<br/>500m da Marginal Tietê e Pinheiros<br/>2.5km do Parque Villa Lobos","image": ""}},{"type": "bottom-button-bar","properties": {"text": "Inscreva-se","action": "etapa2"}}]}' as any,
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
      { type: 'bottom-button-bar ', properties: { text: 'Inscreva-se', action: 'confirmation' } },
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
