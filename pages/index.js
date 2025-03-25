import { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cursor from "../components/Cursor";
import data from "../data/portfolio.json";

export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const handleWorkScroll = () => {
    window.scrollTo({ top: workRef.current.offsetTop, left: 0, behavior: "smooth" });
  };

  const handleAboutScroll = () => {
    window.scrollTo({ top: aboutRef.current.offsetTop, left: 0, behavior: "smooth" });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      {/* Ícono flotante superior izquierdo */}
      <div className="fixed top-4 left-4 z-50 w-24 h-24 tablet:w-20 tablet:h-20 mobile:w-16 mobile:h-16 transition-transform duration-300 hover:scale-110">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="https://res.cloudinary.com/dlmnqfrll/image/upload/v1742910999/Pasted_image-removebg-preview_iw4cxc.png"
              alt="Marko Creativo"
              width={96}
              height={96}
              className="rounded-full shadow-md"
            />
          </a>
        </Link>
      </div>

      <div className="container mx-auto mb-10">
        <Header handleWorkScroll={handleWorkScroll} handleAboutScroll={handleAboutScroll} />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            {[data.headerTaglineOne, data.headerTaglineTwo, data.headerTaglineThree, data.headerTaglineFour].map(
              (text, index) => (
                <h1
                  key={index}
                  ref={[textOne, textTwo, textThree, textFour][index]}
                  className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                >
                  {text}
                </h1>
              )
            )}
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Servicios.</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Nuestros Servicios</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard key={index} name={service.title} description={service.description} />
            ))}
          </div>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Sobre Nosotros</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}