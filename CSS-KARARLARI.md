# CSS Kararları

## 1. Breakpoint Seçimi
* [cite_start]**Neden 640px ve 1024px seçtim?** Modern cihaz kullanımlarını göz önünde bulundurarak tabletler için 640px, masaüstü ekranlar için ise 1024px kırılım noktalarını (breakpoint) kullandım[cite: 129, 131].
* [cite_start]**İçeriğim bu noktalarda nasıl değişiyor?** Mobilde tek sütun olan yapı, 640px'ten itibaren yatay düzene geçiyor[cite: 1096]. [cite_start]1024px'te ise sayfa içeriği merkeze hizalanıp maksimum 1200px genişlikle sınırlandırılıyor[cite: 1136].

## 2. Layout Tercihleri
* [cite_start]**Header için neden Flexbox seçtim?** Header içindeki logo ve navigasyon menüsü tek boyutlu (yatay) bir dizilime ihtiyaç duyduğu için Flexbox en uygun ve esnek çözümdü[cite: 541].
* [cite_start]**Proje kartları için neden Grid seçtim?** Proje kartlarının hem satır hem de sütun bazında, iki boyutlu ve eşit bir ızgara yapısında hizalanması gerektiği için CSS Grid kullandım[cite: 543].
* **auto-fit mi auto-fill mi kullandım, neden?** `auto-fit` kullandım. [cite_start]Böylece ekran genişledikçe veya daraldıkça, boş kalan sütunlar daraltılıp mevcut kartlar o alana yayılarak çok daha akıcı bir görünüm sağlıyor[cite: 868].

## 3. Design Tokens
* [cite_start]**Hangi renk paletini seçtim ve neden?** Profesyonel ve teknolojik bir his vermesi, aynı zamanda metin okunabilirliğini artırması amacıyla ağırlıklı olarak mavi ve tonlarını barındıran temiz bir renk paleti tercih ettim[cite: 153].
* [cite_start]**Spacing skalasını nasıl belirledim?** Boşluklar (spacing) için 4px'in (0.25rem) katları olacak şekilde, kendi içinde orantılı büyüyen tutarlı bir ölçü sistemi belirledim[cite: 165, 169, 173].
* **Fluid typography için clamp değerlerini nasıl ayarladım?** Yazı boyutlarının keskin atlamalar yerine ekran genişliğine (`vw`) bağlı olarak esnemesi için `clamp()` kullandım. [cite_start]Minimum 1rem sınırından başlatarak erişilebilirlik sorunlarının (yazıların çok küçülmesi) önüne geçtim[cite: 367].

## 4. Responsive Stratejiler
* [cite_start]**Mobile-first yaklaşımını nasıl uyguladım?** CSS dosyasına önce hiçbir media query kullanmadan mobil (en dar) ekranlar için temel stilleri yazdım[cite: 61]. [cite_start]Daha sonra `min-width` kullanarak daha büyük ekranlar için eklemeler yaptım[cite: 62].
* [cite_start]**Hangi elemanlar breakpoint'lerde değişiyor?** Menü mobilde alt alta dizilirken büyük ekranda yatay hale geliyor[cite: 635, 645]. [cite_start]"Hakkımda" bölümü tek sütundan yan yana tasarıma geçiyor [cite: 952, 1096] [cite_start]ve Proje kartları tek sütundan 3 sütunlu ızgaraya çıkıyor[cite: 1154].
* [cite_start]**Görsel boyutları nasıl yönettim?** Görsellerin kapsayıcı dışına taşmasını engellemek için `max-width: 100%` kullandım[cite: 921]. [cite_start]Profil ve proje kartı görsellerinde bozulmaları önlemek için `object-fit: cover` özelliğinden faydalandım[cite: 823, 872, 975].