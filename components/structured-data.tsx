const baseUrl = "https://dashing-blends.nl";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Dashing Blends",
      alternateName: "Dashing Blends Venlo",
      inLanguage: "nl-NL",
      publisher: { "@id": `${baseUrl}/#business` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#business`,
      name: "Dashing Blends",
      alternateName: "Dashing Blends Cocktails & Hospitality",
      description:
        "Cocktailworkshops, mobiele cocktailbar en professionele horecaondersteuning op locatie vanuit Venlo.",
      url: baseUrl,
      logo: `${baseUrl}/logodashingblends.webp`,
      image: [
        `${baseUrl}/comic/duane-shake-01.png`,
        `${baseUrl}/comic/duane-cocktail-05.png`,
        `${baseUrl}/comic/duane-work-02.png`,
      ],
      email: "info@dashingblends.nl",
      founder: {
        "@type": "Person",
        name: "Duane Chia",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@dashingblends.nl",
        contactType: "customer service",
        availableLanguage: ["nl", "en"],
      },
      areaServed: [
        { "@type": "City", name: "Venlo" },
        { "@type": "Place", name: "Tegelen" },
        { "@type": "Place", name: "Noord-Limburg" },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61585571172645",
        "https://www.instagram.com/dashing.blends/",
        "https://nl.linkedin.com/in/duane-chia-27945b62",
      ],
      knowsAbout: [
        "Cocktailworkshop Venlo",
        "Cocktailworkshop op locatie",
        "Mobiele cocktailbar",
        "Cocktailbar op locatie",
        "Bartender op locatie",
        "Cocktails en mocktails",
        "Horeca support",
        "Hospitality voor evenementen",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cocktail- en hospitalitydiensten van Dashing Blends",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cocktailworkshop in Venlo en omgeving",
              url: `${baseUrl}/cocktailworkshops`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobiele cocktailbar op locatie",
              url: `${baseUrl}/mobiele-cocktailbar`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Horeca support in Venlo en omgeving",
              url: `${baseUrl}/horeca-support`,
            },
          },
        ],
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
