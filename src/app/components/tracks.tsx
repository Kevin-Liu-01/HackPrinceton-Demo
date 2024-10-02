"use client";
import { Flex, Box } from "@radix-ui/themes";
import {
  MailIcon,
  HeartIcon,
  LeafIcon,
  DollarSignIcon,
  SchoolIcon,
} from "lucide-react";

const TrackCard = ({ title, description, icon, color }) => {
  return (
    <Flex
      direction="column"
      className="p-4 bg-red-600/70 border border-red-500 backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl"
    >
      <Flex
        align="center"
        gap="2"
        className="text-xl sm:text-2xl font-semibold"
      >
        <Box className={`border rounded-xl p-2 ${color}`}>{icon}</Box>
        {title}
      </Flex>
      <p className="mt-2 text-[0.85rem] sm:text-base">{description}</p>
    </Flex>
  );
};

const Tracks = () => {
  return (
    <Box
      id="tracks"
      className="overflow-hidden relative w-full border-y border-red-600"
    >
      <Flex
        gap="4"
        direction="column"
        className="relative text-white p-4 py-8 z-10 sm:h-full mx-auto max-w-6xl"
      >
        <Flex direction="column" justify="center" className="col-span-2">
          <Flex
            direction="column"
            align="center"
            className="mb-4 sm:mb-8 text-3xl sm:text-5xl text-red-600 font-extrabold gap-4"
          >
            <span className="font-extrabold w-min whitespace-nowrap text-white text-sm border-2 border-white rounded-lg p-2">
              TRACKS
            </span>
            <p>FALL 2024 TRACKS</p>
          </Flex>

          {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
        </Flex>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TrackCard
            title="HEALTHCARE"
            description="These projects tackle public health issues, reduce health inequities, or promote personal wellness. Hacks in this category can include telemedicine solutions, apps for tracking fitness and health data, and digital platforms for public health information."
            icon={<HeartIcon size={24} />}
            color="bg-red-400 text-red-800 border-red-600"
          />
          <TrackCard
            title="SUSTAINABILITY"
            description="These projects leverage technology to protect the environment or encourage sustainable habits. Hacks in this category can include apps for tracking and reducing carbon footprints, solutions for waste management, and tools for promoting renewable energy use.          "
            icon={<LeafIcon size={24} />}
            color="bg-green-400 text-green-800 border-green-600"
          />
          <TrackCard
            title="FINANCE"
            description="These projects innovate financial systems, improve financial literacy, or enhance personal finance management. Hacks in this category can include blockchain-based applications, budgeting and investment tools, and platforms for financial education and fraud detection.          "
            icon={<DollarSignIcon size={24} />}
            color="bg-yellow-400 text-yellow-800 border-yellow-600"
          />
          <TrackCard
            title="EDUCATION & INTERACTION"
            description="These projects enhance educational access and engagement by leveraging interactive technologies. Hacks in this category can range from social networking platforms for collaborative learning, to digital media tools for teaching, interactive e-learning applications, and projects that combine various interactive elements to create engaging educational experiences.
          "
            icon={<SchoolIcon size={24} />}
            color="bg-blue-400 text-blue-800 border-blue-600"
          />
        </div>
        <Flex
          direction="column"
          className="whitespace-normal mt-2 col-span-2 font-[family-name:var(--font-geist-mono)]"
        >
          <span className="text-red-600 font-semibold">
            Want to collaborate with us on a track for Fall 2024? Contact us at:{" "}
          </span>
          <p className="mt-2">
            <a
              href="mailto:sponsor@hackprinceton.com"
              className="bg-red-600/20 w-min gap-2 whitespace-nowrap flex items-center hover:bg-red-600/50 transition-all hover:underline px-4 py-2 rounded-xl font-bold"
            >
              <MailIcon size={24} className="text-red-600" />
              sponsor@hackprinceton.com
            </a>
          </p>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Tracks;
