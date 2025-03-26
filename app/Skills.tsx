/* eslint-disable react/no-unescaped-entities */
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "./index";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";

import SkillText from "./SkillText";
const Skills = () => {
  return (
    <>
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
    <section id="skills-experience" className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10  ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-12 text-white">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Coding Experience --> */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Coding Experience</h3>
            <ul className="list-disc ml-4 space-y-2 text-gray-300">
              <li>HTML & CSS - Building and styling web interfaces</li>
              <li>JavaScript - Interactive web elements</li>
              <li>PHP WordPress - CMS development and customization</li>
              <li>React & Next.js - Frontend development</li>
              <li>Node.js - Backend development</li>
              <li>Python - Scripting and automation</li>
              <li>Bash and Pip - Command Prompt</li>
              <li>SQL - Database management</li>
            </ul>
          </div>

          {/* <!-- LLM Experience --> */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">LLM Experience</h3>
            <ul className="list-disc ml-4 space-y-2 text-gray-300">
              <li>OpenAI, Mistral Large - Working with cutting-edge LLMs</li>
              <li>
                Opensource LLM's integration and customization. Huggingface, Mistral 7B,
                Mixtral 8x7B, LLama 2 72B, Phi
              </li>
              <li>
                Langchain and Llama Index - LLM-based indexing and search
              </li>
              <li>TTS (Text-to-Speech) & STT (Speech-to-Text) technologies</li>
              <li>Vector Databases - Pinecone, Chroma and Qdrant</li>
              <li>Sagemaker - AI model training and deployment</li>
              <li>ElevenLabs and HeyGen for marketing</li>
              <li>Zappier and Make for Automation</li>
            </ul>
          </div>

          {/* <!-- Deployment Experience --> */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Deployment Experience</h3>
            <ul className="list-disc ml-4 space-y-2 text-gray-300">
              <li>AWS Deployment - Cloud infrastructure management</li>
              <li>Microsoft Azure - Cloud infrastructure management</li>
              <li>Render & Vercel - Web hosting and serverless deployment</li>
              <li>Fly Dev - CLI based deployment</li>
              <li>Railway - Virtual Private Cloud deployment</li>
              <li>Github - Code deployment</li>
              <li>CPanel - WordPress development and deployment</li>
              <li>Netlify - Static site deployment and CI/CD</li>
            </ul>
          </div>
        </div>
        {/* <!-- Button outside the grid but inside the container for proper alignment --> */}
        {/* <div className="text-center mt-8">
          <a
            href="#genai"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-base px-6 py-2.5 mr-2 mb-2"
          >
            View GenAI Apps
          </a>
        </div> */}
        
      </div>
    </section>
    </>
  );
};

export default Skills;
