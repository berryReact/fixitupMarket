import ContactForm from "@/app/_components/ContactForm";
import Logo from "@/app/_components/Logo";

export const metadata = {
  title: "Contact",
  description: "Get in touch with us for questions about Fix-It-Up Market.",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="py-4">
        <Logo />
      </div>
      <div className="flex flex-col items-center gap-2 px-8 py-2 text-[.9rem] font-medium text-metal-900">
        <p className="text-center">
          Something broken on the site instead of in the listings?
        </p>
        <p className="text-center">
          Drop us a message and we’ll get it fixed up.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
