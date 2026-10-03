export type CameraArticle = {
  slug: string;
  camera: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  imageCredit: string;
  imageSource?: string;
  tags: string[];
  specs: { label: string; value: string }[];
  intro: string;
  why: string[];
  strengths: { title: string; text: string }[];
  limitations: { title: string; text: string }[];
  scenario: { title: string; text: string };
  bestFor: string;
  consideration: string;
  takeaway: string;
  netflix?: string;
  sources: { label: string; url: string }[];
};

export const articleDate = "2026-10-03";
export const netflixGuide = "https://studiopartner.netflix.net/studio/branded-cameras-and-image-capture";
export const consultationUrl = (camera?: string) =>
  `https://wa.me/62895345902896?text=${encodeURIComponent(`Halo Colorize Visual, saya ingin konsultasi dokumentasi event${camera ? ` dengan ${camera}` : ""}. Boleh dibantu memilih paket yang sesuai?`)}`;

export const cameraArticles: CameraArticle[] = [
  {
    slug: "sony-fx3-dokumentasi-sinematik",
    camera: "Sony FX3",
    category: "CINEMA LINE · MOBILITAS",
    title: "Sony FX3: cerita besar, kamera ringkas.",
    summary: "Pilihan untuk wedding film, highlight event, dan momen spontan yang membutuhkan visual sinematik sekaligus pergerakan kamera yang lincah.",
    image: "/cameras/sony-fx3.png",
    imageCredit: "Gambar referensi disediakan Colorize Visual.",
    tags: ["Full-frame", "4K hingga 120p", "S-Cinetone"],
    specs: [{ label: "Sensor", value: "Full-frame" }, { label: "Video", value: "4K hingga 120p" }, { label: "Warna", value: "10-bit 4:2:2" }, { label: "Karakter", value: "Ringkas & sinematik" }],
    intro: "Ada momen yang tidak bisa diulang: tatapan sebelum naik pelaminan, tepuk tangan saat penghargaan, atau ekspresi penonton di depan panggung. Untuk cerita seperti ini, kami membutuhkan kamera yang bisa mengikuti momen dengan cepat. Sony FX3 menggabungkan sensor full-frame dan fitur video Cinema Line dalam bodi yang ringkas.",
    why: [
      "Di Colorize Visual, FX3 menjadi pilihan untuk sudut pengambilan gambar yang dinamis. Ukurannya memudahkan penggunaan handheld atau gimbal dengan lensa dan penyeimbangan yang sesuai. Tim bisa mendekat ke detail, berpindah posisi, lalu kembali menangkap suasana tanpa membawa rig sebesar kamera produksi utama.",
      "S-Cinetone memberi titik awal warna yang menarik, terutama untuk wajah. Saat proyek membutuhkan pengolahan warna lebih jauh, perekaman 10-bit dan S-Log3 memberi ruang untuk color grading. Artinya, karakter visual bisa disesuaikan dengan suasana acara dan identitas brand, bukan sekadar memakai satu tampilan untuk semua event.",
    ],
    strengths: [
      { title: "Full-frame untuk suasana yang lebih terasa", text: "Mendukung pengambilan gambar di cahaya rendah dan pemisahan subjek dari latar. Hasilnya tetap dipengaruhi lensa, exposure, serta pencahayaan di lokasi." },
      { title: "Gerakan lambat dengan detail 4K", text: "Rekaman 4K hingga 120p membuka pilihan slow motion untuk detail dekorasi, ekspresi, atau gerakan panggung. Mode ini memerlukan cahaya dan media rekam yang memadai." },
      { title: "Lincah mengikuti cerita", text: "Bodi ringkas, autofocus pelacakan mata, dan stabilisasi sensor membantu operator mengikuti subjek serta berpindah komposisi." },
    ],
    limitations: [
      { title: "Perlu ND eksternal untuk kondisi terang", text: "FX3 tidak memiliki filter ND internal. Untuk mempertahankan bukaan lensa dan gerakan yang natural di luar ruangan, tim perlu menyiapkan filter tambahan." },
      { title: "Setup live perlu disesuaikan", text: "Koneksi video menggunakan HDMI, tanpa SDI bawaan. Jarak kabel dan integrasi switcher perlu direncanakan, terutama untuk venue besar." },
      { title: "File dan pengerjaan lebih menuntut", text: "Rekaman 4K berbitrate tinggi membutuhkan penyimpanan, backup, dan waktu editing yang sepadan. Spesifikasi maksimal tidak selalu menjadi setting paling tepat untuk seluruh acara." },
    ],
    scenario: { title: "Saat wedding membutuhkan cerita yang dekat", text: "FX3 dapat mengikuti persiapan, detail cincin, dan interaksi tamu, sementara kamera lain menjaga liputan prosesi utama. Kombinasi ini memberi highlight yang emosional sekaligus dokumentasi acara yang utuh." },
    bestFor: "Wedding film, highlight, gimbal, konten brand",
    consideration: "ND eksternal & integrasi HDMI",
    takeaway: "Pilih FX3 jika kamu menginginkan dokumentasi sinematik dengan sudut pandang yang dinamis. Colorize Visual menyiapkan kamera, lensa, dan pendekatan pengambilan gambar sesuai cerita event-mu.",
    netflix: "Sony mengumumkan FX3 masuk daftar kamera yang disetujui Netflix pada Agustus 2022. Persetujuan tersebut terkait persyaratan teknis dan pengaturan produksi, bukan berarti setiap video dari FX3 otomatis memenuhi standar Netflix atau merupakan produksi Netflix.",
    sources: [
      { label: "Sony — spesifikasi resmi ILME-FX3", url: "https://www.sony.com/electronics/support/camcorders-and-video-cameras-interchangeable-lens-camcorders/ilme-fx3/specifications" },
      { label: "Sony Cine — FX3 dalam Netflix Approved Camera List", url: "https://sony-cinematography.com/articles/fx3-4k-fullframe-cinema-line-camera-added-to-netflix-approved-camera-list/" },
      { label: "Netflix — persyaratan kamera dan image capture", url: netflixGuide },
    ],
  },
  {
    slug: "sony-fx6-produksi-event-profesional",
    camera: "Sony FX6",
    category: "CINEMA LINE · PRODUKSI",
    title: "Sony FX6: kontrol lebih, cerita lebih kuat.",
    summary: "Kamera cinema full-frame untuk produksi yang membutuhkan kontrol exposure cepat, koneksi profesional, dan alur kerja multicam yang terencana.",
    image: "/cameras/sony-fx6.png",
    imageCredit: "Foto produk: Sony.",
    imageSource: "https://www.sony-mea.com/en/interchangeable-lens-cameras/products/ilme-fx6",
    tags: ["Full-frame", "Variable ND", "SDI"],
    specs: [{ label: "Sensor", value: "Full-frame" }, { label: "Video", value: "4K hingga 120p" }, { label: "Exposure", value: "Electronic variable ND" }, { label: "Koneksi", value: "SDI & HDMI" }],
    intro: "Event bergerak dengan ritmenya sendiri. Pembicara berganti, lampu panggung berubah, dan acara bisa berpindah dari area outdoor ke indoor. Sony FX6 kami pilih ketika produksi memerlukan visual sinematik sekaligus kontrol yang praktis selama acara berlangsung.",
    why: [
      "FX6 memberi tim kontrol exposure melalui electronic variable ND bawaan. Filter ini mengurangi cahaya yang masuk tanpa harus selalu mengubah bukaan lensa. Saat kondisi terang berubah, operator dapat mempertahankan karakter kedalaman gambar sambil menyesuaikan exposure dengan lebih mulus.",
      "Untuk produksi multicam, koneksi SDI menjadi nilai tambah. Dengan kabel dan perangkat yang sesuai, koneksi ini memudahkan integrasi ke sistem produksi di venue. FX6 juga dapat dipadukan dengan FX3; penyamaan white balance, exposure, dan profil warna tetap dilakukan agar perpindahan sudut terasa konsisten.",
    ],
    strengths: [
      { title: "Karakter Cinema Line full-frame", text: "Sensor full-frame, S-Cinetone, dan perekaman 10-bit 4:2:2 mendukung detail serta pengolahan warna. Mode 4K hingga 120p tersedia untuk kebutuhan gerakan lambat tertentu." },
      { title: "Kontrol cahaya langsung di kamera", text: "Electronic variable ND membantu pengambilan gambar dalam kondisi terang yang berubah, khususnya pada acara outdoor." },
      { title: "Koneksi untuk produksi yang lebih lengkap", text: "SDI, HDMI, dan input audio XLR pada handle mendukung integrasi video serta audio dengan perangkat produksi yang sesuai." },
    ],
    limitations: [
      { title: "Anggaran dan persiapan lebih besar", text: "Paket lensa, media, daya, rig, dan operator perlu diperhitungkan. Untuk acara sederhana dengan target Full HD, setup ini bisa melebihi kebutuhan." },
      { title: "Tidak memiliki stabilisasi sensor", text: "Gerakan handheld perlu dijaga melalui teknik operator, lensa yang mendukung stabilisasi, atau alat bantu seperti tripod dan rig." },
      { title: "Tidak semua mode untuk semua kebutuhan", text: "Pilihan frame rate, format rekaman, dan output harus dicocokkan dengan switcher serta hasil akhir. Mode slow motion bukan setting untuk siaran live normal." },
    ],
    scenario: { title: "Saat corporate event membutuhkan kontrol", text: "Pada peluncuran produk, FX6 dapat menjadi kamera utama untuk pembicara dan panggung, dipadukan dengan kamera bergerak untuk detail produk serta reaksi audiens. Tim merancang posisi kamera, audio, dan jalur sinyal sebelum acara dimulai." },
    bestFor: "Corporate event, panggung, dokumenter, multicam",
    consideration: "Rig, kru & anggaran produksi",
    takeaway: "FX6 tepat saat kebutuhan event sudah melibatkan kontrol gambar dan sistem produksi yang lebih lengkap. Bersama Colorize Visual, kemampuan kamera ini diterjemahkan menjadi liputan yang terarah dan nyaman ditonton.",
    netflix: "Sony mengumumkan FX6 masuk Netflix Approved Camera List pada Desember 2020. Status ini menunjukkan kelayakan teknis untuk workflow tertentu; kualitas dokumentasi tetap dibangun melalui lensa, lighting, audio, pengaturan kamera, dan keahlian kru. Colorize Visual tidak mengklaim afiliasi dengan Netflix.",
    sources: [
      { label: "Sony — fitur dan spesifikasi resmi FX6", url: "https://www.sony-mea.com/en/interchangeable-lens-cameras/products/ilme-fx6" },
      { label: "Sony — teknologi electronic variable ND", url: "https://pro.sony/en_BE/technology/variable-auto-nd-filter-technology" },
      { label: "Sony Cine — FX6 dalam Netflix Approved Camera List", url: "https://sony-cinematography.com/articles/fx6-full-frame-4k-camera-added-to-netflix-approved-camera-list/" },
      { label: "Netflix — persyaratan kamera dan image capture", url: netflixGuide },
    ],
  },
  {
    slug: "sony-nx100-event-budget-full-hd",
    camera: "Sony NX100",
    category: "EVENT · EFISIENSI",
    title: "Sony NX100: event rapi, budget terkendali.",
    summary: "Dokumentasi Full HD yang praktis untuk seminar, ibadah, acara sekolah, dan kebutuhan event yang mengutamakan liputan lengkap dengan anggaran efisien.",
    image: "/cameras/sony-nx100.png",
    imageCredit: "Gambar referensi disediakan Colorize Visual.",
    tags: ["Full HD", "Zoom optik 12×", "Sensor tipe 1.0"],
    specs: [{ label: "Sensor", value: "Tipe 1.0 inci" }, { label: "Video", value: "Full HD 1080p" }, { label: "Lensa", value: "Zoom optik 12×" }, { label: "Desain", value: "Camcorder all-in-one" }],
    intro: "Tidak semua event membutuhkan perekaman 4K atau latar belakang yang sangat blur. Untuk seminar, ibadah, rapat, dan acara sekolah, yang sering paling penting adalah momen terekam lengkap, wajah terlihat jelas, dan suara dapat dipahami. Sony HXR-NX100 menawarkan pendekatan yang praktis untuk kebutuhan tersebut.",
    why: [
      "Colorize Visual menggunakan NX100 sebagai pilihan untuk event dengan anggaran yang perlu dijaga. Lensa zoom bawaan mengurangi kebutuhan pergantian lensa saat acara berjalan. Operator bisa berpindah dari gambar panggung lebar ke pembicara tanpa kehilangan banyak waktu menyiapkan perlengkapan.",
      "Jika hasil akhir yang disepakati adalah Full HD, NX100 dapat menjadi pilihan yang masuk akal. Anggaran produksi bisa diarahkan ke jumlah sudut kamera, kualitas audio, atau dukungan pencahayaan. Harga paket tetap mengikuti durasi, lokasi, jumlah kru, dan kebutuhan acara; model kamera saja tidak menentukan total biaya.",
    ],
    strengths: [
      { title: "Zoom praktis untuk liputan acara", text: "Lensa Sony G dengan zoom optik 12× membantu menjangkau pembicara dari posisi kamera. Tiga ring manual memberi kontrol fokus, zoom, dan iris." },
      { title: "Full HD untuk kebutuhan yang tepat", text: "NX100 merekam hingga Full HD, termasuk XAVC S HD 50 Mbps. Cocok ketika materi akhir memang direncanakan dalam resolusi 1080p." },
      { title: "Perangkat pendukung sudah menyatu", text: "Filter ND bawaan, dua slot kartu, dan input audio XLR membantu operasional. Mode rekam serta konfigurasi audio tetap disiapkan sesuai rundown." },
    ],
    limitations: [
      { title: "Tidak merekam 4K", text: "Ruang untuk cropping saat editing lebih terbatas jika hasil akhir harus tetap Full HD. Untuk permintaan master 4K, kami menyarankan kamera lain." },
      { title: "Sensor bukan full-frame", text: "NX100 memakai sensor tipe 1.0 inci. Untuk venue sangat gelap atau kebutuhan latar sangat blur, kamera full-frame dengan lensa yang sesuai bisa lebih tepat." },
      { title: "Ruang olah warna lebih terbatas", text: "Rekaman internal 8-bit 4:2:0 tidak seluwes 10-bit untuk perubahan warna berat. Exposure dan white balance sebaiknya sudah rapi ketika direkam." },
    ],
    scenario: { title: "Saat seminar perlu didokumentasikan utuh", text: "Kamera ditempatkan di area yang tidak mengganggu peserta, dengan zoom untuk mengikuti pembicara. Sumber suara dari mixer dapat dihubungkan melalui pengaturan level yang sesuai. Fokus produksinya adalah keterbacaan materi, kontinuitas acara, dan audio yang jelas." },
    bestFor: "Seminar, ibadah, sekolah, event budget efisien",
    consideration: "Maksimal Full HD, bukan 4K",
    takeaway: "NX100 cocok ketika kebutuhanmu adalah dokumentasi Full HD yang efektif dengan anggaran terukur. Colorize Visual membantu memilih paket yang proporsional agar kebutuhan penting event tetap terpenuhi.",
    sources: [
      { label: "Sony — HXR-NX100: fitur dan FAQ resmi", url: "https://pro.sony/en_NE/products/handheld-camcorders/broadcast-camcorders-hxrnx100-faqs" },
      { label: "Sony — brosur dan spesifikasi HXR-NX100 (PDF)", url: "https://pro.sony/s3/cms-static-content/uploadfile/66/1237493716066.pdf" },
    ],
  },
  {
    slug: "lumix-s5ii-warna-full-frame",
    camera: "LUMIX S5II",
    category: "FULL-FRAME · WARNA",
    title: "LUMIX S5II: warna hidup, cerita terasa.",
    summary: "Sensor full-frame, video 10-bit, dan stabilisasi yang membantu menangkap suasana event sekaligus menyiapkan materi untuk berbagai format konten.",
    image: "/cameras/lumix-s5ii.png",
    imageCredit: "Foto produk: Panasonic / LUMIX.",
    imageSource: "https://www.panasonic.com/uk/consumer/cameras-camcorders/lumix-mirrorless-cameras/lumix-s-full-frame-cameras/dc-s5m2.html",
    tags: ["Full-frame", "6K open gate", "Active I.S."],
    specs: [{ label: "Sensor", value: "Full-frame 24,2 MP" }, { label: "Video", value: "6K hingga 30p" }, { label: "Warna", value: "10-bit & V-Log" }, { label: "Stabilisasi", value: "Active I.S." }],
    intro: "Warna dekorasi, detail produk, dan rona wajah ikut menentukan bagaimana sebuah event dikenang. Panasonic LUMIX S5II menjadi salah satu pilihan kami untuk visual yang kaya warna sekaligus fleksibel saat masuk proses editing. Kamera ini menggunakan sensor full-frame 24,2 megapiksel dan fitur video yang serius dalam bentuk mirrorless.",
    why: [
      "Kami memilih S5II ketika dokumentasi harus bekerja di beberapa tempat sekaligus: video utama, highlight, dan potongan media sosial. Mode 6K open gate 3:2 memberi ruang lebih untuk menyusun ulang komposisi horizontal atau vertikal dari rekaman yang sama. Pengambilan gambar tetap direncanakan sejak awal agar subjek aman dalam kedua format.",
      "Rekaman 10-bit serta V-Log mendukung pengolahan gradasi warna, sementara profil gambar dapat dipilih sesuai kebutuhan penyelesaian. Warna yang jelas bukan hasil sensor saja: white balance, kualitas cahaya, exposure, dan color grading harus saling mendukung. Itulah bagian yang kami kerjakan bersama pemilihan kameranya.",
    ],
    strengths: [
      { title: "Full-frame dengan ruang olah warna", text: "Sensor full-frame dan video 10-bit membantu menghasilkan materi yang fleksibel diolah. V-Log menyediakan pilihan workflow untuk proyek yang membutuhkan color grading." },
      { title: "Satu momen, beberapa format", text: "6K open gate hingga 30p berguna untuk kebutuhan reframing. Materi bisa disiapkan untuk layar horizontal serta media sosial vertikal, sesuai komposisi awal." },
      { title: "Mendukung pengambilan gambar bergerak", text: "Phase Hybrid AF membantu mengikuti subjek. Stabilisasi sensor dan Active I.S. mendukung handheld, meski teknik operator tetap menentukan kestabilan gerak." },
    ],
    limitations: [
      { title: "4K 50/60p menggunakan crop APS-C", text: "Sudut pandang menjadi lebih sempit daripada mode full-frame. Tim perlu menyesuaikan lensa atau posisi, terutama di ruangan kecil." },
      { title: "6K membutuhkan penyimpanan dan waktu", text: "Rekaman beresolusi tinggi memberi fleksibilitas, tetapi menambah kebutuhan media, backup, dan kemampuan perangkat editing." },
      { title: "Audio dan koneksi perlu direncanakan", text: "Tidak ada SDI atau input XLR bawaan pada bodi. Setup audio profesional memerlukan adapter atau recorder yang sesuai; jalur live memakai HDMI atau konverter." },
    ],
    scenario: { title: "Saat satu event juga menjadi banyak konten", text: "Untuk peluncuran produk, S5II dapat merekam detail, interaksi pengunjung, dan suasana venue dengan komposisi yang disiapkan untuk highlight serta reels. Tim kemudian menyelaraskan warna dengan identitas brand dan materi kamera lainnya." },
    bestFor: "Highlight, konten brand, wedding, media sosial",
    consideration: "Crop pada 4K 50/60p",
    takeaway: "Pilih S5II untuk dokumentasi full-frame dengan fleksibilitas warna dan format konten. Colorize Visual menyiapkan pendekatan visualnya dari pengambilan gambar sampai hasil akhir yang siap dibagikan.",
    sources: [
      { label: "Panasonic — LUMIX S5II, fitur dan foto produk resmi", url: "https://www.panasonic.com/uk/consumer/cameras-camcorders/lumix-mirrorless-cameras/lumix-s-full-frame-cameras/dc-s5m2.html" },
      { label: "Panasonic — spesifikasi mode rekam LUMIX S5II", url: "https://www.panasonic.com/au/consumer/lumix-cameras-video-cameras/lumix-cameras/lumix-s-cameras/dc-s5m2kgn.html" },
      { label: "Panasonic — pengumuman teknologi S5II dan S5IIX", url: "https://na.panasonic.com/news/panasonic-announces-highly-anticipated-lumix-s5ii-and-s5iix-at-consumer-electronics-show-2023" },
    ],
  },
];

export function getCameraArticle(slug: string) {
  return cameraArticles.find((article) => article.slug === slug);
}

export function readingMinutes(article: CameraArticle) {
  return Math.max(1, Math.ceil([article.intro, ...article.why, ...article.strengths.map((item) => `${item.title} ${item.text}`), ...article.limitations.map((item) => `${item.title} ${item.text}`), article.scenario.text, article.takeaway, article.netflix ?? ""].join(" ").split(/\s+/).length / 180));
}
