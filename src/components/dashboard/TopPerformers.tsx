import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Performer {
  name: string;
  role: string;
  performance: string;
  avatar: string;
}

const performers: Performer[] = [
  { name: "Alice Johnson", role: "Sales Representative", performance: "98% quota", avatar: "/avatars/alice.jpg" },
  { name: "Bob Smith", role: "Customer Support", performance: "95% satisfaction", avatar: "/avatars/bob.jpg" },
  { name: "Carol Williams", role: "Product Manager", performance: "3 successful launches", avatar: "/avatars/carol.jpg" },
  { name: "David Brown", role: "Software Engineer", performance: "50+ bugs fixed", avatar: "/avatars/david.jpg" },
];

export function TopPerformers() {
  return (
    <ul className="space-y-4">
      {performers.map((performer, index) => (
        <li key={index} className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={performer.avatar} alt={performer.name} />
            <AvatarFallback>{performer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{performer.name}</p>
            <p className="text-sm text-muted-foreground">{performer.role}</p>
          </div>
          <div className="text-sm text-green-500 font-medium">{performer.performance}</div>
        </li>
      ))}
    </ul>
  );
}