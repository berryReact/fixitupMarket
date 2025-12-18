import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-metal-800">Loading Enquiries....</p>
    </div>
  );
}

export default Loading;
