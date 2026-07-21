import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez le Complexe Scolaire Les Aiglons Royaux à Lubumbashi : adresse, téléphone, email et formulaire de contact.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Nous serions ravis de vous rencontrer"
        description="Une question sur les admissions, nos sections ou nos options ? Notre équipe vous répond rapidement."
        crumbLabel="Contact"
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-6">
              <AnimatedReveal direction="right">
                <div className="flex flex-col gap-5 rounded-2xl border border-royal-100 bg-white p-7 shadow-sm">
                  {[
                    { icon: MapPin, label: "Adresse", value: siteConfig.contact.address },
                    { icon: Phone, label: "Téléphone", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
                    { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                    { icon: MessageCircle, label: "WhatsApp", value: siteConfig.contact.phone, href: siteConfig.contact.whatsappHref },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                        <item.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} target={item.label === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-royal-900 hover:text-royal-600">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-royal-900">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.1}>
                <div className="rounded-2xl border border-royal-100 bg-white p-7 shadow-sm">
                  <p className="mb-4 flex items-center gap-2 font-heading text-sm font-bold text-royal-900">
                    <Clock className="h-4 w-4 text-gold-600" aria-hidden />
                    Horaires d&apos;ouverture
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day} className="flex items-center justify-between border-b border-dashed border-royal-100 pb-2 last:border-0">
                        <span>{h.day}</span>
                        <span className="font-medium text-royal-800">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.16}>
                <div className="overflow-hidden rounded-2xl border border-royal-100 shadow-sm">
                  <iframe
                    src={siteConfig.contact.mapsEmbedSrc}
                    title="Localisation du Complexe Scolaire Les Aiglons Royaux"
                    className="h-72 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimatedReveal>
            </div>

            <AnimatedReveal>
              <div className="rounded-3xl border border-royal-100 bg-white p-7 shadow-sm sm:p-9">
                <h2 className="mb-1 font-heading text-2xl font-bold text-royal-900">
                  Envoyez-nous un message
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  Remplissez le formulaire ci-dessous, nous vous répondrons dans les plus brefs
                  délais.
                </p>
                <ContactForm />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>
    </>
  );
}
