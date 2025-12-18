import AdminListingRow from "@/app/_components/AdminListingRow";
import { getAllItems } from "@/app/_lib/data-service";

async function Page() {
  const allItems = await getAllItems();

  return (
    <div>
      <h1 className="mb-6 py-4 text-center text-2xl">
        {allItems.length} Listings
      </h1>

      <div className="px-8">
        {allItems.map((item) => (
          <AdminListingRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Page;
