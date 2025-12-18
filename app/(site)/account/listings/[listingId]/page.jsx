import SubmitButton from "@/app/_components/SubmitButton";
import { updateListingAction } from "@/app/_lib/actions";
import { getListing } from "@/app/_lib/data-service";
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
    sellerId,
    coverImage,
    title,
    description,
    category,
    location,
    whatsWrong,
    startPrice,
  } = await getListing(params.listingId);
  return (
    <div className="px-[1rem]">
      <p className="py-6 text-center text-xl">Edit : {title.toUpperCase()}</p>
      <div className="relative mx-auto mb-8 flex h-[10rem] w-[10rem]">
        <Image
          src={coverImage}
          fill
          className="object-cover"
          alt={`${title} - image`}
        />
      </div>

      <form
        action={updateListingAction}
        className="flex flex-col gap-4 text-[1rem]"
      >
        <div className="flex items-center justify-between">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" defaultValue={title} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" defaultValue={description} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="category">Category</label>
          <input type="text" name="category" defaultValue={category} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="title">Location</label>
          <input type="text" name="location" defaultValue={location} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="whatsWrong">Fault</label>
          <input type="text" name="whatsWrong" defaultValue={whatsWrong} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="startPrice">Price</label>
          <input type="text" name="startPrice" defaultValue={startPrice} />
        </div>
        <input type="hidden" defaultValue={id} name="id" />
        <input type="file" name="coverImage" />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
}
