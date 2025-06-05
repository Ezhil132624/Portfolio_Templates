import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;