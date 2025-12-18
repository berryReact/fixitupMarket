import Heading from "@/app/_components/Heading";
import AdminItemRow from "@/app/_components/AdminItemRow";
import LinkButton from "@/app/_components/LinkButton";
import { getMyListings } from "@/app/_lib/data-service";

export const metadata = {
  title: "Account-Listings",
  description: "All your fix me up items listed in one page ",
};

export default async function Page() {
  const myListings = await getMyListings();

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="py-4">
        <Heading as="h4" position="center">
          Listings
        </Heading>
      </div>
      <div className="flex flex-col gap-2">
        {myListings.map((item) => (
          <AdminItemRow item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center">
        <LinkButton href="/account/listings/new"> Add a Listing</LinkButton>
      </div>
    </div>
  );
}
