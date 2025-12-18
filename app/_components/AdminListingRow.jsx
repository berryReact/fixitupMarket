import Image from "next/image";
import Link from "next/link";
import LinkButton from "./LinkButton";

function AdminItemRow({ item }) {
  const { id, title, category, startPrice, location, coverImage } = item;
  return (
    <div className="flex items-center justify-between border border-metal-300 bg-hazard-25">
      <div className="relative flex h-[4rem] w-[4rem] shrink-0 sm:h-16 sm:w-16">
        <Link href={`/account/listings/${id}`}>
          <Image
            className="flex-1 object-cover"
            src={coverImage}
            fill
            alt={`${title}-image`}
          />
        </Link>
      </div>
      <div className="text-[.8rem]">
        <p>Item:{title}</p>
        <p>Category:{category}</p>
        <p>Where:{location}</p>
      </div>
      <div className="pr-2 text-xl">
        <p>${startPrice}</p>
      </div>
      <div className="pr-4 text-xl">
        <LinkButton href={`/admin/listings/${id}`}>Edit</LinkButton>
      </div>
    </div>
  );
}

export default AdminItemRow;
