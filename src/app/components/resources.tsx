"use client";
import { Box, Flex } from "@radix-ui/themes";
import { MatrixRainingLetters } from "react-mdr";
import { BookMarkedIcon } from "lucide-react";

const Resources = () => {
  return (
    <Flex
      id="faq"
      gap="4"
      align="center"
      className="relative text-white h-full overflow-clip w-full py-8"
    >
      <div className="absolute z-[5] h-full w-full top-0 left-0">
        <MatrixRainingLetters
          key="foo-bar"
          color="#ff0000"
          custom_class="m-0 sticky rotate-180 w-full top-0 p-0"
        />
      </div>

      <Flex
        direction="column"
        justify="center"
        className="p-4 z-10 max-w-6xl mx-auto"
      >
        <Flex
          direction="column"
          align="center"
          className="mb-8 text-5xl text-red-600 font-extrabold gap-4"
        >
          <span className="font-extrabold w-min whitespace-nowrap text-white text-sm border-2 border-white rounded-lg p-2">
            ADDITIONAL INFO
          </span>
          <p>RESOURCES</p>
        </Flex>

        <Box className="p-4 bg-red-600/70 border border-red-500 backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl">
          <Flex align="center" gap="4" className="text-2xl font-semibold">
            <Box className="border rounded-xl p-2 bg-red-500 text-red-900 border-red-900">
              {" "}
              <BookMarkedIcon size={24} />{" "}
            </Box>
            <span>MLH Code of Conduct</span>
          </Flex>
          <p className="mt-2">
            Please refer to MLH's Code of Conduct for all other standards on how
            to build an inclusive hacking environment.
          </p>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Resources;
