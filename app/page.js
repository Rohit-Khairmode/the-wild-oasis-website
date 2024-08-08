import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";
export default function Home() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill //this will make sure that image occupy this whole page and this will also make image out of the flow so other elements can overlap it.
        placeholder="blur" //this make image blur until it completely loaded
        quality={80}
        className="object-cover object-top " //object-cover is similar to setting background-size:cover this make image flexible as per viewport
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-9 text-center">
        <h1 className="lg:text-7xl xl:text-8xl  md:text-5xl text-3xl text-primary-50 mb-10 lg:translate-y-[-50px] xl:translate-y-0  tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 lg:px-8 lg:py-6 px-4 py-3 text-primary-800 lg:text-lg  text-base font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
