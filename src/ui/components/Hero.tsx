'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeroProps = {
  title: string;
  description: string;
  image: string;
};

export const Hero = (heroProps: HeroProps) => {
  const pathname = usePathname();

if(pathname === "/") {

  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        layout="fill"
        objectFit="cover"
        src={heroProps.image}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="text-black w-1/2 gap-6 flex flex-col justify-end items-end">
        <h3 className="relative z-10 text-4xl uppercase">{heroProps.title}</h3>
        <p className="relative z-10 text-xl  font-thin">
         {heroProps.description}
        </p>
      </div>
      <div className="absolute inset-0 "></div>{" "}
      {/* Opcjonalne: dodanie overlay */}
    </section>
  );

}
  return (
    <section className="relative h-[400px] rounded-2xl container flex items-center justify-center overflow-hidden">
     <Image
        layout="fill"
        objectFit="cover"
        src={heroProps.image}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="text-black w-1/2 gap-6 flex flex-col justify-end items-end">
        <h3 className="relative z-10 text-4xl uppercase">{heroProps.title}</h3>
        <p className="relative z-10 text-xl  font-thin">
         {heroProps.description}
        </p>
      </div>
      <div className="absolute inset-0 "></div>{" "}
      {/* Opcjonalne: dodanie overlay */}
    </section>
  );
};
