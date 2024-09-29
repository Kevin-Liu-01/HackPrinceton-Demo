import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative h-full w-full bg-black border-t border-red-600">
      <Flex align="center" className="max-w-6xl mx-auto py-12 ">
        {/* <Box className="relative w-full h-full">
          <Box className="overflow-hidden h-24 w-auto rounded-full bg-black border border-black">
            <Image
              src="/images/HackHeist_Images/mask.png"
              alt="Mask"
              fill={true}
              className="px-2 h-24 w-24"
            />
          </Box>
        </Box> */}
        <Box className="text-white text-lg">© 2024 HackPrinceton Demo</Box>
      </Flex>
    </footer>
  );
};

export default Footer;
