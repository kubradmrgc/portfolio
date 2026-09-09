import { useEffect, useState, type FormEvent } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'

const NAV = [
  { href: '#hakkimda', id: 'hakkimda', label: 'Hakkımda' },
  { href: '#deneyim', id: 'deneyim', label: 'Deneyim' },
  { href: '#projeler', id: 'projeler', label: 'Projeler' },
  { href: '#egitim', id: 'egitim', label: 'Eğitim' },
  { href: '#iletisim', id: 'iletisim', label: 'İletişim' },
] as const

const TECH_GROUPS = [
  {
    label: 'Diller',
    items: ['C#', 'Go', 'Python', 'Java', 'C++', 'PHP', 'JavaScript'],
  },
  {
    label: 'Framework',
    items: ['.NET Core', 'React', 'React Native', 'Laravel', 'EF Core'],
  },
  {
    label: 'Veri & altyapı',
    items: [
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Kafka',
      'Docker',
      'Git',
      'SignalR',
      'Qlik',
      'Informatica',
      'Looker',
      'BI',
    ],
  },
]

const EXPERIENCE = [
  {
    company: 'Prodrom ITC Solutions',
    role: 'Yazılım Geliştirme Stajyeri',
    dates: 'Ağu 2026 – Eyl 2026',
    points: [
      'Kurumsal IT çözümleri kapsamında yazılım mimarisi geliştirme süreçlerine destek verildi.',
      'Akıllı CVE Analiz aracında NVD verilerini RAG ve LLM ile özetleyip kritik zafiyetleri Telegram üzerinden ilettim.',
    ],
  },
  {
    company: 'Komtaş',
    role: 'Yazılım Mühendisliği Stajyeri',
    dates: 'Tem 2026 – Ağu 2026',
    points: [
      'Veri analizi ve veri analitiği süreçlerinde Informatica kullandım.',
      'Informatica CDI Taskflow ile sigorta OLTP verisini Staging ve DWH katmanlarına taşıyıp mapping görevlerini paralel çalışacak şekilde orkestre ettim.',
      'DWH üzerindeki analitik sorguları 10 Datamart tablosuna dönüştürerek gelir grubu, acente, prim ve teminat bazında raporlama katmanı oluşturdum.',
    ],
  },
  {
    company: 'Fırat Üniversitesi Kariyer Merkezi',
    role: 'Full Stack Geliştirici',
    dates: 'Ağu 2025 – Haz 2026',
    points: [
      'Öğrenci/mezun portallarının arayüzlerini ve kurumsal web platformlarını React kullanarak geliştirdim.',
      'Kullanıcı deneyimini (UX) ön planda tutarak dinamik ve ölçeklenebilir web bileşenleri tasarladım.',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Akıllı CVE Analiz Aracı',
    body: 'Python, PostgreSQL (pgvector) ve LLM kullanılarak NVD verilerini çeken, RAG mimarisiyle zafiyetleri özetleyip Telegram botu ile gerçek zamanlı uyarı gönderen sistem.',
    stack: ['Python', 'PostgreSQL', 'pgvector', 'LLM', 'RAG'],
  },
  {
    title: 'QubIT',
    body: 'Oyunlaştırılmış IT quiz. Go mikroservisleri ve Python ile tasarlandı; eşzamanlı kullanıcı trafiği Kafka ve Redis ile yönetildi.',
    stack: ['Go', 'Python', 'Kafka', 'Redis'],
  },
  {
    title: 'TerraVision',
    body: 'C#, .NET Core Web API ve React Native. Mobil arayüz ile sunucu arasında anlık iletişim SignalR ile sağlandı.',
    stack: ['C#', '.NET Core', 'React Native', 'SignalR'],
  },
]

const EDUCATION = [
  {
    title: 'Fırat Üniversitesi',
    meta: 'Yazılım Mühendisliği — Lisans · mezuniyet 2027',
    body: '4. sınıf. Full-stack geliştirme, mikroservisler, veri analitiği ve yazılım mühendisliği temelleri.',
  },
  {
    title: 'Kahta Borsa İstanbul Fen Lisesi',
    meta: '2018 – 2022',
    body: 'Lise eğitimimi tamamladığım dönemde yazılım ve teknolojiye yöneldim.',
  },
  {
    title: 'FÜ BİLTAG',
    meta: 'Proje ve AR-GE · Core Team · May 2026 – Halen',
    body: 'Fırat Üniversitesi Bilişim Teknolojileri Araştırma ve Geliştirme Topluluğu Core Team’de Proje ve AR-GE komitesindeyim. Yapay zeka, yazılım ve siber güvenlik odaklı AR-GE projeleri geliştiriyoruz.',
  },
  {
    title: 'Kommagene Sanat Topluluğu',
    meta: 'Kurucu · Haz 2026',
    body: 'Haziran 2026’da Kommagene Sanat Topluluğunu kurdum.',
  },
  {
    title: 'IEEE Fırat WIE',
    meta: 'Women in Engineering Komitesi · Halen',
    body: 'IEEE Fırat Women in Engineering (WIE) komitesinde görevime devam ediyorum.',
  },
]

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1 .07 1.54 1.05 1.54 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.71 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  )
}

