"use client";
import Image from "next/image";
import { Grid, Flex, Box, Text, Separator } from "@radix-ui/themes";
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
  // Add more sponsors here
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
          className="mb-8 text-5xl text-white font-extrabold gap-4"
        >
          <p className="font-extrabold w-min whitespace-nowrap text-white border-2 border-white rounded-2xl p-2 px-4">
            CONTRIBUTORS
          </p>
        </Flex>
        <Flex
          direction="column"
          gap="4"
          className="font-[family-name:var(--font-geist-mono)]"
        >
          <Text className="mb-4">
            <span>
              If you’re interested in working with HackPrinceton, or being a
              mentor or judge for our hackathon, please email us at
            </span>
            <Flex align="center" gap="2" className="mt-2">
              <Text>
                <a
                  href="mailto:sponsor@hackprinceton.com"
                  className="bg-gray-800/70 w-min gap-2 whitespace-nowrap flex items-center hover:bg-red-950/40 transition-all hover:underline px-4 py-2 rounded-xl font-bold"
                >
                  <MailIcon size={24} className="text-red-600" />
                  sponsor@hackprinceton.com {":)"}
                </a>
              </Text>{" "}
              <span>{"and we'll get back to you!"}</span>
            </Flex>
            <Separator orientation="horizontal" size="4" className="my-2" />
            <Flex align="center" gap="4">
              View our Sponsorship Prospectus:{" "}
              <a
                href="https://static1.squarespace.com/static/65a3fefdb63149536ba6d3eb/t/66be5cf970cc606941e3b3d4/1723751674077/HackPrinceton_Fall2024Prospectus.pdf"
                className="bg-gray-100 text-black hover:text-red-600 transition-all w-min gap-2 whitespace-nowrap flex items-center hover:bg-white hover:underline px-4 py-2 rounded-xl font-bold"
              >
                <BookDownIcon size={24} />
                PROSPECTUS
              </a>
            </Flex>
            <Separator orientation="horizontal" size="4" className="mt-2" />
          </Text>
          <Flex
            direction="column"
            className="rounded-2xl overflow-hidden bg-red-500/70"
          >
            <Flex
              align="center"
              className="text-black px-4 font-[family-name:var(--font-geist-mono)] whitespace-nowrap bg-gray-300 py-2 text-lg"
            >
              <LeafIcon size={24} className="text-red-600 mr-2" />
              <strong>Fall 2024 - A BIG Thanks To…</strong>
              <Flex className="ml-auto">
                <Box className="w-3 h-3 rounded-full bg-red-500 mx-1" />
                <Box className="w-3 h-3 rounded-full bg-yellow-500 mx-1" />
                <Box className="w-3 h-3 rounded-full bg-green-500 mx-1" />
              </Flex>
            </Flex>
            <Grid
              columns="2"
              gap="5"
              className="relative w-full h-48 p-4 bg-gray-950"
            >
              {sponsors.map((sponsor, index) => (
                <Box
                  key={index}
                  className=" z-10 relative hover:scale-[1.01] transition-all p-4 rounded-2xl bg-white/80 border border-red-200/40 backdrop-filter backdrop-blur-sm"
                >
                  <Image
                    src={sponsor.imageSrc}
                    alt={sponsor.name}
                    fill={true}
                    className="object-cover rounded-2xl"
                  />
                </Box>
              ))}
              <div className="absolute h-full w-full z-[5] overflow-x-clip top-0 left-0">
                <MatrixRainingLetters
                  key="foo-bar"
                  color="#ff0000"
                  custom_class="m-0 rotate-180 sticky top-0 p-0"
                />
              </div>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contributors;
