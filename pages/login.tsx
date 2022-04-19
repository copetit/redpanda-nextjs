import type { NextPage } from "next";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const isValid = (data: LoginForm) => {
    console.log(data);
  };
  const isInValid = () => {
    console.log("Fail Login");
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="flex w-full flex-col items-center justify-center p-10">
        <div className="h-24 w-24 rounded-full bg-gray-300" />
        <form
          onSubmit={handleSubmit(isValid, isInValid)}
          className="flex w-full  flex-col items-center space-y-5 "
        >
          <div className="flex w-full flex-col">
            <label className="text-sm text-gray-800" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: "emailを入力してください" })}
              className="rounded-md border px-3 py-2 focus:border-2 focus:border-teal-500 focus:outline-none"
              type="email"
              name="email"
            />
            {errors.email?.message}
          </div>
          <div className="flex w-full flex-col">
            <label className="text-sm text-gray-800" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", {
                required: "passwordを入力してください",
                minLength: { value: 8, message: "8文字以上入力してください" },
              })}
              className="rounded-md border px-3 py-2 focus:border-2 focus:border-teal-500 focus:outline-none"
              type="password"
              name="password"
            />
            <div className="mt-1 font-semibold text-rose-500">
              {errors.password?.message}
            </div>
          </div>
          <button
            className="w-full rounded-lg bg-teal-500 px-3 py-2 text-lg font-semibold text-white focus:outline-none"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
