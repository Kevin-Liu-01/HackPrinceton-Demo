"use client";
import { Box, Flex } from "@radix-ui/themes";
import { MatrixRainingLetters } from "react-mdr";
import { ChevronDown, MessageCircleQuestionIcon } from "lucide-react";
import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className="border-b border-gray-600">
      <button
        className="w-full mb-2 flex justify-between hover:bg-red-600/30 rounded-xl items-center p-4 text-left text-lg font-medium text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flex align="center" gap="4">
          <MessageCircleQuestionIcon size={24} className="text-red-600" />
          {question}
        </Flex>
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <Box
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="px-4 pb-4 text-gray-300">{answer}</p>
      </Box>
    </Box>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is a marathon software product creation event. At HackPrinceton, you can look forward to amazing guest speakers, helpful workshops, tons of skilled mentors, and, of course, fun games and great swag.",
    },
    {
      question: "When is HackPrinceton?",
      answer:
        "This year, HackPrinceton will take place in-person from November 8th-10th, 2024. It’ll be 36 hours of hacking, events, speakers, social events, and more!",
    },
    {
      question: "Who can attend?",
      answer:
        "Any undergraduate or graduate student at any university in the world!",
    },
    {
      question: "Why should I come to HackPrinceton?",
      answer:
        "Beyond the learning opportunities and mentorship workshops, HackPrinceton is also a great place to meet other hackers who are just as passionate and enthusiastic about hacking as you are. Not to mention, we’ll also have awesome swag, prizes, and a few other surprises for our attendees!",
    },
    {
      question: "Is HackPrinceton in-person?",
      answer:
        "HackPrinceton will be an entirely in-person experience for all students this fall!",
    },
    {
      question: "Do I need a team to participate?",
      answer:
        "Official team formation won’t be necessary to sign up. While teams are not required in order to participate, it’s a great way to meet new people and create something together. Teams may have up to 4 members, and you will have a chance to meet other hackers at our Team Formation events and in the Discord server!",
    },
    {
      question: "How do travel stipends work this year?",
      answer:
        "If you apply and receive a travel stipend, we’ll cover up to $50 of your travel expenses! Otherwise, we suggest looking for funding through your university!",
    },
    {
      question: "Do I need to pay to participate in HackPrinceton?",
      answer:
        "Not at all! There is absolutely no cost for applying or participating in HackPrinceton. We want to make this event as accessible as possible to all those interested so make sure you apply!",
    },
  ];

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
          custom_class="m-0 sticky w-full top-0 p-0"
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
          className="mb-8 text-3xl text-center sm:text-5xl text-red-600 font-extrabold gap-4"
        >
          <span className="bg-black font-extrabold w-min whitespace-nowrap text-white text-sm border-2 border-white rounded-lg p-2">
            FAQ
          </span>
          <p>FREQUENTLY ASKED QUESTIONS</p>
        </Flex>
        <Flex
          direction="column"
          gap="4"
          className="font-[family-name:var(--font-geist-mono)] bg-black/10 rounded-xl backdrop-blur-sm"
        >
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Faq;
