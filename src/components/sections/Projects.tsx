import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Health-Care-Analytics-Tool',
      description: '"Our healthcare analytics tool improves patient care using data analysis and technology."',
      image: '/image/health.png',
      tags: ['Html', 'Css', 'JavaScript', 'Django', 'Python'],
      demoLink: 'https://github.com/Ezhil132624/health-care-analytics-tool',
      codeLink: 'https://github.com/Ezhil132624/health-care-analytics-tool',
    },
    {
      id: 2,
      title: 'Magic-Masala',
      description: 'Magic Masala blends traditional flavors with modern techniques. Our React.js, HTML, CSS, and JavaScript-driven site offers a seamless dining experience. Discover the magic in every bite!',
      image: '/image/Magic.png',
      tags: ['React', 'Html', 'Css', 'JavaScript'],
      demoLink: 'https://restarunt-psi.vercel.app/',
      codeLink: 'https://github.com/Ezhil132624/Restarunt',
    },
    {
      id: 3,
      title: 'Chat_Bot',
      description: 'A chatbot is a software application designed to simulate conversation with human users. When you send a message to a chatbot, it automatically understands your input and responds with a relevant reply.',
      image: '/image/chatbot.png',
      tags: ['Python'],
      demoLink: 'https://github.com/Ezhil132624/chat-bot',
      codeLink: 'https://github.com/Ezhil132624/chat-bot',
    },
    {
      id: 4,
      title: 'Spotify_Xerox',
      description: 'This Spotify clone is a music streaming app built with HTML, CSS, and JavaScript. It replicates core Spotify features for music discovery and playback.',
      image: '/image/spotify.png',
      tags: ['Html', 'Css', 'JavaScript'],
      demoLink: 'https://sptify-xerox.vercel.app/',
      codeLink: 'https://github.com/Ezhil132624/spotify-clone',
    },
    {
      id: 5,
      title: 'To_Do-List',
      description: 'A To-Do List Application allows users to add, view, update, and delete tasks. This app is created using CodeIgniter (PHP framework) and follows the MVC architecture.',
      image: '/image/To_Do_List.png',
      tags: ['Html', 'Css', 'JavaScript', 'Php'],
      demoLink: 'https://github.com/Ezhil132624/To_Do_List/',
      codeLink: 'https://github.com/Ezhil132624/To_Do_List/',
    },
    {
      id: 6,
      title: 'List_Manager',
      description: 'List Management in a To-Do List app means organizing and controlling multiple task lists or categories (e.g., Work, Personal, Store memories) where each list can have its own set of tasks.',
      image: '/image/List.png',
      tags: ['Html', 'Css', 'JavaScript'],
      demoLink: 'https://list-manager-jl2o.vercel.app/',
      codeLink: 'https://github.com/Ezhil132624/List-_manager',
    },
    {
      id: 7,
      title: 'Data_Filter',
      description: 'Data filtering is the process of selecting only specific data from a larger dataset based on certain conditions. It helps you:',
      image: '/image/data_filter.png',
      tags: ['Html', 'Css', 'JavaScript', 'Php'],
      demoLink: 'https://github.com/Ezhil132624/Employee_Track',
      codeLink: 'https://github.com/Ezhil132624/Employee_Track',
    },
    {
      id: 8,
      title: 'Feedback_Manager',
      description: 'Users can create custom feedback questions, group them by category, and collect structured responses through ratings and comments for each group.',
      image: '/image/feedback _panel.png',
      tags: ['Html', 'Css', 'JavaScript', 'Php'],
      demoLink: 'https://github.com/Ezhil132624/Feedback_System',
      codeLink: 'https://github.com/Ezhil132624/Feedback_System',
    },
    {
      id: 9,
      title: 'Library_Management',
      description: 'This system helps manage books, track student details, and organize author information efficiently. It allows easy borrowing, returning, and referencing of books along with student and author records.',
      image: '/image/Library.png',
      tags: ['Html', 'Css', 'JavaScript', 'Python', 'Flask'],
      demoLink: 'https://github.com/Ezhil132624/Library_management',
      codeLink: 'https://github.com/Ezhil132624/Library_management',
    },
    {
      id: 10,
      title: 'Battery_Analyzer',
      description: 'This system analyzes battery performance by tracking key metrics like charge level, usage time, and health status. It visually represents the performance flow using charts or graphs for easier understanding and monitoring.',
      image: '/image/Battery.png',
      tags: ['Html', 'Css', 'JavaScript', 'Python'],
      demoLink: 'https://github.com/Ezhil132624/Battery--Analyzer',
      codeLink: 'https://github.com/Ezhil132624/Battery--Analyzer',
    },
  ];

  const filters = ['all', 'React', 'Python', 'Flask', 'Php', 'Wordpress'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="A selection of my recent work"
        />

        <div className="flex flex-wrap justify-center gap-2 mt-12 mb-12">
          {filters.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === tag
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {tag === 'all' ? 'All Projects' : tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex gap-3">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} className="text-white" />
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="View Code"
                        >
                          <Github size={18} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
