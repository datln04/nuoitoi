import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Commitment = () => {
    const commitments = [
        'Push code lên GitHub mỗi ngày (vâng, cả Chủ nhật).',
        'Viết 1 bài blog kỹ thuật mỗi tuần chia sẻ kiến thức.',
        'Dự án sẽ luôn Open Source để cộng đồng cùng học hỏi.',
        'Không dùng tiền donate để mua skin game.',
        'Báo cáo tài chính công khai hàng tháng.'
    ];

    return (
        <section id="commitment" className="section-padding">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '3rem', textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Cam Kết <span className="text-gold">Với Nhà Đầu Tư</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Tôi không chỉ nhận, tôi còn cho đi.</p>
                    </motion.div>

                    <div style={{ maxWidth: '800px', width: '100%' }}>
                        {commitments.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1.5rem',
                                    borderBottom: '1px solid var(--border-subtle)',
                                    background: index % 2 === 0 ? 'var(--bg-secondary)' : 'transparent',
                                    borderRadius: '0.5rem',
                                    marginBottom: '1rem'
                                }}
                            >
                                <CheckCircle color="var(--accent-gold)" style={{ marginRight: '1rem', flexShrink: 0 }} />
                                <span style={{ fontSize: '1.1rem' }}>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commitment;
