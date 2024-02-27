"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "Fullstack",
    name: "Gain Strom",   
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
    category: "React js",
    name: "Light website",
    description:
    "Lorem ipsum, dolor sit amet consectetur.",
    link: "/",
    codepen: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
    ? project
    : project.category === category;
  });

  
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          My Project
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              console.log(category);
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="grid grid-cols-1 gap-4 text-lg xl:mt-8 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
