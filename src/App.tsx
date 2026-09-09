import { useEffect, useState, type FormEvent } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import {
  IconExternal,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconWhatsapp,
} from './components/Icons'
import {
  CERTIFICATES,
  EDUCATION,
  EXPERIENCE,
  NAV,
  PROFILE,
  PROJECTS,
  TECH_GROUPS,
} from './data/content'
import { sendContact, validateContact } from './lib/contact'
import {
  extraRepos,
  loadGithubRepos,
  starsFor,
  type GithubRepo,
} from './lib/github'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

function ThemeToggle({
  dark,
  onToggle,
}: {
  dark: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-line p-2 text-muted transition-colors hover:text-ink dark:border-night-line dark:text-night-muted dark:hover:text-night-text"
      aria-label={dark ? 'Açık temaya geç' : 'Koyu temaya geç'}
    >
      {dark ? (
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1l1.1-1.1M18 6l1.1-1.1" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M18 13a7 7 0 11-7-9 6.5 6.5 0 007 9z" />
        </svg>
      )}
    </button>
  )
}

function Socials() {
  return (
    <ul className="flex items-center gap-3 text-muted dark:text-night-muted">
      <li>
        <a href={`mailto:${PROFILE.email}`} aria-label="E-posta" className="hover:text-ink dark:hover:text-night-text">
          <IconMail />
        </a>
      </li>
      <li>
        <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink dark:hover:text-night-text">
          <IconGithub />
        </a>
      </li>
      <li>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-ink dark:hover:text-night-text">
          <IconLinkedin />
        </a>
      </li>
    </ul>
  )
}

