import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-32 px-6 bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Subscribe to Our Newsletter</h2>
        <p className="text-xl mb-8 text-gray-600">Stay updated with our latest features and news</p>
        <form className="flex gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-grow text-lg py-6" />
          <Button type="submit" size="lg" className="text-lg px-8">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}