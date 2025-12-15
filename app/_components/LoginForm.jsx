import SubmitButton from "./SubmitButton";

function LoginForm() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 px-8 py-4 text-[.9rem] font-medium text-metal-900">
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="mb-2 font-medium text-metal-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-md border border-metal-200 bg-hazard-100 px-3 py-2 outline-none focus:border-hazard-800 focus:ring-2 focus:ring-hazard-300"
            />
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="mb-2 font-medium text-metal-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full rounded-md border border-metal-200 bg-hazard-100 px-3 py-2 outline-none focus:border-hazard-800 focus:ring-2 focus:ring-hazard-300"
            />
          </div>
          <div className="flex items-center justify-center py-8">
            <SubmitButton size="medium" corner="lg" shadow="nrm">
              Submit
            </SubmitButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
