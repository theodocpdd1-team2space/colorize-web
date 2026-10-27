export const flashDriveMinimum = 3_800_000;

export type Package = {
  title: string;
  priceAmount: number;
  price: { id: string; en: string };
  description: { id: string; en: string };
  features: { id: string; en: string }[];
  featured?: boolean;
};

export const streamingPackages: Package[] = [
  {
    title: "Essential",
    priceAmount: 1750000,
    price: { id: "Start Rp1,75 juta", en: "Starting at Rp1.75M" },
    description: {
      id: "Untuk event sederhana dengan kebutuhan siaran yang rapi dan rekaman lokal.",
      en: "For simple events that need clean streaming and local recording.",
    },
    features: [
      { id: "1 kamera mirrorless", en: "1 mirrorless camera" },
      { id: "1 operator", en: "1 operator" },
      { id: "Maks. durasi kerja 4 jam (rundown)", en: "Max. 4-hour working duration (rundown)" },
      { id: "Live streaming YouTube", en: "YouTube live streaming" },
    ],
  },
  {
    title: "Standard",
    priceAmount: 2800000,
    price: { id: "Start Rp2,8 juta", en: "Starting at Rp2.8M" },
    description: {
      id: "Untuk wedding, sekolah, seminar, ibadah, dan corporate event skala menengah.",
      en: "For weddings, schools, seminars, worship services, and mid-scale corporate events.",
    },
    features: [
      { id: "2 kamera mirrorless", en: "2 mirrorless cameras" },
      { id: "2 cameramen + 1 operator", en: "2 camera operators + 1 operator" },
      { id: "1 switcher 4 channel", en: "1 four-channel switcher" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "Live streaming YouTube", en: "YouTube live streaming" },
    ],
  },
  {
    title: "Signature",
    priceAmount: 3300000,
    price: { id: "Start Rp3,3 juta", en: "Starting at Rp3.3M" },
    description: {
      id: "Multicam yang lebih fleksibel untuk momen penting dan coverage acara yang lebih lengkap.",
      en: "A more flexible multicam setup for key moments and broader event coverage.",
    },
    features: [
      { id: "3 kamera mirrorless", en: "3 mirrorless cameras" },
      { id: "2 cameramen + 1 operator", en: "2 camera operators + 1 operator" },
      { id: "1 switcher 4 channel", en: "1 four-channel switcher" },
      { id: "1 Hollyland wireless video transmitter", en: "1 Hollyland wireless video transmitter" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "Live streaming YouTube", en: "YouTube live streaming" },
    ],
  },
  {
    title: "Premium",
    priceAmount: 3600000,
    price: { id: "Start Rp3,6 juta", en: "Starting at Rp3.6M" },
    description: {
      id: "Paket dengan graphic dan gimbal untuk produksi event yang terasa lebih dinamis.",
      en: "Adds graphics and a gimbal for a more dynamic event production.",
    },
    features: [
      { id: "3 kamera mirrorless", en: "3 mirrorless cameras" },
      { id: "1 operator + graphic", en: "1 operator + graphics" },
      { id: "1 switcher 4 channel", en: "1 four-channel switcher" },
      { id: "1 gimbal stabilizer", en: "1 gimbal stabilizer" },
      { id: "1 Hollyland wireless video transmitter", en: "1 Hollyland wireless video transmitter" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "Live streaming YouTube", en: "YouTube live streaming" },
    ],
  },
  {
    title: "Premier",
    priceAmount: 5000000,
    price: { id: "Start Rp5 juta", en: "Starting at Rp5M" },
    description: {
      id: "Coverage empat kamera dengan Jimmy Jib dan moving camera untuk produksi yang lebih sinematik.",
      en: "Four-camera coverage with Jimmy Jib and moving camera for a more cinematic production.",
    },
    features: [
      { id: "4 kamera mirrorless, termasuk Jimmy Jib dan moving camera", en: "4 mirrorless cameras, including Jimmy Jib and moving camera" },
      { id: "4 cameramen + 1 operator", en: "4 camera operators + 1 operator" },
      { id: "1 switcher 4 channel", en: "1 four-channel switcher" },
      { id: "1 gimbal stabilizer", en: "1 gimbal stabilizer" },
      { id: "1 Hollyland wireless video transmitter", en: "1 Hollyland wireless video transmitter" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "Live streaming YouTube", en: "YouTube live streaming" },
    ],
  },
  {
    title: "Cinematic",
    priceAmount: 5700000,
    price: { id: "Start Rp5,7 juta", en: "Starting at Rp5.7M" },
    description: {
      id: "Empat kamera mirrorless dengan dua wireless transmitter untuk visual event yang lebih imersif.",
      en: "Four mirrorless cameras with two wireless transmitters for a more immersive event visual.",
    },
    features: [
      { id: "4 kamera mirrorless + 4 cameramen", en: "4 mirrorless cameras + 4 camera operators" },
      { id: "1 operator + 1 switcher 4 channel", en: "1 operator + 1 four-channel switcher" },
      { id: "1 gimbal stabilizer", en: "1 gimbal stabilizer" },
      { id: "2 Hollyland wireless video transmitter", en: "2 Hollyland wireless video transmitters" },
      { id: "Intercom 5 pcs", en: "5 intercom units" },
      { id: "Maks. durasi kerja 6 jam", en: "Max. 6-hour working duration" },
      { id: "Live streaming YouTube", en: "YouTube live streaming" },
    ],
  },
];

