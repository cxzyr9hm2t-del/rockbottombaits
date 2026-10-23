import './App.css'

export default function App() {
  return (
    <div className="shell">
      <header className="mast">
        <p className="place">Kingston, Ontario</p>
        <p className="place">Three brothers, one garage</p>
      </header>

      <main id="main">
        <p className="eyebrow">Hand-poured soft plastics</p>
        <h1>Rock Bottom Baits</h1>
        <p className="tagline">
          We started at rock bottom — and that&apos;s exactly where the fish are.
        </p>

        <svg
          className="lure"
          viewBox="0 0 360 72"
          role="img"
          aria-label="A simple drawing of a soft plastic stick bait"
        >
          <ellipse cx="180" cy="36" rx="158" ry="18" fill="#e0a15a" />
          <ellipse cx="180" cy="36" rx="158" ry="18" fill="none" stroke="#8c5a28" strokeWidth="1.5" />
          {Array.from({ length: 11 }, (_, index) => (
            <path
              key={index}
              d={`M${48 + index * 26} 22 Q${61 + index * 26} 36 ${48 + index * 26} 50`}
              fill="none"
              stroke="#8c5a28"
              strokeWidth="1.25"
              opacity="0.55"
            />
          ))}
          <ellipse cx="292" cy="36" rx="10" ry="6" fill="#f3d7a8" opacity="0.7" />
        </svg>

        <p className="note">
          Soft plastic fishing lures, poured by hand in a Kingston garage. This
          page is only a placeholder — the colours, the shop, and a way to order
          are still to come. Nothing is for sale here yet.
        </p>
      </main>

      <footer className="colophon">
        <p>Rock Bottom Baits · Kingston, Ontario</p>
      </footer>
    </div>
  )
}
