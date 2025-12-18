import { getLatestItems } from "@/app/_lib/data-service";
import ItemRow from "./ItemRow";

export const revalidate = 0;

async function LatestItems({ limit }) {
  const latestItems = await getLatestItems({ limit });

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
