import LinkButton from "@/app/_components/LinkButton";
import Link from "next/link";

async function Page() {
  return (
    <div className="flex flex-col gap-2 text-xl">
      <div className="">
        <h2 className="mb-6 py-12 text-center text-2xl font-semibold">
          Admin Dashboard
        </h2>
      </div>
      <div className="mx-auto grid w-[80%] grid-cols-2 place-items-center gap-[3.2rem] font-semibold">
        <Link href="/admin/listings">
          <div className="flex h-[6rem] w-[16rem] flex-col items-center justify-center rounded-md border border-metal-700 bg-hazard-200">
            <h3>Listings</h3>
          </div>
        </Link>
        <Link href="/admin/users">
          <div className="flex h-[6rem] w-[16rem] flex-col items-center justify-center rounded-md border border-metal-700 bg-hazard-200">
            <h3>Users</h3>
          </div>
        </Link>
        <Link href="/admin/contact">
          <div className="flex h-[6rem] w-[16rem] flex-col items-center justify-center rounded-md border border-metal-700 bg-hazard-200">
            <h3>Contact</h3>
          </div>
        </Link>
        <Link href="/admin/maintenence">
          <div className="flex h-[6rem] w-[16rem] flex-col items-center justify-center rounded-md border border-metal-700 bg-hazard-200">
            <h3>Maintenence</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Page;
