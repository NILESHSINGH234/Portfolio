import React from "react";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import animationData from "../Images/home-lottie.json";

const HeroComponent = () => {
  const viewUrl =
    "";

  const resumeUrl =
    "";

  return (
    <section className="min-h-[90vh] Home">
      <div className="md:flex-row flex flex-col-reverse w-full min-h-[90vh] items-center">
        <div className="md:w-[40%]">
          <Lottie
            data-aos="fade-right"
            className="mx-auto"
            animationData={JSON.parse(JSON.stringify(animationData))}
            style={{ width: "80%", maxWidth: "400px" }}
          />
        </div>
        <div className="md:w-[60%] flex flex-col gap-4 items-center py-[50px] px-2 md:items-start">
          <p
            className="text-xl md:text-2xl font-bold"
            data-aos="fade-down-left"
          >
            HELLO I'M
          </p>
          <h1
            className="text-green-500 text-3xl sm:text-5xl md:text-6xl font-bold"
            data-aos="fade-left"
          >
            <Typewriter
              options={{
                strings: ["Nilesh Kumar", "Front-End Developer", "UI/UX DESIGNER"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p
            className="text-base text-center  md:text-left w-[80%] sm:w-[60%] md:w-[80%] font-serif"
            data-aos="fade-up-left"
          >
            A proactive learner and team player, I strive for user-centered
            design. Let's build something amazing together!
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
          <a
  href="https://www.linkedin.com/in/nilesh-kumar-477582294/"
  target="_blank"
  className="py-3 px-6 bg-green-700 text-white rounded-3xl text-center text-lg hover:scale-110 hover:bg-green-500 cursor-pointer"
  data-aos="fade-up"
>
  View LinkedIn Profile
</a>


            <a
  href="mailto:junenileshsingh@gmail.com?subject=Your%20Subject&body=Your%20Message"
  className="py-3 px-6 bg-green-700 text-white rounded-3xl text-center text-lg hover:scale-110 hover:bg-green-500 cursor-pointer"
  data-aos="fade-up"
>
  Send Email
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;