import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white border-b pb-4">
        Kübra'nın UI Kit'i
      </h1>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Buttons</h2>
        
        {/* Renk Varyantları */}
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        
        {/* Boyut ve Durum Varyantları */}
        <div className="flex flex-wrap items-end gap-3 mt-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button variant="primary" disabled className="opacity-50 cursor-not-allowed">Disabled</Button>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Inputs</h2>
        <Input id="ui-normal" label="Normal Input" placeholder="Bir şeyler yazın..." />
        <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur!" />
        <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin." />
        <Input id="ui-dis" label="Disabled Input" disabled value="Düzenlenemez" />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">Gölge ile yükseltilmiş standart kart.</Card>
          <Card variant="outlined" title="Outlined Card">Etrafı ince çerçeveli, gölgesiz kart.</Card>
          <Card variant="filled" title="Filled Card">Dolgulu arka plana sahip, çerçevesiz kart.</Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Alerts</h2>
        <Alert variant="info" title="Bilgi">Sisteme yeni bir güncelleme eklendi.</Alert>
        <Alert variant="success" title="Başarılı">Dosyalarınız başarıyla yüklendi.</Alert>
        <Alert variant="warning" title="Uyarı">Depolama alanınız dolmak üzere.</Alert>
        <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Kapatıldı!')}>
          Sunucuyla bağlantı kurulamadı.
        </Alert>
      </section>

    </div>
  );
}