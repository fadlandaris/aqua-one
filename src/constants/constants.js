import { Barbell, PipeWrench, TreePalm, Ruler, Trash, Fan, Pipe, CarBattery, Drop, Blueprint } from "@phosphor-icons/react";

export const navLinks = [
  {
    id: '1',
    nav: 'Home',
    link: 'home'
  },
  {
    id: '2',
    nav: 'About',
    link: 'about-us'
  },
  {
    id: '3',
    nav: 'Product',
    link: 'product'
  },
  {
    id: '4',
    nav: 'Contact',
    link: 'contact-us'
  },
]

export const stats = [
  {
    id: '1',
    title: '20+',
    desc: 'Total Project',
  },
  {
    id: '2',
    title: '4,8M',
    desc: 'Emmision Save',
  },
  {
    id: '3',
    title: '60+',
    desc: 'Strategic Partner',
  },
]


export const about = [
  {
    id: '1',
    title: 'Aquaone',
    sub: 'About Us',
    year: '2024',
    desc: 'Pipa AquaOne menghadirkan solusi pipa berkualitas tinggi yang kuat, tahan lama, dan terjangkau untuk kebutuhan rumah tangga, perumahan, dan proyek komersial. Dengan pilihan produk Premium dan Ekonomis dalam tiga grade, AW, DD, dan CC, kami memastikan setiap kebutuhan terpenuhi dengan sempurna',
    desc2: 'Pipa AquaOne unggul dalam industri dengan fokus pada kualitas dan inovasi, menggunakan bahan baku murni yang kokoh, tidak mudah pecah, dan awet. Produk kami telah teruji bebas timbal dan racun, aman untuk saluran air bersih dan pembuangan, menjadikannya pilihan ideal untuk perumahan, perkantoran, dan industri. Jelajahi situs web kami untuk informasi lengkap, galeri inspiratif, dan kemudahan dalam menghubungi tim kami—karena dengan Pipa AquaOne, Anda memilih solusi cerdas untuk kenyamanan dan keamanan keluarga',
    value: [
      {item: 'Location', stat: 'Ngemplak, Semarang'},
      {item: 'Phone', stat: '0877 7991 16464'},
      {item: 'Email', stat: 'aquaone2024@gmail.com'}
    ]
  },
]

export const benefits = [
  {
    id: '1',
    title: 'Keunggulan Produk Kami',
    sub: 'Benefits',
    value: [
      {
        title: 'Daya Tahan Tinggi', 
        desc: 'Pipa air tahan lama, anti bocor, dan tahan terhadap tekanan tinggi', 
        icon: Barbell
      },
      {
        title: 'Ramah Lingkungan', 
        desc: 'Terbuat dari material berkualitas yang aman bagi lingkungan', 
        icon: TreePalm
      },
      {
        title: 'Mudah Dipasang', 
        desc: 'Instalasi cepat dan mudah, hemat waktu dan biaya', 
        icon: PipeWrench
      },
      {
        title: 'Beragam Ukuran', 
        desc: 'Tersedia berbagai ukuran sesuai kebutuhan proyek Anda', 
        icon: Ruler
      },
    ]
  },
]

export const superiority = [
  {
    id: '1',
    value: [
      {
        title: 'Saluran Air Bersih',
        icon: Drop ,
        desc: 'Saluran untuk mengalirkan air bersih ke berbagai kebutuhan seperti rumah tangga dan industri. Menjamin kebersihan air anda'
      },
      {
        title: 'Saluran Pembuangan',
        icon: Trash,
        desc: 'Saluran yang digunakan untuk membuang air limbah dari rumah atau industri menuju tempat pembuangan yang aman.'
      },
      {
        title: 'Ventilasi Ruangan',
        icon: Fan,
        desc: 'Saluran yang memungkinkan sirkulasi udara yang baik di dalam ruangan untuk kenyamanan penghuninya.'
      },
      {
        title: 'Saluran Irigasi',
        icon: Pipe,
        desc: 'Saluran yang digunakan untuk menyalurkan air ke lahan pertanian agar tanaman mendapatkan pasokan air yang cukup.'
      },
      {
        title: 'Proteksi Kabel',
        icon: CarBattery,
        desc: 'Pipa yang melindungi kabel dari kerusakan dan paparan cuaca ekstrim serta kondisi lingkungan yang keras.'
      },
      {
        title: 'Pipa Konstruksi',
        icon: Blueprint,
        desc: 'Pipa yang digunakan dalam berbagai proyek konstruksi untuk keperluan pembuangan dan saluran lainnya.'
      },
    ]
  },
]


export const productsData = [
  {
    id: '1',
    name: 'Pipa Premium AW',
    slogan: 'Keamanan dan kenyamanan keluarga Anda dimulai dari sini',
    desc: 'Pipa AW kami adalah pilihan premium untuk jalur air utama yang mengalirkan air bersih langsung ke rumah Anda. Didesain untuk memastikan aliran air yang kuat dan stabil, memberikan ketenangan pikiran bagi Anda dan orang yang Anda cintai.'
  },
  {
    id: '2',
    name: 'Pipa Ekonomis AW',
    slogan: 'Solusi hemat yang menjaga kualitas hidup keluarga',
    desc: 'Pipa Ekonomis AW menawarkan kualitas tinggi dengan harga yang bersahabat. Cocok untuk kebutuhan sehari-hari, memberikan keseimbangan sempurna antara keterjangkauan dan keandalan, sehingga Anda dapat menjaga anggaran tanpa mengorbankan kenyamanan keluarga'
  },
  {
    id: '3',
    name: 'Pipa Ekonomis D',
    slogan: 'Pengelolaan air cerdas untuk rumah yang sehat',
    desc: 'Pipa Ekonomis D dirancang khusus untuk sistem pembuangan air, seperti di wastafel, toilet, dan talang air. Solusi efisien dan ekonomis yang membantu menjaga kebersihan dan kesehatan lingkungan rumah Anda'
  },
  {
    id: '4',
    name: 'Pipa Premium C',
    slogan: 'Solusi Pintar untuk Pengelolaan Limbah Rumah Anda',
    desc: 'Pipa Premium C dirancang untuk mengalirkan limbah rumah tangga yang lebih efisien. Dengan performa optimal, pipa ini memastikan kebersihan dan kesehatan lingkungan rumah Anda, menjadi solusi cerdas untuk pengelolaan air yang lebih efektif'
  },

]