import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Mohit Gupta",
    role: "Data Analyst",
    text: "Thank you, Classbot, for providing an affordable application with excellent student Data management and fee management features perfect for our coaching institute!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mohit Gupta",
    role: "Data Analyst",
    text: "Thank you, Classbot, for providing an affordable application with excellent student Data management and fee management features perfect for our coaching institute!",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Mohit Gupta",
    role: "Data Analyst",
    text: "Thank you, Classbot, for providing an affordable application with excellent student Data management and fee management features perfect for our coaching institute!",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Mohit Gupta",
    role: "Data Analyst",
    text: "Thank you, Classbot, for providing an affordable application with excellent student Data management and fee management features perfect for our coaching institute!",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
   {
    name: "Mohit Gupta",
    role: "Data Analyst",
    text: "Thank you, Classbot, for providing an affordable application with excellent student Data management and fee management features perfect for our coaching institute!",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[index];
    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const handleDotClick = (index: number) => {
    setActive(index);
    scrollToCard(index);
  };

  // Auto move forward
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollToCard(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center bg-white px-4 py-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-6xl font-bold mb-1 ">
          Why People  
        </h2>
        <h2 className="text-3xl md:text-6xl font-bold mb-10">
             Choose Us
        </h2>

        {/* Cards Container */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 flex-nowrap pb-4 snap-x snap-mandatory scroll-smooth overflow-x-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative cursor-pointer flex-shrink-0 snap-start
                w-full md:w-[calc(50%-12px)]
                border rounded-xl p-4 pl-2 pt-13 flex flex-col shadow-sm bg-white transition-all
                ${
                  active === index
                    ? "border-blue-500 ring-1 ring-blue-200"
                    : "border-black-700 border-3"
                }`}
              >
                {/* Quote Icon - Top */}
                <div>
                      <svg
                  className="absolute top-1 left-2 w-10 h-10 md:w-13 md:h-13 text-gray-400 pointer-events-none z-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.17 6A5.001 5.001 0 002 11v7h7v-7H5.42a3 3 0 013-3V6H7.17zM17.17 6A5.001 5.001 0 0012 11v7h7v-7h-3.58a3 3 0 013-3V6h-1.25z" />
                </svg>
                </div>

                {/* Row: Avatar + Text */}
                <div className="flex align-items-end gap-6 mt-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black-500"
                  />

                  <div className="flex flex-col justify-between h-full">
                    <p className="font-medium italic text-black-700 mb-2 font-sm">
                      {item.text}
                    </p>

                   <div className="inline-flex flex-col items-center self-end leading-none">
                      <p className="text-sm italic text-black m-0">
                        {item.name}
                      </p>
                      <p className="text-lg md:text-xl font-semibold text-black m-0">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all
                ${
                  active === index
                    ? "bg-black scale-125"
                    : "bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
