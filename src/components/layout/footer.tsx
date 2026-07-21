import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, siteConfig } from "@/data/site";
import { sections } from "@/data/sections";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/shared/social-icons";
import { NewsletterForm } from "@/components/layout/newsletter-form";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-royal-950 text-white/80">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="container relative mx-auto grid grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-heading text-base font-bold text-white">{siteConfig.shortName}</p>
              <p className="text-xs font-medium tracking-wide text-gold-400">{siteConfig.motto}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Un établissement d&apos;excellence à Lubumbashi, qui forme du préscolaire au secondaire
            technique les leaders responsables et compétents de demain.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {[
              { href: siteConfig.social.facebook, icon: FacebookIcon, label: "Facebook" },
              { href: siteConfig.social.instagram, icon: InstagramIcon, label: "Instagram" },
              { href: siteConfig.social.youtube, icon: YoutubeIcon, label: "YouTube" },
              { href: siteConfig.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-gold-400">
            Liens rapides
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/65 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-gold-400">
            Nos sections
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {sections.map((section) => (
              <li key={section.slug}>
                <Link
                  href={`/sections/${section.slug}`}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-gold-400">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/65">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              {siteConfig.contact.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
          <NewsletterForm />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>Travail • Excellence • Discipline</p>
        </div>
      </div>
    </footer>
  );
}
