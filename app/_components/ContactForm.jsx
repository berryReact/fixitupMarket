"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import FormRow from "./FormRow";
import SubmitButton from "./SubmitButton";

import { submitContactFormAction } from "@/app/_lib/actions";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    const result = await submitContactFormAction(data);

    if (result.success) {
      toast.success("Message Sent Successfully");
    } else {
      toast.error(result.error || "Something Went Wrong...");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8">
      <FormRow
        label="Name"
        name="name"
        type="text"
        register={register("name", { required: "Name is Required" })}
        error={errors.name?.message}
      />
      <FormRow
        label="Email"
        name="email"
        type="email"
        register={register("email", {
          required: "Email is Required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid Email",
          },
        })}
        error={errors.email?.message}
      />
      <div className="">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          className="border-metal-600 bg-hazard-50 focus:border-hazrd-800 focus:ring-hazard-300 w-full rounded-md border px-3 py-2 outline-none focus:ring-2"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
            maxLength: {
              value: 1000,
              message: "Message cannot exceed 1000 characters",
            },
          })}
        />
        {errors.message && (
          <span className="mt-1 block text-sm text-red-600">
            {errors.message.message}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center pt-4">
        <SubmitButton size="small" shadow="nrm" isSubmitting={isSubmitting}>
          Get in Touch
        </SubmitButton>
      </div>
    </form>
  );
}

export default ContactForm;
