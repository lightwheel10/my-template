import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  { name: "John Doe", comment: "This platform has been a game-changer for me!", avatar: "/avatars/john.jpg" },
  { name: "Jane Smith", comment: "I love the features and ease of use. Highly recommended!", avatar: "/avatars/jane.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-secondary">
      <h2 className="text-4xl font-bold mb-16 text-center text-black">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-black">{testimonial.name}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-lg italic text-gray-600">&ldquo;{testimonial.comment}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}