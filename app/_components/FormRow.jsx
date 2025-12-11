function FormRow({ label, name, type = "text", register, error }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-metal-700 mb-2 block font-medium">
        {`${label}:`}
      </label>
      <input
        id={name}
        type={type}
        {...register}
        className="border-metal-600 bg-hazard-50 focus:border-hazrd-800 focus:ring-hazard-300 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
      />

      {error && (
        <span className="mt-1 block text-sm text-red-600">{error}</span>
      )}
    </div>
  );
}

export default FormRow;
