import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      width: "100%", height: "100%", padding: 76, background: "#0b100d",
      color: "#f0f5ed", display: "flex", flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 58, height: 58, border: "2px solid #bcf77e", borderRadius: 12,
          fontSize: 27, fontWeight: 700
        }}>dv</div>
        <span style={{ fontSize: 31, fontWeight: 700 }}>Integral DataVerse<span style={{ color: "#bcf77e" }}>.</span></span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span style={{ color: "#bcf77e", fontSize: 16, letterSpacing: 2 }}>AT INTEGRAL UNIVERSITY, LUCKNOW · STUDENT-LED</span>
        <span style={{ fontSize: 91, letterSpacing: -5, fontWeight: 700 }}>Curious minds.</span>
        <span style={{ fontSize: 94, letterSpacing: -5, fontWeight: 700, color: "#bcf77e" }}>Limitless ideas.</span>
      </div>
      <div style={{ color: "#aec2ad", fontSize: 19, letterSpacing: 1 }}>
        LEARN TOGETHER · BUILD TOGETHER · GROW TOGETHER
      </div>
    </div>,
    size
  );
}
