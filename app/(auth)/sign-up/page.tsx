import Link from "next/link";
import image from "@/assets/form/image.png";
import google from "@/assets/icons/google Icon.png";
import Image from "next/image";
import CredentialsSignUpForm from "./credentials-signup-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { signInWithGoogle } from "@/lib/actions/user.action";

const SignUpForm = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="max-w-[1000px] mx-auto my-1 animate-fade-in">
      {/* Logo */}
      <div className="sm:mt-3 mt-5 mb-2">
        <Link href="/">
          <Image
            src={image}
            alt="GoldFish Ladder"
            width={600}
            height={100}
            className="mx-auto animate-slide-down"
          />
        </Link>
      </div>

      <div className="bg-primaryColor/10 mx-2 rounded-lg animate-slide-up border-[#854836] border">
        <h1 className="text-5xl font-bebas font-medium my-5 text-center">
          Sign Up
        </h1>
        {/* Form */}
        <div className="px-2 md:px-32">{<CredentialsSignUpForm />}</div>
        {/* Divider */}
        <div className="flex w-full justify-center items-center">
          <div className="w-[40%] border border-black"></div>
          <p className="text-xl font-bebas md:text-2xl lg:text-3xl font-medium mx-4">
            OR
          </p>
          <div className="w-[40%] border border-black  "></div>
        </div>
        {/* Login with google */}
        <div className="w-full text-center">
          <h2 className="text-3xl font-bebas font-medium mb-2 mt-2">
            Sign Up with
          </h2>
          <form
            action={signInWithGoogle}
            className="flex flex-col items-center "
          >
            <button className="cursor-pointer">
              <Image
                src={google}
                alt="GoldFish Ladder"
                width={30}
                height={30}
                className="w-[30px] h-[30px] max-w-3xl  mx-auto mb-2  "
              />
            </button>

            <p className="text-sm  md:text-[12px] lg:text-[12px]">Google</p>
          </form>
        </div>
        {/* Sign up with Selection */}
        <div className="text-center pb-2">
          <h2 className="text-xl font-bebas md:text-2xl font-medium my-2">
            Already have an account ?
          </h2>

          <Link
            href={"/sign-in"}
            className="text-lg font-bebas md:text-2xl font-medium mb-12 text-[#854836]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
