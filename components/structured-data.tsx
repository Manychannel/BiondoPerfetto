import { siteConfig } from "@/lib/site-config";
import { reviews } from "@/lib/reviews";
import type { FaqCategory } from "@/components/faq-5";

interface StructuredDataProps {
  faqCategories: FaqCategory[];
}

export function StructuredData({ faqCategories }: StructuredDataProps) {
  const hasAddress = Boolean(siteConfig.address.streetAddress);

  const hairSalon = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.streetAddress,
            addressLocality: siteConfig.address.addressLocality,
            addressRegion: siteConfig.address.addressRegion,
            postalCode: siteConfig.address.postalCode,
            addressCountry: siteConfig.address.addressCountry,
          },
        }
      : {}),
    ...(siteConfig.openingHours ? { openingHours: siteConfig.openingHours } : {}),
    sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl].filter(Boolean),
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.items
        .filter((item) => typeof item.answer === "string")
        .map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer as string,
          },
        })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hairSalon) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
