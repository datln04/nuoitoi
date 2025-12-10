import { motion } from 'framer-motion';
import { Star, Coffee, Crown, Utensils } from 'lucide-react';

const Invest = ({ onDonate }) => {
    const tiers = [
        {
            name: 'Gói Mì Tôm',
            price: '10.000đ',
            icon: <Star size={32} />,
            perks: ['Đủ mua 2 gói Hảo Hảo', 'Tên bạn trong danh sách "Cứu đói"', 'Lời cảm ơn qua email'],
            color: '#a1a1a1' // Silver
        },
        {
            name: 'Ly Cà Phê',
            price: '50.000đ',
            icon: <Coffee size={32} />,
            perks: ['Giúp tôi tỉnh táo code 4h', 'Được request 1 bài nhạc khi tôi livestream', 'Có huy hiệu "Fan Cứng"'],
            color: '#d4af37', // Gold
            featured: true
        },
        {
            name: 'Bữa Cơm Có Thịt',
            price: '500.000đ',
            icon: <Utensils size={32} />,
            perks: ['Một bữa ăn xa xỉ (có sườn)', 'Video cảm ơn riêng tư', 'Quyền lực tối cao trong group chat'],
            color: '#e5e4e2' // Platinum
        },
        {
            name: 'Chủ Tịch',
            price: '???',
            icon: <Crown size={32} />,
            perks: ['Nuôi tôi cả đời?', 'Liên hệ trực tiếp để bàn bạc', 'Muốn gì được nấy'],
            color: '#8b5cf6' // Purple/VIP
        }
    ];

    return (
        <section id="invest" className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Donate <span className="text-gold">Ngay Đi</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Đừng để tôi phải ăn mì tôm không người lái nữa.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-primary)',
                                border: `1px solid ${tier.featured ? 'var(--accent-gold)' : 'var(--border-subtle)'}`,
                                padding: '2rem',
                                borderRadius: '1rem',
                                textAlign: 'center',
                                position: 'relative',
                                transform: tier.featured ? 'scale(1.05)' : 'none',
                                boxShadow: tier.featured ? '0 10px 40px rgba(212, 175, 55, 0.15)' : 'none',
                                zIndex: tier.featured ? 2 : 1
                            }}
                        >
                            {tier.featured && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--accent-gold)',
                                    color: 'black',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold'
                                }}>
                                    BÁN CHẠY NHẤT
                                </div>
                            )}

                            <div style={{ color: tier.color, marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {tier.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>{tier.name}</h3>
                            <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: tier.color }}>
                                {tier.price}
                            </div>
                            <ul style={{ listStyle: 'none', marginBottom: '2rem', textAlign: 'left', paddingLeft: '0.5rem' }}>
                                {tier.perks.map((perk, i) => (
                                    <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        <span style={{ marginRight: '0.5rem', color: tier.color, flexShrink: 0 }}>•</span> {perk}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={onDonate}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: tier.featured ? 'var(--accent-gold)' : 'transparent',
                                    border: `1px solid ${tier.featured ? 'var(--accent-gold)' : 'var(--border-subtle)'}`,
                                    color: tier.featured ? 'black' : 'var(--text-primary)',
                                    fontWeight: '700',
                                    borderRadius: '0.5rem',
                                    transition: 'all 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                    if (!tier.featured) {
                                        e.target.style.borderColor = 'var(--text-primary)';
                                        e.target.style.background = 'var(--bg-secondary)';
                                    } else {
                                        e.target.style.opacity = '0.9';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!tier.featured) {
                                        e.target.style.borderColor = 'var(--border-subtle)';
                                        e.target.style.background = 'transparent';
                                    } else {
                                        e.target.style.opacity = '1';
                                    }
                                }}
                            >
                                Nuôi Ngay
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Invest;
