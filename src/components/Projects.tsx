import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Ethics Framework",
    description: "Developed comprehensive guidelines for ethical AI implementation in enterprise systems",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    tags: ["AI", "Ethics", "Enterprise"],
    link: "#"
  },
  {
    title: "Women in STEM Initiative",
    description: "Led a mentorship program connecting 100+ women with tech industry leaders",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    tags: ["STEM", "Education", "Leadership"],
    link: "#"
  },
  {
    title: "Future of Work Study",
    description: "Research project analyzing AI's impact on workforce development through 2030",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    tags: ["Research", "AI", "Future"],
    link: "#"
  }
];

const tools = [
  {
    title: "Whisper Transcriber",
    description: "Transcribes audio files into text using OpenAI's Whisper API with multiple language support",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    tags: ["Python", "AI", "OpenAI"],
    link: "https://speech-to-text-free.replit.app"
  },
  {
    title: "STEM Career Navigator",
    description: "Interactive platform helping women explore and plan STEM career paths",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    tags: ["Career", "Education", "Web App"],
    link: "#"
  },
  {
    title: "Future Scenarios Generator",
    description: "Tool for creating and analyzing potential future technology scenarios",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80",
    tags: ["Futures", "Analysis", "JavaScript"],
    link: "#"
  }
];

function ProjectGrid({ items, title }) {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16">
        {title}
      </h2>
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
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-primary-100 text-black rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                className="inline-flex items-center text-black hover:text-primary-600 transition-colors"
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
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
        <ProjectGrid items={projects} title="Featured Projects" />
        <ProjectGrid items={tools} title="Tools Developed" />
      </div>
    </section>
  );
}
