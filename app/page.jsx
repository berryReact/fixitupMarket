import LinkButton from "@/app/_components/LinkButton";
import CategoryList from "@/app/_components/CategoryList";
import LatestItems from "@/app/_components/LatestItems";
import Logo from "@/app/_components/Logo";

export default function Page() {
  return (
    <section className="flex flex-col">
      <section className="hazard-border-tb bg-hazard-25 flex flex-col items-center justify-center gap-6 py-4 shadow-lg">
        <header className="text-hazard-950 flex flex-col items-center gap-[.25rem]">
          <Logo />

          <p className="mb-2 text-[1rem] font-semibold">
            The Salvage Marketplace
          </p>
          <p className="mt-1 text-sm">
            Buy, sell, and salvage broken and faulty items.
          </p>
        </header>

        <LinkButton
          corner="sm"
          border="neutral"
          size="medium"
          text="sm"
          shadow="md"
          href="/listings"
        >
          Explore Items
        </LinkButton>
      </section>
      <section>
        <CategoryList />
      </section>
      <section>
        <LatestItems />
      </section>
    </section>
  );
}
