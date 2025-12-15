import { getLatestItems } from "@/app/_lib/data-service";
import ItemRow from "./ItemRow";

export const revalidate = 0;

async function LatestItems() {
  const latestItems = await getLatestItems();

  return (
    <div>
      <div className="flex flex-col gap-2">
        {latestItems.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestItems;
