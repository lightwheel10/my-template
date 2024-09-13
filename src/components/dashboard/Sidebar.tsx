"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { LogOut, Home, BarChart2, User, Settings, ChevronRight, ChevronLeft, FolderKanban } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from 'next/navigation';

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/dashboard/projects', label: 'Projects', icon: FolderKanban },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Here you would typically clear any authentication tokens or user data
    // For this example, we'll just redirect to the login page
    router.push('/login');
  };

  return (
    <nav className={cn(
      "flex flex-col h-full transition-all duration-300",
      "bg-gradient-to-b from-gray-50 to-white",
      "border-r border-gray-200",
      "shadow-lg",
      open ? "w-64" : "w-20"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {open ? (
          <>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">My-Template</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} className="text-gray-500 hover:text-gray-700">
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center p-3 rounded-lg transition-all duration-200",
                  "hover:bg-gray-100",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-gray-700"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 flex-shrink-0",
                  pathname === item.href ? "text-blue-500" : "text-gray-400"
                )} />
                {open && <span className="ml-3 font-medium">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-gray-200">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-gray-700 hover:bg-red-50 hover:text-red-600",
                "transition-all duration-200",
                !open && "justify-center"
              )}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {open && <span className="ml-3">Logout</span>}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white text-black">
            <DialogHeader>
              <DialogTitle>Are you sure you want to log out?</DialogTitle>
              <DialogDescription>
                You will be returned to the login screen.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
}