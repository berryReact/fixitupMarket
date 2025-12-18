import { format } from "date-fns";
import Image from "next/image";

import LinkButton from "./LinkButton";

function UsersTable({ user }) {
  const { id, username, avatar_url, role, bio, created_at: created } = user;
  return (
    <div className="grid grid-cols-6 place-items-center gap-4 border-b border-metal-700 px-1 py-2 text-[.75rem]">
      <div className="relative h-8 w-8">
        <Image
          src={avatar_url}
          className="object-cover"
          fill
          alt={`${username}-image`}
        />
      </div>
      <p className="justify-self-start">{username}</p>
      <p className="justify-self-end">{bio}</p>
      <p>{role}</p>
      <p>{format(created, "dd MMM yyyy")}</p>
      <LinkButton href={`/admin/users/${id}`}>Edit</LinkButton>
    </div>
  );
}

export default UsersTable;
