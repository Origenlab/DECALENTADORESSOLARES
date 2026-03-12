// =============================================================================
// De Calentadores Solares — Configuración centralizada del sitio
// Fuente única de verdad para datos de negocio, contacto y SEO
// =============================================================================

// -- Identidad del sitio --
export const SITE_NAME = 'De Calentadores Solares';
export const SITE_URL = 'https://decalentadoressolares.com';
export const SITE_DESCRIPTION = 'Venta e instalación de calentadores solares en CDMX y México. Residencial, comercial e industrial. Ahorra hasta 80% en gas.';
export const SITE_TAGLINE = 'Calentadores solares';
export const SITE_SLOGAN = 'Energía solar para tu hogar y negocio';

// -- Contacto --
export const PHONE_PRIMARY = '+525547868402';
export const PHONE_DISPLAY = '55 4786 8402';
export const WHATSAPP_NUMBER = '5215547868402';
export const WHATSAPP_DISPLAY = '55 4786 8402';
export const EMAIL_PRIMARY = 'ventas@decalentadoressolares.com';

// -- Horarios --
export const BUSINESS_HOURS = {
  days: 'Lun-Sáb',
  daysLong: 'Lunes a Sábado',
  start: 8,
  end: 18,
  display: '8:00 - 18:00',
  fullDisplay: 'Lunes a Sábado, 8:00 - 18:00',
  timezone: 'America/Mexico_City',
};

// -- Ubicación --
export const LOCATIONS = [
  {
    name: 'Ciudad de México',
    address: 'CDMX, México',
    city: 'Ciudad de México',
    state: 'CDMX',
  },
];

// -- Geo SEO --
export const GEO = {
  region: 'MX-CMX',
  placename: 'Ciudad de México',
  latitude: 19.4326,
  longitude: -99.1332,
};

// -- Marca y diseño --
export const BRAND_COLOR = '#F97316'; // naranja solar
export const OG_IMAGE_DEFAULT = '/img/og-decalentadoressolares.jpg';
export const LOGO_PATH = '/img/logo.svg';

// -- WhatsApp --
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MSG = (page: string = '') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, me interesa cotizar un calentador solar${page ? ` (vi ${page})` : ''}. ¿Pueden ayudarme?`
  )}`;

// -- Categorías de productos --
export const PRODUCT_CATEGORIES = [
  { slug: 'residencial', name: 'Residencial', desc: 'Para casas y departamentos' },
  { slug: 'presurizado', name: 'Presurizado', desc: 'Mayor rendimiento y flujo' },
  { slug: 'termosifon', name: 'Termosifón', desc: 'Clásico y confiable' },
  { slug: 'comercial', name: 'Comercial', desc: 'Hoteles, gimnasios y negocios' },
  { slug: 'industrial', name: 'Industrial', desc: 'Alta capacidad y temperatura' },
  { slug: 'de-paso-solar', name: 'Paso solar', desc: 'Flujo continuo sin tanque' },
];

// -- Zonas de servicio --
export const SERVICE_ZONES = [
  'Ciudad de México', 'Estado de México', 'Puebla',
  'Hidalgo', 'Morelos', 'Querétaro', 'Tlaxcala',
];

// -- Redes sociales --
export const SOCIAL = {
  facebook: 'https://facebook.com/decalentadoressolares',
  instagram: 'https://instagram.com/decalentadoressolares',
};

// -- Métricas de confianza --
export const TRUST_METRICS = [
  { valor: '+500', texto: 'Instalaciones realizadas' },
  { valor: '80%', texto: 'Ahorro promedio en gas' },
  { valor: '15+', texto: 'Años de experiencia' },
  { valor: '100%', texto: 'Garantía en instalación' },
];