function NavLinks({ active }: { active: string }) {
  return (
    <ul className="flex flex-wrap items-center gap-1 lg:flex-col lg:items-stretch lg:gap-1">
      {NAV.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className={`inline-flex rounded-full px-3 py-1.5 text-sm transition-colors lg:w-full ${
              active === item.id
                ? 'bg-accent text-paper dark:bg-night-accent dark:text-night'
                : 'text-muted hover:text-ink dark:text-night-muted dark:hover:text-night-text'
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('hakkimda')
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [formError, setFormError] = useState('')
  const [formNote, setFormNote] = useState<'ok' | 'activation'>('ok')
  const [repos, setRepos] = useState<GithubRepo[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const next = stored === 'dark'
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }, [])

  useEffect(() => {
    loadGithubRepos().then(setRepos)
  }, [])

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      Boolean,
    ) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] },
    )
    sections.forEach((section) => io.observe(section))
    return () => io.disconnect()
  }, [])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setFormError('')
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      message: String(data.get('message') || ''),
      website: String(data.get('website') || ''),
    }

    if (payload.website.trim()) {
      setFormStatus('sent')
      form.reset()
      return
    }

    const invalid = validateContact(payload)
    if (invalid) {
      setFormStatus('error')
      setFormError(invalid)
      return
    }

    setFormStatus('sending')

    try {
      const result = await sendContact(payload)
      if (!result.ok) {
        setFormStatus('error')
        setFormError(result.error)
        return
      }
      setFormNote(result.activation ? 'activation' : 'ok')
      setFormStatus('sent')
      form.reset()
    } catch {
      setFormStatus('error')
      setFormError('Bağlantı kurulamadı. Doğrudan e-posta yazabilirsiniz.')
    }
  }

  const others = extraRepos(repos)
  const photo = `${import.meta.env.BASE_URL}profil.jpg`

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-night dark:text-night-text">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="site-header sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md lg:hidden dark:border-night-line dark:bg-night/95">
        <div className="px-5 py-3">
          <div className="flex items-center justify-between gap-3">
            <a href="#hakkimda" className="flex min-w-0 items-center gap-3">
              <img src={photo} alt="" className="size-10 rounded-2xl object-cover object-[center_20%]" />
              <span className="min-w-0">
                <h1 className="truncate text-sm font-semibold tracking-tight">{PROFILE.name}</h1>
                <span className="text-xs text-muted dark:text-night-muted">{PROFILE.role}</span>
              </span>
            </a>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Socials />
              </div>
              <ThemeToggle dark={dark} onToggle={toggleTheme} />
            </div>
          </div>
          <nav aria-label="Ana navigasyon" className="mt-3 border-t border-line/80 pt-2 dark:border-night-line">
            <NavLinks active={active} />
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(260px,340px)_minmax(0,1fr)] lg:gap-16 lg:px-8">
        <aside className="site-aside hidden lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between lg:py-16">
          <div>
            <img
              src={photo}
              alt={PROFILE.name}
              className="mb-6 size-20 rounded-3xl object-cover object-[center_20%] ring-2 ring-line dark:ring-night-line"
            />
            <h1 className="text-4xl font-semibold tracking-tight">{PROFILE.name}</h1>
            <p className="mt-2 text-lg text-accent-soft dark:text-night-accent">{PROFILE.role}</p>
            <p className="mt-4 max-w-xs text-muted dark:text-night-muted">{PROFILE.headline}</p>
            <nav aria-label="Ana navigasyon" className="mt-10">
              <NavLinks active={active} />
            </nav>
          </div>
          <div className="flex items-center justify-between gap-3 pt-8">
            <Socials />
            <ThemeToggle dark={dark} onToggle={toggleTheme} />
          </div>
        </aside>

        <div>
          <main id="main-content" className="px-5 py-10 lg:px-0 lg:py-16">
            <section id="hakkimda" className="max-w-2xl scroll-mt-36 lg:scroll-mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                Hakkımda
              </p>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-muted dark:text-night-muted">
                Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim.
                Kariyerime React ve PHP ile başladım; bugün Go, C#, Python,
                Kafka ve LLM entegrasyonlarıyla ölçeklenebilir mimariler kuruyorum.
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-muted dark:text-night-muted">
                Komtaş ve Prodrom ITC Solutions’taki stajlarımı tamamladım.
                Şimdi Fırat’ta, FÜ BİLTAG ve IEEE Fırat WIE ile üretiyorum.
                İngilizcem B2, Almancam henüz A1. Bir sonraki işe bakıyorum.
              </p>
            </section>

            <section id="projeler" className="mt-16 scroll-mt-36 lg:scroll-mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                Yaptığım işler
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Seçilmiş projeler
              </h2>
              <ul className="mt-8 space-y-4">
                {PROJECTS.map((project) => {
                  const stars = starsFor(repos, project.slug)
                  return (
                    <li key={project.slug}>
                      <article className="rounded-2xl border border-line bg-white/60 p-5 transition-colors hover:border-accent/40 hover:bg-white dark:border-night-line dark:bg-night-card dark:hover:border-night-accent/40">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                          {typeof stars === 'number' && stars > 0 ? (
                            <span className="text-xs text-muted dark:text-night-muted">{stars}★</span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm text-muted dark:text-night-muted">
                          <span className="font-medium text-ink dark:text-night-text">Sorun. </span>
                          {project.problem}
                        </p>
                        <p className="mt-1.5 text-sm text-muted dark:text-night-muted">
                          <span className="font-medium text-ink dark:text-night-text">Sonuç. </span>
                          {project.outcome}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {project.stack.map((item) => (
                            <li
                              key={item}
                              className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted dark:border-night-line dark:text-night-muted"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                          {project.href ? (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-accent hover:underline dark:text-night-accent"
                            >
                              <IconGithub /> GitHub
                            </a>
                          ) : (
                            <span className="text-muted dark:text-night-muted">Özel repo</span>
                          )}
                          {project.demo ? (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-accent hover:underline dark:text-night-accent"
                            >
                              <IconExternal /> Canlı demo
                            </a>
                          ) : null}
                        </p>
                      </article>
                    </li>
                  )
                })}
              </ul>

              {others.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-ink dark:text-night-text">
                    GitHub’dan diğer açık işler
                  </h3>
                  <ul className="mt-3 divide-y divide-line dark:divide-night-line">
                    {others.map((repo) => (
                      <li key={repo.name}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-start justify-between gap-3 py-3 text-sm hover:text-accent dark:hover:text-night-accent"
                        >
                          <span>
                            <span className="inline-flex items-center gap-1.5 font-medium">
                              <IconGithub /> {repo.name}
                            </span>
                            {repo.description ? (
                              <span className="mt-0.5 block text-muted dark:text-night-muted">
                                {repo.description}
                              </span>
                            ) : null}
                          </span>
                          <span className="shrink-0 pt-0.5 text-xs text-muted dark:text-night-muted">
                            {repo.stargazers_count > 0 ? `${repo.stargazers_count}★ · ` : ''}
                            {repo.language ?? 'repo'}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <section id="deneyim" className="mt-16 scroll-mt-36 lg:scroll-mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                Deneyim
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Kurumsal işler
              </h2>
              <ol className="mt-8 space-y-3">
                {EXPERIENCE.map((job) => (
                  <li
                    key={job.company}
                    className="rounded-2xl border border-transparent p-5 transition-colors hover:border-line hover:bg-white/70 dark:hover:border-night-line dark:hover:bg-night-card"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {job.role} · {job.company}
                      </h3>
                      <p className="text-sm text-muted dark:text-night-muted">{job.dates}</p>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted dark:text-night-muted">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {job.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-paper px-2.5 py-0.5 text-xs dark:bg-night"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-16">
              <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted dark:text-night-muted">
                Kullandığım teknolojiler
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {TECH_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="mb-3 text-sm font-medium">{group.label}</p>
                    <ul className="flex flex-wrap gap-2" aria-label={group.label}>
                      {group.items.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line px-3 py-1 text-sm text-muted dark:border-night-line dark:text-night-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="egitim" className="mt-16 scroll-mt-36 lg:scroll-mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                Eğitim & topluluk
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Okul ve liderlik
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {EDUCATION.map((item) => (
                  <article key={item.title}>
                    <h3 className="font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm text-accent-soft dark:text-night-accent">{item.meta}</p>
                    <p className="mt-2 text-sm text-muted dark:text-night-muted">{item.body}</p>
                  </article>
                ))}
                <article>
                  <h3 className="font-semibold tracking-tight">Sertifikalar</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted dark:text-night-muted">
                    {CERTIFICATES.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            <section id="bytehane" className="mt-16" aria-labelledby="whatsapp-kanal">
              <article className="rounded-3xl bg-[#16382c] px-6 py-8 text-[#f3f7f4] sm:px-8">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#9dccb4]">
                  <IconWhatsapp className="size-4" />
                  WhatsApp kanalı
                </p>
                <h2 id="whatsapp-kanal" className="mt-4 text-2xl font-semibold tracking-tight">
                  Selam! 👋 Seni yazılım serüvenimize, ByteHane&apos;ye davet ediyorum! 🚀
                </h2>
                <p className="mt-5 text-[#c7e4d6]">Biz burada neler mi yapıyoruz?</p>
                <ul className="mt-4 space-y-2 text-[#c7e4d6]">
                  <li>🔹 Güncel yazılım dillerini ve teknolojilerini konuşuyoruz.</li>
                  <li>🔹 Sektörel terimleri öğrenip quizlerle test ediyoruz.</li>
                  <li>🔹 Birlikte öğrenip, yardımlaşıyoruz.</li>
                </ul>
                <p className="mt-5">
                  Geleceği kodlayanların arasında yerini almak istersen aramıza katıl! 💻✨
                </p>
                <a
                  href={PROFILE.whatsappChannel}
                  target="_blank"
                  rel="noreferrer"
                  className="channel-cta mt-6 inline-flex rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#16382c]"
                >
                  Kanala katıl
                </a>
              </article>
            </section>

            <section id="iletisim" className="mt-16 mb-8 scroll-mt-36 lg:scroll-mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                İletişim
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Birlikte çalışalım
              </h2>
              <p className="mt-4 max-w-lg text-muted dark:text-night-muted">
                Sohbete açığım. Birlikte bir şey kurmak, staj konuşmak ya da
                yalnızca merhaba demek için yazman yeterli — mesajın bana gelir,
                dönüş yaparım.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <li>
                  <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 hover:text-accent dark:hover:text-night-accent">
                    <IconMail /> E-posta
                  </a>
                </li>
                <li>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent dark:hover:text-night-accent">
                    <IconLinkedin /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent dark:hover:text-night-accent">
                    <IconGithub /> GitHub
                  </a>
                </li>
              </ul>
              <form className="relative mt-8 max-w-xl space-y-4" onSubmit={onSubmit}>
                {formStatus === 'sent' ? (
                  <p className="rounded-2xl border border-line py-8 text-center text-muted dark:border-night-line dark:text-night-muted">
                    {formNote === 'activation'
                      ? 'Teşekkürler. Servis ilk mesajda onay isteyebilir; gecikirse doğrudan e-posta yazın.'
                      : 'Teşekkürler. Mesajınız iletildi; en kısa sürede dönüş yapacağım.'}
                  </p>
                ) : (
                  <>
                    <Input id="name" name="name" label="Ad Soyad" autoComplete="name" required />
                    <Input id="email" name="email" label="E-posta" type="email" autoComplete="email" required />
                    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        minLength={12}
                        className="w-full rounded-xl border border-line bg-white/70 px-3.5 py-2.5 text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 dark:border-night-line dark:bg-night dark:text-night-text"
                      />
                    </div>
                    {formStatus === 'error' && (
                      <p role="alert" className="text-sm text-red-700 dark:text-red-400">
                        {formError}
                      </p>
                    )}
                    <Button variant="primary" type="submit" disabled={formStatus === 'sending'}>
                      {formStatus === 'sending' ? 'Gönderiliyor…' : 'Gönder'}
                    </Button>
                  </>
                )}
              </form>
            </section>
          </main>
          <footer className="border-t border-line px-5 py-8 text-sm text-muted lg:px-0 dark:border-night-line dark:text-night-muted">
            <p>© 2026 {PROFILE.name}</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
