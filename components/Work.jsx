"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react"


const projectData = [
  {
    image: "/work/3.png",
    category: "React",
    name: "Gain Strom",
    description:
      "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/4.png",
    category: "Next js",
    name: "Food website",
    description:
    "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/2.png",
    category: "Html CSS",
    name: "Gym & Fitness",
    description:
    "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/1.png",
    category: "CSS animation effect",
    name: "Particules Website",
    description:
    "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },

  {
    image: "/work/4.png",
    category: "Next js",
    name: "Canteen website",
    description:
    "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/2.png",
    category: "Html CSS",
    name: "Little spa",
    description:
    "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/1.png",
    category: "CSS animation effect",
    name: "UX Website",
    description:
    "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/3.png",
    category: "React",
    name: "Light website",
    description:
    "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="items-center max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
          <h2 className="mb-4 section-title">Recent Project</h2>
          <p className="mb-8 subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            libero.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>

        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <Swiper
             className="h-[480px]"
             slidesPerView={1}
             breakpoints={{
                640: {
                    slidesPerView: 2,
                },
             }}
             spaceBetween={30}
             modules={[Pagination]}
             pagination={{ clickable: true }}
             >
                {projectData.slice(0, 4).map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project}/>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;

