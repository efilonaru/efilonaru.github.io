// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Personal Portfolio",
//       description:
//         "A minimalist portfolio website built with modern web technologies to showcase my projects and skills.",
//       tech: ["React", "Tailwind CSS", "Next.js"],
//       link: "#",
//     },
//     {
//       title: "Task Manager",
//       description:
//         "A clean and intuitive task management application focusing on simplicity and productivity.",
//       tech: ["React", "Node.js", "MongoDB"],
//       link: "#",
//     },
//     {
//       title: "Weather Dashboard",
//       description:
//         "Real-time weather tracking application with minimalist design and detailed forecasts.",
//       tech: ["JavaScript", "Weather API", "CSS"],
//       link: "#",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-gray-300 p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-mono mb-8 text-gray-100">projects</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300"
//             >
//               <CardHeader>
//                 <h2 className="text-xl font-mono text-gray-100">
//                   {project.title}
//                 </h2>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-2 py-1 bg-zinc-800 rounded-md text-sm text-gray-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <a
//                   href={project.link}
//                   className="text-cyan-500 hover:text-cyan-400 transition-colors font-mono text-sm"
//                 >
//                   view project →
//                 </a>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
