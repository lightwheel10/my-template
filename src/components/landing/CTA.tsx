import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center bg-primary">
      <h2 className="text-4xl font-bold mb-8 text-white">Ready to Get Started?</h2>
      <p className="text-2xl mb-12 text-white/90">Join thousands of satisfied users today!</p>
      <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
        <Link href="/signup">Sign Up Now</Link>
      </Button>
    </section>
  );
}