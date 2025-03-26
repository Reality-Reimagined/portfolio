/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCarousel from "./ProjectCarousel";
import Navbar from "@/app/Navbar";
import Hero from "./Hero";
import Skills from "./Skills";

export default function Home() {

 
  return (
    <>
    <Navbar/>
    <Hero />
    <main className="h-full w-full">
      {/* <div className="py-12 lg:py-24">
        <div className="container mx-auto px-4 space-y-8 text-center md:space-y-10 lg:space-y-12">
          

          <div className="grid max-w-sm grid-cols-2 gap-4 mx-auto lg:max-w-none lg:grid-flow-col lg:grid-cols-4 lg:gap-8">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-wide uppercase text-white dark:text-gray-400">
                Projects
              </h3>
              <p className="text-xl font-bold text-white">8+</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-wide uppercase text-white dark:text-gray-400">
                Years Experience
              </h3>
              <p className="text-xl font-bold text-white">4</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-wide uppercase text-white dark:text-gray-400">Skills</h3>
              <p className="text-xl font-bold text-white">
                Coding in multiple languages, Experience with LLM's, and Deployment Experience
              </p>
              
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-wide uppercase text-white dark:text-gray-400">
                Location
              </h3>
              <p className="text-xl font-bold text-white">Windsor, ON</p>
            </div>
          </div>
        </div>
      </div> */}

<Skills />
    
      <section id="genai" className="w-full py-12 md:py-24 lg:py-32 text-center flex items-center">
        <div className="container mx-auto px-4 space-y-10 md:space-y-12">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Gen AI Projects</h2>
            <p className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">A selection of my Gen AI Projects.</p>
          </div>
          {/* <div >
  <ProjectCarousel/>
</div> */}

          <div className="grid gap-10 sm:gap-8 lg:grid-cols-2 xl:gap-16">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
              <img
      src="/syncthree.png" // Change this to your image's path
      alt="LLM Chat App Screenshot"
      className="mx-auto block max-w-full h-auto " 
      // style={{ maxWidth: '1000px', maxHeight: '1000px' }}// Tailwind CSS classes for styling the image
    />
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">LLM Chat App</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">An innovative chat service that offers personalized communication solutions without relying on OpenAI. AI-driven conversations with privacy and speed at its core.</p>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-600 dark:text-gray-300">Custom-built, ensuring unique conversational experiences</li>
                  <li className="text-gray-600 dark:text-gray-300">Utilizes Mixtral as the Language Learning Model (LLM)</li>
                  <li className="text-gray-600 dark:text-gray-300">Integrated Google Authentication for secure user access</li>
                  <li className="text-gray-600 dark:text-gray-300">Conversations are saved, allowing for ongoing engagement</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-black" >Tech Stack:</span> Python, Fly.dev, Mixtral LLM, Google Authentication, Docker.
                </p>
                <a
                  href="https://syncthree.fly.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-transparent bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Explore Project
                </a>
              </div>
            </div>




            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
              <img
      src="/syncthreeweb.png" // Change this to your image's path
      alt="LLM Chat App Screenshot"
      className="mx-auto block max-w-full h-auto " 
      // style={{ maxWidth: '1000px', maxHeight: '1000px' }}// Tailwind CSS classes for styling the image
    />
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Main Website</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">A versatile website that stands out for its custom-built chatbot, exceptional SEO performance surpassing major competitors like Ford, and a robust foundation using Wordpress and custom HTML, CSS, JS.</p>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-600 dark:text-gray-300">Custom in-house chatbot for enhanced user interaction and customer service</li>
                  <li className="text-gray-600 dark:text-gray-300">Top-ranked on Google, outperforming major brands in keyword ranking</li>
                  <li className="text-gray-600 dark:text-gray-300">Built with Wordpress, leveraging HTML, CSS, JS for a tailored experience</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-black" >Tech Stack:</span> React coded chatbot trained to answer business questions, Wordpress, Custom HTML/CSS/JS, SEO-optimized.
                </p>
                <a
                  href="https://syncthree.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-transparent bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Explore Project
                </a>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
              <img
      src="/mindmap.png" // Change this to your image's path
      alt="LLM Chat App Screenshot"
      className="mx-auto block max-w-full h-auto " 
      style={{ maxWidth: '1000px', maxHeight: '550px' }}// Tailwind CSS classes for styling the image
    />
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">MindMap Generator</h3>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">A revolutionary tool for converting real-time voice to text, summarizing ideas, and creating MindMaps to visualize your thoughts.</p>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-600 dark:text-gray-300">Real-time voice to text conversion</li>
                  <li className="text-gray-600 dark:text-gray-300">Summarizes ideas from your conversation</li>
                  <li className="text-gray-600 dark:text-gray-300">Generates MindMaps to visualize ideas</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="text-black font-semibold">Tech Stack:</span> Next.js, React, Vercel, Node.js, and multiple APIs.
                </p>
                <a
                  href="https://syncthree-mindmap.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-transparent bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Explore Project
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
            <img
      src="/researcher2.png" // Change this to your image's path
      alt="LLM Chat App Screenshot"
      className="mx-auto block max-w-full h-auto " 
      style={{ maxWidth: '1000px', maxHeight: '550px' }}// Tailwind CSS classes for styling the image
    />
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">LLM Researcher</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">Advanced research tool integrating Mixtral LLM and custom research API to get you the best answers to your questions.</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">Custom search model for targeted research</li>
                <li className="text-gray-600 dark:text-gray-300">User authentication and session management</li>
                <li className="text-gray-600 dark:text-gray-300">Optimized for speed and accuracy</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-black" >Tech Stack:</span> Python, Langchain, SQL, Render.com, Mixtral LLM, Custom Research Model
              </p>
              <a href="https://syncthreeresearcher.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-transparent bg-green-600 text-base font-medium text-white hover:bg-green-700">Explore Project</a>
            </div>


            
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
            <img
      src="/chat.png" // Change this to your image's path
      alt="LLM Chat App Screenshot"
      className="mx-auto block max-w-full h-auto " 
      // style={{ maxWidth: '1000px', maxHeight: '1000px' }}// Tailwind CSS classes for styling the image
    />
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Multi Tool AI Chat Bot</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">The future of your work day. Get everything done in one chat box!</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">A versatile chatbot capable of performing a wide array of tasks</li>
                <li className="text-gray-600 dark:text-gray-300">Supports diverse functionalities through AI integration, connecting any API together</li>
                <li className="text-gray-600 dark:text-gray-300">Showcasing the integration of AI tools in a user-friendly interface.</li>
                <li className="text-gray-600 dark:text-gray-300">Customizable and scalable for different use cases</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-black" >Tech Stack:</span> React, Local Hosting, AI Tools Integration, API Integration
              </p>
              {/* <button>onClick(<iframe src="https://drive.google.com/file/d/1prLluNFzaiESeoSBRvFxwfy29DpC-kAS/preview" width="640" height="480" allow="autoplay">)</iframe></button> */}

              <a href="https://drive.google.com/file/d/1prLluNFzaiESeoSBRvFxwfy29DpC-kAS/view?usp=sharing&t=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-transparent bg-blue-600 text-base font-medium text-white hover:bg-blue-700">Watch Video</a>


            </div>





            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4 relative">
            <img
      src="/businesspro.png" // Change this to your image's path
      alt="LLM Chat App Screenshot"
      className="mx-auto block max-w-full h-auto " 
      // style={{ maxWidth: '1000px', maxHeight: '1000px' }}// Tailwind CSS classes for styling the image
    />
              <div className="border-l-4 border-blue-500 pl-4">
             
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Business Pro</h3>
                
                <p className="mt-1 text-gray-500 dark:text-gray-400">A business suite Next.JS app. RAG with real-time file ingestion and vector retrieval!</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">Talk to your Docs and your AI Business Team!</li>
                <li className="text-gray-600 dark:text-gray-300">Easy ingestion and retrieval of vectorized documents</li>
                <li className="text-gray-600 dark:text-gray-300">Create your own AI bots for your own use cases</li>
                <li className="text-gray-600 dark:text-gray-300">Compatible with OpenAI and Local LLMs</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-black" >Tech Stack:</span> Next.JS, RAG, LLamaIndex, Vector Database, Vercel, OpenAI/Local LLMs,
              </p>
              <a href="https://businesspro-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-transparent bg-blue-600 text-base font-medium text-white hover:bg-blue-700">Explore Project</a>
            </div>


            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
            <img
      src="/imagegen.png" // Change this to your image's path
      alt="LLM Chat App Screenshot"
      className="mx-auto block max-w-full h-auto " 
      style={{ maxWidth: '1000px', maxHeight: '550px' }}// Tailwind CSS classes for styling the image
    />
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Image Generator</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">Creative tool for generating unique images using advanced AI models, demonstrating the potential of AI in art.</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">Leverages open-source image generation models</li>
                <li className="text-gray-600 dark:text-gray-300">High-quality, customizable image outputs</li>
                <li className="text-gray-600 dark:text-gray-300">Frontend and Backend built in python with Streamlit</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold" >Tech Stack:</span> Python, Render.com, Open-source Image Generation Model
              </p>
              <a href="https://syncthreeimagegenerator.onrender.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-transparent bg-green-600 text-base font-medium text-white hover:bg-green-700">Explore Project</a>
            </div>




            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4">
            <img
      src="/golf.png" // Change this to your image's path
      alt="LLM Chat App Screenshot"
      className="mx-auto block max-w-full h-auto" 
      style={{ maxWidth: '1000px', maxHeight: '550px' }}// Tailwind CSS classes for styling the image
    />
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">AI Golf Analyser</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">Utilizes GPT-4 Vision and Huggingface for in-depth golf swing analysis, offering detailed feedback for improvement.</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">Advanced swing analysis with GPT-4 Vision</li>
                <li className="text-gray-600 dark:text-gray-300">Uses LLama Index and Langchain</li>
                <li className="text-gray-600 dark:text-gray-300">Hosted on AWS for scalability and reliability</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold text-black" >Tech Stack:</span> Python, Amazon AWS, GPT-4 Vision, Huggingface
              </p>
              <a href="http://ec2-3-14-13-174.us-east-2.compute.amazonaws.com:8501/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-transparent bg-green-600 text-base font-medium text-white hover:bg-green-700">Explore Project</a>
            </div>







          </div>
        </div>
      </section>




{/* 
      <section id="skills-experience" className="dark w-full py-12 md:py-24 lg:py-32 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-12 dark:text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 dark:text-white">

            <div>
              <h3 className="text-2xl font-semibold mb-4">Coding Experience</h3>
              <ul className="list-disc ml-4 space-y-2">
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

            
            <div>
              <h3 className="text-2xl font-semibold mb-4">LLM Experience</h3>
              <ul className="list-disc ml-4 space-y-2">
                <li>OpenAI, Mistral Large - Working with cutting-edge LLMs</li>
                <li>Opensource LLM's integration and customization. Huggingface, Mistral 7B, Mixtral 8x7B, LLama 2 72B, Phi </li>
                <li>Langchain and Llama Index - LLM-based indexing and search</li>
                <li>TTS (Text-to-Speech) & STT (Speech-to-Text) technologies</li>
                <li>Vector Databases - Pinecone, Chroma and Qdrant</li>
                <li>Sagemaker - AI model training and deployment</li>
                <li>ElevenLabs and HeyGen for marketing</li>
                <li>Zappier and Make for Automation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Deployment Experience</h3>
              <ul className="list-disc ml-4 space-y-2">
                <li>AWS Deployment - Cloud infrastructure management</li>
                <li>Microsoft Azure - Cloud infrastructure management</li>
                <li>Render & Vercel - Web hosting and serverless deployment</li>
                <li>Fly Dev - CLI based deployment</li>
                <li>Railway - Virtal Private Cloud deployment</li>
                <li>Github - Code deployment</li>
                <li>CPanel - WordPress development and deployment</li>
                <li>Netlify - Static site deployment and CI/CD</li>
              </ul>
            </div>

          </div>
          <div className="text-center mt-8">
            <a href="#genai" className="inline-block border-1 border-gray-300 px-6 py-2 text-base font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              View GenAI Apps
            </a>
          </div>
        </div>
      </section> */}


      <section className="dark w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 space-y-6 md:space-y-10">
          <div className="space-y-2 md:space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact Me</h2>
            <p className="text-white">
              Have a question or want to work together? Connect with me on LinkedIn.
            </p>
            <a href="https://www.linkedin.com/in/razvan-intuneric/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
</main>
    </>
  );
}
