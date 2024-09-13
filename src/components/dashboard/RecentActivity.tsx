import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecentActivity() {
  const activities = [
    { user: "John Doe", action: "created a new post", time: "2 hours ago" },
    { user: "Jane Smith", action: "commented on a post", time: "4 hours ago" },
    { user: "Bob Johnson", action: "liked a comment", time: "5 hours ago" },
    { user: "Alice Brown", action: "shared a post", time: "1 day ago" },
  ];

  return (
    <ul className="space-y-4">
      {activities.map((activity, index) => (
        <li key={index} className="flex items-start space-x-4">
          <div className="bg-blue-500 rounded-full p-2">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{activity.user} {activity.action}</p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
