import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-white">
      <div
        className="flex items-center  justify-center h-screen"
        style={{ backgroundColor: "#eea4db" }}
      >
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <div className="absolute  ">
              <Image
                src={"/background.png"}
                alt="background"
                width={750}
                height={10}
              />
            </div>

            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to BlissAI
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Elevate your content effortlessly with BlissAI your premier
                AI-powered generator for diverse creative needs.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-10 text-2xl font-bold text-purple-900 sm:text-3xl md:text-4xl">
                  Welcome to BlissAI
                </h1>

                <p className="mt-1 mb-3 leading-relaxed text-purple-900">
                  Elevate your content effortlessly with BlissAI your premier
                  AI-powered generator for diverse creative needs.
                </p>
              </div>
              <SignIn />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
