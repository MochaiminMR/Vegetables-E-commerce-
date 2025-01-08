"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[100%] gap-3 items-center"
    >
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2   text-center">
        Buat akun baru
      </div>

      <div className="w-[100%] flex flex-col gap-y-2">
        <div className="w-[100%] flex flex-col gap-y-2">
          <Input
            {...register("name")}
            className="w-[100%] p-4 rounded-sm"
            type="text"
            placeholder="Nama Lengkap"
            error={errors.name?.message}
          />
        </div>
        <div className="w-[100%] flex flex-col gap-y-2">
          <Input
            {...register("email")}
            className="w-[100%] p-4 rounded-sm"
            type="text"
            placeholder="Email"
            error={errors.email?.message}
          />
        </div>

        <div className="w-[100%] flex flex-col gap-y-2">
          <Input
            {...register("password")}
            className="w-[100%] p-4 rounded-sm"
            type={showPassword ? "text" : "password"}
            placeholder="Kata Sandi"
            suffix="Eye"
            onPressSuffix={() => setShowPassword(!showPassword)}
            error={errors.password?.message}
          />
       
        </div>
        <div className="w-[100%] flex flex-col gap-y-2">
          <Input
            {...register("confirmPassword")}
            className="w-[100%] p-4 rounded-sm"
            type={showConfirmationPassword ? "text" : "password"}
            placeholder="Konfirmasi Kata Sandi"
            suffix="Eye"
            onPressSuffix={() =>
              setShowConfirmationPassword(!showConfirmationPassword)
            }
            error={errors.confirmPassword?.message}
          />
     
        </div>
      </div>

      <Button
        type="submit"
        className={cn("w-[320px] bg-leaf mt-6", hover.shadow)}
      >
        Buat Akun
      </Button>
    </form>
  );
}

export default SignUpForm;
