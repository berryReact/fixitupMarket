import LinkButton from "@/app/_components/LinkButton";

export default function Page() {
  return (
    <div className="hazard-border-tb bg-hazard-25 shadow-ink-900/20 flex flex-col items-center justify-center gap-6 py-4 shadow-xl">
      <header className="text-hazard-950 flex flex-col items-center gap-[.25rem]">
        <h1 className="text-[2rem] font-semibold tracking-[0.05em]">
          Fix it Up
        </h1>
        <p className="mb-2 text-[1rem] font-semibold">
          The Salvage Marketplace
        </p>
        <p className="mt-1 text-sm">
          Buy, sell, and salvage broken and faulty items.
        </p>
      </header>

      <LinkButton corner="sm" size="small" text="sm" href="/listings">
        Explore Items
      </LinkButton>
    </div>
  );
}
