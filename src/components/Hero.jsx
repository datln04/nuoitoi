import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = ({ onDonate }) => {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                paddingTop: '80px',
                overflow: 'hidden'
            }}
        >
            {/* Background Elements */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'var(--accent-gold)',
                    filter: 'blur(200px)',
                    opacity: '0.1',
                    zIndex: 0,
                    borderRadius: '50%'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '50px',
                            fontSize: '0.875rem',
                            color: 'var(--accent-gold)',
                            marginBottom: '1.5rem',
                            background: 'rgba(212, 175, 55, 0.05)'
                        }}
                    >
                        Dự án gọi vốn "thật thà" nhất 2025
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.2',
                        padding: '0 1rem'
                    }}
                >
                    Nuôi Tôi Đi - <br />
                    <span className="text-gold" style={{ fontStyle: 'italic' }}>Minh Bạch 300%</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    Cập nhật sao kê Realtime từng giây! Nhanh hơn cả tốc độ bạn chuyển tiền.
                    File Excel 4K Ultra HD, soi rõ từng hạt cơm tôi ăn.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                >
                    <button
                        onClick={onDonate}
                        style={{
                            padding: '1rem 2.5rem',
                            background: 'var(--accent-gold)',
                            color: 'var(--bg-primary)',
                            fontWeight: '600',
                            borderRadius: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}
                    >
                        Nuôi luôn <ArrowRight size={20} />
                    </button>
                    <a
                        href="#story"
                        style={{
                            padding: '1rem 2.5rem',
                            background: 'transparent',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-primary)',
                            fontWeight: '600',
                            borderRadius: '0.25rem',
                            transition: 'background 0.3s'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = 'var(--bg-secondary)';
                            e.target.style.borderColor = 'var(--text-primary)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.borderColor = 'var(--border-subtle)';
                        }}
                    >
                        Xem sao kê
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="hidden md:flex"
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.875rem'
                }}
            >
                {/* <span>Cuộn xuống xem bảng chi tiêu</span> */}
                <ChevronDown className="animate-bounce" size={20} />
            </motion.div>
        </section>
    );
};

export default Hero;
