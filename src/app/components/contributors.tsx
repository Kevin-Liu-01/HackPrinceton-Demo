"use client";
import Image from "next/image";
import { Flex, Box, Text } from "@radix-ui/themes";
import { BookDownIcon, LeafIcon, MailIcon } from "lucide-react";
import { MatrixRainingLetters } from "react-mdr";

// Sponsor data array
const sponsors = [
  {
    name: "Amazon",
    imageSrc: "/images/sponsors/amazon.png",
  },
  {
    name: "Equivlent",
    imageSrc: "/images/sponsors/equivlent.jpg",
  },
  {
    name: "Capital One",
    imageSrc: "/images/sponsors/capitalone.png",
  },
  {
    name: "BGB",
    imageSrc: "/images/sponsors/bgb.png",
  },
  {
    name: "Princeton Health Initiative",
    imageSrc: "/images/sponsors/prhi.png",
  },
  {
    name: "Spline",
    imageSrc: "/images/sponsors/spline.png",
  },
  {
    name: "Warp",
    imageSrc: "/images/sponsors/warp.svg",
  },
  {
    name: "D.E. Shaw",
    imageSrc: "/images/sponsors/deshaw.png",
  },
  {
    name: "Coinbase",
    imageSrc: "/images/sponsors/coinbase.png",
  },
  {
    name: "E-Club",
    imageSrc: "/images/sponsors/eclub.jpg",
  },
  {
    name: "ORFE",
    imageSrc: "/images/sponsors/orfe.webp",
  },
  {
    name: "Mixmax",
    imageSrc: "/images/sponsors/mixmax.svg",
  },
  {
    name: "Standout",
    imageSrc: "/images/sponsors/standout.png",
  },
  {
    name: "VerbWire",
    imageSrc: "/images/sponsors/verbwire.svg",
  },
  {
    name: "DevIt",
    imageSrc: "/images/sponsors/devit.png",
  },
];

const Contributors = () => {
  return (
    <Flex
      id="sponsors"
      gap="4"
      className="relative text-white py-8 h-full w-full bg-red-600/90 backdrop-filter backdrop-blur-sm"
    >
      <Flex
        direction="column"
        justify="center"
        className="p-4 max-w-6xl mx-auto"
      >
        <Flex
          direction="column"
          align="center"
          className="mb-8 text-2xl sm:text-5xl text-white font-extrabold gap-4"
        >
          <p className="bg-black font-extrabold w-min sm:whitespace-nowrap text-white border-2 border-white rounded-2xl p-2 px-4">
            CONTRIBUTORS
          </p>
        </Flex>
        <Flex
          direction="column"
          gap="4"
          className="font-[family-name:var(--font-geist-mono)]"
        >
          <Box>
            <Box className="border-white border-2 border-dashed rounded-2xl mb-4 p-4">
              <span>
                If you’re interested in working with HackPrinceton, or being a
                mentor or judge for our hackathon, email us at:
              </span>
              <Flex align="center" gap="2" className="mt-2">
                <Text>
                  <a
                    href="mailto:sponsor@hackprinceton.com"
                    className="bg-gray-800/70 w-full sm:w-min gap-2 sm:whitespace-nowrap flex items-center hover:bg-red-950/40 transition-all hover:underline px-4 py-2 rounded-xl font-bold"
                  >
                    <MailIcon size={24} className="text-red-600" />
                    sponsor@hackprinceton.com
                  </a>
                </Text>{" "}
                <span className="hidden sm:inline">
                  {"and we'll get back to you!"}
                </span>
              </Flex>
            </Box>
            <div className="flex align-center gap-4 flex-col sm:flex-row border-white border-2 border-dashed rounded-2xl p-4">
              <Text className="my-auto">View our Sponsorship Prospectus: </Text>
              <a
                href="https://static1.squarespace.com/static/65a3fefdb63149536ba6d3eb/t/66be5cf970cc606941e3b3d4/1723751674077/HackPrinceton_Fall2024Prospectus.pdf"
                className="bg-gray-100 text-black hover:text-red-600 transition-all w-min gap-2 whitespace-nowrap flex items-center hover:bg-white hover:underline px-4 py-2 rounded-xl font-bold"
              >
                <BookDownIcon size={24} />
                PROSPECTUS
              </a>
            </div>
          </Box>
          <Flex
            direction="column"
            className="rounded-2xl overflow-hidden bg-red-500/70"
          >
            <Flex
              align="center"
              className="text-black px-4 font-[family-name:var(--font-geist-mono)] whitespace-nowrap bg-gray-300 py-2 text-lg"
            >
              <LeafIcon size={24} className="text-red-600 mr-2" />
              <strong>
                Fall 2024{" "}
                <span className="hidden sm:inline">- A BIG Thanks To…</span>
              </strong>
              <Flex className="ml-auto">
                <Box className="w-3 h-3 rounded-full bg-red-500 mx-1" />
                <Box className="w-3 h-3 rounded-full bg-yellow-500 mx-1" />
                <Box className="w-3 h-3 rounded-full bg-green-500 mx-1" />
              </Flex>
            </Flex>
            <div className="relative grid gap-5 grid-cols-1 sm:grid-cols-3 w-full h-full p-4 bg-gray-950">
              {sponsors.map((sponsor, index) => (
                <Box
                  key={index}
                  className="h-full z-10 relative hover:scale-[1.01] transition-all rounded-2xl bg-black/30 border border-red-200/40 backdrop-filter backdrop-blur-sm"
                >
                  <Box className="min-h-[12rem] sm:h-auto">
                    <Image
                      src={sponsor.imageSrc}
                      alt={sponsor.name}
                      fill={true}
                      className="object-contain rounded-2xl p-4"
                    />
                  </Box>
                </Box>
              ))}
              <div className="absolute h-full w-full z-[5] overflow-x-clip top-0 left-0">
                <MatrixRainingLetters
                  key="foo-bar"
                  color="#ff0000"
                  custom_class="m-0 h-full rotate-180 sticky top-0 p-0"
                />
              </div>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contributors;
