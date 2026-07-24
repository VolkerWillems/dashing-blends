const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://dashing-blends.nl/#business",
  name: "Dashing Blends",
  description:
    "Cocktailworkshops, mobiele cocktailbar en professionele horecaondersteuning op locatie vanuit Venlo.",
  url: "https://dashing-blends.nl",
  logo: "https://dashing-blends.nl/logodashingblends.webp",
  image: "https://dashing-blends.nl/comic/duane-shake-01.png",
  email: "info@dashingblends.nl",
  founder: {
    "@type": "Person",
    name: "Duane Chia",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Venlo",
    },
    {
      "@type": "Place",
      name: "Tegelen en omgeving",
    },
  ],
  sameAs: ["https://nl.linkedin.com/in/duane-chia-27945b62"],
  knowsAbout: [
    "Cocktailworkshops",
    "Mobiele cocktailbar",
    "Cocktails en mocktails",
    "Horecaondersteuning",
    "Hospitality op locatie",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Diensten van Dashing Blends",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cocktailworkshops op locatie",
          url: "https://dashing-blends.nl/cocktailworkshops",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobiele cocktailbar",
          url: "https://dashing-blends.nl/mobiele-cocktailbar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Horeca support",
          url: "https://dashing-blends.nl/horeca-support",
        },
      },
    ],
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
}
