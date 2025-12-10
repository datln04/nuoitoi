const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            textAlign: 'center',
            borderTop: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)'
        }}>
            <div className="container">
                <p style={{ marginBottom: '1rem' }}>
                    &copy; {new Date().getFullYear()} Nuôi Tôi Project. Made with <span style={{ color: 'var(--accent-gold)' }}>code</span> & coffee.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="#" className="hover:text-gold transition-colors">GitHub</a>
                    <a href="#" className="hover:text-gold transition-colors">Facebook</a>
                    <a href="#" className="hover:text-gold transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
