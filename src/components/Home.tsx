// pages/index.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center">
        <div className="max-w-2xl mb-1 mt-20 ml-24">
          <h1 className="text-6xl font-bold text-blue-950 mb-2">Sync Your <span className="text-blue-700">Ride . . .</span></h1> 
          <h1 className="text-6xl font-bold text-blue-950 mb-8">Simplify Your <span className="text-blue-700">Drive . . .</span>  </h1>
          <p className="text-2xl text-gray-600 mb-8">
            SAAS platform that helps you to manage your fleet, track your vehicles, and monitor your vehicles.
          </p>
          <div className="flex space-x-4 mb-12">
            <button className="relative overflow-hidden bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg group">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10">Coming Soon {'>>>'}</span>
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg">Learn more</button>
          </div>
        </div>
      </div>
  );
}