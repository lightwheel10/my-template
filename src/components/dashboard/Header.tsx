"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  pageName: string;
}

export default function Header({ pageName }: HeaderProps) {
  const [mounted, setMounted] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    // Simulating fetching notifications
    setNotifications(['New message from John', 'Your report is ready']);
  }, []);

  if (!mounted) return null;

  return (
    <header className="flex items-center justify-between p-4 bg-white text-gray-800 shadow-sm border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900">{pageName}</h1>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            {notifications.length === 0 ? (
              <div className="px-2 py-1.5 text-sm text-gray-500">
                No new notifications
              </div>
            ) : (
              notifications.map((notification, index) => (
                <DropdownMenuItem key={index} className="py-2">
                  {notification}
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}