import Heading from "@/app/_components/Heading";
import { getListing } from "@/app/_lib/data-service";
import { format } from "date-fns";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { title, description } = await getListing(params.listingId);

  return {
    title,
    description,
  };
}

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
    <div className="flex w-full flex-1 flex-col gap-[3.2rem] px-2">
      <div className="pt-6">
        <Heading as="h3" position="center">
          {title.toUpperCase()}
        </Heading>
      </div>
      <div className="flex flex-col gap-[3.2rem]">
        <div className="relative h-[14rem] w-[14rem] self-center">
          <Image
            className="object-cover"
            src={coverImage}
            fill
            alt={`${title}-image`}
          />
        </div>

        <div className="flex flex-col gap-2 px-6">
          <div className="flex items-center justify-between">
            <p>Category:</p>
            <p>{category}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Description:</p>
            <p>{description}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Location:</p>
            <p>{location}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Fault:</p>
            <p>{whatsWrong}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Price:</p>
            <p>{price}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Listed From:</p>
            <p>{format(createdAt, "dd MMM yyyy")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
