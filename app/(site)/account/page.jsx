import { signOutFormAction } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";
import { getMyListings, getMyProfile } from "@/app/_lib/data-service";
import Image from "next/image";

import { format } from "date-fns";
import ItemRow from "@/app/_components/ItemRow";
import LinkButton from "@/app/_components/LinkButton";
import Heading from "@/app/_components/Heading";

export const metadata = {
  title: "Account",
  description: "Manage your listings and account details.",
};

export default async function Page() {
  const {
    username,
    avatar_url,
    bio,
    role,
    created_at: createdAt,
  } = await getMyProfile();

  const myListings = await getMyListings({ limit: 3 });

  return (
    <div className="flex w-full flex-1 flex-col gap-[] px-4">
      <div className="pt-4">
        <Heading as="h4" position="center">
          Account Overview
        </Heading>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <div className="">
          <div className="py-4 text-lg">
            <Heading as="h5">Profile ({role})</Heading>
          </div>
          <div className="flex items-center gap-[1.2rem]">
            <div className="relative h-[4.8rem] w-[4.8rem]">
              <Image
                src={avatar_url}
                fill
                className="object-cover"
                alt={`${username}-avatar`}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>UserName:{username}</p>
              <p>BIO:{bio}</p>
              <p>Joined Since:{format(new Date(createdAt), "dd MMM yyyy")}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="py-4 text-lg">
            <Heading as="h5">My Recent Listings</Heading>
          </div>
          <div className="flex flex-col gap-2">
            {myListings.map((item) => (
              <ItemRow item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-2 flex justify-center">
        <LinkButton href="/account/listings/new"> Add a Listing</LinkButton>
      </div>
    </div>
  );
}
