// Each method owns its shopping list, procedure and limits.
const method = (name, answer, tools, materials, steps, tip, warning) =>
  ({name, answer, tools, materials, steps, tip, warning});

const wash = 'Çamaşır deterjanı';
const liquidWash = 'Lekeye doğrudan uygulanabilen sıvı çamaşır deterjanı';
const dish = 'Elde bulaşık deterjanı (ağartıcısız, sıvı)';
const water = 'Su';
const cloth = 'Temiz, tüy bırakmayan bez';
const towel = 'Baskısız kâğıt havlu';
const laundry = 'Çamaşır makinesi (etiket izin veriyorsa)';
const checkDry = ['Isı vermeden kontrol edin', 'Kumaşın havada kurumasını bekleyip lekeye gün ışığında bakın. İz varsa ütü veya kurutucu kullanmayın.'];
const colourTest = ['Ürünü görünmeyen bir yerde deneyin', 'Giysinin dışarıdan görünmeyen küçük bir yerine az miktarda ürün sürün. Renk beze geçerse veya kumaş değişirse ürünü lekeye sürmeyin.'];

export const methods = {
  'kiyafetten-yag-lekesi': method(
    'Yeni oluşan yağ lekesinde kâğıt havlu ve bulaşık deterjanı',
    'Pamuklu giysinin etiketi yıkamaya izin veriyorsa, yeni oluşan yağ lekesinde önce fazlalığı kâğıt havluyla alın. Yağ yemekten bulaştıysa kalan ize birkaç damla elde bulaşık deterjanı sürün. Köpüğü tamamen duruladıktan sonra giysiyi yıkayın.',
    [towel, 'Nişasta kullanılacaksa kaşık', laundry], [dish, water, wash, 'İsteğe bağlı mısır nişastası'],
    [
      ['Fazla yağı kâğıt havluyla alın', 'Kâğıt havluyu lekeye hafifçe bastırıp fazla yağı emdirin. Yağın yayılmaması için kumaşı ovalamayın.'],
      ['Gerekirse mısır nişastasıyla fazla yağı alın', 'Kâğıt havluyla aldıktan sonra yüzeyde hâlâ fazla yağ varsa ince bir kat nişasta serpebilirsiniz. Yağı emen nişastayı kaşıkla kazıyarak alıp, kalanı silkeleyin.'],
      ['Lekeye birkaç damla bulaşık deterjanı sürün', 'Yeni oluşmuş bir yağ veya yağlı yemek lekesiyse, elde bulaşık deterjanından yardım alabilirsiniz. Bulaşık deterjanını önce kumaşın görünmeyen küçük bir yerinde deneyin. Renk ve doku değişmezse birkaç damlayı lekeye hafifçe yayın.'],
      ['Köpüğü durulayın ve giysiyi yıkayın', 'Köpüğü tamamen durulayın. Sonra giysiyi çamaşır deterjanıyla bakım etiketine göre yıkayın. Açık havada kurutup izi kontrol edin.']
    ],
    'Leke kuruduysa kurumuş yağ lekesi rehberindeki adımları izleyin.',
    'Elde bulaşık deterjanını makineye eklemeyin. Yün, ipek ve kuru temizlemelik giysilerde kendi bakım talimatını izleyin.'
  ),
  'kot-pantolondan-yag-lekesi': method(
    'Kot pantolonda yağ lekesine ön işlem',
    'Kot pantolondaki fazla yağı kâğıt havluyla alın. Evde yıkanabilen kotta yeni oluşan bir yemek yağı lekesine birkaç damla sıvı elde bulaşık deterjanı sürüp 5–10 dakika bekletin. Köpüğü tamamen durulayıp kotu ters çevirerek bakım etiketine göre yıkayın.',
    [towel, laundry], [dish, water, wash],
    [
      ['Fazla yağı alın', 'Kâğıt havluyla hafifçe tampon yapın. Lekeyi ovalayarak yaymayın.'],
      ['Deterjan uygulayın', 'Lekenin üzerine az miktarda sıvı elde bulaşık yıkama deterjanı sürün. Parmak ucuyla nazikçe yedirip 5–10 dakika bekletin.', '5–10 dakika '],
      ['Durulayın ve yıkayın', 'Bulaşık deterjanını tamamen durulayın. Kot pantolonu ters çevirip bakım etiketindeki talimatlara göre yıkayın.'],
      ['Kendiliğinden kurutup kontrol edin', 'Yağ izi kalmışsa işlemi tekrarlayın. Leke tamamen çıkmadan kurutma makinesi veya ütü kullanmayın.']
    ],
    'Leke arka cepteyse yağı kumaşın diğer katına geçirmemek için cebin içine kâğıt havlu koyabilirsiniz.',
    'Kumaş liflerini yıpratmamak için sertçe ovalamaktan kaçının. Jean pantolonun rengini korumak için düşük sıcaklıkta yıkamayı ve gölgede kurutmayı tercih edin; bakım etiketini esas alın.'
  ),
  'pantolondan-yag-lekesi': method(
    'Kumaş pantolonda yemek yağı lekesi',
    'Evde yıkanabilen pamuklu veya polyester pantolonda fazla yağı kâğıt havluyla alın. Yeni lekede mısır nişastası veya karbonat fazla yağı emebilir. Kalan iz için birkaç damla elde bulaşık deterjanı kullanın, tamamen durulayın ve etikete göre yıkayın.',
    [towel, 'Kaşık', laundry], [dish, water, wash, 'İsteğe bağlı mısır nişastası veya karbonat'],
    [
      ['Fazla yağı alın', 'Bakım etiketi yıkamaya izin veriyorsa tereyağı gibi katı kalıntıları kaşıkla alın. Lekenin altına kâğıt havlu koyup üstten başka bir havluyla hafifçe bastırın. Kumaşı ovalamayın.'],
      ['Yeni lekede nişasta veya karbonat deneyin', 'Kumaşı ıslatmadan mısır nişastası veya karbonat serpin. 10–15 dakika sonra yağı emen tozu nazikçe alın.', '10–15 dakika'],
      ['Kalan yağlı izi temizleyin', 'Elde bulaşık deterjanını önce görünmeyen bir yerde deneyin. Renk değişmezse lekeye birkaç damla sürün. 5–10 dakika bekletip tamamen durulayın. Bulaşık makinesi deterjanı kullanmayın.', '5–10 dakika'],
      ['Etikete göre yıkayın ve kuruyunca kontrol edin', 'Pantolonu bakım etiketine göre yıkayın ve havada kurutun. İz kaldıysa işlemi tekrarlayın. Leke çıkmadan ütü veya kurutma makinesi kullanmayın.']
    ],
    'Leke beklemişse veya yıkamadan sonra kaldıysa toz uygulamasını atlayıp 3. adıma geçin.',
    'Bu adımlar evde yıkanabilen pamuklu ve polyester pantolonlar için. Yünlü ve hassas kumaşlarda bakım etiketini izleyin. Etikette yalnızca kuru temizleme yazıyorsa fazla yağı kâğıt havluyla alıp pantolonu temizlemeciye götürün.'
  ),
  'gomlekten-yag-lekesi': method(
    'Pamuklu gömlekte yeni oluşan yağ lekesi',
    'Gömleğe yemek yağı damladıysa fazlasını kâğıt havluyla alın. Evde yıkanabilen pamuklu gömlekte, yüzeyde hâlâ yağ varsa mısır nişastası veya karbonat fazlasını emebilir. Kalan ize birkaç damla elde bulaşık deterjanı sürün, köpüğü tamamen durulayın ve gömleği etiketine göre yıkayın.',
    [towel, laundry], [dish, water, wash, 'İsteğe bağlı mısır nişastası veya karbonat'],
    [
      ['Fazla yağı kâğıt havluyla alın', 'Lekenin altına kâğıt havlu koyun. Üstten başka bir havluyla hafifçe bastırarak yağı alın. Kumaşı ovalamayın. Gömlekte hâlâ fazla yağ varsa biraz mısır nişastası veya karbonat gibi yağı emebilen ürünlerden serpebilirsiniz. Toz yağı emince nazikçe silkeleyin.'],
      ['Bulaşık deterjanını gömleğin iç yüzünde deneyin', 'Önce fazla yağdan arındırılan gömleğin görünmeyen küçük bir alanında deterjanı test edin. Renk ve doku değişmiyorsa birkaç damlayı lekeye yayın.'],
      ['Köpüğü durulayın', 'Ardından lekeli alanı bakım etiketine uygun sıcaklıkta suyla iyice durulayın.'],
      ['Normal yıkamaya geçin', 'Gömleği çamaşır deterjanıyla etikete göre yıkayın. Ütülemeden önce manşet ve yaka dahil lekeli yeri kontrol edin.']
    ],
    'Koyu renkli bir gömlekte denemeyi etek ucunun iç tarafında yapabilirsiniz.',
    'Makineye elde bulaşık deterjanı eklemeyin. Bu yöntemi ipek veya kuru temizlemelik gömleğe uygulamayın.'
  ),
  'tisortten-yag-lekesi': method(
    'Tişört ve penyede yağ lekesini yıkamadan temizleme',
    'Yıkanabilir tişört veya penyede önce fazla yağı kâğıt havluyla alın. Lekeye doğrudan sürülebilen sıvı çamaşır deterjanını tişörtün iç yüzünde deneyin. Renk ve doku değişmezse lekeye uygulayın ve tişörtü bakım etiketine göre yıkayın.',
    [towel, laundry], [liquidWash, 'Alternatif olarak elde bulaşık deterjanı'],
    [
      ['Fazla yağı kâğıt havluyla alın', 'Kâğıt havluyu lekeye hafifçe bastırıp kaldırın. Kumaşı ovalamadan fazla yağı alın.'],
      ['Deterjanı görünmeyen bir yerde deneyin', 'Tişört evde yıkanabiliyorsa bir miktar bulaşık deterjanı ya da kumaşın rengine uygun sıvı çamaşır deterjanını tişörtün görünmeyen bir noktasında test edin.'],
      ['Deterjanı yağ lekesine sürün', 'Renk ve doku değişmediyse lekeye az miktarda bulaşık veya çamaşır deterjanını sürün. Yaklaşık 10-15 dakika bekletin.'],
      ['Yıkayın ve kuruyunca kontrol edin', 'Tişörtü bakım etiketine göre yıkayıp havada kurutun. İz kaldıysa işlemi tekrarlayın. Leke çıkmadan ütü veya kurutucu kullanmayın.']
    ],
    'Yağın tişörtün arkasına geçmemesi için lekenin altına kuru kâğıt havlu koyabilirsiniz.',
    'Leke baskının üzerindeyse baskıyı ovalamayın. Ambalajında baskılı kumaşa uygun olduğu belirtilen bir ürün kullanın.'
  ),
  'beyaz-kiyafetten-yag-lekesi': method(
    'Beyaz pamukluda toz çamaşır deterjanı ve su',
    'Evde yıkanabilen beyaz pamuklu giyside fazla yağı kâğıt havluyla alın. Az miktarda toz çamaşır deterjanını suyla karıştırıp görünmeyen bir yerde deneyin. İnce bir kat hâlinde lekeye sürün ve bakım etiketine göre yıkayın.',
    [towel, 'Küçük kap', laundry], ['Toz çamaşır deterjanı', water],
    [
      ['Bakım etiketine bakın', 'Bu yöntemi evde yıkanabilen beyaz pamuklu giysilerde uygulayın. Yıkama sıcaklığını etiketten kontrol edin.'],
      ['Fazla yağı kâğıt havluyla alın', 'Havluyu lekeye hafifçe bastırıp kaldırın. Kumaşı ovalamayın.'],
      ['Toz deterjanı az suyla karıştırın', 'Az miktarda toz çamaşır deterjanına azar azar su ekleyip sürülebilir bir kıvam elde edin. Karışımı görünmeyen küçük bir yerde deneyin. Kumaş değişmezse lekeye ince bir kat sürün ve ambalajdaki uygulama talimatını izleyin.'],
      ['Yıkayın ve kuruyunca kontrol edin', 'Giysiyi bakım etiketine göre yıkayıp havada kurutun. İz kaldıysa işlemi tekrarlayın. Leke çıkmadan ütü veya kurutucu kullanmayın.']
    ],
    'Yağ çıktıktan sonra kırmızı bir sos izi kaldıysa salçalı yağ lekesi rehberindeki adımlara bakın.',
    'Bu karışımı yün, ipek veya yalnızca kuru temizlemelik giysilere uygulamayın. Karışıma çamaşır suyu eklemeyin.'
  ),
  'elbiseden-yag-lekesi': method(
    'Yıkanabilir elbise ve astarda sıvı deterjan',
    'Elbise, bluz veya eteğin kumaşı ve astarı yıkanabiliyorsa yağı kâğıt havluyla alın. Ürün talimatı izin veriyorsa az miktarda sıvı çamaşır deterjanını kumaşın görünmeyen bir yerinde deneyip lekeye sürün. Kuru temizlemelik veya hassas süslemeli elbiseyi temizlemeciye gösterin.',
    [towel, laundry], [wash, 'Ön işlem için elde bulaşık deterjanı veya kumaşa uygun leke çıkarıcı'],
    [
      ['Dış kumaşı ve astarı kontrol edin', 'Dış kumaş veya astar yalnızca kuru temizlemeye uygunsa lekeye evde su ya da deterjan sürmeyin.'],
      ['Astarı koruyun', 'Lekenin diğer katlara sızmamaması için lekenin arkasına bir parça kâğıt havlu koyun ve üstteki yağı da yine bir kağıt havlu ile tamponlayın.'],
      ['Deterjanı giysinin iç yüzünde deneyin', 'Elbisenin dışarıdan görünmeyen küçük bir yerinde bulaşık detarjanı veya varsa leke çıkarıcı deterjanızı deneyin. Renk ve doku değişmezse ambalajdaki talimata göre sadece lekeli kata sürün.'],
      ['Elbisenin programıyla yıkayın', 'Çamaşır deterjanıyla etikete göre yıkayın. Elbisenin izin verdiği biçimde kurutup izi kontrol edin.']
    ],
    'Tek lekede tüm eteği ön işlemle ıslatmak yerine lekeli katı ayırın.',
    'Yalnız kuru temizleme etiketinde veya süslemelerin bakımı belirsizse ıslak ön işlem yapmayın.'
  ),
  'monttan-yag-lekesi': method(
    'Montun dış kumaşına göre yağ lekesini temizleme',
    'Monttaki fazla yağı kâğıt havluyla alın. Kaplamasız ve evde yıkanabilen dış kumaşta yeni yağın fazlasını kuru mısır nişastasıyla alabilirsiniz. Kalan izde montun kumaşına uygun temizleyiciyi seçin.',
    [towel, 'Yumuşak bez', laundry], ['Kaplamasız kumaşta isteğe bağlı mısır nişastası veya bebek pudrası', 'Kaplamasız pamuklu mont için elde bulaşık deterjanı', 'Montun bakım etiketinde önerilen temizleyici', water],
    [
      ['Bakım etiketine bakın', 'Montun evde yıkanıp yıkanamayacağını kontrol edin. Su geçirmez montta üreticinin talimatını, dolgulu montta şişme mont rehberini izleyin.'],
      ['Fazla yağı kâğıt havluyla alın', 'Kâğıt havluyu lekeye hafifçe bastırıp kaldırın. Kaplamasız, evde yıkanabilen kumaşta yeni leke hâlâ yağlıysa ince bir kat kuru mısır nişastası veya bebek pudrası serpin. Yağı emen tozu nazikçe alın.'],
      ['Kalan izi kumaşa uygun ürünle temizleyin', 'Yıkanabilen kaplamasız pamukta elde bulaşık deterjanını görünmeyen bir yerde deneyin. Renk değişmezse lekeye birkaç damla sürüp köpüğü tamamen durulayın. Diğer montlarda etikette önerilen sıvı temizleyiciyi kullanın.'],
      ['Etikete göre yıkayın ve kurutun', 'Yıkama ve kurutma ayarlarını bakım etiketine göre seçin. Mont kuruyunca izi kontrol edin.']
    ],
    'Beklemiş veya yıkamadan sonra kalmış yağ izinde nişasta adımını atlayın.',
    'Montun dış yüzeyini sertçe fırçalamayın. Su itici kaplamalı veya özel bakım isteyen kumaşlarda nişasta kullanmayın.'
  ),
  'sisme-monttan-yag-lekesi': method(
    'Şişme montta dış kumaştaki yağ lekesini temizleme',
    'Şişme monttaki fazla yağı kâğıt havluyla alın. Küçük izlerde montun bakım talimatı izin veriyorsa dış kumaşı temizleyin ve dolguyu ıslatmayın. Montun tamamı yıkanacaksa dolguya uygun temizleyici ve kurutma ayarı kullanın.',
    [towel, 'Temiz, yumuşak bez', laundry], ['Montun bakım talimatına uygun temizleyici', 'Uygun dış kumaşta isteğe bağlı mısır nişastası', water],
    [
      ['Dolgu türünü ve bakım etiketini kontrol edin', 'Dolgunun kuş tüyü mü sentetik mi olduğuna bakın. Montun evde nasıl temizlenip kurutulacağını etiketten kontrol edin.'],
      ['Dış kumaştaki fazla yağı alın', 'Kâğıt havluyu lekeye hafifçe bastırıp kaldırın. Yeni ve küçük bir lekede, kaplamasız dış kumaşın bakım talimatı kuru tozla temizliğe izin veriyorsa ince bir kat mısır nişastası serpin. Yağı emen tozu nazikçe alın.'],
      ['Kalan izi dolguyu ıslatmadan temizleyin', 'Üreticinin önerdiği temizleyiciyi bakım talimatı izin veriyorsa sadece lekeli bölgeye sürün. Kalıntıyı hafif nemli bir bezle alın.'],
      ['Montu bakım etiketine göre kurutun', 'Montun tamamını yıkamak gerekiyorsa dolguya uygun temizleyiciyi ve etiketteki programı kullanın. Sonrasında dolgunun tamamen kuruduğundan emin olun.']
    ],
    'Yağ dolguya kadar geçtiyse montun tamamı için verilen yıkama ve kurutma talimatını izleyin.',
    'Su itici kaplamalı veya hassas dış kumaşta nişasta kullanmayın. Temizleyici uygularken dolguyu ıslatmayın.'
  ),
  'esofmandan-yag-lekesi': method(
    'Eşofmandaki yağ lekesini yıkamadan önce temizleme',
    'Eşofmandaki fazla yağı kâğıt havluyla alın. Yağ kumaşa bulaştıysa sıvı çamaşır deterjanını önce paçanın iç tarafında deneyin. Leke logonun üzerindeyse deterjanı doğrudan sürmeden eşofmanı bakım etiketine göre yıkayın.',
    [towel, laundry], [liquidWash],
    [
      ['Bakım etiketine bakın', 'Eşofmanın evde yıkanabildiğini ve hangi sıcaklıkta yıkanacağını etiketten kontrol edin.'],
      ['Fazla yağı kâğıt havluyla alın', 'Havluyu lekeye hafifçe bastırıp kaldırın. Kumaşı ve logoyu ovalamayın.'],
      ['Kumaştaki yağ izine deterjan sürün', 'Yağ logonun üzerindeyse 4. adıma geçin. Kumaştaysa lekeye sürülebilen sıvı çamaşır deterjanını önce paçanın içinde deneyin. Renk veya doku değişmezse lekeye birkaç damla sürün.'],
      ['Ters çevirip etikete göre yıkayın', 'Eşofmanı ters çevirip bakım etiketine göre yıkayın. Havada kuruyunca izi kontrol edin. Leke çıkmadan ütü veya kurutucu kullanmayın.']
    ],
    'Yağ kumaşın arka yüzüne geçmesin diye lekenin altına kuru kâğıt havlu koyabilirsiniz.',
    'Leke logonun üzerindeyse fazla yağı kâğıt havluyla alıp eşofmanı etikete göre yıkayın. Logoya doğrudan deterjan veya leke çıkarıcı sürmeyin ve logoyu fırçalamayın.'
  ),
  'halidan-yag-lekesi': method(
    'Suyla temizlenebilen halıda ölçülü çözelti',
    'Halıdaki yağı kuru beyaz bezle bastırıp kaldırarak alın. Halı suyla temizlenebiliyorsa 240 ml ılık suya çeyrek çay kaşığı ağartıcısız elde bulaşık deterjanı ekleyin. Karışımı az miktarda bezle uygulayın, ardından temiz nemli bezle kalıntıyı alın.',
    ['Ölçü kabı', 'Çay kaşığı ölçüsü', 'Üç temiz beyaz bez'], [dish, '240 ml ılık su ve durulama için ayrı temiz su', 'İz kalırsa halının lifine ve yağ lekesine uygun halı leke çıkarıcısı'],
    [
      ['Halıya dökülen yağı emdirin', 'Kuru beyaz bezi lekeye bastırıp kaldırın. Yağı liflere yaymamak için ovalamayın ve bez yağlandıkça temiz yüzüne geçin.'],
      ['Karışımı hazırlayıp deneyin', '240 ml ılık suya çeyrek çay kaşığı elde bulaşık deterjanı ekleyin. Halının görünmeyen bir köşesinde deneyin ve renk kontrolü için kurumasını bekleyin.'],
      ['Deterjanlı suyu bezle tamponlayın', 'İkinci beyaz bezin bir köşesini çözeltiyle hafifçe nemlendirin. Lekenin kenarından ortasına ilerleyin. Halının tabanını ıslatmayın.'],
      ['Kalıntıyı alıp kurutun', 'Üçüncü bezi temiz suyla hafifçe nemlendirip köpük kalıntısını tamponlayın. Bezin kuru kısmıyla nemi alın ve halıyı havalandırın.']
    ],
    'İz kalırsa yalnızca halının lifine ve yağ lekesine uygunluğu ambalajda belirtilen bir halı leke çıkarıcısını, kendi kullanım talimatıyla değerlendirin.',
    'Yün, ipek, el dokuması veya sulu temizliği onaylanmamış halıda bu karışımı uygulamayın. Beze renk geçerse durun.'
  ),
  'koltuktan-yag-lekesi': method(
    'Kumaş koltukta fazla yağı alma ve hafif deterjanlı su',
    'Kumaş koltuğa yağ döküldüğünde fazlasını kuru beyaz bezle alın. Üretici hafif deterjanlı suya izin veriyorsa 240 ml ılık suya çeyrek çay kaşığı sıvı elde bulaşık deterjanı ekleyin. Karışımı bezle lekeye uygulayın ve kalıntıyı temiz, nemli bir bezle alın.',
    ['Temiz beyaz bezler', 'Ölçü kabı', 'Çay kaşığı ölçüsü'], ['Renksiz, ağartıcısız sıvı elde bulaşık deterjanı', '240 ml ılık su', 'Kalıntıyı almak için temiz su'],
    [
      ['Fazla yağı alın ve bakım etiketine bakın', 'Kuru beyaz bezi lekeye hafifçe bastırıp kaldırın. Kumaşı ovalamayın. Minderin altındaki etikette veya koltuğun bakım kılavuzunda deterjanlı suya izin verilip verilmediğine bakın.'],
      ['Karışımı hazırlayıp görünmeyen bir yerde deneyin', 'Bakım talimatı izin veriyorsa 240 ml ılık suya çeyrek çay kaşığı renksiz, ağartıcısız sıvı elde bulaşık deterjanı ekleyin. Karışımı minderin arka alt köşesinde deneyip kurumasını bekleyin.'],
      ['Lekeyi beyaz bezle temizleyin', 'Renk veya doku değişmediyse beyaz bezi karışımla hafifçe nemlendirin. Lekenin kenarından ortasına doğru bezi bastırıp kaldırın. Karışımı koltuğa dökmeyin.'],
      ['Deterjan kalıntısını alıp kurutun', 'Kalıntıyı temiz suyla nemlendirilmiş, iyice sıkılmış bezle alın. Ardından kuru bezle fazla nemi alıp koltuğu havalandırın.']
    ],
    'Kılıfı ancak bakım etiketi yıkamaya izin veriyorsa çıkarıp yıkayın.',
    'Etiket suyla temizliğe izin vermiyorsa ya da bakım bilgisine ulaşamıyorsanız fazla yağı kuru bezle alın. Deri ve yalnızca kuru temizlemelik döşemede bu karışımı uygulamayın.'
  ),
  'deri-koltuktan-yag-lekesi': method(
    'Deri koltukta fazla yağı kuru bez veya uygun emiciyle alma',
    'Deri koltuktaki fazla yağı kuru beyaz bezle ovalamadan alın. Koltuğun bakım kılavuzu öneriyorsa yüzeyde kalan yağı emmesi için az miktarda kuru mısır nişastası kullanabilirsiniz. Yağ deriye işlemişse deri bakım uzmanına danışın.',
    ['Temiz, kuru beyaz bezler'], ['Bakım kılavuzu öneriyorsa mısır nişastası veya deriye uygun temizleyici', 'Yalnızca bakım kılavuzu özellikle öneriyorsa karbonat'],
    [
      ['Koltuk modelinin bakım talimatına bakın', 'Minderin altındaki etiketten veya faturadan koltuğun modelini bulun. Üreticinin yağ lekesi için verdiği talimatı kontrol edin. Leke yeniyse fazla yağı hemen kuru bezle alın.'],
      ['Fazla yağı kuru bezle alın', 'Kuru beyaz bezi lekeye hafifçe bastırıp kaldırın. Deriyi ovalamayın veya yağ izini kazımayın.'],
      ['Kullanacağınız ürünü görünmeyen bir yerde deneyin', 'Kılavuz mısır nişastası veya bir deri temizleyicisi öneriyorsa önce minderin altında küçük bir yerde deneyin. Renk veya parlaklık değişirse ürünü kullanmayın.'],
      ['Yüzeyde kalan yağı alın', 'Kılavuz öneriyorsa ince bir kat kuru mısır nişastası serpin. Yağı emen tozu deriye bastırmadan nazikçe alın. Kılavuz deri temizleyicisi öneriyorsa ürünü yumuşak beze alıp kendi talimatına göre uygulayın.']
    ],
    'Yağ deriye işleyip koyu bir iz bıraktıysa başka bir ürün denemeden deri bakım uzmanına danışın.',
    'Karbonatı ancak koltuğun bakım kılavuzu özellikle öneriyorsa kullanın. Derinin türü veya bakım talimatı belirsizse fazla yağı kuru bezle almakla yetinin.'
  ),
  'tul-perdeden-yag-lekesi': method(
    'Tül perdede fazla yağı alma ve etikete göre yıkama',
    'Tül perdeye yağ sıçradıysa lekenin altına kâğıt havlu koyup fazla yağı üstten hafifçe bastırarak alın. Evde yıkanabilen tülde, lekeye sürülebilen sıvı çamaşır deterjanını veya çamaşıra uygun seyreltilmiş sıvı Arap sabununu alt kenarda deneyin. Ardından durulayıp perdeyi etiketine göre yıkayın.',
    [towel, 'Arap sabununu suyla karıştırmak için küçük kap', 'Makineye uygunsa yıkama filesi', laundry], ['Lekeye sürülebilen hassas çamaşır deterjanı', 'Alternatif olarak çamaşıra uygun sıvı Arap sabunu', water],
    [
      ['Bakım etiketine bakın, kancaları çıkarın', 'Perdenin evde yıkanıp yıkanamayacağını ve yıkama sıcaklığını etiketten kontrol edin. Çıkarılabilen kancaları sökün.'],
      ['Fazla yağı kâğıt havluyla alın', 'Tülü düz bir yere serip lekenin altına kâğıt havlu koyun. Üstten başka bir havluyla hafifçe bastırıp kaldırın. Tülü ovalamayın.'],
      ['Yağ izine sıvı deterjan veya Arap sabunu uygulayın', 'Lekeye sürülebilen sıvı çamaşır deterjanını alt kenarda deneyin. Çamaşıra uygun sıvı Arap sabununu da ambalajında önerilen oranda suyla karıştırıp deneyebilirsiniz. Renk veya doku değişmezse seçtiğiniz üründen az miktarda lekeye uygulayın.'],
      ['Durulayıp etikete göre yıkayın', 'Lekeli bölgedeki kalıntıyı temiz suyla durulayın. Makinede yıkamaya izin varsa tülü fileye koyup etiketindeki programı seçin.']
    ],
    'Tülü kurumaya bırakmadan önce açıp yağ izi kalıp kalmadığını kontrol edin.',
    'Yağ lekesine tuz serpmeyin. Çamaşır sodasını yalnızca perde üreticisi öneriyorsa kullanın. Yalnızca kuru temizlemelik tül için bakım etiketindeki yöntemi izleyin.'
  ),
  'duvardan-yag-lekesi': method(
    'Duvardaki yağ lekesi için bulaşık deterjanı ve karbonat',
    'Silinebilir duvardaki yağ lekesini ılık su ve birkaç damla elde bulaşık deterjanıyla temizleyin. Kurumuş yağ kalırsa silmeye ve ovalamaya dayanıklı boyada karbonatla suyu karıştırıp macun yapın. Önce görünmeyen bir yerde deneyin, sonra lekeye bastırmadan uygulayın.',
    ['Küçük kap', 'Yumuşak bezler', 'Kâğıt havlu', 'Karbonatı ölçmek için çay kaşığı'], [dish, 'Ilık su', 'Karbonat (boya ovalamaya dayanıklıysa)'],
    [
      ['Yeni sıçrayan yağı alın', 'Yağ kurumadıysa üzerine kâğıt havlu veya temiz bir bez bastırıp fazla yağı alın. Leke kurumuşsa doğrudan ikinci adıma geçin.'],
      ['Yapışan yağı bulaşık deterjanıyla yumuşatın', 'Bir kâse ılık suya birkaç damla elde bulaşık deterjanı ekleyin. Silinebilir duvarda yumuşak bir bezi bu suya batırıp iyice sıkın. Bezi lekenin üzerinde kısa süre tutun, sonra lekeyi kenardan ortaya doğru silin.'],
      ['Kurumuş yağ kaldıysa karbonatlı macun deneyin', 'Bir çay kaşığı karbonata azar azar su ekleyip macun yapın. Boya ovalamaya dayanıklıysa yumuşak bir beze biraz macun alın ve yağ izinin üzerinden bastırmadan geçin.'],
      ['Kalıntıyı alın, duvar kuruyunca izi kontrol edin', 'Temiz suyla hafifçe nemlendirilmiş bir bezle deterjanı veya karbonatı alın. Duvar kuruduğunda yağlı tabaka gitmiş ama koyu bir gölge kalmışsa yağ boyaya işlemiş olabilir. O noktada temizliği bırakın.']
    ],
    'Yağ deterjanla çıktıysa karbonat adımını atlayın.',
    'Karbonatlı macunu yalnızca ovalamaya dayanıklı boyada deneyin. Önce görünmeyen bir noktaya uygulayın. Mat veya silinemeyen boyada karbonat iz bırakabilir. Beze boya geçerse temizliği bırakın.'
  ),
  'fayanstan-yag-lekesi': method(
    'Kurumuş fayans yağını ılık bezle yumuşatma',
    'Kurumuş yağ lekesini, silinebilir seramik veya porselen fayansta ılık deterjanlı bezle yumuşatın. Yumuşak süngerle silin, temiz suyla kalıntıyı alın ve kurulayın. Yağ derzde kaldıysa derzin bakım talimatına göre ilerleyin.',
    ['Yumuşak bez', 'Bulaşık süngeri', 'Küçük kap', 'Derz için yumuşak diş fırçası'], [dish, 'Ilık su', 'Derz üreticisi izin veriyorsa karbonat'],
    [
      ['Fayansın malzemesine bakın', 'Bu adımlar, hafif deterjanlı suyla temizlenebilen seramik veya porselen içindir. Mermer ve diğer doğal taşlar için kendi özel bakım talimatını izleyin.'],
      ['Kurumuş yağı ılık bezle yumuşatın', 'Ilık suya birkaç damla elde bulaşık deterjanı ekleyin. Bu suyla nemlendirdiğiniz bezi kurumuş yağın üzerinde birkaç dakika tutun.'],
      ['Yağı bulaşık süngeriyle silin', 'Bulaşık süngerinin yumuşak tarafını aynı deterjanlı suyla nemlendirip yağı alın. Yağ hâlâ yapışıyorsa ılık bezi lekenin üzerinde biraz daha bekletin. Temiz, nemli bezle deterjan kalıntısını silin. Yer fayansıysa kayganlık kalmaması için kurulayın.'],
      ['Derzde kalan izi hafifçe temizleyin', 'Derz üreticisi izin veriyorsa biraz karbonatı suyla karıştırın. Küçük bir noktada deneyip karışımı yalnızca derz çizgisine yumuşak diş fırçasıyla uygulayın. Ardından suyla kalıntıyı alıp kurulayın.']
    ],
    'Yağ derze geçmediyse dördüncü adımı atlayabilirsiniz.',
    'Parlak veya sırlı fayansı kuru karbonat, sert sünger ya da telle ovalamayın. Doğal taşta sirke ve limon kullanmayın.'
  ),
  'mutfak-dolabindan-yag-lekesi': method(
    'Dolap kapağındaki yağı az nemli bezle alma',
    'Silinmeye uygun mutfak dolabındaki yağ lekesi için ılık suya birkaç damla elde bulaşık deterjanı ekleyin. Bezi iyice sıkıp kapağı nazikçe silin. Deterjan kalıntısını alın ve kapağın kenarlarını hemen kurulayın.',
    ['Küçük kap', 'Yumuşak bezler'], [dish, 'Ilık su', 'Kaplama üreticisi izin veriyorsa karbonat'],
    [
      ['Kapağın bakım talimatına bakın', 'Dolap kapağının suyla silmeye uygun olup olmadığını kontrol edin. Kaplama konusunda emin değilseniz önce kapağın iç köşesinde küçük bir deneme yapın.'],
      ['Deterjanlı suyu beze alın', 'Ilık suya birkaç damla elde bulaşık deterjanı ekleyin. Yumuşak bezi batırıp iyice sıkın. Karışımı doğrudan kapağa dökmeyin.'],
      ['Kulp çevresindeki yağı silin', 'Az nemli bezle küçük alanlar hâlinde çalışın. İz kalırsa ve kaplama üreticisi karbonata izin veriyorsa az miktarda karbonatı suyla karıştırın. Önce iç köşede deneyip kalan ize ovalamadan uygulayın.'],
      ['Kalıntıyı alın ve kapağı hemen kurulayın', 'Temiz, hafif nemli bezle deterjan veya karbonat kalıntısını alın. Kuru bezle kapağı, kenarları ve birleşim yerlerini kurulayın.']
    ],
    'Yağı yeniden yüzeye taşımamak için bez yağlandıkça temiz bir yüzünü kullanın.',
    'Sert sünger veya karbonatla ovalamak kaplamayı matlaştırabilir. Kapağın kenarlarına su biriktirmeyin.'
  ),
  'cam-ocaktan-yag-lekesi': method(
    'Soğuk cam ocaktaki yağı yumuşak bezle alma',
    'Cam ocak tamamen soğuduğunda fazla yağı kâğıt havluyla alın. Modelin kılavuzu izin veriyorsa kalan yağ izini ılık suya birkaç damla elde bulaşık deterjanı ekleyip yumuşak bezle silin. Temiz, nemli bezle kalıntıyı alın ve kurulayın.',
    [towel, 'İki yumuşak bez', 'Modelin kılavuzu izin veriyorsa cam ocak kazıyıcısı'], ['Ilık su', 'Kılavuz izin veriyorsa sıvı elde bulaşık deterjanı veya cam seramik ocak temizleyicisi'],
    [
      ['Ocağı kapatıp tamamen soğutun', 'Artık ısı göstergesi sönüp cam soğuduğunda yağın fazlasını kâğıt havluyla alın.'],
      ['Kalan izi ılık, nemli bezle silin', 'Yumuşak bezi ılık suyla nemlendirip sıkın. İz kalırsa ve ocak kılavuzu izin veriyorsa suya birkaç damla elde bulaşık deterjanı ekleyin veya cam seramik ocak için etiketlenmiş bir yağ temizleyici kullanın.'],
      ['Yapışan izi nazikçe yumuşatın', 'Nemli bezi lekenin üzerinde kısa süre tutun, sonra hafifçe silin. Yanıp yapışmış kalıntı çıkmazsa ve modelin kılavuzu öneriyorsa cam ocağa özel kazıyıcı kullanın. Kazıyıcıyı kılavuzdaki açıya göre, cama bastırmadan kaydırın.'],
      ['Kalıntıyı alın ve camı kurulayın', 'Temiz suyla nemlendirilmiş ayrı bir bezle temizleyici kalıntısını alın. Ocağı yeniden açmadan önce camı yumuşak bezle kurulayın.']
    ],
    'Kılavuzu bulmak için ocağın model numarasıyla üreticinin destek sayfasında arama yapabilirsiniz.',
    'Cam ocakta çelik tel, sert sünger, kuru karbonat veya fırın spreyi kullanmayın.'
  ),
  'firindan-yag-lekesi': method(
    'Soğuk fırında deterjanlı su ve uygun yüzeyde karbonat',
    'Fırın tamamen soğuduğunda yağlı rafları ılık su ve bulaşık deterjanıyla temizleyin. Fırının içindeki yapışmış izde, modelin bakım talimatı izin veriyorsa karbonat ve suyla hazırlanan macunu kullanabilirsiniz.',
    [towel, 'Raflar için leğen', 'Küçük kap', 'Yumuşak sünger', 'Temiz bez', 'Kılavuz izin veriyorsa esnek silikon spatula'], [dish, 'Ilık su', 'İç kaplama için izin veriliyorsa karbonat'],
    [
      ['Fırını kapatın ve soğumasını bekleyin', 'Fırın soğuyunca çıkarılabilen rafları alın. Yüzeydeki fazla yağı kâğıt havluyla kaldırın.'],
      ['Rafları deterjanlı suda bekletin', 'Raflar elde yıkanabiliyorsa bir leğene ılık su ve biraz elde bulaşık deterjanı koyun. Yağ yumuşayınca süngerle silip durulayın.'],
      ['İç kaplamada uygun yöntemi kullanın', 'Kılavuz karbonata izin veriyorsa bir miktar karbonata azar azar su ekleyip macun yapın. Sadece lekeli yere ince bir kat sürün. Yağ yumuşayınca nemli, yumuşak bezle alın. Parça kalırsa ve kılavuz izin veriyorsa esnek silikon spatulayla hafifçe kaldırın.'],
      ['Kalıntıyı temiz suyla alın ve kurulayın', 'Temiz, nemli bezle karbonat veya deterjan kalıntısını giderin. İç yüzeyi kurulayın ve kuruyan rafları yerlerine takın.']
    ],
    'Katalitik kaplamada veya temizleme programı olan fırınlarda önce modelin kılavuzunda iç yüzey için verilen adımları izleyin.',
    'Macunu rezistansa, fana, havalandırma deliklerine veya kapak contasına sürmeyin. Fırın camında sert sünger veya metal kazıyıcı kullanmayın. Temizlik sırasında fırını çalıştırmayın.'
  ),
  'tavadan-yag-lekesi': method(
    'Tava ve tencerede ılık deterjanlı suyla yağı yumuşatma',
    'Tava veya tencere soğuyunca ılık su, elde bulaşık deterjanı ve yumuşak süngerle yıkayın. Kalıntı yapıştıysa, kaplama izin veriyorsa önce ılık deterjanlı suyla yumuşatın.',
    [towel, 'Çizmez sünger', 'Yumuşak kurulama bezi'], [dish, 'Ilık su', 'Kaplama izin veriyorsa karbonat'],
    [
      ['Tava veya tencerenin soğumasını bekleyin', 'Oda sıcaklığına gelmesini bekleyin. Yüzeyde birikmiş yağı kâğıt havluyla alın.'],
      ['Yağı yumuşak süngerle yıkayın', 'Süngerin yumuşak tarafına birkaç damla elde bulaşık deterjanı koyun ve ılık suyla yıkayın.'],
      ['Yapışan kalıntıyı önce yumuşatın', 'Kaplama uygunsa içinde ılık deterjanlı su bekletin, ardından yumuşak süngerle silin. Emaye kapta üretici öneriyorsa karbonatlı suyu deneyebilirsiniz.'],
      ['Durulayın ve iyice kurulayın', 'Köpüğü temiz suyla tamamen alın. Yumuşak bir bezle kurulayın.']
    ],
    'Kaplamasız döküm tavayı suda bekletmeyin ve yıkadıktan sonra hemen kurulayın.',
    'Yapışmaz tavada metal tel, kuru karbonatla ovalama ve fırın spreyi kaplamaya zarar verebilir.'
  ),
  'aracta-yag-lekesi': method(
    'Kaportadaki yeni yağı su ve yumuşak bezle alma',
    'Araç kaportasındaki yeni yağ izinde aracı gölgeye çekin. Boya soğuyunca yüzeyi suyla durulayıp gevşek kiri alın. İz kalırsa normal araç şampuanı ve yumuşak bir yıkama eldiveni kullanın.',
    ['Kova', 'Yumuşak yıkama eldiveni', 'Temiz mikrofiber bez'], [water, 'Gerekirse normal araç şampuanı'],
    [
      ['Kaportanın soğumasını bekleyin', 'Aracı gölgeye alın. Boya sıcakken temizliğe başlamayın. Bu adımlar kaportadaki küçük yağ izleri içindir.'],
      ['Tozu ve gevşek kiri suyla durulayın', 'Boyayı çizmemek için kuru yüzeyi ovalamayın. Temiz suyla tozu alıp yağın fazlasını yumuşak bezle hafifçe kaldırın.'],
      ['İz kaldıysa normal araç şampuanıyla yıkayın', 'Varsa araç şampuanını ambalajındaki ölçüyle sulandırın. Temiz, yumuşak bir eldivenle küçük alanı nazikçe yıkayın.'],
      ['Durulayın ve mikrofiber bezle kurulayın', 'Kalıntıyı suyla giderip boyayı kurulayın. İz çıkmıyorsa sertçe ovalamadan aracın bakım kılavuzuna bakın.']
    ],
    'Yağ koltuğa bulaştıysa döşemenin malzemesine uygun koltuk rehberine geçin.',
    'Kaportada bulaşık deterjanı, karbonat veya motor yağ çözücüsü kullanmayın.'
  ),
  'suetten-yag-lekesi': method(
    'Süette kuru nişasta uygulaması',
    'Süet ayakkabıdaki taze yağı kuru beyaz bezle hafifçe alın. Üretici kuru temizleme tozuna izin veriyorsa önce görünmeyen yerde deneyin. Yağ liflere işlemişse süet temizliği yapan bir uzmana danışın.',
    [towel, 'Temiz, kuru beyaz bez', 'Yumuşak süet fırçası'], ['Mısır nişastası'],
    [
      ['Sıvıyı bastırıp kaldırarak alın', 'Kâğıt havluyu süete sürtmeden kaldırın.'],
      ['Kuru uygulamaya izin olup olmadığına bakın', 'Ayakkabınızın kılavuzunu okuyun. Nişastayı önce küçük ve görünmeyen bir noktada deneyin.'],
      ['Nişastayı taze yağın üzerine serpin', 'İnce bir kat serpin. Üreticinin önerdiği süre sonunda tozu yumuşak süet fırçasıyla tüy yönünde nazikçe kaldırın.'],
      ['Koyu iz kalırsa kuru bırakın', 'Yüzey koyulaşmış veya sertleşmişse yeni ürün denemeden süet bakım uzmanına gösterin.']
    ],
    'Düz deri için satılan yağ temizleyici süet için otomatik olarak uygun değildir.',
    'Su, sirke ve çamaşır spreyi süette halka veya renk farkı bırakabilir.'
  ),
  'ipekten-yag-lekesi': method(
    'Yıkanabilir ipekte hafif sıvı ipek deterjanı',
    'İpekten fazla yağı kuru, yumuşak bezle hafifçe alın. Etikette kuru temizleme yazıyorsa lekeyi temizlemeciye gösterin. Yıkamaya izin varsa ipeğe uygun deterjan ve etiketteki yöntemi kullanın.',
    ['Yumuşak emici bez', 'Temiz leğen'], ['İpeğe uygun hafif sıvı deterjan', 'Etikete uygun sıcaklıkta su'],
    [
      ['İpek etiketini okuyun', 'Kuru temizleme talimatında lekeyi ve önceki uygulamaları temizlemeciye anlatın.'],
      ['Yağ yüzeydeyse nazikçe alın', 'Emici bezi lekeye bastırıp kaldırın.'],
      ['Yalnızca izin varsa elde yıkayın', 'İpek deterjanını etikette belirtilen sıcaklıktaki suya ekleyin. Üretici bekletmeye izin veriyorsa ipeği kısa süre suda tutun. Etiketin tarif ettiği biçimde yıkayıp durulayın.'],
      ['Sıkmadan kurutun', 'Etikete göre kurutun ve kumaşta renk halkası olup olmadığını kontrol edin.']
    ],
    'İz sürerse daha yoğun deterjan sürmek yerine ipek bakımına danışın.',
    'İpeğe genel amaçlı enzimli sprey veya oksijenli toz uygulamayın.'
  ),
  'yun-kazaktan-yag-lekesi': method(
    'Yıkanabilir yünde nötr yün deterjanı',
    'Yün kazaktaki fazla yağı kuru bezle, kumaşı ovalamadan alın. Bakım etiketi yıkamaya izin veriyorsa yün deterjanıyla yıkayın. İz kalırsa yün bakımına uygun profesyonel yardım alın.',
    ['Temiz emici bez', 'Düz kurutma için havlu', 'Etikete göre leğen veya yün programlı makine'], ['Yüne uygun nötr deterjan', 'Etikete uygun su', 'Giysi üreticisi özellikle öneriyorsa sıvı elde bulaşık deterjanı'],
    [
      ['Kazağın yıkama işaretini kontrol edin', 'Etiketten elde veya makinede yıkamaya izin verilip verilmediğine bakın. Yalnızca kuru temizleme yazıyorsa lekeye evde su veya deterjan sürmeyin.'],
      ['Yağı lifleri zorlamadan alın', 'Temiz bir bezi yağ lekesine hafifçe bastırın. Kazağı gerip sürtmeyin.'],
      ['Yüne uygun deterjanla yıkayın', 'Etiket elde yıkamaya izin veriyorsa yün deterjanını suda çözün ve kazağı ovuşturmadan yıkayın. Makineye izin veriyorsa yün programını kullanın. Elde bulaşık deterjanını ancak giysi üreticisi leke için özellikle öneriyorsa deneyin ve yıkamadan önce durulayın.'],
      ['Şeklini verip düz kurutun', 'Etiket izin veriyorsa temiz havlu üstünde düz kurutun. Leke kalırsa bir kuru temizleme uzmanına danışın.']
    ],
    'Yün deterjanı ile yumuşatıcı farklı ürünlerdir. Yumuşatıcı yağ çıkarma adımı değildir.',
    'Klorlu veya oksijen bazlı ağartıcı ve genel amaçlı enzimli deterjan kullanmayın.'
  ),
  'ketenden-yag-lekesi': method(
    'Yıkanabilir ketende sıvı deterjan',
    'Yıkanabilir ketende yağı kâğıt havluyla alın. Lekeye sürülebilen sıvı çamaşır deterjanını önce paçanın iç tarafında deneyin, ardından etikete göre yıkayın. Kuru temizlemelik ketene su veya deterjan sürmeyin.',
    [towel, laundry], [liquidWash],
    [
      ['Keten karışımını kontrol edin', 'Saf keten, karışım ve astarlı pantolon farklı bakım gerektirebilir.'],
      ['Taze yağı emdirin', 'Kâğıt havluyu sürtmeden bastırıp kaldırın.'],
      ['Sıvı deterjanı sadece lekeye sürün', 'Denediğiniz yerde renk değişmezse deterjanı ambalajındaki miktar ve bekleme süresine uyarak lekeye sürün.'],
      ['Etikete göre yıkayıp kurutun', 'Çamaşır deterjanıyla yıkayın ve ütüye geçmeden lekeyi kontrol edin.']
    ],
    'Kırışıklığı düzeltmek için ütüye geçmeden önce yağın tamamen çıktığını kontrol edin.',
    'Ketenin doğal rengi, ağartıcının güvenli olduğu anlamına gelmez.'
  ),
  'beklemis-yag-lekesi': method(
    'Beklemiş yağda sıvı çamaşır deterjanı',
    'Yıkanabilir kıyafetteki kurumuş yağ lekesine, ürün talimatı izin veriyorsa, az miktarda sıvı çamaşır deterjanı sürün. Giysiyi bakım etiketine göre yıkayın. Hâlâ iz varsa kumaşa ve yağ lekesine uygun bir çamaşır spreyi deneyebilirsiniz.',
    [laundry], [liquidWash, 'İz kalırsa kumaşa ve yağ lekesine uygun çamaşır spreyi'],
    [
      ['Önceki işlemi belirleyin', 'Giysi yıkanmış, ütülenmiş veya makinede kurutulmuşsa sonucu değerlendirirken bunu dikkate alın.'],
      colourTest,
      ['Lekenin üzerine sıvı deterjan sürüp yıkayın', 'Denediğiniz yerde renk değişmezse sıvı deterjanı ambalajındaki miktar ve bekleme süresine göre lekeye sürün. Giysiyi bakım etiketine göre yıkayın.'],
      checkDry
    ],
    'Kıyafet havada kuruduğunda yağ izi kalırsa kumaşa uygun yağ lekesi spreyiyle bir kez daha deneyebilirsiniz.',
    'Genel amaçlı enzimli spreyleri yün, ipek ve kuru temizlemelik kumaşta kullanmayın.'
  ),
  'yikanmis-yag-lekesi': method(
    'Kurutmadan önce lekeye yeniden müdahale',
    'Yağ lekesi yıkamadan sonra kaldıysa kıyafeti kurutucuya koymayın. Yıkanabilir kumaşta, lekeye sürülebilen sıvı çamaşır deterjanını kumaşın görünmeyen bir yerinde deneyin. Renk değişmezse lekeye sürüp giysiyi tekrar yıkayın.',
    [laundry], [liquidWash],
    [
      ['Islak kumaşı ışıkta inceleyin', 'Giysiyi kurutucuya almadan yağ izinin sınırına bakın. Emin değilseniz havada kurumasını bekleyin.'],
      colourTest,
      ['Sıvı deterjanı lekeye sürüp yeniden yıkayın', 'Deterjanın nemli ya da kuru kumaşa uygulanma talimatına bakın. Ürünü önerilen miktar ve sürede kullanıp giysiyi bakım etiketine göre yeniden yıkayın.'],
      checkDry
    ],
    'Önceki ürünün kalıntısı varsa kendi durulama talimatına göre giderin.',
    'Renk açılması veya doku farkı varsa işlemi tekrarlamayın.'
  ),
  'isi-gormus-yag-lekesi': method(
    'Isı görmüş izde tek kontrollü deneme',
    'Ütülenmiş veya kurutucudan çıkmış yağ lekesini gidermek daha zor olabilir. Giysi yıkanabiliyor ve kumaşta ısı hasarı görünmüyorsa, yağ lekesine uygun çamaşır spreyini küçük bir alanda deneyip etikete göre yıkayın.',
    [laundry], ['Beklemiş yağ lekesine ve kumaşa uygun ön işlem spreyi', wash],
    [
      ['Isı hasarı olup olmadığına bakın', 'Parlak, sert veya rengi değişmiş bölge ısı hasarı olabilir. Hasar görüyorsanız kimyasal uygulamayın.'],
      colourTest,
      ['Beklemiş yağ spreyini yalnız ize sıkın', 'Ambalajdaki bekleme süresini izleyin ve çamaşır deterjanıyla etikete göre yıkayın.'],
      ['Değişmeyen izde durun', 'Giysiyi havada kurutup inceleyin. İzin değişmediği hassas veya değerli bir giysiyi temizlemeciye gösterin.']
    ],
    'Temizlemeciye lekenin daha önce kaç kez yıkandığını ve nasıl ısı gördüğünü söyleyin.',
    'Lekenin üzerine yeniden ütü veya kurutucu ısısı uygulamayın.'
  ),
  'yeni-dokulen-yag': method(
    'Önce döküntüyü sınırlama',
    'Yeni dökülen yağın fazlasını, yüzey güvenle dokunulacak kadar soğuduğunda kâğıt havluyla alın. Yemek parçalarını kaşıkla kaldırın. Kalan yağ izini kıyafete, halıya, döşemeye veya zemine uygun yöntemle temizleyin.',
    [towel, 'Künt kenarlı kaşık', 'Yere döküldüyse kurulama bezi'], ['İlk müdahale için temizlik ürünü gerekmez', 'Kalan yer lekesi için zemine uygun temizleyici'],
    [
      ['Katı parçaları kaldırın', 'Sos veya katı yağ varsa kaşığı kenardan ortaya doğru kullanın. Kumaşı kazımayın.'],
      ['Sıvıyı kâğıt havluyla emdirin', 'Kâğıt havlu yağlandıkça temiz bir kâğıt havluyla tampon yapın. Havluyu yüzeyde sürüklemeyin.'],
      ['Yüzeyi ayırın', 'Kıyafet, halı, koltuk ve duvar için kendi temizlik rehberine bakın. Yere dökülen yemek yağında zemine uygun temizleyici kullanın ve zemini kurulayın.'],
      ['İzin sınırını kontrol edin', 'Yağ tabana veya dolguya ulaştıysa evde daha fazla sıvı dökmeden üreticinin bakım yolunu kontrol edin.']
    ],
    'İlk müdahaleden sonra kullanılan kaşığı ve diğer araçları yıkayın.',
    'Döküntü sıcaksa önce güvenli biçimde soğumasını bekleyin. Kimliği belirsiz endüstriyel yağ için bu ev tipi yöntemi kullanmayın.'
  ),
  'yag-lekesi-neden-cikmaz': method(
    'Yağ kalıntısı ile yüzey hasarını ayırma',
    'Yağ lekesi beklediğinde veya kurutucuda ısı gördüğünde çıkması zorlaşabilir. Kuruyunca kalan yapışkanlık ürün kalıntısı, soluk ya da parlak iz yüzey hasarı olabilir. Yeni bir ürün sürmeden önce önceki temizleyicinin durulama talimatına bakın.',
    ['Gün ışığı veya lamba', 'Önceki ürünlerin etiketleri', 'Fotoğrafla karşılaştırmak için isteğe bağlı telefon veya fotoğraf makinesi'], ['Kontrol aşamasında yeni temizleyici gerekmez'],
    [
      ['İzi farklı açılarda inceleyin', 'Koyu yağ izi ile eğik ışıkta belirginleşen parlak veya mat hasarı karşılaştırın.'],
      ['Önceki uygulamayı not edin', 'Ürün adı, bekleme süresi, yıkama ve kurutma bilgilerini kaydedin.'],
      ['Kalıntı talimatını okuyun', 'Önceki temizleyici durulama gerektiriyorsa yüzeyin izin verdiği yöntemi kontrol edin.'],
      ['Hasar ihtimalinde denemeyi bırakın', 'Kumaşın rengi açılmış veya kaplama matlaşmışsa uygun bakım uzmanına önceki işlemleri anlatın.']
    ],
    'Fotoğraf çekip kuruduktan sonraki görünümle karşılaştırmak, izin değişip değişmediğini anlamayı kolaylaştırır.',
    'Ürünleri art arda karıştırmak veya dozu artırmak hasarı büyütebilir.'
  ),
  'yemek-yagi-lekesi': method(
    'Yemek yağı döküldüğünde ilk adımlar',
    'Dökülen yağ soğuyunca fazlasını kâğıt havluyla alın. Pamuklu giysinin etiketi yıkamaya izin veriyorsa kalan ize birkaç damla elde bulaşık deterjanı sürün. Köpüğü tamamen durulayıp giysiyi etiketine göre yıkayın.',
    [towel, 'Kaşık', laundry], [dish, water, wash, 'İsteğe bağlı karbonat'],
    [
      ['Fazla yağı alın', 'Bu adımları bakım etiketi yıkamaya izin veren pamuklu giysilerde uygulayın. Yağ soğuyunca kâğıt havluyu lekeye hafifçe bastırıp kaldırın.'],
      ['Fazla yağ için karbonat deneyebilirsiniz', 'Yüzeyde hâlâ yağ varsa lekeye ince bir kat kuru karbonat serpin. Yağı emince kaşıkla alın ve kumaşta kalan tozu silkeleyin.'],
      ['Kalan ize bulaşık deterjanı sürün', 'Elde bulaşık deterjanını önce giysinin iç yüzünde, görünmeyen küçük bir yerde deneyin. Renk ve doku değişmezse birkaç damlayı sadece lekeye uygulayın.'],
      ['Köpüğü durulayıp yıkayın', 'Bulaşık deterjanının köpüğünü tamamen durulayın. Giysiyi çamaşır deterjanıyla bakım etiketine göre yıkayın. Havada kurutup lekeyi kontrol edin.']
    ],
    'Yağı alırken kâğıt havlu kirlendikçe temiz bir kısmını kullanın.',
    'Kuru temizleme gerektiren giysilerde evde ön işlem yapmayın. Yün ve ipek için kumaşa özel bakım talimatını izleyin.'
  ),
  'salcali-yag-lekesi': method(
    'Salçalı yağ lekesinde yağ ve renk izi',
    'Salçalı sosu kaşıkla kaldırın. Yıkanabilir kumaşta, ürün izin veriyorsa sıvı çamaşır deterjanını önce kumaşın görünmeyen bir yerinde deneyip lekeye sürün ve yıkayın. Yağ çıktıktan sonra kırmızı iz kalırsa iki etiket uygun olduğunda oksijenli leke çıkarıcı deneyin.',
    ['Kaşık', laundry, 'Toz leke çıkarıcı kullanılacaksa ürünün ölçeği'], [liquidWash, 'İsteğe bağlı oksijen bazlı toz leke çıkarıcı'],
    [
      ['Kumaşın üzerindeki sosu kaşıkla alın', 'Kaşığı lekenin kenarından ortasına doğru hareket ettirin. Sosu kumaşa bastırmadan kaldırın.'],
      colourTest,
      ['Lekenin üzerine sıvı deterjan sürüp yıkayın', 'Kumaşın rengi değişmediyse sıvı deterjanı ambalajdaki miktar ve süreye göre sürün. Sonra giysiyi bakım etiketine göre yıkayın.'],
      ['Kırmızı veya turuncu iz kaldı mı bakın', 'Yağ izi çıkmış ama sosun rengi kalmışsa giysinin bakım etiketi ve ürün etiketi izin verdiğinde oksijen bazlı toz leke çıkarıcıyı deneyin.']
    ],
    'Oksijen bazlı toz kullanıyorsanız ambalajdan ne kadar ve nereye eklemeniz gerektiğini kontrol edin.',
    'İz çıkana kadar giysiyi ütülemeyin veya kurutucuya koymayın. Yün ve ipekte yalnızca kumaş için uygunluğu açıkça belirtilen ürünleri kullanın.'
  ),
  'motor-yagi-lekesi': method(
    'Yıkanabilir kıyafette motor yağı lekesi',
    'Yıkanabilir iş kıyafetindeki küçük motor yağı lekesini kâğıt havluyla alın. Kalan iz için motor yağına ve kumaşa uygun çamaşır leke çıkarıcısı kullanın. Yağa doymuş giysiyi evde yıkamayın veya kurutucuya koymayın.',
    [towel, laundry], ['Motor yağına ve kumaşa uygun çamaşır ön işlem köpüğü', wash],
    [
      ['Yüzeydeki yağı alın', 'Küçük bir lekede fazla yağı kâğıt havluyla emdirin. Yağ kumaşa derinlemesine işlemişse giysiyi ev tipi makineye koymayın.'],
      colourTest,
      ['Köpüğü lekeye uygulayın', 'Ambalajda belirtilen miktar ve bekleme süresine uyun. Ardından giysiyi bakım etiketine göre yıkayın.'],
      ['Isı vermeden sonucu kontrol edin', 'Yağ izi kalmışsa giysiyi kurutucuya koymayın. Daha fazla ürün denemeden profesyonel bakım alın.']
    ],
    'Ürün etiketinde motor yağına ve kumaşa uygunluk bilgisini arayın.',
    'Kıyafette benzin, tiner veya motor temizleyicisi kullanmayın. Yağ bulaşmış giysiyi kurutucuya koymayın.'
  ),
  'gres-yagi-lekesi': method(
    'Kıyafetten gres lekesini çıkarma',
    'Kıyafetteki gres yağı kalınsa kaşıkla, kumaşa bastırmadan alın. Yıkanabilir giyside gres lekesine uygun çamaşır leke çıkarıcısını küçük bir alanda deneyip yıkayın. Ağır bulaşta iş yerinin temizlik talimatını izleyin.',
    ['Kaşık', laundry], ['Gres lekesine uygun çamaşır leke çıkarıcısı', wash],
    [
      ['Fazla gresi kaşıkla alın', 'Kaşığı lekenin kenarından ortasına doğru yavaşça hareket ettirin. Kumaşı kazımadan yüzeydeki gresi kaldırın.'],
      colourTest,
      ['Leke çıkarıcıyı uygulayıp giysiyi yıkayın', 'Ambalajdaki miktar ve bekleme süresine uyun. Giysiyi çamaşır deterjanıyla bakım etiketine göre yıkayın.'],
      ['Koyu iz veya yağlı kalıntı var mı bakın', 'Giysiyi havada kurutup lekeye gün ışığında bakın. İz varsa ütü veya kurutucu kullanmayın.']
    ],
    'İş kıyafetinde yoğun gres bulaşı varsa iş yerinin temizleme talimatlarını izleyin.',
    'Yağa doymuş giysiyi evde yıkamayın. Kumaş üzerinde tiner veya benzin kullanmayın.'
  ),
  'hidrolik-yag-lekesi': method(
    'Hidrolik yağ döküldüğünde güvenli temizlik',
    'Hidrolik yağ döküldüyse önce ürünün adını ambalajdan bulun. Üreticinin güvenlik bilgi formunda döküntünün nasıl toplanacağına ve hangi koruyucu ekipmanın gerekli olduğuna bakın. Ürünü tanımıyorsanız bakım ekibine haber verin.',
    ['Ürün ambalajı veya güvenlik bilgi formu', 'Formda belirtilen koruyucu ekipman'], ['Formda belirtilen emici veya temizleyici'],
    [
      ['Dökülen ürünün adını bulun', 'Ambalajdan hidrolik sıvının tam adını ve üreticisini kontrol edin.'],
      ['Dökülme talimatını okuyun', 'Üreticinin güvenlik bilgi formunda döküntüyü toplama, korunma ve atıkla ilgili bölümlere bakın.'],
      ['Yüzeye uygun iş yeri talimatını izleyin', 'Yağ iş kıyafetine, zemine veya makineye bulaşmış olabilir. İlgili yüzey için geçerli temizlik talimatını uygulayın.'],
      ['Ürünü tanımlayamıyorsanız bakım ekibine bildirin', 'Yağın nereye ve ne kadar döküldüğünü belirtip temizliğe başlamadan önce uygulanacak yöntemi doğrulayın.']
    ],
    'Yağı emdirmek için kullanılan malzemenin nasıl atılacağını güvenlik bilgi formundan kontrol edin.',
    'Hidrolik sıvıyı tanımlamadan üzerine temizleyici veya ev tipi karışım uygulamayın.'
  ),
  'yag-lekesi-urun-secimi': method(
    'Lekenin türüne ve yüzeye göre ürün seçme',
    'Yıkanabilir kıyafette yağ lekesini çıkarmak için lekeye sürülebilen sıvı çamaşır deterjanıyla başlayın. Halı, koltuk ve duvarda yüzeyin bakım talimatına uygun temizleyiciyi seçin. Sprey alacaksanız ambalajda yağ lekesi ve kumaş uygunluğunu arayın.',
    ['Giysinin bakım etiketi', 'Temizleyici ambalajı', 'Toz seçilirse ürünün ölçeği'], ['Seçilen yöntemin malzemeleri aşağıdaki karşılaştırmada yer alır'],
    [
      ['Lekenin nereden geldiğine bakın', 'Yeni oluşan bir yemek lekesi, kurumuş yağ izi veya motor yağı için yüzeye ve lekenin kaynağına göre ürün seçin.'],
      ['Lekeli yüzeyi belirleyin', 'Yıkanabilir giysi, yün ve ipek, döşeme ve sert yüzey için farklı ürün etiketleri arayın.'],
      ['Ürünün işlevine bakın', 'Sprey ve köpük ürünün nasıl uygulandığını anlatır. Yağı çıkarıp çıkaramayacağını ve kumaşa uygunluğunu öğrenmek için ambalajı okuyun.'],
      ['Tek bir ön işlem seçip test edin', 'Ürünü önce kumaşın ya da yüzeyin görünmeyen küçük bir yerinde deneyin. Uygun sonuçta seçilen yöntemin adımlarını izleyin.']
    ],
    'Çamaşır deterjanı, leke ön işlem ürünü ve yumuşatıcı farklı amaçlara hizmet eder.',
    'Klorlu çamaşır suyunu sirke veya başka temizleyiciyle karıştırmayın. Elde bulaşık deterjanını makinenin deterjan gözüne koymayın.'
  ),
  'aspirin-yag-lekesi': method(
    'Aspirin yerine taze yağda mısır nişastası',
    'Taze yağda ilk iş kâğıt havluyla fazla yağı almak olsun. Giysi pamukluysa ve etiketi yıkamaya izin veriyorsa kalan yağı emdirmek için kuru mısır nişastası kullanabilirsiniz. Ardından kumaşa uygun yıkama adımlarını izleyin.',
    [towel, 'Kaşık'], ['Mısır nişastası'],
    [
      ['Taze yağı kâğıt havluyla alın', 'Kâğıt havluyu lekeye bastırıp kaldırın.'],
      ['Kuru mısır nişastası serpin', 'İnce kat hâlinde serpin. Yağı emen tozu kaşıkla hafifçe kaldırıp kalanı silkeleyin.'],
      ['Yağ izi kalmış mı bakın', 'Kalan yağ için kumaşa uygun ön işlem seçmek üzere kıyafet rehberine geçin.'],
      ['Kumaş sınırını kontrol edin', 'Yün, ipek veya kuru temizlemelik giysi için bakım etiketinden şaşmayın.']
    ],
    'Aspirin, tuz ve sirkeyi aynı lekeye sırayla denemek yerine yağın türüne ve yüzeye göre bir yöntem seçin.',
    'Aspirini temizlik ürünü olarak kullanmayın.'
  ),
  'yag-cozucu-izi': method(
    'Kalıntıyı yüzeye zarar vermeden kontrol etme',
    'Yağ çözücüden sonra köpük veya yapışkanlık kaldıysa ürünün durulama talimatına bakın. Suya uygun yüzeyde kalıntıyı iyice sıkılmış bezle alın. Yüzey kuruduğunda matlık veya renk açılması sürüyorsa kaplama hasar görmüş olabilir.',
    ['Ürün ambalajı', 'İki yumuşak mikrofiber bez'], ['Her iki talimat izin veriyorsa temiz su'],
    [
      ['Kullanılan yağ çözücüyü belirleyin', 'Ambalajdaki durulama ve yüzey uyumu bilgisini okuyun.'],
      ['Suya izin veriliyorsa bezi sıkın', 'Kalıntıyı temiz suyla hafif nemlendirilmiş bezle kaldırın. Kaplama suya uygun değilse üreticinin tarif ettiği yöntemi izleyin.'],
      ['İkinci bezle kurulayın', 'Yağ veya temizleyici kalıntısını geniş bir alana yaymadan alın.'],
      ['Kuru yüzeyde matlığı karşılaştırın', 'İzin şekli değişmiyor ve parlaklık farkı kalıyorsa yeni kimyasal eklemeden yüzey bakımına danışın.']
    ],
    'Yağ çözücünün tam adını ve yüzeyde ne kadar kaldığını not edin.',
    'Kalıntıyı gidermek için sirke veya başka bir temizleyici eklemeyin.'
  ),
  'eldeki-yag': method(
    'Yemek yağında el sabunu, iş yağında cilde uygun ürün',
    'Elinize bulaşan soğumuş yemek yağını el sabunu ve suyla yıkayın. Motor yağı veya başka bir iş yağı bulaştıysa ürünün cilt teması talimatını izleyin.',
    ['Temiz havlu', towel], ['El sabunu ve su', 'İş yağı için gerekirse cilde uygunluğu belirtilen el temizleyicisi'],
    [
      ['Fazla yemek yağını alın', 'Kâğıt havluyla yüzeydeki fazla yağı silin.'],
      ['El sabunuyla yıkayın', 'Parmak aralarını ve tırnak çevresini sabunlayın.'],
      ['Durulayıp kurulayın', 'Ellerinizi temiz suyla durulayıp havluyla kurutun.'],
      ['Endüstriyel yağda etiketi okuyun', 'Güvenlik bilgi formunun cilt teması talimatını izleyin. Yalnızca cilt için etiketlenmiş el temizleyicisi kullanın.']
    ],
    'Yüzey yağ çözücüsü ile atölye el temizleyicisi farklı ürünlerdir.',
    'Benzin, tiner ve mutfak yağ çözücüsünü cilde uygulamayın. Bu adımlar sıcak yağ yanığı için kullanılmaz.'
  ),
  'yanmis-yag': method(
    'Tava, ocak ve fırından yanmış yağı temizleme',
    'Yanmış yağı temizlemeden önce tava, ocak veya fırının soğumasını bekleyin. Yapışmaz tavada ılık bulaşık deterjanlı su ve çizmez sünger kullanın. Cam ocak ve fırında cihaz kılavuzunun izin verdiği temizleyiciyi seçin.',
    ['Çizmez sünger veya uygun ocak pedi', 'Yumuşak temizlik bezi', 'Ürün etiketinde belirtilen koruyucu ekipman'], ['Tava için ılık su ve bulaşık deterjanı', 'Cam ocak için cam seramik temizleyicisi', 'Kılavuz izin veriyorsa fırın temizleyicisi'],
    [
      ['Yüzeyin soğumasını bekleyin', 'Ocağı veya fırını kapatın. Temizliğe başlamadan önce yüzeyin soğuduğundan emin olun.'],
      ['Yapışmaz tavadaki kalıntıyı yumuşatın', 'Üretici izin veriyorsa tavada ılık deterjanlı su bekletin. Yumuşayan kalıntıyı çizmez süngerle alın.'],
      ['Ocak veya fırın için uygun ürünü seçin', 'Cam ocakta cam seramiğe uygun temizleyici kullanın. Fırında ürünün uygulanabileceği yüzeyleri cihaz kılavuzundan kontrol edin.'],
      ['Temizleyici kalıntısını giderin', 'Ürün etiketindeki silme veya durulama talimatını izleyin. Sert kalıntı kaldıysa zorlamadan cihaz kılavuzuna bakın.']
    ],
    'Fırın rafı, iç kaplama ve kapak camı için ayrı bakım talimatları olabilir.',
    'Temizlik ürünlerini karıştırmayın. Yapışmaz tava ve cam ocakta tel sünger veya metal kazıyıcıyla yüzeyi zorlamayın.'
  )
};
