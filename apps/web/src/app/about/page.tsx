import { experience, education, certifications } from '@/data/projects';
import { Award, GraduationCap, Briefcase, User2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Intro Section */}
      <section className="py-20 lg:py-32 border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="max-w-2xl">
              {/* Headshot */}
              <div className="mb-10">
                <img
                  src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/be409410-89d0-4649-a1d3-9b081c7da482.jpg"
                  alt="Fiyin Fadayini"
                  className="w-36 h-36 rounded-2xl object-cover border border-gray-200 shadow-sm"
                />
              </div>

              <span className="bg-blue-50 text-blue-600 rounded-full px-3 py-1.5 text-xs font-medium inline-flex items-center gap-1.5 mb-6">
                <User2 size={12} />
                About Fiyin
              </span>
              <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-8">
                Bridging the gap between <span className="text-blue-600">
                  rigorous research
                </span>{' '}
                and enterprise growth.
              </h1>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  I'm Fiyin Fadayini — a dynamic Data Scientist and BI Analyst with 3+ years of
                  experience transforming raw data into strategic assets. I specialize in building
                  robust predictive analytics, deploying anomaly detection models, and automating BI
                  dashboards that drive real business outcomes.
                </p>
                <p>
                  My perspective is unique: I combine rigorous collaborative research in causal AI
                  and LLMs with the practical acumen of someone who has worked across consulting,
                  enterprise analytics, and education. I've also built AI automation workflows —
                  including a live CRM response system using email and a Telegram bot — and I'm
                  actively expanding into cloud and DevOps.
                </p>
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-xl border border-gray-200 p-8 lg:p-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">Core Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">
                    Data & BI
                  </h4>
                  <ul className="space-y-3">
                    {['Power BI & Tableau', 'ETL Pipelines', 'Excel & DAX', 'Data Wrangling'].map(
                      (s) => (
                        <li key={s} className="text-sm text-gray-600 flex items-start">
                          <span className="text-gray-400 mr-2">-</span> {s}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">
                    AI & Machine Learning
                  </h4>
                  <ul className="space-y-3">
                    {['Python & R', 'LLM Pipelines', 'Anomaly Detection', 'Causal AI'].map((s) => (
                      <li key={s} className="text-sm text-gray-600 flex items-start">
                        <span className="text-gray-400 mr-2">-</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">
                    Databases
                  </h4>
                  <ul className="space-y-3">
                    {['MySQL', 'PostgreSQL', 'Database Management', 'SQL Queries'].map((s) => (
                      <li key={s} className="text-sm text-gray-600 flex items-start">
                        <span className="text-gray-400 mr-2">-</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">
                    Tools & Automation
                  </h4>
                  <ul className="space-y-3">
                    {['Streamlit', 'Telegram Bot API', 'Email Automation', 'Anaconda'].map((s) => (
                      <li key={s} className="text-sm text-gray-600 flex items-start">
                        <span className="text-gray-400 mr-2">-</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 lg:py-32 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-12 flex items-center gap-3">
              <Briefcase className="text-blue-600" size={24} />
              Work History
            </h2>

            <div className="space-y-8">
              {experience.map((item, idx) => (
                <div key={idx} className="relative pl-8 pb-12 border-l border-[#E5E7EB] last:pb-0">
                  <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.role}</h3>
                        <p className="text-sm text-blue-600 font-medium">{item.company}</p>
                      </div>
                      <span className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-500 whitespace-nowrap self-start md:self-center">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.description}</p>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="text-sm text-gray-500 flex items-start">
                          <span className="text-gray-300 mr-2 font-mono">-</span> {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 lg:py-28 border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-10 flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={24} />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">
                  {edu.period}
                </p>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                <p className="text-sm text-gray-500">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-10 flex items-center gap-3">
            <Award className="text-blue-600" size={24} />
            Certifications & Training
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4 items-start"
              >
                <div className="h-8 w-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Award size={14} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{cert.title}</p>
                  <p className="text-xs text-blue-600 mt-0.5">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
