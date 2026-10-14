import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "100vh", background: "#090c0b", color: "#e9eee8",
      display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: 24, fontFamily: "Arial,sans-serif"
    }}>
      <div>
        <span style={{ color: "#b7fa68", letterSpacing: "0.2em", fontSize: 13 }}>LOST IN THE VERSE?</span>
        <h1 style={{ fontSize: "clamp(80px, 14vw, 170px)", letterSpacing: "-0.12em", margin: "20px 0" }}>404<span style={{ color: "#b7fa68" }}>.</span></h1>
        <p style={{ color: "#9ca9a0", lineHeight: 1.7, maxWidth: 350, margin: "0 auto 28px" }}>This page hasn't been discovered yet. The good stuff is back at home.</p>
        <Link href="/" style={{ background: "#b7fa68", color: "#0c160a", padding: "16px 24px", borderRadius: 7, display: "inline-block", fontWeight: 700 }}>Back to DataVerse ↗</Link>
      </div>
    </main>
  );
}
