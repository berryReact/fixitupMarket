import LinkButton from "./LinkButton";

function EnquiriesList({ enquiry }) {
  const { name, email, message, status, id, phone } = enquiry;
  return (
    <div className="border-b border-metal-400 py-2">
      <p className="py-8 text-center text-xl font-semibold">Contact</p>
      <div className="grid grid-cols-10 items-center justify-center gap-6">
        <p className="col-span-2">{name}</p>
        <p className="col-span-2">{email}</p>
        <p>{phone || "No phone"}</p>
        <p className="col-span-2">{message}</p>
        <p className="col-span-2">{status}</p>
        <LinkButton href={`/admin/contact/${id}`}>Edit</LinkButton>
      </div>
    </div>
  );
}

export default EnquiriesList;
