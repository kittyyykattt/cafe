/**
 * TEMPLATE EDIT GUIDE:
 * 1) Update business identity in `businessName`, `tagline`, and `description`.
 * 2) Update branding quickly by changing `theme.activeTheme` or editing theme tokens.
 * 3) Replace `menu`, `gallery.images`, and `testimonials` with client content.
 * 4) Turn sections on/off from `sections` without changing component code.
 */

export type SectionKey =
  | "about"
  | "menu"
  | "gallery"
  | "testimonials"
  | "visit";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export type GalleryLayout = "grid" | "carousel";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type ThemePreset = {
  background: string;
  foreground: string;
  card: string;
  muted: string;
  border: string;
  primary: string;
  accent: string;
  headingFont: string;
  bodyFont: string;
};

export type SiteConfig = {
  businessName: string;
  tagline: string;
  description: string;
  address: string;
  hours: string[];
  phone: string;
  socials: { label: string; href: string }[];
  navCtaLabel: string;
  navCtaHref: string;
  sections: Record<SectionKey, boolean>;
  about: {
    title: string;
    body: string;
    image: string;
    imageAlt: string;
  };
  menu: {
    title: string;
    intro: string;
    categories: MenuCategory[];
  };
  gallery: {
    title: string;
    intro: string;
    layout: GalleryLayout;
    images: GalleryImage[];
  };
  testimonials: {
    title: string;
    intro: string;
    items: Testimonial[];
  };
  visit: {
    title: string;
    intro: string;
    mapEmbedUrl: string;
  };
  theme: {
    activeTheme: "warm-cafe" | "light-bakery" | "modern-minimal";
    presets: Record<string, ThemePreset>;
  };
};

export const siteConfig: SiteConfig = {
  businessName: "Cafe Name",
  tagline:
    "Add your business tagline here. Keep it short, warm, and clear for your target customers.",
  description:
    "Use this section to describe your cafe or small business in one clear sentence.",
  address: "123 Main Street, Your City",
  hours: [
    "Mon-Fri: 7:00 AM - 6:00 PM",
    "Saturday: 8:00 AM - 7:00 PM",
    "Sunday: 8:00 AM - 4:00 PM",
  ],
  phone: "(555) 012-4839",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
  navCtaLabel: "Visit Us",
  navCtaHref: "#visit",
  sections: {
    about: true,
    menu: true,
    gallery: true,
    testimonials: true,
    visit: true,
  },
  about: {
    title: "About Your Cafe",
    body: "Write a short brand story here. Mention your style, your signature products, and what makes your business feel special.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Cozy cafe interior with warm lighting and wooden tables",
  },
  menu: {
    title: "Menu Highlights",
    intro: "Replace these items with your real menu. You can keep 2-4 categories depending on business type.",
    categories: [
      {
        id: "coffee",
        title: "Coffee",
        items: [
          {
            name: "House Espresso",
            description: "Chocolate, toasted almond, citrus finish",
            price: "$4.50",
          },
          {
            name: "Vanilla Oat Latte",
            description: "Double shot, house vanilla syrup, oat milk",
            price: "$6.00",
          },
        ],
      },
      {
        id: "pastries",
        title: "Pastries",
        items: [
          {
            name: "Brown Butter Croissant",
            description: "Flaky layers with cultured butter glaze",
            price: "$5.00",
          },
          {
            name: "Seasonal Fruit Danish",
            description: "Vanilla cream, rotating local fruit",
            price: "$5.50",
          },
        ],
      },
      {
        id: "signatures",
        title: "Signatures",
        items: [
          {
            name: "Smoked Maple Cold Brew",
            description: "Slow steeped brew, maple foam, smoked salt",
            price: "$6.50",
          },
          {
            name: "Affogato Sundae",
            description: "Espresso poured over vanilla gelato",
            price: "$7.00",
          },
        ],
      },
    ],
  },
  gallery: {
    title: "Gallery",
    intro: "Swap these Unsplash links with client images or brand photography.",
    layout: "grid",
    images: [
      {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
        alt: "Fresh coffee being poured",
      },
      {
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80",
        alt: "Barista preparing espresso",
      },
      {
        src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=80",
        alt: "Pastries displayed in a glass case",
      },
      {
        src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1400&q=80",
        alt: "Cafe table with latte art",
      },
      {
        src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=80",
        alt: "Coffee beans and brewing tools",
      },
      {
        src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80",
        alt: "Cozy corner seating in cafe",
      },
    ],
  },
  testimonials: {
    title: "What Guests Say",
    intro: "Client testimonials are fully data-driven and can be swapped in seconds.",
    items: [
      {
        quote:
          "Add a real testimonial here. Keep it natural and specific to your customer experience.",
        author: "Customer Name",
        role: "Customer Role",
      },
      {
        quote:
          "Another testimonial placeholder. Replace with social-proof from reviews or client feedback.",
        author: "Customer Name",
        role: "Customer Role",
      },
      {
        quote:
          "Use this space for a third customer quote to strengthen trust on the page.",
        author: "Customer Name",
        role: "Customer Role",
      },
    ],
  },
  visit: {
    title: "Plan Your Visit",
    intro: "Easy-to-update contact and location details for any local business template client.",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Your+City&output=embed",
  },
  theme: {
    activeTheme: "warm-cafe",
    presets: {
      "warm-cafe": {
        background: "#F7F3EE",
        foreground: "#2C1A0E",
        card: "#EDE7DC",
        muted: "#6B5A4B",
        border: "#C4B8A8",
        primary: "#B85C38",
        accent: "#7A8C6E",
        headingFont: "var(--font-display-family), Georgia, serif",
        bodyFont: "var(--font-body-family), system-ui, -apple-system, sans-serif",
      },
      "light-bakery": {
        background: "#fdf8f3",
        foreground: "#35281f",
        card: "#fffdf9",
        muted: "#7b6a5d",
        border: "#eadfd2",
        primary: "#9d5f3b",
        accent: "#f2bf87",
        headingFont: "Georgia, 'Times New Roman', serif",
        bodyFont: "Inter, system-ui, -apple-system, sans-serif",
      },
      "modern-minimal": {
        background: "#f4f5f7",
        foreground: "#13161a",
        card: "#ffffff",
        muted: "#5f6770",
        border: "#d8dee6",
        primary: "#2f4c69",
        accent: "#7fb2d9",
        headingFont: "'DM Serif Display', Georgia, serif",
        bodyFont: "Inter, system-ui, -apple-system, sans-serif",
      },
    },
  },
};

export const activeTheme =
  siteConfig.theme.presets[siteConfig.theme.activeTheme];
