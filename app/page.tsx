'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Sidebar from '@/components/Sidebar'
import { useTheme } from '@/hooks/useTheme'
import Reveal from '@/components/Reveal'
import { useActiveSection } from '@/hooks/useActiveSection'
import MouseAurora from '@/components/MouseAurora'

const sectionIds = ["about", "experience", "projects", "blogs", "contact"]

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="app-shell">
      <MouseAurora />
      <div className="app">
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />

        <Sidebar
          theme={theme}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />

        <main className="content" id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />

          <section id="blogs" className="section">
            <Reveal>
              <h2 className="section-heading">
                <span>04.</span> Blogs
              </h2>

              <div className="card">
                <p>
                  What am I learning about building better digital products? Explore
                  my writing on web engineering, design, emerging tools, and the
                  decisions that shape work beyond the code.
                </p>

                <a
                  href="https://medium.com/@priyam.chakraborty"
                  target="_blank"
                  rel="noreferrer"
                  className="button primary"
                >
                  Read My Writing ↗
                </a>
              </div>
            </Reveal>
          </section>

          <Contact />
        </main>
      </div>
    </div>
  )
}
