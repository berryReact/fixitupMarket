import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-metal-800 text-xl">Loading Listings....</p>
    </div>
  );
}

export default Loading;
