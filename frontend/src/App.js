import "@/App.css";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Toaster, toast } from "sonner";
import {
  ArrowUpRight,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";

const heroImage =
  "https://customer-assets.emergentagent.com/job_2661bac5-9c6b-45de-8f55-0bffe973e722/artifacts/qzfmxvr9_ChatGPT%20Image%20Mar%202%2C%202026%2C%2003_11_56%20PM.png";

const featuredProjects = [
  {
    id: "coffee-shop-sales",
    title: "Coffee Shop Sales Analysis",
    tool: "Power BI",
    description:
      "Built a sales performance dashboard with KPIs, product/category insights, store comparison, and time-based trends.",
    image:
      "https://customer-assets.emergentagent.com/job_2661bac5-9c6b-45de-8f55-0bffe973e722/artifacts/oiyb9g0x_overview.png",
    repo: "https://github.com/alokwalunj/Coffee_Shop_Sales",
    span: "md:col-span-7",
  },
  {
    id: "healthcare-business",
    title: "Healthcare Business Dashboard",
    tool: "Excel",
    description:
      "Created a business-health dashboard to track YTD revenue, expenses, profit, churn rate, and top accounts with monthly trends.",
    image:
      "https://customer-assets.emergentagent.com/job_2661bac5-9c6b-45de-8f55-0bffe973e722/artifacts/pdmh64vv_Dashboard__auto.png",
    repo: "https://github.com/alokwalunj/Heathcare-Business-dashboard-Excel-",
    span: "md:col-span-5",
  },
  {
    id: "orthopedic-clinic",
    title: "Orthopedic Clinic Dashboard",
    tool: "Excel",
    description:
      "Designed a clinic operations dashboard tracking patient volume, wait time, satisfaction, and demographic breakdowns to support operational decisions.",
    image:
      "https://customer-assets.emergentagent.com/job_2661bac5-9c6b-45de-8f55-0bffe973e722/artifacts/udxj6kv2_data%20main.PNG",
    repo: "https://github.com/alokwalunj/Orthopedic-Clinic-Dashboard-Excel-",
    span: "md:col-span-12",
  },
];

const ongoingProject = {
  title: "CareBot — Healthcare AI Agent",
  description:
    "I’m currently building CareBot, a healthcare AI assistant that helps users ask health-related questions and (in future iterations) generates analytics outputs such as summaries, insights, and dashboards from user interactions and structured data.",
  image:
    "https://customer-assets.emergentagent.com/job_2661bac5-9c6b-45de-8f55-0bffe973e722/artifacts/jly0l8sx_Carebot.PNG",
  liveLink: "https://care-bot-ai-main.vercel.app/",
};

const skills = [
  "Dashboarding",
  "KPI Reporting",
  "Data Cleaning",
  "Trend Analysis",
  "Business Insights",
  "Power BI",
  "Excel",
  "Python",
  "SQL",
  "Data Storytelling",
  "Stakeholder Enablement",
  "Data Visualization",
];

const copyToClipboard = async (value, label) => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    toast.success(`${label} copied.`);
  } catch (error) {
    toast.error("Copy failed. Please try again.");
  }
};

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <div data-testid="toast-container">
        <Toaster position="top-right" richColors />
      </div>
      <header
        className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"
        data-testid="sticky-navbar"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3" data-testid="brand-wrapper">
            <span
              className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300"
              data-testid="brand-label"
            >
              Portfolio
            </span>
            <span
              className="text-lg font-semibold text-white"
              data-testid="brand-name"
            >
              Alok Walunj
            </span>
          </div>
          <nav className="hidden items-center gap-6 md:flex" data-testid="desktop-nav">
            {[
              { id: "hero", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "ongoing", label: "Ongoing" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <nav
            className="flex max-w-full items-center gap-3 overflow-x-auto md:hidden"
            data-testid="mobile-nav"
          >
            {[
              { id: "hero", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "ongoing", label: "Ongoing" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
                data-testid={`mobile-nav-link-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex" data-testid="nav-actions">
            <a
              href="https://github.com/alokwalunj"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:text-white"
              data-testid="nav-github-link"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-800"
              data-testid="nav-contact-button"
            >
              Reach Out
            </a>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <section
          id="hero"
          className="relative overflow-hidden bg-black py-20 md:py-28"
          data-testid="hero-section"
        >
          <div className="hero-grid absolute inset-0" data-testid="hero-grid" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <div className="space-y-6" data-testid="hero-content">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-200"
                data-testid="hero-badge"
              >
                Business Data Analyst
              </span>
              <h1
                className="text-4xl font-semibold leading-tight text-white md:text-6xl"
                data-testid="hero-title"
              >
                Turning raw data into clear insights and decision-ready dashboards.
              </h1>
              <p
                className="text-lg leading-relaxed text-slate-300"
                data-testid="hero-description"
              >
                I build end-to-end analytics projects: cleaning and shaping data,
                defining KPIs, and designing dashboards that tell a story
                stakeholders can act on.
              </p>
              <div className="flex flex-wrap items-center gap-3" data-testid="hero-core-skills">
                {[
                  "Dashboarding",
                  "KPI Reporting",
                  "Data Cleaning",
                  "Trend Analysis",
                  "Business Insights",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200"
                    data-testid={`hero-skill-${skill
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4" data-testid="hero-cta-group">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-teal-700/30 transition hover:bg-teal-800"
                  data-testid="hero-projects-button"
                >
                  View Projects <ArrowUpRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:text-white"
                  data-testid="hero-contact-button"
                >
                  Contact <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400" data-testid="hero-links">
                <a
                  href="https://github.com/alokwalunj"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-medium text-slate-300 transition hover:text-white"
                  data-testid="hero-github-link"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/alok-walunj/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-medium text-slate-300 transition hover:text-white"
                  data-testid="hero-linkedin-link"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href="https://vercel.com/alok-walunjs-projects"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-medium text-slate-300 transition hover:text-white"
                  data-testid="hero-vercel-link"
                >
                  <ExternalLink size={18} /> Vercel
                </a>
              </div>
            </div>
            <div className="relative" data-testid="hero-image-wrapper">
              <div className="absolute -right-6 -top-8 h-40 w-40 rounded-full bg-teal-500/30 blur-3xl" />
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl backdrop-blur" data-testid="hero-image-card">
                <AspectRatio ratio={1} data-testid="hero-image-aspect">
                  <img
                    src={heroImage}
                    alt="Alok Walunj portrait"
                    className="h-full w-full rounded-2xl object-cover"
                    data-testid="hero-image"
                  />
                </AspectRatio>
                <div className="mt-4 space-y-1" data-testid="hero-image-caption">
                  <p className="text-sm font-semibold text-white" data-testid="hero-image-name">
                    Alok Walunj
                  </p>
                  <p className="text-xs text-slate-400" data-testid="hero-image-role">
                    Business Data Analyst
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-20 md:py-28"
          data-testid="projects-section"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-testid="projects-header">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300" data-testid="projects-eyebrow">
                  Featured Projects
                </p>
                <h2 className="text-3xl font-semibold text-white md:text-5xl" data-testid="projects-title">
                  Analytics dashboards that drive action.
                </h2>
              </div>
              <p className="max-w-md text-base text-slate-300" data-testid="projects-description">
                Each project showcases the full workflow: from raw data to
                compelling, decision-ready insights.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12" data-testid="projects-grid">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${project.span}`}
                  data-testid={`project-card-${project.id}`}
                >
                  <div className="p-6" data-testid={`project-content-${project.id}`}>
                    <div className="flex items-center justify-between" data-testid={`project-meta-${project.id}`}>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300" data-testid={`project-tool-${project.id}`}>
                        {project.tool}
                      </span>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
                        data-testid={`project-repo-${project.id}`}
                      >
                        View Repo <ArrowUpRight size={16} />
                      </a>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white" data-testid={`project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300" data-testid={`project-description-${project.id}`}>
                      {project.description}
                    </p>
                  </div>
                  <div className="px-6 pb-6" data-testid={`project-image-wrapper-${project.id}`}>
                    <AspectRatio ratio={16 / 9} data-testid={`project-image-aspect-${project.id}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full rounded-2xl object-cover"
                        data-testid={`project-image-${project.id}`}
                      />
                    </AspectRatio>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ongoing"
          className="bg-slate-950 py-20 md:py-28"
          data-testid="ongoing-section"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="space-y-5" data-testid="ongoing-content">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300" data-testid="ongoing-eyebrow">
                Ongoing Project
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl" data-testid="ongoing-title">
                {ongoingProject.title}
              </h2>
              <p className="text-lg leading-relaxed text-slate-300" data-testid="ongoing-description">
                {ongoingProject.description}
              </p>
              <div className="flex flex-wrap items-center gap-3" data-testid="ongoing-actions">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-200" data-testid="ongoing-status">
                  In Progress
                </div>
                <a
                  href={ongoingProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/50"
                  data-testid="ongoing-live-link"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4" data-testid="ongoing-image-card">
              <AspectRatio ratio={16 / 9} data-testid="ongoing-image-aspect">
                <img
                  src={ongoingProject.image}
                  alt="CareBot preview"
                  className="h-full w-full rounded-2xl object-cover"
                  data-testid="ongoing-image"
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="py-20 md:py-28"
          data-testid="skills-section"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" data-testid="skills-header">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300" data-testid="skills-eyebrow">
                  Skills & Tools
                </p>
                <h2 className="text-3xl font-semibold text-white md:text-5xl" data-testid="skills-title">
                  Building analytics ecosystems end-to-end.
                </h2>
              </div>
              <p className="max-w-md text-base text-slate-300" data-testid="skills-description">
                A blend of business insight and technical fluency across the
                analytics lifecycle.
              </p>
            </div>
            <div className="marquee-wrapper" data-testid="skills-marquee">
              <div className="marquee-track">
                {[...skills, ...skills].map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="rounded-full border border-white/10 bg-slate-900 px-5 py-2 text-sm font-medium text-slate-200 shadow-sm"
                    data-testid={`skills-item-${index}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-black py-20 text-white md:py-28"
          data-testid="contact-section"
        >
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300" data-testid="contact-eyebrow">
              Reach Out
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl" data-testid="contact-title">
              Let’s collaborate on a data story.
            </h2>
            <p className="mt-4 text-base text-slate-200" data-testid="contact-description">
              If you’d like to collaborate, hire, or discuss a project, feel
              free to reach out. Send a quick message with your goal or job
              link, and I’ll respond soon.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" data-testid="contact-details">
              <div className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-3" data-testid="contact-email">
                <span className="text-sm font-medium text-white" data-testid="contact-email-text">
                  alokwalunj8@gmail.com
                </span>
                <button
                  onClick={() => copyToClipboard("alokwalunj8@gmail.com", "Email")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                  data-testid="copy-email-button"
                >
                  <Copy size={14} /> Copy
                </button>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-3" data-testid="contact-phone">
                <span className="text-sm font-medium text-white" data-testid="contact-phone-text">
                  609-721-8785
                </span>
                <button
                  onClick={() => copyToClipboard("609-721-8785", "Phone")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                  data-testid="copy-phone-button"
                >
                  <Copy size={14} /> Copy
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200" data-testid="contact-links">
              <a
                href="https://github.com/alokwalunj"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-white transition hover:text-teal-200"
                data-testid="contact-github-link"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alok-walunj/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-white transition hover:text-teal-200"
                data-testid="contact-linkedin-link"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://vercel.com/alok-walunjs-projects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-white transition hover:text-teal-200"
                data-testid="contact-vercel-link"
              >
                <ExternalLink size={18} /> Vercel
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-6" data-testid="footer">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          <span data-testid="footer-copy">© 2026 Alok Walunj. All rights reserved.</span>
          <span data-testid="footer-tag">Built with data-first storytelling.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
