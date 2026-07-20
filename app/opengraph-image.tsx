import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F9F6F1",
          color: "#1F2937",
          padding: "72px",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            background: "#6A1B2E",
            color: "#FFFFFF",
            fontSize: 56,
            fontWeight: 700,
          }}
        >
          V
        </div>
        <div
          style={{
            marginTop: 48,
            maxWidth: 900,
            fontSize: 72,
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Vidura Sanskriti Sangeetalayam
        </div>
        <div
          style={{
            marginTop: 24,
            maxWidth: 760,
            color: "#6B7280",
            fontSize: 32,
            lineHeight: 1.35,
          }}
        >
          Indian Classical Music Academy Hyderabad
        </div>
      </div>
    ),
    size,
  );
}
