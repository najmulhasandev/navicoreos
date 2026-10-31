import { ImageResponse } from "next/og";
export const alt = "NAVICORE OS: the business operating system";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#080D17", color: "#fff" }}>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: "#D4A843" }}>BUSINESS OPERATING SYSTEM</div>
      <div style={{ display: "flex", fontSize: 128, fontWeight: 800, marginTop: 20 }}>NAVICORE OS</div>
      <div style={{ display: "flex", fontSize: 40, color: "#A9B6CF", marginTop: 16 }}>One building. Many rooms. Everything a company needs.</div>
    </div>, { ...size });
}
