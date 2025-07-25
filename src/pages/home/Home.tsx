import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import ProductGrid from "../components/ProductGrid";
import Collections from "../components/Collections";
export default function Main() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Features />
      <Collections />
      <Testimonials />
      <Contact />

    </>
  );
}