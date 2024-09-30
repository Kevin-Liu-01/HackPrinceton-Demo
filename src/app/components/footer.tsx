import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative h-full w-full bg-black border-t border-red-600">
      <Flex
        align="center"
        justify="center"
        gap="2"
        className="max-w-6xl mx-auto py-8 "
      >
        <Image
          src="/images/HackHeist_Images/mask.png"
          alt="Mask"
          width={0}
          height={0}
          sizes="100vw"
          className="px-2 h-12 w-auto"
        />
        <Box className="text-white text-lg whitespace-nowrap">
          © 2024 HackPrinceton Demo
        </Box>
      </Flex>
    </footer>
  );
};

export default Footer;
