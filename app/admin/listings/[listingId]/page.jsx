import SubmitButton from "@/app/_components/SubmitButton";
import { updateAdminListingAction } from "@/app/_lib/actions";
import { getListing } from "@/app/_lib/data-service";
import Image from "next/image";

async function Page({ params }) {
  const {
    id,
    title,
    startPrice: price,
    coverImage,
    category,
    description,
    whatsWrong,
    location,
    status,
  } = await getListing(params.listingId);

  console.log(params);
  return (
    <div className="px-[8rem]">
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
        action={updateAdminListingAction}
        className="flex flex-col gap-4 text-[1.2rem]"
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
          <input type="text" name="startPrice" defaultValue={price} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="status">Status</label>
          <input type="text" name="status" defaultValue={status} />
        </div>
        <input type="hidden" defaultValue={id} name="id" />
        <input type="file" name="coverImage" />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
}
export default Page;
