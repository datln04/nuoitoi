import { motion } from 'framer-motion';
import { DollarSign, Coffee, Server, BookOpen } from 'lucide-react';

const Transparency = () => {
    const costs = [
        { icon: <Coffee />, item: 'Cà phê & Năng lượng', cost: '500.000đ / tháng', desc: 'Duy trì sự tỉnh táo để debug.' },
        { icon: <Server />, item: 'Server & Hosting', cost: '300.000đ / tháng', desc: 'Deploy các dự án demo.' },
        { icon: <BookOpen />, item: 'Khoá học & Tài liệu', cost: '1.000.000đ / tháng', desc: 'Cập nhật công nghệ mới (AI, Blockchain...)' },
        { icon: <DollarSign />, item: 'Mì gói cứu đói', cost: '200.000đ / tháng', desc: 'Khi deadline tới gần.' },
    ];

    return (
        <section id="transparency" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Minh Bạch <span className="text-gold">Chi Tiêu</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Tiền bạn donate sẽ đi về đâu?</p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {costs.map((cost, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-primary)',
                                padding: '2rem',
                                borderRadius: '0.75rem',
                                border: '1px solid var(--border-subtle)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                transition: 'transform 0.3s'
                            }}
                            whileHover={{ y: -5, borderColor: 'var(--accent-gold)' }}
                        >
                            <div
                                style={{
                                    background: 'rgba(212, 175, 55, 0.1)',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    marginBottom: '1rem',
                                    color: 'var(--accent-gold)'
                                }}
                            >
                                {cost.icon}
                            </div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{cost.item}</h3>
                            <p style={{ color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{cost.cost}</p>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{cost.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Transparency;
