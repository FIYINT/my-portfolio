'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  'All Projects',
  'Business Intelligence',
  'AI / Computer Vision',
  'AI Automation',
  'Data Science',
  'Cloud / DevOps',
];

/** Extract a 0-100 number for the radial chart.
 *  If the value contains '%' use that number, otherwise default to 75. */
function toPercent(value: string): number {
  if (value.includes('%')) {
    const n = parseInt(value.replace(/[^0-9]/g, ''), 10);
    return Math.min(100, Math.max(0, n));
  }
  return 75;
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filtered =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-[#E5E7EB] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 rounded-full px-3 py-1.5 text-xs font-medium mb-4">
            Project Portfolio
          </span>
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-6">
            Technical Case Studies & Solutions
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Exploring the intersection of predictive analytics, computer vision, and enterprise
            automation. Every project is a step towards a more intelligent data landscape.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-6 border-b border-[#E5E7EB] mb-12 overflow-x-auto pb-px">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-3 -mb-[1px] whitespace-nowrap text-sm transition-colors border-b-2 ${
                  activeCategory === cat
                    ? 'text-gray-900 font-medium border-blue-600'
                    : 'text-gray-500 font-normal border-transparent hover:text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">
              No projects in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  id={project.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row"
                >
                  {/* Project Details */}
                  <div className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        // Release: {project.date}
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                      {project.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-8">{project.longDescription}</p>

                    <div className="grid grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">
                          Primary Outcome
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-gray-900">
                            {project.metrics.value}
                          </span>
                          <span className="text-xs text-gray-500">{project.metrics.label}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-[#E5E7EB]">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        View Project <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                  {/* Performance Visualizer */}
                  <div className="w-full lg:w-80 bg-[#F9FAFB] p-8 flex flex-col justify-center items-center text-center">
                    <div className="relative h-32 w-32 mb-6">
                      <svg className="h-full w-full transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="58"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-gray-200"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="58"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={364}
                          strokeDashoffset={364 - (364 * toPercent(project.metrics.value)) / 100}
                          className="text-orange-600"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-2xl font-bold text-gray-900">
                          {project.metrics.value}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Efficiency Delta</h4>
                    <p className="text-xs text-gray-500 leading-tight">
                      Measured against previous quarter enterprise baselines.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
