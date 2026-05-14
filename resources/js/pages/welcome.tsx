import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { useAppearance } from '@/hooks/use-appearance';
import { Moon, Sun } from 'lucide-react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;
    const { appearance, updateAppearance, resolvedAppearance } = useAppearance();

    const toggleTheme = () => {
        updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <Head title="NO CAP | Marketplace" />
            <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-ink selection:text-canvas transition-colors duration-300">
                
                {/* UTILITY BAR */}
                <div className="flex h-9 items-center justify-end bg-soft-cloud px-6 text-[12px] font-medium text-ink md:px-12 transition-colors duration-300">
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-mute transition-colors">Find a Store</Link>
                        <Link href="#" className="hover:text-mute transition-colors">Help</Link>
                        <Link href="#" className="hover:text-mute transition-colors">Join Us</Link>
                        <Link href="#" className="hover:text-mute transition-colors">Sign In</Link>
                    </div>
                </div>

                {/* HEADER */}
                <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-hairline bg-canvas px-6 md:px-12 transition-colors duration-300">
                    <div className="text-2xl font-bold uppercase tracking-widest text-ink">NO CAP</div>
                    
                    <nav className="hidden items-center gap-8 text-[16px] font-medium uppercase text-ink md:flex">
                        <Link href="#" className="hover:text-mute transition-colors">New & Featured</Link>
                        <Link href="#" className="hover:text-mute transition-colors">Men</Link>
                        <Link href="#" className="hover:text-mute transition-colors">Women</Link>
                        <Link href="#" className="hover:text-mute transition-colors">Kids</Link>
                        <Link href="#" className="hover:text-mute transition-colors">Sale</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button 
                            onClick={toggleTheme} 
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-cloud text-ink hover:bg-hairline transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {resolvedAppearance === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>

                        <div className="hidden items-center gap-4 text-[14px] font-medium text-ink md:flex">
                            {auth.user ? (
                                <Link href={dashboard()} className="hover:text-mute transition-colors">Account</Link>
                            ) : (
                                <>
                                    <Link href={login()} className="hover:text-mute transition-colors">Log in</Link>
                                    {canRegister && (
                                        <Link href={register()} className="hover:text-mute transition-colors">Register</Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <main className="flex flex-col">
                    {/* HERO CAMPAIGN TILE */}
                    <section className="relative flex min-h-[80vh] w-full flex-col justify-end bg-soft-cloud bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=2000&auto=format&fit=crop")' }}>
                        {/* Cinematic gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        <div className="relative z-10 flex w-full flex-col items-start gap-8 p-6 md:p-12">
                            <h1 className="max-w-5xl text-[64px] font-medium uppercase leading-[0.9] tracking-tight text-white md:text-[96px]">
                                The Urban<br/>Utility Drop
                            </h1>
                            <p className="max-w-md text-[16px] text-white/90">
                                Built for the concrete. The new fall collection merges minimalist aesthetics with absolute functionality.
                            </p>
                            <Link href="#" className="flex h-12 items-center justify-center rounded-full bg-white px-8 text-[16px] font-medium text-black transition-transform hover:scale-95">
                                Shop Collection
                            </Link>
                        </div>
                    </section>

                    {/* PRODUCT GRID - TRENDING */}
                    <section className="px-6 py-12 md:px-12">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-[32px] font-medium uppercase leading-tight text-ink">Trending Now</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
                            {[
                                { name: "NCP Heavyweight Hoodie", subtitle: "Men's Fleece Pullover", price: "$120", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop" },
                                { name: "NCP Tech Cargo", subtitle: "Men's Utility Pants", price: "$145", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800&auto=format&fit=crop" },
                                { name: "NCP Shield Jacket", subtitle: "Weather Resistant Outerwear", price: "$180", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
                                { name: "NCP Box Tee", subtitle: "Heavyweight Cotton T-Shirt", price: "$45", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop" },
                            ].map((item, index) => (
                                <div key={index} className="group relative flex flex-col bg-canvas transition-colors duration-300">
                                    <div className="relative aspect-square w-full overflow-hidden bg-soft-cloud transition-colors duration-300">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col pt-3 gap-1">
                                        <h3 className="text-[16px] font-medium text-ink leading-tight">{item.name}</h3>
                                        <p className="text-[14px] font-medium text-mute">{item.subtitle}</p>
                                        <p className="mt-1 text-[16px] font-medium text-ink">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SPORT/CATEGORY RAIL */}
                    <section className="px-6 py-12 md:px-12 border-t border-hairline transition-colors duration-300">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-[32px] font-medium uppercase leading-tight text-ink">Shop by Sport</h2>
                        </div>
                        <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
                            {[
                                { title: "Running", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800&auto=format&fit=crop" },
                                { title: "Training", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" },
                                { title: "Basketball", image: "https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=800&auto=format&fit=crop" },
                                { title: "Skateboarding", image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?q=80&w=800&auto=format&fit=crop" }
                            ].map((cat, idx) => (
                                <div key={idx} className="relative min-w-[280px] flex-shrink-0 snap-start aspect-[4/5] bg-soft-cloud overflow-hidden group transition-colors duration-300">
                                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <Link href="#" className="flex h-10 items-center justify-center rounded-full bg-white px-6 text-[14px] font-medium text-black transition-transform hover:scale-95">
                                            {cat.title}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* MEMBER BENEFIT TILE */}
                    <section className="px-6 py-12 md:px-12">
                         <div className="relative flex min-h-[60vh] w-full flex-col justify-end bg-ink bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1617387304192-35368a157140?q=80&w=2000&auto=format&fit=crop")' }}>
                            <div className="absolute inset-0 bg-black/60"></div>
                            <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-12">
                                <h2 className="mb-6 max-w-3xl text-[48px] font-medium uppercase leading-[0.9] text-white md:text-[64px]">Become A Member</h2>
                                <p className="mb-8 max-w-md text-[16px] text-white/90">Sign up for free. Join the community. Never miss a drop.</p>
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <Link href={register()} className="flex h-12 items-center justify-center rounded-full bg-white px-8 text-[16px] font-medium text-black transition-transform hover:scale-95">
                                        Join Us
                                    </Link>
                                    <Link href={login()} className="flex h-12 items-center justify-center rounded-full bg-transparent border border-white px-8 text-[16px] font-medium text-white transition-transform hover:scale-95 hover:bg-white hover:text-black">
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* FOOTER */}
                <footer className="mt-12 border-t border-hairline bg-canvas transition-colors duration-300">
                    <div className="grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4 md:px-12">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[16px] font-medium uppercase text-ink">Resources</h4>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Gift Cards</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Find a Store</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Become a Member</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Site Feedback</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[16px] font-medium uppercase text-ink">Help</h4>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Get Help</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Order Status</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Shipping and Delivery</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Returns</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Contact Us</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[16px] font-medium uppercase text-ink">Company</h4>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">About No Cap</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">News</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Careers</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Investors</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[16px] font-medium uppercase text-ink">Promotions</h4>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Student Discount</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">Military Discount</Link>
                            <Link href="#" className="text-[14px] font-medium text-mute hover:text-ink transition-colors">First Responder Discount</Link>
                        </div>
                    </div>
                    
                    {/* UTILITY ROW */}
                    <div className="flex flex-col items-center justify-between border-t border-hairline px-6 py-6 md:flex-row md:px-12">
                        <p className="mb-4 text-[12px] font-medium text-mute md:mb-0">
                            &copy; {new Date().getFullYear()} No Cap, Inc. All Rights Reserved
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <Link href="#" className="text-[12px] font-medium text-mute hover:text-ink transition-colors">Guides</Link>
                            <Link href="#" className="text-[12px] font-medium text-mute hover:text-ink transition-colors">Terms of Sale</Link>
                            <Link href="#" className="text-[12px] font-medium text-mute hover:text-ink transition-colors">Terms of Use</Link>
                            <Link href="#" className="text-[12px] font-medium text-mute hover:text-ink transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
