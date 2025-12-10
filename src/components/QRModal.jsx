import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import qrImage from '../assets/30ed9a64f2127d4c2403.jpg';

const QRModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem'
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        background: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '1rem',
                        border: '1px solid var(--accent-gold)',
                        maxWidth: '400px',
                        width: '100%',
                        position: 'relative',
                        textAlign: 'center',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            color: 'var(--text-secondary)',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)'
                        }}
                    >
                        <X size={20} />
                    </button>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Quét Mã <span className="text-gold">Nuôi Tôi</span></h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Mọi sự đóng góp đều được trân trọng!</p>

                    <div style={{
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        marginBottom: '1.5rem',
                        display: 'inline-block'
                    }}>
                        <img src={qrImage} alt="QR Code" style={{ width: '100%', maxWidth: '250px', display: 'block', height: '300px' }} />
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Nội dung chuyển khoản: <br />
                        <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>"Nuoi Dev Ngheo"</span>
                    </p>

                    <a
                        href={qrImage}
                        download="NuoiToi_QR.jpg"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            background: 'var(--bg-primary)',
                            color: 'var(--text-primary)',
                            borderRadius: '0.5rem',
                            border: '1px solid var(--border-subtle)',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.borderColor = 'var(--text-primary)'}
                        onMouseOut={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                    >
                        <Download size={16} /> Tải mã QR về máy
                    </a>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default QRModal;
