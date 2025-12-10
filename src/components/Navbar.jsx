import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Câu chuyện', href: '#story' },
        { name: 'Minh bạch', href: '#transparency' },
        { name: 'Cam kết', href: '#commitment' },
        { name: 'Đầu tư', href: '#invest' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-glass)] backdrop-blur-md border-b border-[var(--border-subtle)]' : 'bg-transparent'
                }`}
            style={{
                backgroundColor: isScrolled ? 'var(--bg-glass)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none',
                height: '80px',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] group-hover:border-[var(--accent-gold)] transition-colors"
                        style={{ padding: '0.5rem', borderRadius: '0.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}>
                        <Code2 size={24} color="var(--accent-gold)" />
                    </div>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
                        Nuôi <span className="text-gold">Tôi</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-[var(--accent-gold)] transition-colors"
                            style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                            onMouseOver={(e) => e.target.style.color = 'var(--accent-gold)'}
                            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#invest"
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: 'var(--accent-gold)',
                            color: 'var(--bg-primary)',
                            fontWeight: '600',
                            borderRadius: '0.25rem', // Slight rounded, "Premium" feel is often sharp or slightly rounded
                            fontSize: '0.875rem',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Tài trợ ngay
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
