import FormRow from "@/app/_components/FormRow";
import SubmitButton from "@/app/_components/SubmitButton";
import { updateUserAction } from "@/app/_lib/actions";
import { getMyProfile } from "@/app/_lib/data-service";
import { format } from "date-fns";
import Image from "next/image";

async function Page() {
  const {
    username,
    avatar_url,
    role,
    bio,
    created_at: createdAt,
  } = await getMyProfile();

  return (
    <div>
      <form className="flex flex-col gap-4 px-4 py-6" action={updateUserAction}>
        <div className="relative mx-auto flex h-[12.5rem] w-[12.5rem]">
          <Image
            src={avatar_url}
            fill
            className="object-cover"
            alt={`${username}-avatar`}
          />
        </div>
        <input type="file" name="avatar" />

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <label htmlFor="username" name="username">
              Username:
            </label>
            <input
              className="focus:border-hazrd-800 ml-auto w-[62.5%] rounded-md border border-metal-600 bg-hazard-50 p-1 outline-none focus:ring-2 focus:ring-hazard-300"
              type="text"
              name="username"
              value={username}
              disabled
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="bio" name="bio">
              BIO:
            </label>
            <input
              className="focus:border-hazrd-800 ml-auto w-[62.5%] rounded-md border border-metal-600 bg-hazard-50 p-1 outline-none focus:ring-2 focus:ring-hazard-300"
              type="text"
              name="bio"
              defaultValue={bio}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="bio" name="bio">
              Member Since:
            </label>
            <input
              className="focus:border-hazrd-800 ml-auto w-[62.5%] rounded-md border border-metal-600 bg-hazard-50 p-1 outline-none focus:ring-2 focus:ring-hazard-300"
              type="text"
              name="bio"
              value={format(new Date(createdAt), "dd MMM yyy")}
              disabled
            />
          </div>
        </div>

        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
}

export default Page;
