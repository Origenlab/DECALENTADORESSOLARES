// =============================================================================
// De Calentadores Solares — Helpers de Schema.org y SEO
// =============================================================================
import {
  SITE_NAME, SITE_URL, SITE_DESCRIPTION, PHONE_PRIMARY,
  PHONE_DISPLAY, EMAIL_PRIMARY, GEO, BUSINESS_HOURS,
  OG_IMAGE_DEFAULT, WHATSAPP_URL
} from './config';

// --- Organization ---
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.svg`,
    image: `${SITE_URL}${OG_IMAGE_DEFAULT}`,
    description: SITE_DESCRIPTION,
    telephone: PHONE_PRIMARY,
    email: EMAIL_PRIMARY,
    sameAs: [
      'https://facebook.com/decalentadoressolares',
      'https://instagram.com/decalentadoressolares',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_PRIMARY,
      contactType: 'sales',
      availableLanguage: 'Spanish',
      areaServed: 'MX',
    },
  };
}

// --- LocalBusiness ---
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#negocio`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: PHONE_PRIMARY,
    email: EMAIL_PRIMARY,
    image: `${SITE_URL}${OG_IMAGE_DEFAULT}`,
    priceRange: '$$',
    currenciesAccepted: 'MXN',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: `${BUSINESS_HOURS.start}:00`,
        closes: `${BUSINESS_HOURS.end}:00`,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: GEO.placename,
      addressRegion: 'CDMX',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: [
      { '@type': 'State', name: 'Ciudad de México' },
      { '@type': 'State', name: 'Estado de México' },
      { '@type': 'State', name: 'Puebla' },
    ],
    hasMap: `https://maps.google.com/?q=${GEO.latitude},${GEO.longitude}`,
  };
}

// --- WebSite ---
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

// --- Product ---
interface ProductInput {
  name: string;
  description: string;
  image: string;
  url: string;
  precio?: string;
  marca?: string;
  sku?: string;
  capacidad?: string;
  garantia?: string;
  reviewAuthor?: string;
  reviewBody?: string;
  ratingValue?: number;
  ratingCount?: number;
}

export function buildProductSchema(p: ProductInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    image: p.image.startsWith('http') ? p.image : `${SITE_URL}${p.image}`,
    url: `${SITE_URL}${p.url}`,
    brand: { '@type': 'Brand', name: p.marca || 'De Calentadores Solares' },
    ...(p.sku && { sku: p.sku }),
    ...(p.capacidad && { additionalProperty: { '@type': 'PropertyValue', name: 'Capacidad', value: p.capacidad } }),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MXN',
      price: p.precio || '0',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: SITE_NAME },
      url: `${SITE_URL}${p.url}`,
      priceValidUntil: new Date(new Date().getFullYear() + 1, 0, 1).toISOString().split('T')[0],
    },
    ...(p.reviewAuthor && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: p.ratingValue || 4.8,
        reviewCount: p.ratingCount || 24,
        bestRating: 5,
        worstRating: 1,
      },
      review: [{
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        author: { '@type': 'Person', name: p.reviewAuthor },
        reviewBody: p.reviewBody || 'Excelente calentador solar, ahorra mucho en gas.',
        datePublished: '2025-06-15',
      }],
    }),
  };
}

// --- Service ---
interface ServiceInput { name: string; description: string; url: string; price?: string; }
export function buildServiceSchema(s: ServiceInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: `${SITE_URL}${s.url}`,
    provider: { '@type': 'LocalBusiness', name: SITE_NAME, url: SITE_URL },
    areaServed: { '@type': 'Country', name: 'México' },
    ...(s.price && { offers: { '@type': 'Offer', priceCurrency: 'MXN', price: s.price } }),
  };
}

// --- FAQ ---
interface FAQItem { pregunta: string; respuesta: string; }
export function buildFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
    })),
  };
}

// --- Breadcrumb ---
interface BreadcrumbItem { name: string; url: string; }
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// --- Article ---
interface ArticleInput {
  title: string; description: string; url: string;
  image: string; authorName: string; datePublished: string;
  dateModified?: string; categoria?: string;
}
export function buildArticleSchema(a: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    image: a.image.startsWith('http') ? a.image : `${SITE_URL}${a.image}`,
    url: `${SITE_URL}${a.url}`,
    datePublished: a.datePublished,
    dateModified: a.dateModified || a.datePublished,
    author: { '@type': 'Person', name: a.authorName },
    publisher: {
      '@type': 'Organization', name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/img/logo.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${a.url}` },
  };
}
