import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const Comparison = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    So Sánh Với <span className="text-gold">"Người Khác"</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* The Bad Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(239, 68, 68, 0.05)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            padding: '2rem',
                            borderRadius: '1rem'
                        }}
                    >
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <XCircle /> Người Khác
                        </h3>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#f87171' }}>•</span> Sao kê sau 3 năm (hoặc không bao giờ).
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#f87171' }}>•</span> File Excel mờ như xem Youtube 144p.
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#f87171' }}>•</span> Số liệu "làm tròn" 1 + 1 = 3.
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#f87171' }}>•</span> Hỏi nhiều = Block.
                            </li>
                        </ul>
                    </motion.div>

                    {/* The Good Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(16, 185, 129, 0.05)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            padding: '2rem',
                            borderRadius: '1rem'
                        }}
                    >
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle /> Nuôi Tôi
                        </h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#34d399' }}>✓</span> Sao kê trước khi tiêu (duyệt mới mua).
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#34d399' }}>✓</span> File Excel 4K Ultra HD, chữ ký số.
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#34d399' }}>✓</span> Số liệu chính xác đến từng đồng lẻ.
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: '#34d399' }}>✓</span> Trả lời inbox nhanh hơn người yêu cũ.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
