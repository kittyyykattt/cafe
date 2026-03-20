import Link from "next/link";

type FooterProps = {
  businessName: string;
  description: string;
  links: { id: string; label: string; href: string }[];
  socials: { label: string; href: string }[];
};

export function Footer({ businessName, description, links, socials }: FooterProps) {
  return (
    <footer className="bg-[#1A0D05] text-[#F7F3EE]">
      <div className="template-container grid gap-10 py-16 md:grid-cols-[44%_1px_1fr] md:items-start">
        <div>
          <p className="font-heading text-[clamp(3rem,6vw,3.75rem)] leading-[0.95] tracking-[-0.02em] opacity-[0.15]">
            {businessName}
          </p>
          <p className="mt-4 max-w-sm text-sm text-[#F7F3EE]">
            {description}
          </p>
        </div>
        <div className="hidden h-full min-h-32 bg-[#F7F3EE]/35 md:block" />
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="section-eyebrow text-[#F7F3EE]">
              Sections
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-sm uppercase tracking-[0.16em] text-[#F7F3EE]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow text-[#F7F3EE]">
              Social
            </p>
            <ul className="mt-4 space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm uppercase tracking-[0.16em] text-[#F7F3EE]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
