import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';
import { Providers } from './providers';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: "Fiyin's Portfolio",
  description: 'Data Scientist, BI Analyst & Enterprise Owner',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/fontawesome/releases/v6.3.0/css/pro.min.css?token=2c15cc0cc7"
        />
      </head>
      <body className="font-inter bg-white antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="border-t border-[#E5E7EB] bg-[#F9FAFB] py-12">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-sm font-semibold text-gray-900">Fiyin's Portfolio</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Data Science • BI Architecture • Enterprise Strategy
                  </p>
                </div>
                <div className="flex gap-5 items-center">
                  <a
                    href="https://www.linkedin.com/in/titus-fadayini"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-colors text-base"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://github.com/FIYINT"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors text-base"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href="https://wa.me/2347013231356"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-green-500 hover:border-green-200 transition-colors text-base"
                  >
                    <i className="fab fa-whatsapp" />
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 text-center md:text-left">
                <p>© 2026 Fiyin Fadayini. All rights reserved.</p>
                <div className="flex gap-4">
                  <span>Built for Performance</span>
                  <span>High-Fidelity Structure</span>
                </div>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
