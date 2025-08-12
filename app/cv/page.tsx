import { Mail, Phone, MapPin, Linkedin, Github, Globe, ExternalLink } from "lucide-react"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-blue-900 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none print:max-w-none print:mx-0 print:bg-white">
        {/* Header Section */}
        <header className="bg-slate-900 text-white p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Ibrahim Aliyev</h1>
              <p className="text-xl text-slate-300">Front-end Developer</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+994 99 329 88 83</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ibrahim.al@div.edu.az</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Baku, Azerbaijan</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a
                  href="https://www.linkedin.com/in/ibrahim-aliyev-668283307/"
                  className="hover:text-blue-300 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/IbrahimAliyev20" className="hover:text-blue-300 transition-colors">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a href="https://ibrahimdev-gules.vercel.app/" className="hover:text-blue-300 transition-colors">
                  Portfolio Website
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Results-driven Front-end Developer with 2 years of experience building responsive, high-performance, and
              user-centric web applications using the modern JavaScript ecosystem. Expertise in React.js, Next.js,
              TypeScript, and Tailwind CSS, with a proven track record of delivering innovative solutions. Seeking a
              challenging front-end role where I can contribute to innovative projects and grow within a dynamic
              international team.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-slate-800 mb-2">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Tanstack Query", "React Hook Form", "Chart.js", "motion.dev"].map(
                    (skill) => (
                      <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 mb-2">Styling & UI</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Tailwind CSS", "Material-UI", "Shadcn/ui"].map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-slate-800 mb-2">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Figma", "Vercel", "Postman", "Zod", "i18n"].map((skill) => (
                    <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2">
              Professional Experience
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Front-end Developer</h3>
                  <p className="text-blue-600 font-medium">Markup Agency, Baku</p>
                </div>
                <span className="text-gray-600 font-medium">November 2024 – Present</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Develop and maintain high-performance, client-facing web applications using Next.js and TypeScript,
                  leading to a 25% increase in user engagement on key projects.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Collaborate with UI/UX designers to translate complex Figma mockups into pixel-perfect, responsive,
                  and reusable components with Shadcn/ui and Tailwind CSS.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  Engineer full-stack web platforms for clients in diverse sectors, including FinTech and E-commerce, by
                  integrating robust back-end services and managing complex server state with Tanstack Query.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2">
              Featured Projects
            </h2>
            <div className="space-y-6">
              {/* Project 1 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Gbaru</h3>
                  <div className="flex gap-3 text-sm">
                    <a
                      href="https://gbaru.com"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/MarkUpAgency/Baru-Frontend"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  A central web portal for the construction and real estate sector, bringing together companies, users,
                  and professionals in a single ecosystem.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Tanstack Query",
                    "Shadcn/ui",
                    "React Hook Form",
                    "Zod",
                  ].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 2 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Fonderra</h3>
                  <div className="flex gap-3 text-sm">
                    <a
                      href="https://fondera.vercel.app/"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/IbrahimAliyev20/Fonderra"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  A FinTech platform connecting innovative startups with investors, featuring a public site and a
                  comprehensive user dashboard for portfolio management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Tanstack Query", "React Hook Form"].map(
                    (tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Project 3 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Platinium-17 E-catalog</h3>
                  <div className="flex gap-3 text-sm">
                    <a
                      href="https://platinium-17.az"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/MarkUpAgency/platinium"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  A B2B product catalog website designed to showcase professional kitchen equipment and generate new
                  business leads for the client.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Shadcn/ui", "TypeScript"].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education and Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2">
                Education & Certifications
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-slate-900">Front-end Development (Certificate)</h3>
                <p className="text-blue-600">Div Academy, Baku</p>
                <p className="text-gray-600 text-sm">Completed: October 2024</p>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-blue-600 pb-2">Languages</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-900">Azerbaijani</span>
                  <span className="text-gray-600">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-900">Russian</span>
                  <span className="text-gray-600">B1 (Intermediate)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-900">English</span>
                  <span className="text-gray-600">A2 (Elementary)</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
