import SubmitButton from "@/app/_components/SubmitButton";
import { updateUserAction } from "@/app/_lib/actions";
import { getMyProfile } from "@/app/_lib/data-service";

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
      <p>Profile</p>

      <form action={updateUserAction}>
        <div className="">
          <label htmlFor="role" name="role" id="role">
            Role
          </label>
          <input type="text" name="role" defaultValue={role} id="role" />
        </div>

        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
}

export default Page;
