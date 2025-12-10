import { motion } from 'framer-motion';
import { CheckCircle, Camera, FileText, Phone } from 'lucide-react';

const Commitment = () => {
    const commitments = [
        {
            icon: <FileText size={20} />,
            text: 'Sao kê mỗi ngày: Cập nhật lúc 6h sáng, đều như vắt tranh (kể cả Chủ Nhật).'
        },
        {
            icon: <Camera size={20} />,
            text: 'Video unboxing: Mở từng gói mì tôm live stream cho anh chị xem.'
        },
        {
            icon: <CheckCircle size={20} />,
            text: 'Không giấu giếm: Từ tô phở 50k đến hộp sữa chua 8k đều ghi sổ.'
        },
        {
            icon: <Phone size={20} />,
            text: 'Hotline 24/7: Gọi hỏi tôi ăn gì lúc 3h sáng cũng bắt máy trả lời.'
        },
        {
            icon: <CheckCircle size={20} />,
            text: 'Không mua xe hơi bằng tiền donate (vì tôi chưa có bằng lái).'
        }
    ];

    return (
        <section id="commitment" className="section-padding">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '3rem', textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Cam Kết <span className="text-gold">Vàng</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Lời hứa từ một con người đang đói.</p>
                    </motion.div>

                    <div style={{ maxWidth: '800px', width: '100%' }}>
                        {commitments.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1.5rem',
                                    borderBottom: '1px solid var(--border-subtle)',
                                    background: index % 2 === 0 ? 'var(--bg-secondary)' : 'rgba(255,255,255,0.02)',
                                    borderRadius: '0.5rem',
                                    marginBottom: '1rem'
                                }}
                            >
                                <div style={{ color: 'var(--accent-gold)', marginRight: '1.5rem' }}>
                                    {item.icon}
                                </div>
                                <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commitment;
