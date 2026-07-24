import type { FaqItem } from "@/components/faq-section";

const baseUrl = "https://dashing-blends.nl";

export function PageStructuredData({
  name,
  description,
  path,
  serviceType,
  breadcrumbLabel,
  faqs = [],
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  breadcrumbLabel: string;
  faqs?: FaqItem[];
}) {
  const url = `${baseUrl}${path}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name,
      description,
      inLanguage: "nl-NL",
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbLabel,
          item: url,
        },
      ],
    },
  ];

  if (serviceType) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name,
      description,
      serviceType,
      url,
      provider: { "@id": `${baseUrl}/#business` },
      areaServed: [
        { "@type": "City", name: "Venlo" },
        { "@type": "Place", name: "Tegelen" },
        { "@type": "Place", name: "Noord-Limburg" },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: url,
        serviceLocation: {
          "@type": "Place",
          name: "Op locatie in Venlo en omgeving",
        },
      },
    });
  }

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
