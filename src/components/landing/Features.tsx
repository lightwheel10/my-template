import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, Zap, Rocket } from "lucide-react";

const features = [
  { title: "Intuitive Design", description: "User-friendly interface for seamless navigation", icon: Lightbulb },
  { title: "Lightning Fast", description: "Optimized performance for quick load times", icon: Zap },
  { title: "Powerful Features", description: "Advanced tools to supercharge your workflow", icon: Rocket },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-secondary">
      <h2 className="text-4xl font-bold mb-16 text-center text-black">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle className="text-2xl mb-2 text-black">{feature.title}</CardTitle>
              <CardDescription className="text-lg text-gray-600">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}