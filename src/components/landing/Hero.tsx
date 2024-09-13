import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-32 px-6 text-center bg-gradient-to-r from-primary to-purple-600">
      <h1 className="text-5xl font-extrabold mb-6 text-white">Welcome to Our Platform</h1>
      <p className="text-2xl mb-12 text-white/90">Discover amazing features and boost your productivity</p>
      <div className="flex justify-center gap-6">
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
          <Link href="/signup">Get Started</Link>
        </Button>
        <Button variant="outline" asChild size="lg" className="bg-transparent border-white text-white hover:bg-white/20">
          <Link href="#features">Learn More</Link>
        </Button>
      </div>
    </section>
  );
}