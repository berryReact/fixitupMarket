import LinkButton from "@/app/_components/LinkButton";

export const metadata = {
  title: "Account-Listings",
};

export default function Page() {
  return (
    <div className="">
      <h1 className="mb-[2.4rem] py-4 text-center text-xl font-semibold">
        Listings
      </h1>
      <div className="flex justify-center">
        <LinkButton href="/account/listings/new"> Add a Listing</LinkButton>
      </div>
    </div>
  );
}
