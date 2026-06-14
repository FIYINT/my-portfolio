import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft, ImagePlus } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* Back nav */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="bg-white border-b border-[#E5E7EB] py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
              {project.category}
            </span>
            <span className="text-xs text-gray-400 font-mono">// Release: {project.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>
        </div>
      </section>

      {/* Metrics + Tags */}
      <section className="py-10 border-b border-[#E5E7EB] bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">
                Primary Outcome
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-gray-900">
                  {project.metrics.value}
                </span>
                <span className="text-sm text-gray-500">{project.metrics.label}</span>
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
                    className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">Project Images</h2>

          {project.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.images.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-gray-200 bg-white aspect-video"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Empty state — shown until images are added */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="rounded-xl border-2 border-dashed border-gray-200 bg-white aspect-video flex flex-col items-center justify-center gap-3 text-center px-6"
                >
                  <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center">
                    <ImagePlus size={20} className="text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">Add project image</p>
                    <p className="text-xs text-gray-300 mt-1">
                      Add an image URL to the <span className="font-mono">images</span> array in{' '}
                      <span className="font-mono">data/projects.ts</span>
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
