import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ProductCard } from "@/components/productCard/productCard";
// import FeaturedProducts from "@/components/featuresCard";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import TopBanner from "@/components/topBanner";
// import ProductCard from "@/components/productCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#EADDCF]">
      {/* Top Banner */}
      <TopBanner />
      {/* Header Navigation */}
      <header className="bg-white border-b">
        <Navbar />
      </header>

      {/* Hero Section - Split Screen */}
      <HeroSection />

      {/* Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* <ProductCard /> */}

          {/* <FeaturedProducts /> */}
        </div>
      </section>

      {/* Secondary Hero - Full Width */}
      <section className="relative h-96 mb-16">
        <Image
          src="/farm.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-[rgba(59,80,68,0.3)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-6">
            <h2
              className="text-3xl md:text-4xl font-light mb-4 tracking-wide"
              style={{ fontFamily: "serif", color: "#FFF942" }}
            >
              Ubuntu + Chi
            </h2>
            <p className="text-lg font-light mb-6 opacity-90">
              Tea cultivated by women, for wellness that connects us all
            </p>
            <Button
              variant="outline"
              className="px-8 py-3 text-sm font-light tracking-wider border-2 hover:opacity-90 transition-opacity bg-transparent"
              style={{
                backgroundColor: "transparent",
                borderColor: "#FFF942",
                color: "#FFF942",
              }}
            >
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
