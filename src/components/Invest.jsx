import { motion } from 'framer-motion';
import { Star, Zap, Crown } from 'lucide-react';

const Invest = () => {
    const tiers = [
        {
            name: 'Seed Round',
            price: '50.000đ',
            icon: <Star size={32} />,
            perks: ['Tên bạn trong README', 'Lời cảm ơn từ đáy lòng', '1 ly cà phê cho Dev'],
            color: '#a1a1a1' // Silver-ish
        },
        {
            name: 'Series A',
            price: '200.000đ',
            icon: <Zap size={32} />,
            perks: ['Logo trên Website', 'Quyền truy cập Private Repo', 'Mì gói hảo hạng'],
            color: '#d4af37', // Gold
            featured: true
        },
        {
            name: 'IPO',
            price: '1.000.000đ',
            icon: <Crown size={32} />,
            perks: ['Nhà tài trợ chính', 'Yêu cầu tính năng riêng', 'Ăn tối cùng Dev (tự túc)'],
            color: '#e5e4e2' // Platinum
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
                        Trở Thành <span className="text-gold">Nhà Tài Trợ</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Chọn gói đầu tư phù hợp với tiềm lực của bạn.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-primary)',
                                border: `1px solid ${tier.featured ? 'var(--accent-gold)' : 'var(--border-subtle)'}`,
                                padding: '3rem 2rem',
                                borderRadius: '1rem',
                                textAlign: 'center',
                                position: 'relative',
                                transform: tier.featured ? 'scale(1.05)' : 'none',
                                boxShadow: tier.featured ? '0 10px 30px rgba(212, 175, 55, 0.1)' : 'none'
                            }}
                        >
                            <div style={{ color: tier.color, marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {tier.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tier.name}</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', color: tier.color }}>
                                {tier.price}
                            </div>
                            <ul style={{ listStyle: 'none', marginBottom: '2rem', textAlign: 'left', paddingLeft: '1rem' }}>
                                {tier.perks.map((perk, i) => (
                                    <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}>
                                        <span style={{ marginRight: '0.5rem', color: tier.color }}>•</span> {perk}
                                    </li>
                                ))}
                            </ul>
                            <button
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: tier.featured ? 'var(--accent-gold)' : 'transparent',
                                    border: `1px solid ${tier.featured ? 'var(--accent-gold)' : 'var(--border-subtle)'}`,
                                    color: tier.featured ? 'var(--bg-primary)' : 'var(--text-primary)',
                                    fontWeight: '600',
                                    borderRadius: '0.5rem',
                                    transition: 'all 0.3s'
                                }}
                                onMouseOver={(e) => {
                                    if (!tier.featured) {
                                        e.target.style.borderColor = 'var(--text-primary)';
                                        e.target.style.background = 'var(--bg-secondary)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!tier.featured) {
                                        e.target.style.borderColor = 'var(--border-subtle)';
                                        e.target.style.background = 'transparent';
                                    }
                                }}
                            >
                                Đầu tư ngay
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Invest;
