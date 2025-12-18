import Heading from "@/app/_components/Heading";
import ListingsForm from "@/app/_components/ListingsForm";

export const metadata = {
  title: "Add-Listing",
  description: "Create a new listing to sell or repurpose an item.",
};

function Page() {
  return (
    <div className="">
      <div className="mb-6 py-6">
        <Heading as="h4" position="center">
          Add listing
        </Heading>
      </div>
      <div className="">
        <ListingsForm />
      </div>
    </div>
  );
}

export default Page;
