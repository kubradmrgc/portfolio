export const NAV = [
  { href: '#hakkimda', id: 'hakkimda', label: 'Hakkımda' },
  { href: '#projeler', id: 'projeler', label: 'Projeler' },
  { href: '#deneyim', id: 'deneyim', label: 'Deneyim' },
  { href: '#egitim', id: 'egitim', label: 'Eğitim' },
  { href: '#iletisim', id: 'iletisim', label: 'İletişim' },
] as const

export const PROFILE = {
  name: 'Kübra Demirgüç',
  role: 'Yazılım Mühendisi',
  headline: 'Mikroservisler, veri ve LLM — yazılımı üretmek ve anlatmak.',
  location: 'Türkiye',
  email: 'kubradmrgc965@gmail.com',
  github: 'https://github.com/kubradmrgc',
  githubUser: 'kubradmrgc',
  linkedin: 'https://www.linkedin.com/in/k%C3%BCbra-demirg%C3%BC%C3%A7',
  whatsappChannel: 'https://whatsapp.com/channel/0029Vb5bFLd4o7qGpWSBJ50Q',
}

export const TECH_GROUPS = [
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

export const EXPERIENCE = [
  {
    company: 'Prodrom ITC Solutions',
    role: 'Yazılım Geliştirme Stajyeri',
    dates: 'Ağu 2026 – Eyl 2026',
    stack: ['Python', 'PostgreSQL', 'LLM', 'RAG'],
    points: [
      'Kurumsal IT çözümlerinde yazılım mimarisi ve entegrasyon süreçlerine destek verdim.',
      'NVD zafiyetlerini RAG + LLM ile özetleyip kritik bulguları Telegram’a ileten CVE aracını teslim ettim.',
    ],
  },
  {
    company: 'Komtaş',
    role: 'Yazılım Mühendisliği Stajyeri',
    dates: 'Tem 2026 – Ağu 2026',
    stack: ['Informatica', 'DWH', 'SQL'],
    points: [
      'Informatica CDI Taskflow ile sigorta OLTP verisini Staging ve DWH katmanlarına taşıdım.',
      'Mapping görevlerini paralel çalışacak şekilde orkestre ettim.',
      'Analitik sorguları 10 Datamart tablosuna dönüştürüp acente, prim ve teminat raporlarını açtım.',
    ],
  },
  {
    company: 'Fırat Üniversitesi Kariyer Merkezi',
    role: 'Full Stack Geliştirici',
    dates: 'Ağu 2025 – Haz 2026',
    stack: ['React', 'PHP'],
    points: [
      'Öğrenci ve mezun portallarının arayüzlerini React ile geliştirdim.',
      'Kurumsal web bileşenlerini ölçeklenebilir ve erişilebilir olacak şekilde tasarladım.',
    ],
  },
]

export const PROJECTS = [
  {
    slug: 'akilli-cve-analizi',
    title: 'Akıllı CVE Analiz Aracı',
    problem:
      'NVD’deki zafiyet hacmini elle okumak yavaş; kritik olanlar kayboluyor.',
    outcome:
      'RAG özetleri ve Telegram uyarılarıyla öncelikli CVE’ler dakikalar içinde iletiliyor.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'LLM', 'React'],
    href: 'https://github.com/kubradmrgc/akilli-cve-analizi',
    demo: undefined as string | undefined,
  },
  {
    slug: 'TerraVision',
    title: 'TerraVision',
    problem:
      'Bitki ticareti, AR önizleme ve bahçe bakımını ayrı uygulamalarda yönetmek zor.',
    outcome:
      'ASP.NET Core, Next.js ve React Native ile uçtan uca platform; anlık iletişim SignalR.',
    stack: ['C#', '.NET Core', 'Next.js', 'React Native', 'SignalR'],
    href: 'https://github.com/kubradmrgc/TerraVision',
    demo: undefined as string | undefined,
  },
  {
    slug: 'QubIT',
    title: 'QubIT',
    problem: 'Eşzamanlı quiz trafiğini tek süreçte tutmak darboğaz yaratıyor.',
    outcome:
      'Go mikroservisleri, Kafka ve Redis ile ölçeklenen oyunlaştırılmış IT quiz.',
    stack: ['Go', 'Python', 'Kafka', 'Redis'],
    href: undefined as string | undefined,
    demo: undefined as string | undefined,
  },
  {
    slug: 'sigorta-dwh-pipeline',
    title: 'Sigorta DWH Pipeline',
    problem: 'Sigorta OLTP verisinden hızlı, katmanlı rapor alınamıyordu.',
    outcome:
      'Staging/DWH hattı ve 10 Datamart tablosu: gelir grubu, acente, prim, teminat.',
    stack: ['Informatica', 'DWH', 'SQL'],
    href: 'https://github.com/kubradmrgc/sigorta-dwh-pipeline',
    demo: undefined as string | undefined,
  },
  {
    slug: 'taksimetre',
    title: 'Taksimetre',
    problem:
      '81 ilde taksi ücreti, durak ve şikayet hatları dağınık kaynaklardaydı.',
    outcome:
      'Canlı harita ve yolculuk hesabıyla çalışan açık kaynak hesaplayıcı.',
    stack: ['JavaScript'],
    href: 'https://github.com/kubradmrgc/taksimetre',
    demo: 'https://kubradmrgc.github.io/taksimetre/',
  },
]

export const EDUCATION = [
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
    body: 'Yapay zeka, yazılım ve siber güvenlik odaklı AR-GE projeleri geliştiriyoruz.',
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

export const CERTIFICATES = [
  'Web Programlama — Akbank Gençlik Akademisi',
  'Geleceği Eşitle Pre-Bootcamp',
  'Finans ve Borsa',
]

export const GITHUB_IGNORE = new Set([
  'kubradmrgc',
  'portfolio',
  'JAVA101',
  'Yaz-l-m-m-h-oryantasyonu-final-devi',
  'bilgiSistemleriG-venli-i',
  'circleAreaLengthJava101',
  'ucgeninAlaniJava101',
  'kdvtutariHesaplayanProgJava101',
  'notOrtHesapJava101',
  'ileri-programlama-teknikleri-python-haftalik-alistirmalar-kubradmrgc',
  '-dev',
])
