import UsersTable from "@/app/_components/UsersTable";
import { getAllProfiles } from "@/app/_lib/data-service";

async function Page() {
  const users = await getAllProfiles();

  return (
    <div>
      <p className="mb-6 py-8 text-center text-2xl font-semibold">Users</p>

      {users.map((user) => (
        <UsersTable key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Page;
