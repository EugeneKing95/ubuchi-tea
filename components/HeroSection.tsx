import Image from "next/image";
import { Button } from "./ui/button";
// import hero from ".../public/hero.jpg";
import Hero from "@/public/hero.jpeg"
// import Button from "@/components/ui/button";
export default function HeroSection() {
  return (
    <div className="relative h-screen flex">
      < div className="w-1 /2 relative" >
        < Image
          src="/placeholder.svg?height=800&width=600"
          alt="Woman enjoying tea ritual"
          fill
          className="object-cover"
          priority
        />
      </div >

      {/* Right Side */}
      < div className="w-1/2 relative" >
        <Image src=".../public/hero.jpeg" height={800} width={600} alt="Tea package detail" fill className="object-cover" />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1
              className="text-4xl md:text-5xl font-light mb-6 tracking-wide"
              style={{ fontFamily: "serif", color: "#FFF942" }}
            >
              The Harmony Collection
            </h1>
            <Button
              className="px-8 py-3 text-sm font-light tracking-wider border-2 hover:opacity-90 transition-opacity bg-transparent"
              style={{
                backgroundColor: "transparent",
                borderColor: "#FFF942",
                color: "#FFF942",
              }}
              variant="outline"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div >
    </div >)
}
