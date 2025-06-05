import React, { useRef, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Developer Intern',
      company: 'Future calls Private limited.',
      period: 'Oct 2024 - Dec 2024',
      description: [
        'I designed and developed an internal website as part of my learning process, where I focused on building a responsive user interface and integrating backend functionalities using PHP. Through this project, I gained hands-on experience in PHP basics such as form handling, data storage using MySQL, and dynamic content rendering. This helped me understand how server-side scripting works and laid a strong foundation for building full-stack web applications',
      ],
      skills: ['Html', 'Css', 'Javascript', 'Php', 'python'],
    },

  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.timeline-item');
          elements.forEach((el, index) => {
            setTimeout(() => {
              (el as HTMLElement).classList.add('appear');
            }, index * 200);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="mt-16 relative" ref={experienceRef}>
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900/50"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item opacity-0 transition-all duration-500 transform translate-y-8 mb-12 md:mb-0 relative ${index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-auto' : 'md:pl-8'
                }`}
            >
              <div
                className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}
              >
                <div className={`hidden md:block absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'
                  } w-8 h-[1px] bg-blue-200 dark:bg-blue-900/50`}></div>

                <div className="z-10">
                  <div className="bg-blue-500 text-white text-sm rounded-full py-1 px-4 shadow-md">
                    {exp.period}
                  </div>
                </div>

                <div className={`hidden md:block absolute ${index % 2 === 0 ? '-left-2.5' : '-right-2.5'
                  } top-0 w-6 h-6 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-800`}></div>
              </div>

              <div className={`bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg mx-0 ${index % 2 === 0 ? 'md:ml-0 md:mr-8' : 'md:ml-8 md:mr-0'
                }`}>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{exp.company}</p>

                <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .timeline-item.appear {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Experience;
