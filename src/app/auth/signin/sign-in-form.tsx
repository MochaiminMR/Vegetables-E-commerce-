"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface SignInFormData {
  email: string;
  password: string;
}

const scheme = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password must be at least 6 characters'),
})

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(scheme),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[100%] gap-4 items-center "
    >
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">
        Masuk akun anda
      </div>

      {/* Form */}
      <div className="w-[100%] flex flex-col gap-y-4    ">
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
      </div>

      <Button
        type="submit"
        className={cn("w-[320px] bg-leaf mt-6", hover.shadow)}
      >
        Masuk
      </Button>
    </form>
  );
}

export default SignInForm;
