import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import BannerSlider from './BannerSlider';

const tools = [
  {
    title: "AI Model Evaluator",
    description: "Open-source tool for assessing bias in machine learning models",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    tags: ["Python", "AI", "Open Source"],
    link: "#"
  },
  {
    title: "AI Art Gallery",
    description: "Interactive platform showcasing AI-generated artwork and LoRA models",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80",
    tags: ["AI", "Art", "Gallery"],
    link: "/gallery"
  },
  {
    title: "Future Scenarios Generator",
    description: "Tool for creating and analyzing potential future technology scenarios",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80",
    tags: ["Futures", "Analysis", "JavaScript"],
    link: "#"
  }
];

const studentProjects = {
  images: [
    {
      title: "AI Art Gallery",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80",
      author: "Maria González"
    },
    {
      title: "Neural Networks Visualization",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      author: "John Smith"
    }
  ],
  artifacts: [
    {
      title: "3D Printed AI Models",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      author: "Alex Chen"
    },
    {
      title: "Interactive AI Installation",
      image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?auto=format&fit=crop&q=80",
      author: "Sarah Johnson"
    }
  ],
  videos: [
    {
      title: "AI Ethics Documentary",
      image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80",
      author: "Carlos Rivera"
    },
    {
      title: "Machine Learning Tutorial Series",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80",
      author: "Emma Wilson"
    }
  ],
  music: [
    {
      title: "AI Generated Symphony",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
      author: "David Lee"
    },
    {
      title: "Neural Network Beats",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
      author: "Maya Patel"
    }
  ]
};

function ProjectGrid({ items, title, id }: { items: any[]; title: string; id: string }) {
  return (
    <div id={id} className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-primary-100 text-black rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {item.title === "AI Art Gallery" ? (
                <Link
                  to="/gallery"
                  className="inline-flex items-center text-black hover:text-primary-600 transition-colors"
                >
                  View Gallery <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              ) : (
                <a
                  href={item.link}
                  className="inline-flex items-center text-black hover:text-primary-600 transition-colors"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentProjectsCarousel() {
  const [activeCategory, setActiveCategory] = React.useState('images');
  const categories = ['images', 'artifacts', 'videos', 'music'];

  return (
    <div id="student-projects" className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">Projects made by my students</h2>
      
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {studentProjects[activeCategory as keyof typeof studentProjects].map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-80">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">By {project.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="space-y-32">
        <BannerSlider />
        <ProjectGrid items={tools} title="Tools Developed" id="tools" />
        <StudentProjectsCarousel />
      </div>
    </section>
  );
}