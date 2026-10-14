import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      width: "100%", height: "100%", background: "#0c120e", color: "#f0f6ec",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: 80, position: "relative", overflow: "hidden"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 15, fontSize: 28, fontWeight: 700 }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: "#b7fa68", color: "#132111", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>dv</div>
        <span>data<span style={{ fontWeight: 400 }}>verse</span><span style={{ color: "#b7fa68" }}>.</span></span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 21 }}>
        <span style={{ fontSize: 18, color: "#b7fa68", letterSpacing: 3 }}>DATA SCIENCE & ANALYTICS CLUB</span>
        <span style={{ fontSize: 95, lineHeight: 1.07, letterSpacing: -5, fontWeight: 700 }}>Curiosity, meet</span>
        <span style={{ fontSize: 100, lineHeight: 1, letterSpacing: -5, color: "#b7fa68", fontWeight: 700 }}>possibility.</span>
      </div>
      <div style={{ fontSize: 20, color: "#aabca9", letterSpacing: 1 }}>LEARN TOGETHER. BUILD TOGETHER. GROW TOGETHER.</div>
      <div style={{
        position: "absolute", right: -210, top: 90, width: 590, height: 590,
        border: "2px solid #b7fa6845", borderRadius: "50%", display: "flex",
        alignItems: "center", justifyContent: "center", zIndex: -1
      }}>
        <div style={{ width: 370, height: 370, border: "1px solid #b7fa6833", borderRadius: "50%" }} />
      </div>
    </div>,
    { ...size }
  );
}
