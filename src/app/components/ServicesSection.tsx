// components/ServicesSection.tsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const services = [
  { title: "Custom Web Design", content: "Tailored, creative designs that represent your unique brand and captivate your audience." },
  { title: "Responsive Development", content: "Websites that look great and work seamlessly on any device—mobile, tablet, or desktop." },
  { title: "E-Commerce Solutions", content: "Fully integrated e-commerce websites that allow you to sell products online with ease." },
  { title: "UI/UX Design", content: "Focusing on user experience and interface design, we ensure visitors have an intuitive and engaging experience." },
  { title: "Ongoing Website Maintenance", content: "We offer continued support to keep your website up-to-date, secure, and performing at its best." },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-16 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="space-y-6">
        <h2 className="text-4xl font-semibold">
          Websites <span className="text-black relative">
            Experts
            <span className="absolute left-0 bottom-0 w-full h-[4px] bg-[#e9b312]"></span>
          </span>
        </h2>
        <p className="text-gray-600">
          A great website is essential for capturing attention and converting visitors into customers. Our web design services focus on creating responsive, visually appealing, and user-friendly websites that are optimized for performance across all devices.
        </p>
        <div className="flex space-x-10">
          <div>
            <p className="text-2xl font-bold">180+</p>
            <p className="text-gray-500">Projects Done</p>
          </div>
          <div>
            <p className="text-2xl font-bold">90+</p>
            <p className="text-gray-500">Happy Clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold">30k</p>
            <p className="text-gray-500">Coffee Cups</p>
          </div>
        </div>
      </div>

      {/* Right Section - Accordion */}
      <div className="space-y-2">
        {services.map((service, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between w-full text-left py-3 border-b border-black text-lg font-semibold"
            >
              {service.title}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && <p className="text-gray-500 mt-2">{service.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
