import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { Visit } from "@/components/Visit";
import { siteConfig } from "@/data/siteConfig";

const sectionLabels = {
  about: "About",
  menu: "Menu",
  gallery: "Gallery",
  testimonials: "Testimonials",
  visit: "Visit",
} as const;

export default function Home() {
  const enabledLinks = Object.entries(siteConfig.sections)
    .filter(([, enabled]) => enabled)
    .map(([key]) => ({
      id: key,
      label: sectionLabels[key as keyof typeof sectionLabels],
      href: `#${key}`,
    }));

  return (
    <>
      <Navbar businessName={siteConfig.businessName} links={enabledLinks} />
      <main>
        <Hero
          businessName={siteConfig.businessName}
          tagline={siteConfig.tagline}
          description={siteConfig.description}
          primaryCtaHref="#menu"
          secondaryCtaHref="#visit"
        />

        {siteConfig.sections.about ? (
          <About
            title={siteConfig.about.title}
            body={siteConfig.about.body}
            image={siteConfig.about.image}
            imageAlt={siteConfig.about.imageAlt}
          />
        ) : null}

        {siteConfig.sections.menu ? (
          <Menu
            title={siteConfig.menu.title}
            intro={siteConfig.menu.intro}
            categories={siteConfig.menu.categories}
          />
        ) : null}

        {siteConfig.sections.gallery ? (
          <Gallery
            title={siteConfig.gallery.title}
            intro={siteConfig.gallery.intro}
            layout={siteConfig.gallery.layout}
            images={siteConfig.gallery.images}
          />
        ) : null}

        {siteConfig.sections.testimonials ? (
          <Testimonials
            title={siteConfig.testimonials.title}
            intro={siteConfig.testimonials.intro}
            items={siteConfig.testimonials.items}
          />
        ) : null}

        {siteConfig.sections.visit ? (
          <Visit
            title={siteConfig.visit.title}
            intro={siteConfig.visit.intro}
            address={siteConfig.address}
            phone={siteConfig.phone}
            hours={siteConfig.hours}
            mapEmbedUrl={siteConfig.visit.mapEmbedUrl}
          />
        ) : null}
      </main>
      <Footer
        businessName={siteConfig.businessName}
        description={siteConfig.description}
        links={enabledLinks}
        socials={siteConfig.socials}
      />
    </>
  );
}
