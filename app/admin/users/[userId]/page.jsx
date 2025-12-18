import SubmitButton from "@/app/_components/SubmitButton";
import { updateAdminRoleAction } from "@/app/_lib/actions";
import { getProfile } from "@/app/_lib/data-service";

async function Page({ params }) {
  const { id, username, role } = await getProfile(params.userId);

  return (
    <div className="mx-auto flex items-center gap-4 py-8">
      <p>{username}</p>
      <form action={updateAdminRoleAction} className="flex items-center gap-4">
        <label htmlFor="role">Role:</label>
        <input type="text" name="role" defaultValue={role} className="p-1" />
        <input type="hidden" value={id} name="id" />
        <SubmitButton size="small">Submit</SubmitButton>
      </form>
    </div>
  );
}

export default Page;
