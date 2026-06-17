export default function ComingSoon() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      margin: 0
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 8vw, 6rem)',
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '-0.02em'
      }}>
        Coming Soon
      </h1>
    </div>
  );
}