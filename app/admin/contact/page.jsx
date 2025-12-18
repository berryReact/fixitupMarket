import EnquiriesList from "@/app/_components/EnquiriesList";
import LinkButton from "@/app/_components/LinkButton";
import { getEnquiries } from "@/app/_lib/data-service";

async function Page() {
  const enquiries = await getEnquiries();

  return (
    <div className="px-8">
      {enquiries.map((enquiry) => (
        <EnquiriesList key={enquiry.id} enquiry={enquiry} />
      ))}
    </div>
  );
}

export default Page;
