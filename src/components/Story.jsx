import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section id="story" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                        Câu Chuyện <span className="text-gold">Của Tôi</span>
                    </h2>

                    <div style={{
                        background: 'var(--bg-secondary)',
                        padding: '2.5rem',
                        borderRadius: '1rem',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Chào bạn, tôi là một lập trình viên đầy đam mê nhưng túi tiền thì... có hạn.
                            Tôi dành 12 tiếng mỗi ngày để code, fix bug, và học những công nghệ mới nhất.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Nhưng đam mê thôi chưa đủ. Server cần tiền thuê, cà phê cần tiền mua, và các khoá học chất lượng
                            cũng không hề rẻ. Đôi khi tôi tự hỏi: <span className="text-gold" style={{ fontStyle: 'italic' }}>"Tại sao code chạy mà tiền không chạy về túi?"</span>
                        </p>

                        <p>
                            Trang web này ra đời với mục đích "xin tài trợ" một cách... sang chảnh và minh bạch nhất.
                            Tôi không xin không, tôi xin để <strong style={{ color: 'var(--text-primary)' }}>đầu tư vào chính bản thân mình</strong>,
                            để trở thành một Senior Developer đóng góp giá trị thực sự cho cộng đồng.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
