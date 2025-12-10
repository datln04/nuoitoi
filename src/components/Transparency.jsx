import { motion } from 'framer-motion';
import { DollarSign, Home, Wifi, Utensils, BookOpen, Smile } from 'lucide-react';

const Transparency = () => {
    const costs = [
        { icon: <Utensils />, item: 'Ăn Uống', percent: '40%', desc: 'Cơm, mì tôm, trứng, rau. Tuyệt đối KHÔNG có tôm hùm Alaska.' },
        { icon: <Wifi />, item: 'Điện & Net', percent: '20%', desc: 'Để duy trì kết nối và upload sao kê cho các bạn xem.' },
        { icon: <Home />, item: 'Thuê Nhà', percent: '15%', desc: 'Phòng trọ 15m², không phải Penthouse hay Villa ven sông.' },
        { icon: <BookOpen />, item: 'Học Tập', percent: '10%', desc: 'Mua khoá học, sách vở để nâng cấp não bộ.' },
        { icon: <DollarSign />, item: 'Y Tế', percent: '10%', desc: 'Thuốc cảm, Vitamin C, dầu gió (bệnh nghề nghiệp).' },
        { icon: <Smile />, item: 'Giải Trí', percent: '5%', desc: 'Netflix? Không! Chỉ xem Youtube Premium lậu thôi.' },
    ];

    return (
        <section id="transparency" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Tiền Của Bạn <span className="text-gold">Đi Đâu?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Biểu đồ chi tiết cập nhật hàng tuần (hoặc khi tôi rảnh).</p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                                background: 'var(--bg-secondary)',
                                padding: '1.5rem',
                                borderRadius: '0.75rem',
                                border: '1px solid var(--border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                transition: 'transform 0.3s'
                            }}
                            whileHover={{ x: 5, borderColor: 'var(--accent-gold)' }}
                        >
                            <div
                                style={{
                                    background: 'rgba(212, 175, 55, 0.1)',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    color: 'var(--accent-gold)',
                                    flexShrink: 0
                                }}
                            >
                                {cost.icon}
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{cost.item}</h3>
                                    <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '1.25rem' }}>{cost.percent}</span>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{cost.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Transparency;
