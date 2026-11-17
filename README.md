# Yağ Lekesi Rehberi

Siteyi kendi bilgisayarınızda görmek için `dist/index.html` dosyasını tarayıcıda açın.

- `content/guide-methods.mjs` rehberlerin cevaplarını, adımlarını ve uyarılarını içerir.
- `content/knowledge.mjs` soru başlıklarını, kategorileri ve arama eşleştirmelerini içerir.
- `content/guide-preparation.mjs` hazırlık metinlerini ve ilgili görsel açıklamalarını içerir.
- `content/guide-options.mjs` temizlik ürünü karşılaştırmalarını içerir.
- `content/page-base.html` ana sayfa bölümlerini ve sık sorulan soruları içerir.

İçerik değişikliğinden sonra proje klasöründen `node build-knowledge.mjs` çalıştırarak `dist/index.html` dosyasını yeniden oluşturun. Node.js dışında kurulum gerekmez.

Statik site olarak yayınlanacak dosyalar `dist/` klasöründedir.
