import LinkButton from "@/app/_components/LinkButton";
import CategoryList from "@/app/_components/CategoryList";
import LatestItems from "@/app/_components/LatestItems";
import Logo from "@/app/_components/Logo";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

export default async function Page() {
  return (
    <section className="flex flex-col">
      <section className="hazard-border-tb flex flex-col items-center justify-center gap-6 bg-hazard-25 pb-6 pt-4 shadow-lg">
        <header className="flex flex-col items-center gap-[.25rem] text-hazard-950">
          <Logo />

          <p className="mb-2 text-[1rem] font-semibold">
            The Salvage Marketplace
          </p>
          <p className="mt-1 text-[.8rem]">
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
        <h2 className="p-5">Latest Items</h2>
        <Suspense fallback={<Spinner />}>
          <div className="mb-2 min-h-[38dvh] overflow-x-auto px-4">
            <LatestItems limit={4} />
          </div>
        </Suspense>
      </section>
    </section>
  );
}
