import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Bell, UserCircle, Menu, X } from 'lucide-react';
import { accentClassNames, cn } from '@/lib/utils';
import Logo from '../components/Logo';

export default function AppLayout() {
  const { accentSoftBgColor } = accentClassNames

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Mobile sidebar (overlay) */}
      <div
        className={`fixed inset-0 bg-[#550948] bg-opacity-50 z-30 md:hidden transition-opacity ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-white p-6 z-40 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:w-[200px] md:block`}
      >
        <div className="flex justify-between items-center mb-10">
          <Logo />
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" onClick={() => setSidebarOpen(false)} className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/profile" onClick={() => setSidebarOpen(false)} className="hover:text-gray-300">
            Profile
          </Link>
          <Link to="/settings" onClick={() => setSidebarOpen(false)} className="hover:text-gray-300">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content wrapper */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="h-[80px] bg-white shadow flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            {/* Hamburger menu for mobile */}
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <UserCircle className="w-8 h-8 text-gray-600" />
          </div>
        </header>

        {/* Main content */}
        <main className={cn("flex-1 overflow-auto p-4 md:p-6", accentSoftBgColor)}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};


