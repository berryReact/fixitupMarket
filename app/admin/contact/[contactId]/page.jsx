import SubmitButton from "@/app/_components/SubmitButton";
import { updateAdminEnquiryStatusAction } from "@/app/_lib/actions";
import { getEnquiry } from "@/app/_lib/data-service";

async function Page({ params }) {
  const { id, name, email, message, status, phone } = await getEnquiry(
    params.contactId,
  );

  return (
    <div>
      <p className="py-10 text-center text-xl font-semibold">Contact</p>

      <form
        className="mx-auto flex w-[60%] flex-col gap-4 px-10"
        action={updateAdminEnquiryStatusAction}
      >
        <div className="flex items-center justify-between">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" disabled defaultValue={name} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" disabled defaultValue={email} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" disabled defaultValue={phone} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="message">Message</label>
          <input type="text" name="message" disabled defaultValue={message} />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="status">Status</label>
          <select name="status" id="status" defaultValue={status}>
            <option value="unconfirmed">Unconfirmed</option>
            <option value="confirmed">Confirmed</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
          <SubmitButton>Submit</SubmitButton>
        </div>
        <input type="hidden" id="id" name="id" value={id} />
      </form>
    </div>
  );
}

export default Page;
