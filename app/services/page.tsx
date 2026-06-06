import ServicesList from "@/components/home/ServicesList";
import PackagePreview from "@/components/home/PackagePreview";

export default function Services() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <ServicesList />
      <PackagePreview />
    </main>
  );
}
