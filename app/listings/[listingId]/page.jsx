import { getListing } from "@/app/_lib/data-service";
import Image from "next/image";

export const metadata = {
  title: "",
};

export default async function Page({ params }) {
  const {
    id,
    title,
    startPrice: price,
    coverImage,
    category,
    description,
    createdAt,
    whatsWrong,
    location,
  } = await getListing(params.listingId);

  console.log(params);

  return (
    <div className="">
      <h1>{title.toUpperCase()}</h1>
      <div className="relative h-[8.4rem] w-[8.4rem]">
        <Image
          className="object-cover"
          src={coverImage}
          fill
          alt={`${title}-image`}
        />
      </div>
      <p>Price:{price}</p>
    </div>
  );
}
