"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React JS</li>
        <li>Node JS</li>
        <li>Mongo DB</li>
        <li>Express JS</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech in Computer Science and Engineering </li>
        
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>NACTET Certfication in MERN Stack Developement</li>
        <li>Luminar Technolab Pvt Ltd Internship Certfication in MERN Stack</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    }); 
  };

  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png"  alt="about image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  mb-4 bg-gradient-to-r from-pink-400 via-purple-400  to-red-400 bg-clip-text text-transparent">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
           I&apos;m Faheem, a full-stack developer passionate about creating smooth, impactful digital experiences. With expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), I build responsive, user-friendly web applications that address real-world challenges.
</p> <br />
<p className="text-base lg:text-lg text-justify">My journey began with a curiosity about how the web works, which quickly evolved into a dedication to writing clean, efficient, and scalable code. I focus on building solutions that are not only functional but also maintainable and easy to understand.</p> <br />

<p className="text-base lg:text-lg text-justify">I stay updated with emerging technologies, continuously work on projects, and sharpen my skills through tech articles, tutorials, and hands-on learning.</p>
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
