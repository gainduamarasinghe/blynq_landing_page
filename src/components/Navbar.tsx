// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="BlynQ Logo" width={30} height={30} />
        <span className="text-2xl font-bold text-blue-900">BlynQ</span>
      </div>
      <ul className="flex space-x-8 text-gray-800 font-medium">
        <li><Link href="/" className="text-blue-500">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/pages">Pages ▼</Link></li>
      </ul>
    </nav>
  );
}