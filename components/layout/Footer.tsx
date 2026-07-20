import type { ReactNode } from "react";
import { Camera, Mail, MapPin, Music2, Phone, PlayCircle, Share2 } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Logo } from "@/components/layout/Logo";
import { courseNavigation, primaryNavigation } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

interface SocialLink {
  label: "Instagram" | "Facebook" | "YouTube";
  href: string;
}

interface FooterProps {
  phone?: string;
  email?: string;
  address?: string;
  socialLinks?: SocialLink[];
  className?: string;
}

const socialIcons = {
  Instagram: Camera,
  Facebook: Share2,
  YouTube: PlayCircle,
};

export function Footer({
  phone,
  email,
  address = `${siteConfig.location.city}, ${siteConfig.location.region}`,
  socialLinks = [],
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-foreground text-background", className)}>
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo
              markClassName="bg-accent text-accent-foreground"
              textClassName="text-background"
            />
            <p className="max-w-sm text-body-sm text-background/75">
              {siteConfig.description}
            </p>
          </div>

          <FooterColumn title="Quick Links">
            {primaryNavigation.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Courses">
            {courseNavigation.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterContactItem icon={MapPin}>{address}</FooterContactItem>
            {phone ? <FooterContactItem icon={Phone}>{phone}</FooterContactItem> : null}
            {email ? <FooterContactItem icon={Mail}>{email}</FooterContactItem> : null}
            {socialLinks.length > 0 ? (
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((item) => {
                  const Icon = socialIcons[item.label];

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-flex size-12 items-center justify-center rounded-full border border-background/20 text-background/75 transition duration-normal hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:outline-ring"
                      aria-label={item.label}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/15 pt-6 text-caption text-background/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-and-conditions">Terms</FooterLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-5 flex items-center gap-2 font-serif text-heading-5 font-bold text-background">
        <Music2 className="size-5 text-accent" aria-hidden="true" />
        {title}
      </h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="w-fit rounded-sm text-body-sm text-background/75 transition duration-normal hover:text-accent focus-visible:outline-ring"
    >
      {children}
    </Link>
  );
}

function FooterContactItem({
  icon: Icon,
  children,
}: {
  icon: typeof MapPin;
  children: ReactNode;
}) {
  return (
    <p className="flex items-start gap-3 text-body-sm text-background/75">
      <Icon className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
