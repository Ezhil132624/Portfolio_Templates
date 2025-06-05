import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'framework', label: 'Framework' },
    { id: 'tools', label: 'Tools & Others' },
  ];

  const skills = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'React', level: 90 },
    ],
    backend: [
      { name: 'Python', level: 75 },
      { name: 'Php', level: 70 },
      { name: 'SQL', level: 60 },
      { name: 'Worpress', level: 80 },
    ],
    framework: [
      { name: 'Django', level: 85 },
      { name: 'Codeingentor', level: 70 },
      { name: 'Flask', level: 60 },
    ],
    tools: [
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 75 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === category.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills[activeTab as keyof typeof skills].map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">{skill.name}</h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      transition: 'width 1s ease-in-out',
                      animation: `growWidth-${index} 1.5s ease-out`
                    }}
                  ></div>
                </div>
                <style jsx>{`
                  @keyframes growWidth-${index} {
                    from { width: 0; }
                    to { width: ${skill.level}%; }
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;