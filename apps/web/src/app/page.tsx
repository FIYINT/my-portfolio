import Link from 'next/link';
import { ArrowRight, BarChart3, Database, Cpu } from 'lucide-react';
import { projects } from '@/data/projects';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32 border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Transforming raw data into{' '}
              <span className="text-blue-600">strategic enterprise assets.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
              Data Scientist and BI Analyst with 3+ years of experience building robust predictive
              analytics, LLM pipelines, anomaly detection models, and automated BI dashboards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-lg px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 rounded-lg px-6 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Pillars */}
      <section className="bg-[#F9FAFB] py-20 border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">BI Architecture</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Developing automated dashboards that track macro indicators and optimize dealer
                performance.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span> Real-time ETL Pipelines
                </li>
                <li className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span> Macro Economic Tracking
                </li>
                <li className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span> Stakeholder Reporting
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Cpu size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Computer Vision</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Deploying edge CV models and predictive analytics for high-volume inventory
                environments.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span> Object Classification
                </li>
                <li className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span> Image Classification
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Database size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy & Enterprise</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Unique dual perspective combining causal AI research with practical business acumen.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span> Causal AI Research
                </li>
                <li className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span> CRM Workflow Automation
                </li>
                <li className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span> Cloud Data Migration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">
                Selected Projects
              </h2>
              <p className="text-gray-500">
                A collection of high-impact data solutions delivered for global enterprises.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white border border-gray-200 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-gray-500">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-2.5 py-1 text-xs text-gray-700">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {project.metrics.value} {project.metrics.label}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-gray-400 uppercase tracking-tight px-1.5 py-0.5 border border-gray-100 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F9FAFB] py-20 border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Ready to unlock your data's potential?
            </h2>
            <p className="text-gray-500 mb-8">
              Whether you need a custom BI suite, an AI automation workflow, or predictive research,
              I can help you scale with precision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gray-900 text-white rounded-lg px-8 py-4 text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
