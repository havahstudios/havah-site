import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import ServicesList from "@/components/ServicesList";
import Quote from "@/components/Quote";
import Advantage from "@/components/Advantage";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "62px" }}>
        <Hero />
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
