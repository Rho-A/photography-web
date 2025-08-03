'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar: React.FC = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`px-4 py-3 text-gray-30 ${isHomePage ? 'bg-[rgba(112,128,144,0)]' : 'bg-[rgba(37,70,119,0.8)]'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href={'/'}><img src="/logo-white.svg" alt="Logo" className="h-10 w-auto max-w-[120px] object-contain" /></Link>
                <nav className={`font-serif flex`}>
                    <ul className="flex gap-4 text-sm md:gap-8 md:text-base">
                        {links.map(({ name, href }) => {
                            const isActive = pathname === href;
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`group transition duration-200 text-md`}
                                    >
                                        <span
                                            className={`transition-all duration-200 pb-1 border-b-2 ${isActive
                                                ? 'border-black group-hover:border-transparent'
                                                : 'border-transparent group-hover:border-gray-200'
                                                }`}
                                        >
                                            {name.toUpperCase()}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

            </div>
        </header>
    );
}

NavBar.displayName="NavBar";