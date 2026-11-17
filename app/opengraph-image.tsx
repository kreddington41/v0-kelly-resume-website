import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #000000 0%, #1a0505 100%)",
        color: "#ffffff",
      }}
    >
      <div style={{ fontSize: 88, fontWeight: 700, color: "#ef4444", lineHeight: 1.1 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 36, color: "#d1d5db", marginTop: 32, lineHeight: 1.4 }}>
        AI-Native Product Marketer · Brand Strategist · GTM Leader · Content & Copywriting
      </div>
      <div style={{ fontSize: 26, color: "#9ca3af", marginTop: 40 }}>kellyreddington.xyz</div>
    </div>,
    size,
  )
}
