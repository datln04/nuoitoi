import { motion } from 'framer-motion';
import { Eye, ShieldCheck, ShoppingCart, Activity } from 'lucide-react';

const Story = () => {
    const features = [
        {
            icon: <Eye size={32} />,
            title: "Sao Kê Realtime",
            desc: "Cập nhật từng giây. Ngay khi bạn chuyển tiền, cả thế giới sẽ biết (trừ khi bạn muốn ẩn danh)."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Minh Bạch 300%",
            desc: "Hơn cả 100%. Tôi báo cáo cả việc mua ly trà sữa trân châu đường đen full topping."
        },
        {
            icon: <ShoppingCart size={32} />,
            title: "Chi Tiêu Hợp Lý",
            desc: "Không mua xe hơi, nhà lầu. Chỉ mua mì tôm, trứng, và đôi khi là rau (nếu rau giảm giá)."
        },
        {
            icon: <Activity size={32} />,
            title: "App Tracking 24/7",
            desc: "Theo dõi tôi ăn gì, ngủ lúc nào. Như show thực tế 'Big Brother' nhưng budget thấp."
        }
    ];

    return (
        <section id="story" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Tại Sao Nên <span className="text-gold">Nuôi Tôi?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Vì tôi nghèo, tôi cần tiền, nhưng tôi <strong style={{ color: 'var(--text-primary)' }}>KHÔNG MẤT LƯƠNG TÂM</strong>.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--border-subtle)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                color: 'var(--accent-gold)',
                                background: 'rgba(212, 175, 55, 0.1)',
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Story;
