// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-2xl sm:text-2xl lg:text-6xl lg:leading-normal font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Faheem",
//                 1000,
//                 "Web Developer",
//                 1000,
//                 "Mern Stack Developer",
//                 1000,
                
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//            A dedicated full-stack developer specializing in building dynamic, <br /> user-friendly web applications using modern technologies.
//           </p>
//           <div>
//             <Link
//               href="/#projects"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
//             >
//                My projects
//             </Link>
//             <Link
//               href="https://drive.google.com/file/d/1_LaroB1x_1blmRXI1QTRc5NdW00DQUU_/view?usp=sharing"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 View Resume
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden p-6 lg:p-10">
//   <Image
//     src="/images/hero-image.jpg"
//     alt="hero image"
//     fill
//     style={{ objectFit: "cover", objectPosition: "top center" }}
//     className="rounded-full"
//   />
// </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 h-[80vh] flex items-center " id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-2xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Faheem Abdulla K R",
                1000,
                // "Web Developer",
                // 1000,
                "Mern Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           A dedicated full-stack developer specializing in building dynamic, <br /> user-friendly web applications using modern technologies.
          </p>
          <div>
            <Link
              href="/#projects"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
               My projects
            </Link>
            <Link
             target="_blank"
              href="https://drive.google.com/file/d/1LCKepfwY5-V9IyjmIQR7gJJLgjdArpYr/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
         <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden p-6 lg:p-10">
  <Image
    src="/images/hero-image.jpg"
    alt="hero image"
    fill
    style={{ objectFit: "cover", objectPosition: "top center" }}
    className="rounded-full"
  />
</div>
         </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

