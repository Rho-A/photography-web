'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isPorfolioPage = pathname === '/portfolio';

  return (
    <div className="relative min-h-screen flex flex-col text-black">
      {/* Background image — absolutely positioned at top of viewport */}
{/* 
      {isPorfolioPage && (
        <div
          className="absolute top-0 left-0 w-full h-[245px] z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/photos/background.jpg')",
          }}
        />
      )} */}

      {isHomePage && (
        <div
          className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/photos/background.jpg')",
            maskImage: 'linear-gradient(to bottom, black 50%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent)',
          }}
        />
      )}

      {/* Main content sits above background image */}
      <div className="relative z-10 flex flex-col flex-grow">
        {children}
      </div>
    </div>
  );
}

export default PageWrapper;
