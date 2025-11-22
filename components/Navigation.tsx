'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold hover:text-[#00d4ff] transition-colors">
              <span className="text-[#00d4ff]">&gt;</span> PORTFOLIO
            </Link>
            
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-[#00d4ff]',
                    pathname === item.href
                      ? 'text-[#00d4ff]'
                      : 'text-gray-400'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div className="md:hidden fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-[#1a1a1a] border-l border-gray-800 rounded-l-lg">
        <div className="flex flex-col p-2 gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              className={cn(
                'px-4 py-3 rounded-md transition-all text-sm font-medium',
                pathname === item.href
                  ? 'bg-[#00d4ff] text-black'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-[#00d4ff]'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Spacer for fixed nav */}
      <div className="h-16 hidden md:block" />
    </>
  );
}
