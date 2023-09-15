"use client";
import React, { useRef, useState } from "react";
import "./contect.css";
import InputComponent from "../../components/input type/InputComponent";
import Footer from "../../components/footer/footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./contect.css";
import SelectComponent from "../../components/selectComp/selectComp";
import { budget, contryListing, otp } from "../../constant/constants";
import axios from "axios";
import { toastComponent } from "../../components/Toster/ToastComponent";

type Props = {};

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  country: yup.string().required("Country is required"),
  service: yup.string().required("Service is required"),
  budget: yup.string().required("Budget is required"),
});

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  service: string;
  budget: string;
  message?: string;
};

const ContectUs = (props: Props) => {
  const backgroundImage = "./assets/Background BG/contact bg.png";

  const {
    register,
    watch,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      const res = await axios.post("/api/sendEmail", {
        fname: formData.firstName,
        lname: formData.lastName,
        email: formData.email,
        contry: formData.country,
        budget: formData.budget,
        service: formData.service,
        measge: formData.message,
      });
      toastComponent("Email sent successfully", "success");
      reset();
    } catch (err) {
      toastComponent("Email Not Sent", "error");
    }
  };

  return (
    <>
      <div
        id="ContectUs"
        className="w-full h-fit z-50 relative bg-center bg-cover flex justify-center align-middle items-center flex-col gap-5 md:gap-10 px-5 md:px-20 py-5 md:py-10"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <p className="title text-[1.5rem] md:text-[2rem]">Contact Us</p>

        <form
          className="contect-container w-full h-fit flex justify-between flex-col p-5 md:p-10 gap-4 md:gap-8 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center justify-center flex-col md:flex-row gap-4 md:gap-10">
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8">
              <div>
                <InputComponent
                  name="firstName"
                  placeHolder="Enter your first name"
                  label="First name*"
                  register={register}
                />
                {errors && (
                  <span className="text-sm text-red-600 font-serif gap-0 mt-2 ml-2 ">
                    {errors.firstName?.message}
                  </span>
                )}
              </div>
              <div>

                <InputComponent
                  name="lastName"
                  placeHolder="Enter your last name"
                  label="Last name*"
                  register={register}
                />
                {errors && (
                  <span className="text-sm text-red-600 font-serif gap-0 mt-2 ml-2 ">
                    {errors.lastName?.message}
                  </span>
                )}
              </div>

              <div>
              <InputComponent
                  name="email"
                  placeHolder="Enter your email address"
                  label=" Email*"
                  register={register}
                />
                {errors && (
                  <span className="text-sm text-red-600 font-serif gap-0 mt-2 ml-2 ">
                    {errors.email?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-8">
              <div>
              <SelectComponent
                  cataSelect={false}
                  inputRef="service"
                  data={otp}
                  placeHolder="Select service"
                  label="Service you need*"
                  control={control}
                />
                {errors && (
                  <span className="text-sm text-red-600 font-serif gap-0 mt-2 ml-2 ">
                    {errors.service?.message}
                  </span>
                )}
              </div>
              <div>
              <SelectComponent
                  cataSelect={false}
                  inputRef="country"
                  data={contryListing}
                  placeHolder="Select your country"
                  label="Country*"
                  control={control}
                />
                {errors && (
                  <span className="text-sm text-red-600 font-serif gap-0 mt-2 ml-2 ">
                    {errors.country?.message}
                  </span>
                )}
              </div>
              <div>
                <SelectComponent
                  cataSelect={false}
                  inputRef="budget"
                  data={budget}
                  placeHolder="Select your budget"
                  label="Budget*"
                  control={control}
                />
                {errors && (
                  <span className="text-sm text-red-600 font-serif gap-0 mt-2 ml-2 ">
                    {errors.budget?.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <InputComponent
              name="Message"
              placeHolder="Type here..."
              label="Message*"
              register={register}
              rows={6}
            />
          </div>
          <div className="flex justify-center md:justify-end w-full">
            <button
              className="submit-btn w-full md:w-1/2 p-3"
              type="submit"
              onSubmit={handleSubmit(onSubmit)}
            >
              submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContectUs;