function IconWhatsapp({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.9 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.43 9.91-9.9C21.96 6.43 17.5 2 12.04 2zm5.76 14.08c-.24.68-1.4 1.26-1.94 1.34-.49.07-1.1.1-1.78-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.36.24-.26.64-.37.86-.37.2 0 .4 0 .58.01.18.01.43-.07.68.52.24.6.83 2.04.9 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.3.14.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.24.67-.14.27.1 1.71.81 2 .95.29.15.48.22.55.34.07.12.07.7-.17 1.38z" />
    </svg>
  )
}

const WHATSAPP_CHANNEL =
  'https://whatsapp.com/channel/0029Vb5bFLd4o7qGpWSBJ50Q'

const CONTACT_ENDPOINT =
  'https://formsubmit.co/ajax/kubradmrgc965@gmail.com'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function App() {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('hakkimda')
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const next = stored === 'dark'
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }, [])

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight) node.classList.add('is-visible')
      io.observe(node)
    })
    return () => io.disconnect()
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
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.3, 0.6] },
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

    if (String(data.get('website') || '').trim()) {
      setFormStatus('sent')
      return
    }

    setFormStatus('sending')

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _replyto: data.get('email'),
          _subject: 'Portfolyo iletişim formu',
        }),
      })

      const result = (await response.json()) as {
        success?: boolean | string
        message?: string
      }
      const accepted =
        result.success === true ||
        result.success === 'true' ||
        /activat/i.test(String(result.message || ''))

      if (!response.ok || !accepted) throw new Error('Form gönderilemedi')
      setFormStatus('sent')
      form.reset()
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-night dark:text-night-text">
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/80 backdrop-blur-md dark:border-night-line dark:bg-night/80">
        <div className="mx-auto max-w-6xl px-5 py-3">
          <div className="flex items-center justify-between gap-3">
            <a href="#hakkimda" className="flex min-w-0 items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-sm font-semibold tracking-wide text-paper dark:bg-night-accent dark:text-night">
                KD
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-semibold tracking-tight">
                  Kübra Demirgüç
                </span>
                <span className="text-xs text-muted dark:text-night-muted">
                  Yazılım Mühendisi · ByteHane
                </span>
              </span>
            </a>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={WHATSAPP_CHANNEL}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-[#16382c] sm:inline-flex"
              >
                <IconWhatsapp className="size-3.5" />
                Kanala katıl
              </a>
              <button
                type="button"
                onClick={toggleTheme}
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
            </div>
          </div>
          <nav aria-label="Ana navigasyon" className="mt-3 border-t border-line/80 pt-2 dark:border-night-line">
            <ul className="flex flex-wrap items-center gap-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                      active === item.id
                        ? 'bg-accent text-paper dark:bg-night-accent dark:text-night'
                        : 'text-muted hover:text-ink dark:text-night-muted dark:hover:text-night-text'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="sm:hidden">
                <a
                  href={WHATSAPP_CHANNEL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-sm font-semibold text-[#16382c]"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="px-5 pt-16 pb-20 sm:pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div data-reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                Yazılım Mühendisi
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Kübra Demirgüç
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted dark:text-night-muted">
                Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim.
                Kariyerime React ve PHP ile başladım; bugün Go, C#, Python,
                Kafka ve LLM entegrasyonlarıyla ölçeklenebilir mikroservis
                mimarileri kuruyorum.
              </p>
              <p className="mt-4 max-w-xl text-muted dark:text-night-muted">
                Komtaş ve Prodrom ITC Solutions deneyimini akademik projeler ve
                FÜ BİLTAG, IEEE Fırat gibi teknik topluluk liderliğiyle bir arada
                yürütüyorum. İngilizce B2, Almanca A1.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-[0.95rem] font-medium text-paper transition-colors hover:bg-accent-soft dark:bg-night-accent dark:text-night dark:hover:bg-night-text"
                >
                  İletişime geç
                </a>
                <a
                  href="https://github.com/kubradmrgc"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-[0.95rem] font-medium transition-colors hover:border-ink dark:border-night-line dark:hover:border-night-text"
                >
                  GitHub
                </a>
                <a
                  href={WHATSAPP_CHANNEL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[0.95rem] font-semibold text-[#16382c]"
                >
                  <IconWhatsapp className="size-4" />
                  ByteHane kanalı
                </a>
              </div>
            </div>
            <figure data-reveal className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
              <img
                src={`${import.meta.env.BASE_URL}profil.jpg`}
                alt="Kübra Demirgüç"
                className="aspect-[4/5] w-full rounded-3xl object-cover object-[center_20%] shadow-[0_30px_60px_-32px_rgba(28,25,21,0.55)]"
              />
            </figure>
          </div>

          <div className="mx-auto mt-16 max-w-6xl" data-reveal>
            <h2 className="mb-8 text-sm font-medium uppercase tracking-[0.18em] text-muted dark:text-night-muted">
              Kullandığım teknolojiler
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {TECH_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-sm font-medium text-ink dark:text-night-text">
                    {group.label}
                  </p>
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
          </div>
        </section>

        <section id="deneyim" className="border-y border-line px-5 py-20 dark:border-night-line">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12" data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                Deneyim
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Kurumsal ve akademik işler
              </h2>
            </div>
            <ol className="relative space-y-10 border-l border-line pl-8 dark:border-night-line">
              {EXPERIENCE.map((job) => (
                <li key={job.company} className="relative" data-reveal>
                  <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full bg-accent dark:bg-night-accent" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                    <p className="text-sm text-muted dark:text-night-muted">{job.dates}</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-soft dark:text-night-accent">
                    {job.role}
                  </p>
                  <ul className="mt-4 max-w-3xl space-y-2 text-muted dark:text-night-muted">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projeler" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12" data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                Projeler
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                GitHub’da yayında
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {PROJECTS.map((project) => (
                <div key={project.title} data-reveal>
                  <Card title={project.title} className="h-full">
                    <p className="mb-5">{project.body}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {project.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-paper px-2.5 py-0.5 text-xs text-ink dark:bg-night dark:text-night-text"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="egitim" className="border-y border-line px-5 py-20 dark:border-night-line">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12" data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                Eğitim & topluluk
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Okul, liderlik ve içerik
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {EDUCATION.map((item) => (
                <article key={item.title} data-reveal>
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-sm text-accent-soft dark:text-night-accent">{item.meta}</p>
                  <p className="mt-3 text-muted dark:text-night-muted">{item.body}</p>
                </article>
              ))}
              <article data-reveal>
                <h3 className="text-lg font-semibold tracking-tight">ByteHane</h3>
                <p className="mt-1 text-sm text-accent-soft dark:text-night-accent">İçerik üretimi</p>
                <p className="mt-3 text-muted dark:text-night-muted">
                  ByteHane kanallarında programlama ve yazılım mimarisi
                  paylaşımları. WhatsApp kanalından da takip edebilirsin.
                </p>
              </article>
              <article data-reveal>
                <h3 className="text-lg font-semibold tracking-tight">Sertifikalar</h3>
                <ul className="mt-3 space-y-1.5 text-muted dark:text-night-muted">
                  <li>Web Programlama — Akbank Gençlik Akademisi</li>
                  <li>Geleceği Eşitle Pre-Bootcamp</li>
                  <li>Finans ve Borsa</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="px-5 py-6" aria-labelledby="whatsapp-kanal">
          <article
            data-reveal
            className="mx-auto max-w-6xl rounded-3xl bg-[#16382c] px-6 py-8 text-[#f3f7f4] shadow-[0_24px_50px_-28px_rgba(22,56,44,0.7)] sm:px-10 sm:py-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#9dccb4]">
                  <IconWhatsapp className="size-4" />
                  WhatsApp kanalı
                </p>
                <h2
                  id="whatsapp-kanal"
                  className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
                >
                  Selam! 👋 Seni yazılım serüvenimize, ByteHane&apos;ye davet
                  ediyorum! 🚀
                </h2>
                <p className="mt-5 text-[#c7e4d6]">Biz burada neler mi yapıyoruz?</p>
                <ul className="mt-4 space-y-2 text-[#c7e4d6]">
                  <li>🔹 Güncel yazılım dillerini ve teknolojilerini konuşuyoruz.</li>
                  <li>🔹 Sektörel terimleri öğrenip quizlerle test ediyoruz.</li>
                  <li>🔹 Birlikte öğrenip, yardımlaşıyoruz.</li>
                </ul>
                <p className="mt-5 text-[#f3f7f4]">
                  Geleceği kodlayanların arasında yerini almak istersen aramıza
                  katıl! 💻✨
                </p>
              </div>
              <a
                href={WHATSAPP_CHANNEL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#16382c] transition-transform hover:-translate-y-0.5"
              >
                Kanala katıl
              </a>
            </div>
          </article>
        </section>

        <section id="iletisim" className="px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted dark:text-night-muted">
                İletişim
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Birlikte çalışalım
              </h2>
              <p className="mt-4 max-w-md text-muted dark:text-night-muted">
                Yeni bir proje, staj sonrası fırsat veya teknik bir sohbet için
                yazabilirsiniz.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:kubradmrgc965@gmail.com"
                    className="inline-flex items-center gap-3 text-ink transition-colors hover:text-accent dark:text-night-text dark:hover:text-night-accent"
                  >
                    <IconMail />
                    kubradmrgc965@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/k%C3%BCbra-demirg%C3%BC%C3%A7"
                    className="inline-flex items-center gap-3 text-ink transition-colors hover:text-accent dark:text-night-text dark:hover:text-night-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconLinkedin />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/kubradmrgc"
                    className="inline-flex items-center gap-3 text-ink transition-colors hover:text-accent dark:text-night-text dark:hover:text-night-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconGithub />
                    github.com/kubradmrgc
                  </a>
                </li>
              </ul>
            </div>
            <form
              className="relative space-y-4 rounded-3xl border border-line bg-white/50 p-6 dark:border-night-line dark:bg-night-card sm:p-8"
              onSubmit={onSubmit}
              data-reveal
            >
              {formStatus === 'sent' ? (
                <p className="py-8 text-center text-muted dark:text-night-muted">
                  Teşekkürler. Mesajınız e-postama iletildi; en kısa sürede
                  dönüş yapacağım.
                </p>
              ) : (
                <>
                  <Input id="name" name="name" label="Ad Soyad" required />
                  <Input id="email" name="email" label="E-posta" type="email" required />
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ink dark:text-night-text"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-line bg-white/70 px-3.5 py-2.5 text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 dark:border-night-line dark:bg-night dark:text-night-text"
                    />
                  </div>
                  {formStatus === 'error' && (
                    <p role="alert" className="text-sm text-red-700 dark:text-red-400">
                      Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan
                      e-posta adresime yazın.
                    </p>
                  )}
                  <Button variant="primary" type="submit" disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? 'Gönderiliyor…' : 'Gönder'}
                  </Button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted dark:border-night-line dark:text-night-muted">
        <p>© 2026 Kübra Demirgüç</p>
      </footer>
    </div>
  )
}
