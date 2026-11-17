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
      ['Fazla yağı kâğıt havluyla alın', 'Kâğıt havluyu yağ lekesine bastırıp kaldırın. Yağın yayılmaması için kumaşı ovalamayın.'],
      ['Gerekirse mısır nişastasıyla fazla yağı alın', 'Kâğıt havluyla aldıktan sonra yüzeyde hâlâ yağ varsa ince bir kat kuru nişasta serpebilirsiniz. Yağı emen nişastayı kaşıkla hafifçe alıp kalanı silkeleyin.'],
      ['Lekeye birkaç damla bulaşık deterjanı sürün', 'Yeni oluşmuş bir yemek lekesiyse, elde bulaşık deterjanını önce kumaşın görünmeyen küçük bir yerinde deneyin. Renk ve doku değişmezse birkaç damlayı lekeye hafifçe yayın.'],
      ['Köpüğü durulayın ve giysiyi yıkayın', 'Köpüğü tamamen durulayın. Sonra giysiyi çamaşır deterjanıyla bakım etiketine göre yıkayın. Havada kurutup izi kontrol edin.']
    ],
    'Leke kuruduysa kurumuş yağ lekesi rehberindeki adımları izleyin.',
    'Elde bulaşık deterjanını makineye eklemeyin. Yün, ipek ve kuru temizlemelik giysilerde kendi bakım talimatını izleyin.'
  ),
  'kot-pantolondan-yag-lekesi': method(
    'Kot pantolonda yağ lekesine ön işlem',
    'Pamuklu kotunuz evde yıkanabiliyorsa, yemekten kalan yeni bir yağ lekesine birkaç damla elde bulaşık deterjanı sürebilirsiniz. Önce paçanın içinde deneyin ve makinede yıkamadan önce köpüğü tamamen durulayın.',
    [towel, laundry], [dish, water, wash, 'Alternatif olarak lekeye sürülebilen sıvı çamaşır deterjanı'],
    [
      ['Fazla yağı alın', 'Kâğıt havluyu lekeye hafifçe bastırıp kaldırın. Yağın yayılmaması için kotu ovalamayın.'],
      ['Lekenin üzerine az miktarda deterjan sürün', 'Pamuklu kotun etiketi yıkamaya izin veriyorsa, yeni yağ lekesi yemekten kaynaklanıyorsa deterjanı önce paçanın iç tarafında deneyin. Renk değişmezse birkaç damla sürün. Lekeye sürülebilen sıvı çamaşır deterjanı da kullanılabilir.'],
      ['Durulayın ve yıkayın', 'Elde bulaşık deterjanı kullandıysanız köpüğü tamamen durulayın. Çamaşır deterjanı için ambalajdaki talimatı izleyin. Kotu ters çevirip bakım etiketinde belirtilen programda yıkayın.'],
      ['Havada kurutup kontrol edin', 'Kot pantolonu havada kurutun ve yağ izi kalıp kalmadığına bakın. İz varsa kurutucu veya ütü kullanmayın.']
    ],
    'Arka cepteki lekede çalışırken cep içine bir kat kâğıt havlu koyarak yağı diğer kata taşımayın.',
    'Koyu mavi ve siyah kotta sertçe ovalamak rengin açılmasına yol açabilir. Su sıcaklığını bakım etiketine göre seçin ve pantolonu gölgede kurutun.'
  ),
  'pantolondan-yag-lekesi': method(
    'Yıkanabilir pantolonda sıvı çamaşır deterjanı',
    'Yıkanabilir kumaş pantolonda fazla yağı kâğıt havluyla alın. Sıvı çamaşır deterjanı lekeye sürülebiliyorsa önce bel kısmının iç yüzünde deneyin. Ardından lekeye uygulayıp etikete göre yıkayın. Yünlü ya da kuru temizlemelik takım pantolonunda bakım etiketini izleyin.',
    [towel, laundry], [liquidWash],
    [
      ['Astarı ve lif etiketini okuyun', 'Evde yıkanabiliyorsa devam edin. Kuru temizleme işareti varsa lekeyi temizlemeciye gösterin.'],
      ['Kumaş katlarını ayırın', 'Pantolonda lekenin altına kâğıt havlu koyun. Üstteki yağı ikinci bir kâğıt havluyla tamponlayarak alın.'],
      ['Lekenin üzerine az miktarda deterjan sürün', 'Önce kumaşın görünmeyen küçük bir yerinde deneyin. Renk değişmezse sıvı çamaşır deterjanını ambalajdaki miktar ve süreye uyarak sadece lekeye sürün.'],
      ['Etikete göre yıkayın', 'Çamaşır deterjanıyla etiketteki programı kullanın. Ütü çizgisini düzeltmeden önce izin kaybolduğundan emin olun.']
    ],
    'Cepli pantolonda lekenin astara kadar geçip geçmediğine de bakın.',
    'Yünlü veya yalnızca kuru temizlemeye uygun pantolonda bu yöntemi uygulamayın.'
  ),
  'gomlekten-yag-lekesi': method(
    'Pamuklu gömlekte yeni oluşan yağ lekesi',
    'Pamuklu gömleğin etiketi yıkamaya izin veriyorsa, fazla yağı kâğıt havluyla alın. Yemekten kalan yeni bir yağ lekesinde, gömleğin iç yüzünde denedikten sonra birkaç damla elde bulaşık deterjanı sürün. Köpüğü iyice durulayıp gömleği bakım etiketine göre yıkayın. İpek gömlekte ipeğe özel bakım talimatını izleyin.',
    [towel, laundry], [dish, water, wash],
    [
      ['Lekeyi arka kata geçirmeyin', 'Gömleği açın. Lekenin altına kâğıt havlu yerleştirip üstteki yağı ikinci bir kâğıt havluyla alın.'],
      ['Bulaşık deterjanını gömleğin iç yüzünde deneyin', 'Yıkanabilen pamuklu gömlekte, yemekten kalan yeni bir iz için deterjanı önce gömleğin alt kenarının iç yüzünde deneyin. Renk ve doku değişmiyorsa birkaç damlayı lekeye yayın. Yaka veya manşeti fırçalamayın.'],
      ['Köpüğü durulayın', 'Lekeli alanı bakım etiketine uygun sıcaklıkta suyla iyice durulayın.'],
      ['Normal yıkamaya geçin', 'Gömleği çamaşır deterjanıyla etikete göre yıkayın. Ütülemeden önce manşet ve yaka dahil lekeli yeri kontrol edin.']
    ],
    'Koyu renkli bir gömlekte denemeyi etek ucunun iç tarafında yapabilirsiniz.',
    'Makineye elde bulaşık deterjanı eklemeyin. Bu yöntemi ipek veya kuru temizlemelik gömleğe uygulamayın.'
  ),
  'tisortten-yag-lekesi': method(
    'Baskıyı koruyarak ön işlem',
    'Yıkanabilir tişört veya penyede fazla yağı kâğıt havluyla alın. Lekeye sürülebilen sıvı çamaşır deterjanını önce tişörtün iç yüzünde deneyin. Lekeli yer baskıdaysa baskıya uygun bakım talimatını izleyin.',
    [towel, laundry], [liquidWash],
    [
      ['Yağı bastırarak alın', 'Kâğıt havluyu lekeye bastırıp kaldırın. Baskıyı kazımayın.'],
      ['Baskının yerini kontrol edin', 'Leke baskının üzerindeyse ve ürün baskıya uygunluğu belirtmiyorsa ön işlem yapmadan giysi üreticisine danışın.'],
      ['Sıvı çamaşır deterjanını sadece lekeye sürün', 'Önce kumaşın görünmeyen küçük bir yerinde deneyin. Renk değişmezse deterjanı ambalajdaki miktar ve süreye uyarak uygulayın.'],
      ['Ters çevirip yıkayın', 'Etiket izin veriyorsa tişörtü ters çevirip çamaşır deterjanıyla yıkayın. Kurutma öncesi lekeyi inceleyin.']
    ],
    'Baskısız, dayanıklı pamukta taze yağ için genel kıyafet rehberindeki nişasta yöntemine de bakabilirsiniz.',
    'Baskının üzerinde fırçalı leke çıkarıcı veya yüksek ısı kullanmayın.'
  ),
  'beyaz-kiyafetten-yag-lekesi': method(
    'Yağa yönelik sprey, gerekiyorsa oksijenli toz',
    'Yıkanabilir beyaz tişört veya gömlekte yağı kâğıt havluyla alın. Yağ lekesine uygun çamaşır spreyini önce görünmeyen bir yerde deneyin, sonra giysiyi etiketine göre yıkayın. Sosun rengi kalırsa ağartıcı kullanmadan önce iki etiketi de okuyun.',
    [towel, laundry, 'Oksijenli toz kullanılacaksa ürünün ölçeği'], ['Yağ lekesine uygun çamaşır ön işlem spreyi', wash, 'İsteğe bağlı oksijen bazlı toz leke çıkarıcı'],
    [
      ['Ağartma işaretine bakın', 'Beyaz renkten bağımsız olarak kumaş, baskı ve elastik detayların bakım talimatını kontrol edin.'],
      ['Yağ fazlasını emdirin', 'Kâğıt havluyla bastırıp kaldırın. Lekeyi büyütmeyin.'],
      ['Yağ lekesi spreyini uygulayın', 'Gizli bir alanda test edin. Spreyin ambalajındaki bekleme süresine uyup çamaşır deterjanıyla yıkayın.'],
      ['Yağ iziyle sos rengini ayırın', 'Yağ azaldığı hâlde sos rengi kalırsa sonraki yıkamada oksijenli tozu kendi ölçeği ve dozuyla kullanmayı değerlendirin.']
    ],
    'Oksijenli tozun nereye ekleneceğini ambalajdan okuyun. Her ürün deterjan gözüne konmaz.',
    'Yün ve ipekte oksijenli toz kullanmayın. Klorlu çamaşır suyunu sirke veya başka temizleyicilerle karıştırmayın.'
  ),
  'elbiseden-yag-lekesi': method(
    'Yıkanabilir elbise ve astarda sıvı deterjan',
    'Elbise, bluz veya eteğin kumaşı ve astarı yıkanabiliyorsa yağı kâğıt havluyla alın. Ürün talimatı izin veriyorsa az miktarda sıvı çamaşır deterjanını kumaşın görünmeyen bir yerinde deneyip lekeye sürün. Kuru temizlemelik veya hassas süslemeli elbiseyi temizlemeciye gösterin.',
    [towel, laundry], [liquidWash],
    [
      ['Dış kumaşı ve astarı kontrol edin', 'Yalnızca en hassas katın izin verdiği yöntemle ilerleyin.'],
      ['Astarı koruyun', 'Katları zorlamadan araya kâğıt havlu koyun ve üstteki yağı tamponlayın.'],
      ['Deterjanı giysinin iç yüzünde deneyin', 'Elbisenin dışarıdan görünmeyen küçük bir yerinde deterjanı deneyin. Renk ve doku değişmezse ambalajdaki talimata göre sadece lekeli kata sürün.'],
      ['Elbisenin programıyla yıkayın', 'Çamaşır deterjanıyla etikete göre yıkayın. Elbisenin izin verdiği biçimde kurutup izi kontrol edin.']
    ],
    'Tek lekede tüm eteği ön işlemle ıslatmak yerine lekeli katı ayırın.',
    'Yalnız kuru temizleme etiketinde veya süslemelerin bakımı belirsizse ıslak ön işlem yapmayın.'
  ),
  'monttan-yag-lekesi': method(
    'Teknik dış kumaşta yerel sıvı deterjan',
    'Monttaki fazla yağı kâğıt havluyla alın. Su geçirmez montta, üretici izin veriyorsa lekeye az miktarda önerilen sıvı çamaşır deterjanını sürün. Dolgulu montlarda dolgunun bakım talimatına bakın.',
    [towel, laundry], ['Üreticinin onayladığı sıvı çamaşır deterjanı'],
    [
      ['Kaplamayı ve etiketi bulun', 'Su geçirmez membran veya özel kaplama varsa üreticinin bakım rehberini açın.'],
      ['Yağı yaymadan kaldırın', 'Kâğıt havluyu bastırıp kaldırın. Kaplamayı sertçe fırçalamayın.'],
      ['Onaylı sıvı deterjanı lekeye uygulayın', 'Yalnızca üretici noktasal ön işleme izin veriyorsa dış kumaşa az miktarda sürün.'],
      ['Üreticinin programını kullanın', 'Yıkama ve durulama ayarlarını montun talimatından seçin. Leke kalırsa yeni bir kimyasal eklemeden önce üreticiye danışın.']
    ],
    'Örneğin GORE-TEX bazı lekelerde yerel sıvı deterjan önerir. Kendi montunuzun bakım kılavuzu önceliklidir.',
    'GORE-TEX bakımında toz deterjan, yumuşatıcı, klorlu ağartıcı veya genel amaçlı leke çıkarıcı kullanmayın.'
  ),
  'sisme-monttan-yag-lekesi': method(
    'Dolguya özel yıkama',
    'Şişme monttaki yağı kâğıt havluyla hafifçe alın. Mont yıkanabiliyorsa kuş tüyü veya sentetik dolgu için üreticinin önerdiği yıkama sıvısını ve kurutma ayarını kullanın.',
    [towel, 'Üreticinin izin verdiği tipte çamaşır makinesi'], ['Dolgu tipine uygun, üreticinin önerdiği yıkama sıvısı'],
    [
      ['Dolgu türünü doğrulayın', 'Bakım etiketinden kuş tüyü veya sentetik dolguyu ve evde yıkama iznini kontrol edin.'],
      ['Dış kumaştaki fazlalığı emdirin', 'Kâğıt havluyla bastırıp kaldırın. Bölgeyi suya doyurmayın.'],
      ['Dolguya özel sıvıyla yıkayın', 'Montun talimatı izin veriyorsa önerilen yıkama sıvısını belirtilen doz ve programla kullanın.'],
      ['Dolgunun tamamen kurumasını sağlayın', 'Leke hâlâ görünüyorsa art arda güçlü ürün denemeyin. Üreticiden yağ bulaşmış mont için kurutma talimatı alın. Dolguyu nemli bırakmayın.']
    ],
    'Makine türü, durulama ve kurutma ayarlarını birlikte kontrol edin. Dolgu bakımında bunlar da leke ürünü kadar önemlidir.',
    'Üretici yasaklıyorsa yumuşatıcı ve ağartıcı eklemeyin. Belirsiz bakım etiketinde evde denemeyi durdurun.'
  ),
  'esofmandan-yag-lekesi': method(
    'Esnek kumaş için noktasal sıvı ön işlem',
    'Yıkanabilir eşofmandaki yağı kâğıt havluyla alın. Yağ lekesine uygun sıvı leke çıkarıcıyı önce paçanın iç tarafında deneyin. Renk değişmezse lekeye uygulayıp etikete göre yıkayın.',
    [towel, laundry], ['Sentetik veya esnek kumaşa uygun sıvı leke çıkarıcı', wash],
    [
      ['Esnek lif ve baskıyı kontrol edin', 'Leke logo üzerindeyse ürünün baskıya uygunluğunu doğrulayın.'],
      ['Yağı kâğıt havluyla emdirin', 'Kumaşı gerip ovalamadan yağı alın.'],
      ['Sıvıyı sadece izde kullanın', 'Paçanın iç tarafındaki denemede renk değişmediyse ürünü ambalajdaki süreyle kullanın. Kumaşı fırçalamayın.'],
      ['Bakım etiketindeki programı seçin', 'Çamaşır deterjanıyla yıkayın. Etiket yumuşatıcıyı yasaklıyorsa ilgili gözü boş bırakın.']
    ],
    'Nem yönetimli spor kumaşlarında marka bakım talimatı genel eşofman önerisinden önce gelir.',
    'Leke dururken yüksek ısıya geçmeyin. Baskı veya elastanla uyumu belirsiz ağartıcı uygulamayın.'
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
    'Yıkanabilir kılıf ve sabit döşeme için ayrı yol',
    'Koltuktaki fazla yağı kâğıt havluyla hafifçe alın. Kılıfın etiketi yıkamaya izin veriyorsa kılıfı çıkarıp talimata göre yıkayın. Sabit döşemede üreticinin izin verdiği temizleyiciyi önce görünmeyen bir yerde deneyin.',
    [towel, 'Sabit döşeme için iki temiz beyaz bez', laundry], ['Yıkanabilir kılıf için yağ lekesi ön işlem spreyi ve çamaşır deterjanı', 'Sabit döşeme için kumaş türüne ve yağ lekesine uygun döşeme köpüğü'],
    [
      ['Kılıfın bakım talimatını bulun', 'Fermuarın açılması yıkama izni anlamına gelmez. Üretici kılıfın yıkanmasına izin veriyorsa çıkarın.'],
      ['Yağı emdirin', 'Baskısız kâğıt havluyla bastırıp kaldırın. Döşemeyi ovalamayın.'],
      ['Kılıf veya döşeme yolunu seçin', 'Yıkanabilir kılıfta gizli nokta testinden sonra yağ lekesi spreyini kullanıp deterjanla etikete göre yıkayın. Sabit döşemede köpüğü önce arka alt köşede deneyin ve kuruyunca kontrol edin.'],
      ['Sabit döşemeyi tamponlayıp kurutun', 'Köpük testi uygunsa ambalaj izin verdiğinde köpüğü beyaz beze alın ve kenardan ortaya tamponlayın. Ürünün tarif ettiği kalıntı temizliğini ikinci bezle yapın.']
    ],
    'Döşeme kuruyunca eğik ışıkta yağ izi ve su halkasını ayrı ayrı kontrol edin.',
    'Keten, kadife veya yalnız profesyonel temizliğe uygun döşemede bu yöntemi genellemeyin. Dolguyu ıslatmayın.'
  ),
  'deri-koltuktan-yag-lekesi': method(
    'Deri kaplamasına özel temizleyici',
    'Deri koltuktaki fazla yağı kuru bezle bastırıp kaldırın. Deri koruyucu kaplamalıysa üreticinin önerdiği temizleyiciyi minderin altında deneyin. Yağ deriye işlemişse deri bakım uzmanına danışın.',
    [cloth, 'İkinci kuru bez'], ['Deri tipine uygun, koltuk üreticisinin onayladığı deri temizleyicisi'],
    [
      ['Deri türünü öğrenin', 'Koltuk modelinden derinin koruyucu kaplamalı mı, emici anilin deri mi olduğunu kontrol edin.'],
      ['Kuru bezle bastırıp kaldırın', 'Taze yağı sürtmeden alın. Derinin içine çekilmiş izi kazımayın.'],
      ['Deri temizleyicisini gizli yerde deneyin', 'Üretici izin veriyorsa ürünü bezle minderin arkasında test edin. Kuruduğunda renk ve parlaklığa bakın.'],
      ['Lekenin üzerinde kısa ve kontrollü çalışın', 'Test uygunsa ambalajdaki yöntemi izleyin ve kalıntıyı ikinci bezle tarif edildiği şekilde alın.']
    ],
    'Yağ emilip koyu bir gölge bıraktıysa deri bakım uzmanına lekenin türünü söyleyin.',
    'Bulaşık deterjanı, alkol, sirke ve çamaşır leke çıkarıcılarını deriye uygulamayın.'
  ),
  'tul-perdeden-yag-lekesi': method(
    'Yıkanabilir tülü filede yıkama',
    'Yıkanabilir tül perdede lekenin altına kâğıt havlu koyun, üzerindeki yağı başka bir havluyla alın. Tüle uygun leke ürününü önce alt kenarda deneyin, ardından perdeyi bakım etiketine göre yıkayın.',
    ['Yıkama filesi', laundry, towel], ['Tülün lifine uygun hafif sıvı ön işlem ürünü', 'Hassas kumaş için sıvı çamaşır deterjanı'],
    [
      ['Yıkama iznini kontrol edin', 'Yıkanabilir tülü çıkarın ve kancalarını sökün. Yıkama izni yoksa profesyonel bakım alın.'],
      ['Katları birbirinden ayırın', 'Lekenin altına kâğıt havlu koyun. İkinci bir kâğıt havluyla yüzeydeki yağı emdirin.'],
      ['Sıvıyı tülün kenarında deneyin', 'Test uygunsa ön işlem sıvısını tarif edilen doz ve süreyle yağ izine uygulayın.'],
      ['Fileye alıp yıkayın', 'Tülü yıkama filesine koyup hassas kumaş deterjanı ve etiketteki programla yıkayın.']
    ],
    'Kurumadan önce tülü açıp kıvrımların arasında kalan yağ izini kontrol edin.',
    'Tülü sertçe fırçalamayın. Renk ve lif uyumu belirsizse ağartıcı kullanmayın.'
  ),
  'duvardan-yag-lekesi': method(
    'Silinebilir mutfak boyasında hafif sabunlu su',
    'Silinebilir duvardaki yağ lekesi için ılık suya birkaç damla elde bulaşık deterjanı ekleyin. Yumuşak bezi karışıma batırıp iyice sıkın, önce gözden uzak bir yerde deneyin. Lekeyi hafifçe silin ve kalıntıyı temiz, nemli bezle alın.',
    ['Küçük kap', 'İki yumuşak mikrofiber bez'], [dish, 'Ilık su'],
    [
      ['Duvar boyasının silinebilirliğini kontrol edin', 'Mutfak duvarındaki yağ lekesine müdahale etmeden önce boyanın bakım talimatına bakın. Boya yeniyse üreticinin belirttiği süreyi bekleyin. Silinemeyen mat boyada bu ıslak yöntemi uygulamayın.'],
      ['Sabunlu suyu bezle deneyin', 'Ilık suya birkaç damla deterjan ekleyin. Bezi iyice sıkıp görünmeyen noktada test edin.'],
      ['Yağ damlalarını hafifçe silin', 'Küçük alanlarda çalışın ve sıvının duvardan akmasına izin vermeyin.'],
      ['Sabun kalıntısını giderin', 'İkinci bezi temiz suyla hafif nemlendirip kalıntıyı alın. Bezin kuru kısmıyla yüzeyi kurulayın.']
    ],
    'Alan kuruduğunda parlaklığı çevresindeki boyayla karşılaştırın.',
    'Beze boya geçerse durun. Mat boyada karbonat macunu, sert sünger ve güçlü yağ çözücü parlak iz bırakabilir.'
  ),
  'fayanstan-yag-lekesi': method(
    'Seramikte nötr temizleyici, derzde hedefli işlem',
    'Fayanstaki yağı yumuşak bezle alın ve seramiğe uygun hafif bir temizleyiciyle silin. Yağ derz aralarında kaldıysa derze uygun ürünü önce küçük bir noktada deneyin. Yüzeyi durulayıp kurulayın.',
    ['Yumuşak sünger', cloth, 'Kap'], ['Nötr pH’lı seramik temizleyicisi', water, 'Gerekirse derz türüne uygun yağ giderici derz temizleyicisi'],
    [
      ['Taş mı seramik mi ayırın', 'Mermer ve kireç taşında doğal taşa özel nötr ürün gerekir. Seramik reçetesini taşta uygulamayın.'],
      ['Nötr temizleyiciyi hazırlayın', 'Ürün konsantreyse ambalajda verilen oranla seyreltin ve küçük bir alanda deneyin.'],
      ['Fayansı süngerle silin', 'Yağı süngerin temiz yüzüyle alın, ardından nemli bezle kalıntıyı giderin.'],
      ['Derzi kuruyunca kontrol edin', 'Yağ derzde kaldıysa derz temizleyicisini kendi talimatıyla ve ayrı bir işlem olarak uygulayın.']
    ],
    'Temizleyici alırken seramik, porselen veya derz uyumunu ambalajda ayrı ayrı arayın.',
    'Mermer ve kireç taşına sirke sürmeyin. Ürünleri karıştırmayın.'
  ),
  'mutfak-dolabindan-yag-lekesi': method(
    'Kaplamayı ıslatmadan sabunlu bez',
    'Mutfak dolabındaki yağ lekesini kapağın malzemesine uygun temizleyici ve iyice sıkılmış bezle silin. Kapağı küçük alanlar hâlinde temizleyip hemen kurulayın. Su ve temizleyicinin kenarlara işlemesini önleyin.',
    ['Yumuşak temizlik bezi', 'Durulama ve kurulama için ikinci bez', 'Kap'], [dish, 'Ilık su'],
    [
      ['Kapağın kaplamasını doğrulayın', 'Lake, laminat, masif ahşap ve yağlı kaplama için üretici talimatı değişebilir.'],
      ['Sabunlu suyu beze alın', 'Ilık suya birkaç damla bulaşık deterjanı ekleyin. Bezi sıkıp kapağın iç tarafında deneyin.'],
      ['Yağı kapaktan kaldırın', 'Özellikle kulp çevresinde az nemle çalışın. Kapağa doğrudan sıvı püskürtmeyin.'],
      ['Kalıntıyı ve nemi alın', 'İkinci bezin nemli kısmıyla sabunu, kuru kısmıyla kenar ve birleşimlerdeki suyu alın.']
    ],
    'Yemek hazırladığınız bezi kullanmayın. Üzerindeki yağ yeniden kapağa geçebilir.',
    'Ahşap ve kaplama yüzeyde aşındırıcı sünger, yoğun yağ çözücü veya sirke kullanmadan önce üreticinin onayını arayın.'
  ),
  'cam-ocaktan-yag-lekesi': method(
    'Cam seramik ocak kremi',
    'Cam ocak soğuduktan sonra yağın fazlasını yumuşak bezle alın. Kalan izi cam seramiğe uygun temizleyici ve çizmez bezle silin. Temizleyici kalıntısını kılavuzda tarif edildiği gibi giderin.',
    [towel, 'Çizmez ocak pedi veya üreticinin önerdiği bez'], ['Cam seramik ocak temizleme kremi', water],
    [
      ['Ocağı kapatıp soğutun', 'Artık ısı göstergesi söndükten ve yüzey soğuduktan sonra yağın fazlasını kâğıt havluyla alın.'],
      ['Ocak kremini ölçülü uygulayın', 'Yalnızca modelin izin verdiği cam seramik kremini ambalajdaki miktarda kullanın.'],
      ['Kremi çizmeden yayın', 'Üreticinin önerdiği bez veya çizmez pedle çalışın. Yapışmış parçayı metal telle kazımayın.'],
      ['Yüzeyi parlatmadan önce kalıntıyı alın', 'Kremi kılavuzdaki şekilde giderin. Kılavuz nemli bez istiyorsa temiz su kullanın. Ocak yeniden kullanılmadan önce temiz ve kuru olmalı.']
    ],
    'Kazıyıcı yalnızca model kılavuzunda belirtilen tip ve kullanım açısıyla değerlendirilebilir.',
    'Fırın spreyi, çelik tel veya aşındırıcı toz cam seramik ocak kremi yerine kullanılmaz.'
  ),
  'firindan-yag-lekesi': method(
    'Fırının kaplamasına ve modeline göre temizlik',
    'Fırın soğuduktan sonra çıkarılabilir rafları, kılavuz izin veriyorsa, ılık su ve bulaşık deterjanıyla yıkayın. Fırının içi için kılavuzda önerilen yöntemi kullanın. Ürünleri karıştırmayın.',
    ['Yumuşak sünger', 'Temiz durulama bezi', 'Sprey kullanılırsa etiketin istediği koruyucu ekipman'], [dish, 'Ilık su', 'Sadece model izin veriyorsa fırın temizleyicisi'],
    [
      ['Fırını kapatıp soğutun', 'Soğuk fırında rafları kılavuz izin veriyorsa çıkarın. Conta ve rezistansın yerini belirleyin.'],
      ['Raf yağını sabunlu suyla alın', 'Üretici izin veriyorsa rafları ılık su ve elde bulaşık deterjanıyla yumuşak süngerle temizleyip durulayın.'],
      ['İç kaplama için kılavuza dönün', 'Sprey onaylıysa etiketin miktar, bekleme, havalandırma ve koruyucu ekipman talimatına uyun. Sprey yasaksa modelin temizleme programını veya tarif ettiği yöntemi izleyin.'],
      ['Kalıntıyı kontrol edin', 'Temizleyiciyi etikette belirtilen şekilde giderin. Rafları kuruyunca yerine takın.']
    ],
    'Katalitik veya kendini temizleyen kaplamalarda genel fırın spreyi talimatına göre hareket etmeyin.',
    'Conta, fan ve rezistansa gelişigüzel temizleyici sürmeyin. Ürünleri birbirine karıştırmayın.'
  ),
  'tavadan-yag-lekesi': method(
    'Tava ve tencerede bulaşık deterjanı',
    'Tava veya tencere soğuduktan sonra yağlı yüzeyi ılık su, elde bulaşık deterjanı ve yumuşak süngerle yıkayın. Yapışmış kalıntıyı, üretici izin veriyorsa, ılık deterjanlı suyla yumuşatın.',
    ['Çizmez sünger', 'Yumuşak kurulama bezi'], [dish, 'Ilık su'],
    [
      ['Tava veya tencerenin soğumasını bekleyin', 'Sıcak tava veya tencereye soğuk su dökmeyin. Yıkamak için oda sıcaklığına gelmesini bekleyin.'],
      ['Yağ filmini sabunlu süngerle alın', 'Süngerin yumuşak tarafına bulaşık deterjanı damlatın ve yüzeyi bastırmadan yıkayın.'],
      ['Yapışmış kalıntıyı yumuşatın', 'Üretici izin veriyorsa tava veya tencerede ılık deterjanlı su bekletin, ardından yumuşak süngerle yeniden silin.'],
      ['Durulayıp kurulayın', 'Köpüğü temiz suyla tamamen alın. Yumuşak bir bezle kurulayın.']
    ],
    'Yapışmaz kaplama, paslanmaz çelik ve döküm için kendi bakım talimatını izleyin.',
    'Yapışmaz yüzeye metal tel veya fırın spreyi uygulamayın.'
  ),
  'aracta-yag-lekesi': method(
    'Otomobil boyasında araç şampuanıyla ilk temizlik',
    'Kaportadaki küçük yağ izini, yüzey soğukken araç şampuanı ve temiz mikrofiber bezle temizleyin. Yağ koltuğa bulaştıysa döşeme için üreticinin önerdiği yöntemi izleyin.',
    ['Kova', 'Yumuşak yıkama eldiveni', 'Kurulama için mikrofiber bez'], ['Araç şampuanı', water, 'Gerekirse otomobil boyasına ve yağ izine uygun noktasal temizleyici'],
    [
      ['Yağın nerede olduğunu belirleyin', 'Dış boya, iç döşeme ve motor bölmesi ayrı işlemler ister. Bu adımlar dış boya içindir.'],
      ['Şampuanı etiketine göre seyreltin', 'Gölgeye alınmış serin paneli temiz suyla durulayarak tozu uzaklaştırın.'],
      ['Yumuşak eldivenle yıkayın', 'Araç şampuanıyla küçük bir alanı temizleyin, suyla durulayıp mikrofiberle kurulayın.'],
      ['Kalan izde boya uyumuna bakın', 'Noktasal yağ temizleyicisini ancak otomobil boyası için uygunsa gizli bir alanda test edip kendi talimatıyla kullanın.']
    ],
    'Yeni damlalar tekrar oluşuyorsa yağın kaynağını kontrol ettirin.',
    'Motor yağ çözücüsünü dış boyaya, cilaya veya iç döşemeye genellemeyin.'
  ),
  'suetten-yag-lekesi': method(
    'Süette kuru nişasta uygulaması',
    'Süet ayakkabıdaki taze yağı kuru beyaz bezle hafifçe alın. Üretici kuru temizleme tozuna izin veriyorsa önce görünmeyen yerde deneyin. Yağ liflere işlemişse süet temizliği yapan bir uzmana danışın.',
    [towel, 'Yumuşak süet fırçası'], ['Mısır nişastası'],
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
    ['Yumuşak emici bez', 'Temiz leğen', 'Havlu'], ['İpeğe uygun hafif sıvı deterjan', 'Etikete uygun sıcaklıkta su'],
    [
      ['İpek etiketini okuyun', 'Kuru temizleme talimatında lekeyi ve önceki uygulamaları temizlemeciye anlatın.'],
      ['Yağ yüzeydeyse nazikçe alın', 'Emici bezi lekeye bastırıp kaldırın.'],
      ['Yalnızca izin varsa elde yıkayın', 'İpek deterjanını kendi dozuyla suda çözün. Etiketin tarif ettiği biçimde yıkayıp durulayın.'],
      ['Sıkmadan kurutun', 'Havluyla fazla nemi alın. Etikete göre kurutun ve kumaşta renk halkası olup olmadığını kontrol edin.']
    ],
    'İz sürerse daha yoğun deterjan sürmek yerine ipek bakımına danışın.',
    'İpeğe genel amaçlı enzimli sprey veya oksijenli toz uygulamayın.'
  ),
  'yun-kazaktan-yag-lekesi': method(
    'Yıkanabilir yünde nötr yün deterjanı',
    'Yün kazaktaki fazla yağı kuru bezle, kumaşı ovalamadan alın. Bakım etiketi yıkamaya izin veriyorsa yün deterjanıyla yıkayın. İz kalırsa yün bakımına uygun profesyonel yardım alın.',
    ['Emici bez', 'Düz kurutma için havlu', 'Etikete göre leğen veya yün programlı makine'], ['Nötr yün deterjanı', 'Etikete uygun su'],
    [
      ['Kazağın yıkama işaretini kontrol edin', 'Makinede yıkamaya izin, elde yıkama ve kuru temizleme talimatlarını birbirinden ayırın.'],
      ['Yağı lifleri zorlamadan alın', 'Bezi hafifçe bastırın. Kazağı gerip sürtmeyin.'],
      ['Yün deterjanıyla bakım etiketini izleyin', 'Ürünün dozunu kullanın. Elde yıkama varsa ıslak yünü ovuşturmayın veya burarak sıkmayın.'],
      ['Şeklini verip düz kurutun', 'Etiket izin veriyorsa temiz havlu üstünde düz kurutun. Leke kalırsa yün bakım uzmanına danışın.']
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
    [towel, 'Künt kenarlı kaşık'], ['İlk müdahale için temizlik ürünü gerekmez'],
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
    ['Gün ışığı veya lamba', 'Önceki ürünlerin etiketleri'], ['Kontrol aşamasında yeni temizleyici gerekmez'],
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
