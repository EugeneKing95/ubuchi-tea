import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-screen flex flex-col md:flex-row overflow-hidden rounded-b-md">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          src="/tea.jpg"
          alt="Woman enjoying tea ritual"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          src="/woman.jpg"
          alt="Tea package detail"
          fill
          className="object-cover"
        />
      </div>

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50">
        <h1 className="text-3xl md:text-5xl text-white mb-6">
          The Harmony Collection
        </h1>
        <Link href="/product">
          <Button
            className="px-8 py-3 text-sm font-light tracking-wider border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300"
            variant="outline"
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
