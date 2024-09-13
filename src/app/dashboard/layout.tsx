"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';

const pageNames: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/dashboard/analytics': 'Analytics',
  '/dashboard/projects': 'Projects', // Add this line
  '/dashboard/profile': 'Profile',
  '/dashboard/settings': 'Settings',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const [pageName, setPageName] = useState('Dashboard');

  useEffect(() => {
    setPageName(pageNames[pathname] || 'Dashboard');
  }, [pathname]);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <Header pageName={pageName} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}