import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Newsletter() {
  return (
    <section className="py-16" style={{ backgroundColor: "#3B5D44" }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#3B5044]">
          Join the Ritual
        </h2>
        <p
          className="mb-8 max-w-md mx-auto font-light"
          style={{ color: "#EADDCF" }}
        >
          Receive early access to new collections and wellness insights
        </p>
        <div className="max-w-sm mx-auto flex">
          <Input
            type="email"
            placeholder="Email address"
            className="flex-1 rounded-none border-0 bg-[#EADDCF] text-[#3B5044]"
          />
          <Button
            className="px-6 rounded-none font-light tracking-wider hover:opacity-90 bg-[#C9A063] text-white"
            // style={{ backgroundColor: "#C9A063", color: "white" }}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
