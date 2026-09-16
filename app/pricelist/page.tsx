import type { Metadata } from "next";
import PackagePreview from "@/components/home/PackagePreview";

export const metadata: Metadata = {
  title: "Pricelist Live Streaming & Production | Colorize Visual",
  description:
    "Lihat pricelist dan spesifikasi paket live streaming, multicam, Cinema Line, dan produksi event Colorize Visual di Surabaya.",
  alternates: {
    canonical: "/pricelist",
  },
};

export default function PricelistPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <PackagePreview />
    </main>
  );
}
