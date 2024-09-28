"use client";
import Image from "next/image";
import { Grid, Flex } from "@radix-ui/themes";
import { MatrixRainingLetters } from "react-mdr";
import { MailIcon } from "lucide-react";

const About = () => {
  return (
    <Grid
      id="about"
      columns="2"
      gap="4"
      className="text-white h-full max-w-6xl"
    >
      <Flex direction="column" justify="center" className="p-4">
        <Flex
          direction="column"
          className="text-start mb-8 text-5xl text-red-600 font-extrabold gap-4"
        >
          <span className="font-extrabold w-min whitespace-nowrap text-white text-sm border-2 border-white rounded-lg p-2">
            ABOUT
          </span>
          <p>WELCOME TO</p>
          <p>HACKPRINCETON!</p>
        </Flex>
        <Flex
          direction="column"
          gap="4"
          className=" font-[family-name:var(--font-geist-mono)]"
        >
          <p>
            At HackPrinceton, you'll meet{" "}
            <strong>
              fellow hackers from around the world, learn new skills, and work
              alongside seasoned mentors.
            </strong>{" "}
            We'll have free workshops, lecture series, mentorship, prizes,
            games, and more. Don't have a team or even an idea? Don't worry!
            We'll give you the tools to build something incredible.
          </p>
          <p>
            <strong>
              For 36 hours from November 8 - 10 on Princeton University’s campus
            </strong>
            , you’ll have the opportunity to collaborate and build out
            brilliant, innovative, and impactful ideas.
          </p>
          <div className="whitespace-normal mt-2">
            <span className="text-red-600 font-semibold">
              Other questions? Contact us at:{" "}
            </span>
            <p className="mt-2">
              <a
                href="mailto:team@hackprinceton.com"
                className="bg-red-600/20 w-min gap-2 whitespace-nowrap flex items-center hover:bg-red-600/50 transition-all hover:underline px-4 py-2 rounded-xl font-bold"
              >
                <MailIcon size={24} className="text-red-600" />
                team@hackprinceton.com {":)"}
              </a>
            </p>
          </div>
        </Flex>
      </Flex>
      <Flex className="relative w-full h-full">
        <Image
          src="/images/HackHeist_Images/hacker.png"
          alt="Hacker"
          fill={true}
          className={`object-contain z-10 rounded-xl p-10 drop-shadow-lg`}
          priority
        />
        <div className=" z-[5] overflow-x-clip top-0 left-0">
          <MatrixRainingLetters
            key="foo-bar"
            color="#ff0000"
            custom_class="m-0 rotate-180 sticky top-0 p-0"
          />
        </div>
      </Flex>
    </Grid>
  );
};

export default About;
