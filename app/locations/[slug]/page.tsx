import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import ServicesList from "@/components/ServicesList";
import Quote from "@/components/Quote";
import Advantage from "@/components/Advantage";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { locationPages, getLocationPage } from "@/lib/locations";
import LocationHero from "./LocationHero";

export function generateStaticParams() {
  return locationPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>
        <LocationHero
          prePill={page.prePill}
          postPill={page.postPill}
          modifier={page.modifier}
          modifierType={page.modifierType}
          subtext={page.subtext}
        />
        <Marquee />
        <Work />
        <ServicesList />
        <Reveal>
          <Quote />
        </Reveal>
        <Reveal>
          <Advantage />
        </Reveal>
        <Reveal>
          <Articles />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
