import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Kübra Demirgüç — Yazılım Mühendisi
          </h1>
          <nav aria-label="Ana navigasyon" className="flex items-center gap-4">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#deneyim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Deneyim
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#egitim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Eğitim
                </a>
              </li>
              <li>
                <a
                  href="#sertifikalar"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Sertifikalar
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform"
              aria-label="Tema değiştir"
              type="button"
            >
              <span className="dark:hidden">🌙</span>
              <span className="hidden dark:inline">☀️</span>
            </button>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}profil.jpg`}
                alt="Kübra Demirgüç vesikalık fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
              <figcaption className="text-center font-semibold mt-2">
                Kübra Demirgüç
              </figcaption>
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim.
                Kariyerime React ve PHP ile Frontend/Full-Stack geliştirici olarak
                başlayıp; bugün Go, C#, Python, Kafka ve LLM entegrasyonları ile
                ölçeklenebilir mikroservis mimarileri kuran bir yazılım
                mühendisiyim.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Komtaş ve Prodrom ITC Solutions gibi kurumsal firmalardaki
                tecrübemi, akademik projeler ve teknik topluluk liderliğiyle
                harmanlamaktayım.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                İngilizce (B2) ve Almanca (A1) seviyesinde yabancı dil bilgisine
                sahibim.
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Kullandığım teknolojiler
              </h3>
              <ul className="flex flex-wrap gap-2" aria-label="Beceri etiketleri">
                {[
                  'C#',
                  'Go',
                  'Python',
                  'Java',
                  'C++',
                  'PHP',
                  'JavaScript',
                  '.NET Core',
                  'React',
                  'React Native',
                  'Laravel',
                  'EF Core',
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
                ].map((tech) => (
                  <li
                    key={tech}
                    className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="deneyim" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Deneyim
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-1">
                  Prodrom ITC Solutions
                </h3>
                <p className="font-semibold text-sm mb-1">
                  Yazılım Geliştirme Stajyeri
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Ağu 2026 – Eyl 2026
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 space-y-1">
                  <li>
                    Kurumsal IT çözümleri kapsamında yazılım mimarisi geliştirme
                    süreçlerine destek verildi.
                  </li>
                  <li>
                    Akıllı CVE Analiz aracında NVD verilerini RAG ve LLM ile
                    özetleyip kritik zafiyetleri Telegram üzerinden ilettim.
                  </li>
                </ul>
              </article>
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-1">
                  Komtaş
                </h3>
                <p className="font-semibold text-sm mb-1">
                  Yazılım Mühendisliği Stajyeri
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Tem 2026 – Ağu 2026
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 space-y-1">
                  <li>
                    Veri analizi ve veri analitiği süreçlerinde Informatica
                    kullandım.
                  </li>
                  <li>
                    Informatica CDI Taskflow ile sigorta OLTP verisini Staging ve
                    DWH katmanlarına taşıyıp mapping görevlerini paralel çalışacak
                    şekilde orkestre ettim.
                  </li>
                  <li>
                    DWH üzerindeki analitik sorguları 10 Datamart tablosuna
                    dönüştürerek gelir grubu, acente, prim ve teminat bazında
                    raporlama katmanı oluşturdum.
                  </li>
                </ul>
              </article>
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-1">
                  Fırat Üniversitesi Kariyer Merkezi
                </h3>
                <p className="font-semibold text-sm mb-1">Full Stack Geliştirici</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Ağu 2025 – Haz 2026
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 space-y-1">
                  <li>
                    Öğrenci/mezun portallarının arayüzlerini ve kurumsal web
                    platformlarını React kullanarak geliştirdim.
                  </li>
                  <li>
                    Kullanıcı deneyimini (UX) ön planda tutarak dinamik ve
                    ölçeklenebilir web bileşenleri tasarladım.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" title="Akıllı CVE Analiz Aracı">
                <p className="mb-2">
                  Python, PostgreSQL (pgvector) ve LLM kullanılarak NVD
                  verilerini çeken, RAG mimarisiyle zafiyetleri özetleyip
                  Telegram botu ile gerçek zamanlı uyarı gönderen sistem.
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Teknolojiler: Python, PostgreSQL, pgvector, LLM, RAG, Telegram
                </p>
              </Card>
              <Card variant="elevated" title="QubIT (Oyunlaştırılmış IT Quiz)">
                <p className="mb-2">
                  Go mikroservisleri ve Python kullanılarak tasarlandı. Eşzamanlı
                  kullanıcı trafiğini yönetmek için Kafka ve Redis entegre
                  edildi.
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Teknolojiler: Go, Python, Kafka, Redis
                </p>
              </Card>
              <Card variant="elevated" title="TerraVision">
                <p className="mb-2">
                  C#, .NET Core Web API ve React Native kullanıldı. Mobil arayüz
                  ile sunucu arasında anlık iletişim SignalR ile sağlandı.
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Teknolojiler: C#, .NET Core, React Native, SignalR
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="egitim" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Eğitim &amp; Topluluk
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Fırat Üniversitesi
                </h3>
                <p className="font-semibold text-sm mb-1">
                  Yazılım Mühendisliği – Lisans
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Beklenen mezuniyet: Haziran 2027
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  4. sınıf öğrencisiyim; full-stack geliştirme, mikroservisler,
                  veri analitiği ve yazılım mühendisliği temelleri üzerine eğitim
                  alıyorum.
                </p>
              </article>
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Kahta Borsa İstanbul Fen Lisesi
                </h3>
                <p className="font-semibold text-sm mb-1">Lise Diploması</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  2018 – 2022
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Lise eğitimimi tamamladım; bu dönemde yazılım ve teknolojiye
                  olan ilgim güçlendi.
                </p>
              </article>
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  Kommagene Sanat Topluluğu
                </h3>
                <p className="font-semibold text-sm mb-1">Kurucu</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Haz 2026
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Haziran 2026&apos;da Kommagene Sanat Topluluğunu kurdum.
                </p>
              </article>
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  IEEE Fırat Öğrenci Kolu
                </h3>
                <p className="font-semibold text-sm mb-1">
                  Kariyer ve Yapay Zeka Zirvesi Koordinatörü ve Moderatörü
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Nis 2026 – May 2026
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kariyer ve Yapay Zeka Zirvesi’nde koordinatör ve moderatör
                  olarak görev aldım.
                </p>
              </article>
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 border border-gray-200 dark:border-gray-700 sm:col-span-2">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  İçerik Üretimi — ByteHane
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ByteHane kanallarında programlama ve yazılım mimarisi
                  paylaşımları yapıyorum.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="sertifikalar" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Sertifikalar
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Akademi ve platformlar üzerinden edindiğim sertifikalar:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {[
                'Web Programlama – Akbank Gençlik Akademisi',
                'Geleceği Eşitle Pre-Bootcamp',
                'Finans ve Borsa',
              ].map((cert) => (
                <li
                  key={cert}
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-sm"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Benimle iletişime geçmek için aşağıdaki formu kullanabilir veya
              e-posta / LinkedIn / GitHub üzerinden ulaşabilirsiniz.
            </p>
            <div className="space-y-3 mb-8 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>E-posta:</strong>{' '}
                <a
                  href="mailto:kubradmrgc965@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  kubradmrgc965@gmail.com
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://linkedin.com/in/k%C3%BCbra-demirg%C3%BC%C3%A7"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  linkedin.com/in/kübra-demirgüç
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/kubradmrgc"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  github.com/kubradmrgc
                </a>
              </p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                />
              </div>
              <div className="pt-2">
                <Button variant="primary" size="lg" type="submit">
                  Gönder
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Kübra Demirgüç. Tüm hakları saklıdır.</p>
        <p>
          Bu sayfa, Web Tasarımı ve Programlama dersi kapsamında geliştirilmiş
          kişisel portfolyo uygulamasıdır.
        </p>
      </footer>
    </div>
  )
}

export default App