export const cinemaPackages: Package[] = [
  {
    title: "Cinema Line / Netflix",
    priceAmount: 10000000,
    price: { id: "Start Rp10 jutaan", en: "Starting at Rp10M" },
    description: {
      id: "Paket live streaming premium dengan kamera Sony Cinema Line untuk kebutuhan visual berstandar tinggi.",
      en: "Premium live streaming with Sony Cinema Line cameras for high-standard visual production.",
    },
    features: [
      { id: "Kamera Sony Cinema Line (Netflix approved)", en: "Sony Cinema Line cameras (Netflix approved)" },
      { id: "Output 4K Ultra HD", en: "4K Ultra HD output" },
      { id: "Workflow produksi premium", en: "Premium production workflow" },
      { id: "Detail crew dan setup melalui konsultasi", en: "Crew and setup details confirmed during consultation" },
    ],
    featured: true,
  },
  {
    title: "Cinematic Elite",
    priceAmount: 15900000,
    price: { id: "Start Rp15,9 juta", en: "Starting at Rp15.9M" },
    description: {
      id: "Setup produksi paling lengkap di pricelist untuk event yang membutuhkan coverage dan kontrol visual tingkat lanjut.",
      en: "The most complete setup in the pricelist for events that need advanced coverage and visual control.",
    },
    features: [
      { id: "4 kamera: 1 Sony FX6, 2 Sony FX3, 1 mirrorless untuk Jimmy Jib", en: "4 cameras: 1 Sony FX6, 2 Sony FX3, 1 mirrorless for Jimmy Jib" },
      { id: "Lensa 70-600mm GM, 70-200mm GM, 50mm f/1.2 GM", en: "70-600mm GM, 70-200mm GM, 50mm f/1.2 GM lenses" },
      { id: "4 cameramen + 1 operator", en: "4 camera operators + 1 operator" },
      { id: "1 switcher 4 channel + 1 Jimmy Jib", en: "1 four-channel switcher + 1 Jimmy Jib" },
      { id: "Gimbal stabilizer DJI Ronin 3 Pro", en: "DJI Ronin 3 Pro gimbal stabilizer" },
      { id: "3 Hollyland wireless video transmitter 4K", en: "3 Hollyland 4K wireless video transmitters" },
      { id: "Ninja Atomos Record Full HD ProRes LT", en: "Ninja Atomos Full HD ProRes LT recorder" },
      { id: "Intercom 5 pcs + maksimal durasi kerja 6 jam", en: "5 intercom units + max. 6-hour working duration" },
      { id: "Live streaming YouTube", en: "YouTube live streaming" },
      { id: "2 laptop + 1 monitor", en: "2 laptops + 1 monitor" },
    ],
    featured: true,
  },
];

