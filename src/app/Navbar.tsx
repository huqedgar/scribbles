'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
    return (
        <div className="border-b py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Image
                        src={require('../../public/huqedgar.png')}
                        alt="huqedgar"
                        width={125}
                        className="absolute -top-8 left-20"
                    />
                </div>
                <nav className="flex gap-4 ml-8">
                    <Link href="/">Generate</Link>
                    <Link href="/collection">Collection</Link>
                </nav>
                <div>Sign In</div>
            </div>
        </div>
    );
}
