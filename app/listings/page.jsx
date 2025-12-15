import LatestItems from "@/app/_components/LatestItems";
import Logo from "@/app/_components/Logo";
export const metadata = {
  title: "Listings",
  description:
    "Browse all broken or damaged items available on Fix-It-Up Market.",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8 px-4 py-4">
      <h2 className="text-center">Listings</h2>
      <div>
        <LatestItems />
      </div>
    </div>
  );
}
