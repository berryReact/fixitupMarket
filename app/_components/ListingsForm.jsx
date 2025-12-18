"use client";

import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import SubmitButton from "./SubmitButton";
import { addListingAction } from "@/app/_lib/actions";

function ListingsForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form action={addListingAction} className="flex flex-col gap-1 px-4">
      <FormRow
        rows={false}
        label="Title"
        name="title"
        register={register("title", {
          required: "A title is required",
        })}
        error={errors.title?.message}
      />
      <FormRow
        rows={false}
        label="Description"
        name="description"
        register={register("description", {
          required: "A description is required",
        })}
        error={errors.description?.message}
      />
      <FormRow
        rows={false}
        label="Category"
        name="category"
        register={register("category", {
          required: "A category is required",
        })}
        error={errors.category?.message}
      />
      <FormRow
        rows={false}
        label="Fault"
        name="whatsWrong"
        register={register("whatsWrong")}
      />
      <FormRow
        rows={false}
        label="Start Price"
        name="startPrice"
        type="number"
        register={register("startPrice", {
          required: "A price is required",
        })}
        error={errors.startPrice?.message}
      />
      <FormRow
        rows={false}
        label="Location"
        name="location"
        register={register("location", {
          required: "A location is required",
        })}
        error={errors.location?.message}
      />

      <input
        className="text-[.8rem]"
        type="file"
        name="coverImage"
        id="coverImage"
      />

      <div className="flex items-center justify-center pt-4">
        <SubmitButton>Submit Listing</SubmitButton>
      </div>
    </form>
  );
}

export default ListingsForm;
