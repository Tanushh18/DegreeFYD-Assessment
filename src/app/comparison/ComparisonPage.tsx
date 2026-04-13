import Header from "@/components/HeaderDesktop";
import Component5Desktop from "@/components/Component5Desktop";
import Component5Mobile from "@/components/Component5Mobile";
import Component6Desktop from "@/components/Component6Desktop";

export default function ComparisonPage() {
  return (
    <>
      <Header />
      <div className="hidden md:block">
        <Component5Desktop />
      </div>
      <div className="block md:hidden">
        <Component5Mobile />
      </div>
      <div className="hidden md:block">
        <Component6Desktop />
      </div>
    </>
  );
}
