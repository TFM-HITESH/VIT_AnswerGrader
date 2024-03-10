"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Data = [
  {
    id: 1,
    title: "step1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, distinctio facilis? Saepe obcaecati tenetur facilis perferendis quam voluptate vel, quis eligendi aliquam quaerat consequatur. Repellat nihil accusamus voluptatibus quibusdam?",
    date:"2023"
  },
  {
    id: 2,
    title: "step2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae neque similique fugiat esse omnis debitis a amet consectetur quo, aliquid nam enim. Dignissimos, illo totam? Sit sint libero, molestiae laudantium totam autem doloremque, velit reprehenderit corporis unde nulla laboriosam!",
  },
  {
    id: 3,
    title: "step3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae neque similique fugiat esse omnis debitis a amet consectetur quo, aliquid nam enim. Dignissimos, illo totam? Sit sint libero, molestiae laudantium totam autem doloremque, velit reprehenderit corporis unde nulla laboriosam!",
  },
  {
    id: 4,
    title: "step4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae neque similique fugiat esse omnis debitis a amet consectetur quo, aliquid nam enim. Dignissimos, illo totam? Sit sint libero, molestiae laudantium totam autem doloremque, velit reprehenderit corporis unde nulla laboriosam!",
  },
  
];

const HowItWorks = () => {
  

  return (
    <section id="experience" className='flex justify-center items-center flex-col py-20 text-white'>
      <h2 className='text-black sm:mb-[3.4rem] sm:text-5xl lg:text-6xl font-bold mt-10 font-sans xsm:text-4xl'>How It works <span className='text-blue-600'>?</span></h2>
            <VerticalTimeline lineColor="#1E88E5" animate={true}>
              {Data.map((project) => (
          (<React.Fragment key={project.id}>
              <VerticalTimelineElement visible contentStyle={{padding:"1.3rem 2rem"}}
              contentArrowStyle={{borderRight:'1rem solid black'}}
              iconStyle={{ visibility:'hidden'}}
              date={project.title}>
              <p className="text-black">{project.description}</p>
              </VerticalTimelineElement>
             </React.Fragment>
          )
        ))}
        </VerticalTimeline>
    </section>
  )
}

export default HowItWorks;
