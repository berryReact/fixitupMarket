function FormRow({ rows = true, label, name, type = "text", register, error }) {
  return (
    <div className="block">
      <div
        className={rows === false ? "mb-2 flex items-center gap-4 px-4" : ""}
      >
        <label htmlFor={name} className="mb-2 block font-medium text-metal-700">
          {`${label}:`}
        </label>
        <input
          id={name}
          type={type}
          {...register}
          className={
            rows === false
              ? "focus:border-hazrd-800 ml-auto w-[62.5%] rounded-md border border-metal-600 bg-hazard-50 py-2 outline-none focus:ring-2 focus:ring-hazard-300"
              : "focus:border-hazrd-800 w-full rounded-md border border-metal-600 bg-hazard-50 py-2 outline-none focus:ring-2 focus:ring-hazard-300"
          }
        />
      </div>
      {error && (
        <div className="mt-1 block pr-3 text-right text-sm text-red-600">
          {error}
        </div>
      )}
    </div>
  );
}

export default FormRow;
