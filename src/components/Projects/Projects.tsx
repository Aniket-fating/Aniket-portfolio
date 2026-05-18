

import React from 'react';
import rewardsImg from '../../assets/Garbage_Reward.png'
import dmaImg from '../../assets/dma.png'
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Rewards ICTSBM',
      description: 'For Shop owners to manage offers and validate coupon redemptions, displaying customer and redemption data. Reward system where users earn points for waste disposal, redeemable as discount coupons.',
      image: rewardsImg,
      tech: ['React', 'Redux', 'Apex charts', 'Session storage', 'DotNet', 'Tailwind', 'Responsive'],
      github: '#',
      live: 'https://rewards.ictsbm.com/',
      credentials: {
        user: 'swapy',
        password: 'swapy1'
      }
    },
    {
      id: 2,
      title: 'DMA',
      description: 'Data visualization system, Real-time employee activity tracking, QR code-based tracking.',
      image: dmaImg,
      tech: ['React', 'Redux', 'Apex charts', 'Session storage', 'DotNet', 'Tailwind', 'Responsive'],
      github: '#',
      live: 'https://dma.ictsbm.com/',
      credentials: {
        user: 'testdma',
        password: 'testdma@567'
      }
    },
   
  ];

    return (

      <section id="projects" className="py-20 px-4  bg-gradient-to-tr from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="w-full md:w-3/4 mx-auto grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {/* Smaller Image Container */}
                <div className="relative overflow-hidden group cursor-pointer h-40 w-full flex justify-center items-center bg-slate-900/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" w-full object-contain "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                </div>
                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base mb-3 leading-relaxed">{project.description}</p>

                  {project.credentials && (
                    <div className="mb-2 text-xs md:text-sm text-gray-300">
                      <span className="block font-semibold">User: {project.credentials.user}</span>
                      <span className="block font-semibold">Password: {project.credentials.password}</span>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-purple-300 text-xs md:text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center text-slate-400 hover:text-purple-400 text-xs md:text-sm transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
