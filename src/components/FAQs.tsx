"use client";
import React, { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faqs() {
  const [data, setData] = useState<FAQItem[]>([]);

  interface FAQItem {
    id: number;
    question: string;
    answer: string;
  }

  useEffect(() => {
    setData(FaqData);
  }, []);

  return (
    <div className="main">
      <h1 className="text-5xl text-center text-black font-extrabold mb-16">FAQ<span className="text-blue-600">s</span></h1>
      <div className="mt-5 pb-20 justify-center justify-items-center content-center items-center">
        <Accordion type="single" collapsible>
          {data.map((item) => (
            <AccordionItem
              className="overflow-hidden border-b-0 mx-auto mt-4 rounded-2xl md:w-[57%] sm:w-1/2 xsm:w-[74%] bg-white-950 text-black border-4 border-blur"
              key={item.id}
              value={item.question}
            >
              <AccordionTrigger className="font-inherit p-5 h-16 flex items-center justify-between text-left sm:text-lg leading-none hover:bg-mauve-2 xsm:text-xs ">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden text-base p-5 pt-0 pb-2 text-left mb-2 xsm:text-[0.8rem] sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const FaqData = [
  {
    id: 1,
    question: "Loremhcbc jhbiyidjha whcblorem sdch",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum",
        
  },
  {
    id: 2,
    question: "Vel incidunt magni dignissimos",
    answer:
      "distinctio iste deserunt exercitationem error earum illo velit! Ipsam, voluptatem.",
  },
  {
    id: 3,
    question: "ducimus sint ratione repellat fugit asperiores.",
    answer:  
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est, quidem distinctio voluptas similique atque debitis",
  },
  {
    id: 4,
    question: "asperiores iure necessitatibus aut voluptate",
    answer:
      "facilis minima? Alias dolores rerum ipsa optio qui ipsum?",
  },
  {
    id: 5,
    question: "deleniti voluptates modi nam temporibus nemo mollitia ad, qui adipisci quae! Nobis?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate consequuntur veniam accusantium aliquid magni molestiae.",
  }, 
  {
    id: 6,
    question: "delenitfbbgngi voluptates modi nam temporibus nemo mollitia ad, qui adipisci quae! Nobis?",
    answer:
      "Lorem ipsum dologbgmnbaj hvwfgiuygvs r sit amet consectetur adipisicing elit. Eius cupiditate consequuntur veniam accusantium aliquid magni molestiae.",
  }, 
  {
    id: 7,
    question: "deleniti voluptates modi nam tejjhfwyrtuef jweti7nmporibus nemo mollitia ad, qui adipisci quae! Nobis?",
    answer:
      "Lorem ipsum dolor sijhfeurguwti2egfwg  hfyurthgwyer jhefuy2q33r3t amet consectetur adipisicing elit. Eius cupiditate consequuntur veniam accusantium aliquid magni molestiae.",
  }, 
];
