import Script from 'next/script'

export default function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rolando Remolacio Portfolio",
    "url": "https://rolandoremolacio.com",
    "description": "Professional Full Stack Developer specializing in .NET, C#, React, Next.js, and TypeScript",
    "publisher": {
      "@type": "Person",
      "@id": "https://rolandoremolacio.com/#person"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rolandoremolacio.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://rolandoremolacio.com/#person",
    "name": "Rolando Remolacio",
    "alternateName": "Jun Remolacio",
    "image": "https://rolandoremolacio.com/images/profile.png",
    "url": "https://rolandoremolacio.com",
    "sameAs": [
      "https://github.com/paynuj1099",
      "https://www.linkedin.com/in/rolando-remolacio"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Practice AI"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Pedro",
      "addressRegion": "Laguna",
      "addressCountry": "PH"
    },
    "email": "rolandojrremolacio@gmail.com",
    "telephone": "+639625871454",
    "knowsAbout": [
      "Web Development",
      "Full Stack Development",
      ".NET Development",
      "React Development",
      "Next.js",
      "TypeScript",
      "C# Programming",
      "JavaScript",
      "Database Design",
      "API Development",
      "Software Engineering"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Cavite State University - Carmona",
      "sameAs": "https://cvsu.edu.ph/"
    }
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Rolando Remolacio - Full Stack Development Services",
    "image": "https://rolandoremolacio.com/images/profile.png",
    "url": "https://rolandoremolacio.com",
    "telephone": "+639625871454",
    "email": "rolandojrremolacio@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Pedro",
      "addressRegion": "Laguna",
      "addressCountry": "PH"
    },
    "priceRange": "$$",
    "servedCuisine": [],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "14.3586",
        "longitude": "121.0430"
      },
      "geoRadius": "99999999"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://rolandoremolacio.com",
      "serviceType": "Web Development",
      "availableLanguage": {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Custom Web Application Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full-stack Web Application Development",
                "description": "Build modern, scalable web applications using React, Next.js, .NET, and TypeScript"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Frontend Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "React & Next.js Development",
                "description": "Create stunning, responsive user interfaces with modern frameworks"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Backend Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": ".NET & Node.js Backend Development",
                "description": "Build robust, scalable backend systems and APIs"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Database Design & Management",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Database Design and Optimization",
                "description": "Design efficient database solutions with SQL Server, PostgreSQL, and MongoDB"
              }
            }
          ]
        }
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rolandoremolacio.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://rolandoremolacio.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://rolandoremolacio.com/services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Blog",
        "item": "https://rolandoremolacio.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "FAQ",
        "item": "https://rolandoremolacio.com/faq"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Uses",
        "item": "https://rolandoremolacio.com/uses"
      }
    ]
  }

  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
