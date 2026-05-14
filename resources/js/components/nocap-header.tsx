import { Link, usePage } from '@inertiajs/react';
import { useAppearance } from '@/hooks/use-appearance';
import { Moon, Sun, ShoppingBag, User, X, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function NoCapHeader() {
    const { auth } = usePage().props;
    const { appearance, updateAppearance, resolvedAppearance } = useAppearance();

    const toggleTheme = () => {
        updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-hairline bg-canvas px-6 md:px-12 transition-colors duration-300 shrink-0">
            {/* LOGO */}
            <Link href="/" className="text-3xl font-black uppercase tracking-tighter text-ink leading-none">
                NO CAP
            </Link>
            
            <div className="flex items-center h-full">
                {/* NAVIGATION LINKS */}
                <nav className="hidden items-center gap-8 text-[14px] font-bold uppercase tracking-widest text-ink md:flex h-full px-8">
                    <Link href="/" className="hover:text-mute transition-colors">Home</Link>
                    <Link href="/drops" className="hover:text-mute transition-colors">Shop</Link>
                    <Link href="/about" className="hover:text-mute transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-mute transition-colors">Contact</Link>
                    <Link href="/store" className="hover:text-mute transition-colors">Store</Link>
                </nav>

                {/* VERTICAL SEPARATOR */}
                <div className="hidden md:block h-8 w-px bg-hairline mx-4"></div>

                {/* ICONS */}
                <div className="flex items-center gap-6">
                    <button 
                        onClick={toggleTheme} 
                        className="flex items-center justify-center text-ink hover:text-mute transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {resolvedAppearance === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                    </button>
                    
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="flex items-center justify-center text-ink hover:text-mute transition-colors relative group">
                                <ShoppingBag className="h-6 w-6" />
                                <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-canvas transition-colors group-hover:bg-mute">
                                    2
                                </span>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:max-w-md border-l border-hairline bg-canvas p-0 flex flex-col">
                            <SheetHeader className="p-6 border-b border-hairline flex flex-row items-center justify-between space-y-0">
                                <SheetTitle className="text-[20px] font-medium uppercase tracking-widest text-ink">Your Cart</SheetTitle>
                            </SheetHeader>
                            
                            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                                {/* DEMO CART ITEM 1 */}
                                <div className="flex gap-4">
                                    <div className="h-24 w-20 shrink-0 bg-soft-cloud">
                                        <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200&auto=format&fit=crop" alt="Product" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex flex-col flex-1 justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-[14px] font-medium uppercase text-ink">NCP Heavyweight Hoodie</h3>
                                                <button className="text-mute hover:text-ink transition-colors"><X className="w-4 h-4" /></button>
                                            </div>
                                            <p className="text-[12px] text-mute uppercase mt-1">Size: L / Black</p>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center gap-4 border border-hairline px-2 py-1">
                                                <button className="text-mute hover:text-ink"><Minus className="w-3 h-3" /></button>
                                                <span className="text-[14px] font-medium text-ink">1</span>
                                                <button className="text-mute hover:text-ink"><Plus className="w-3 h-3" /></button>
                                            </div>
                                            <p className="text-[14px] font-medium text-ink">$120.00</p>
                                        </div>
                                    </div>
                                </div>

                                {/* DEMO CART ITEM 2 */}
                                <div className="flex gap-4">
                                    <div className="h-24 w-20 shrink-0 bg-soft-cloud">
                                        <img src="https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=200&auto=format&fit=crop" alt="Product" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex flex-col flex-1 justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-[14px] font-medium uppercase text-ink">NCP Tech Cargo</h3>
                                                <button className="text-mute hover:text-ink transition-colors"><X className="w-4 h-4" /></button>
                                            </div>
                                            <p className="text-[12px] text-mute uppercase mt-1">Size: M / Olive</p>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center gap-4 border border-hairline px-2 py-1">
                                                <button className="text-mute hover:text-ink"><Minus className="w-3 h-3" /></button>
                                                <span className="text-[14px] font-medium text-ink">1</span>
                                                <button className="text-mute hover:text-ink"><Plus className="w-3 h-3" /></button>
                                            </div>
                                            <p className="text-[14px] font-medium text-ink">$145.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-hairline bg-soft-cloud flex flex-col gap-4">
                                <div className="flex justify-between items-center text-[16px] font-medium uppercase text-ink">
                                    <span>Subtotal</span>
                                    <span>$265.00</span>
                                </div>
                                <p className="text-[12px] text-mute uppercase">Shipping and taxes calculated at checkout.</p>
                                <button className="w-full bg-ink text-canvas hover:bg-ink/90 font-bold uppercase tracking-widest rounded-none h-14 mt-2 transition-transform active:scale-[0.98]">
                                    Checkout
                                </button>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <Link 
                        href={auth.user ? "/dashboard" : "/login"} 
                        className="flex items-center justify-center text-ink hover:text-mute transition-colors"
                    >
                        <User className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
