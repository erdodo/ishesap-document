const on_muhasebe = [
  {
    index: "1",
    icon: "bi bi-graph-up-arrow",
    name: "Özet",
    type: "menu",
    sub: [
      {
        index: "1-1",
        icon: "bi bi-graph-up-arrow",
        name: "Grafikler",
        type: "link",
        path: "/on-muhasebe/ozet/gostergeler",
      },
      {
        index: "1-2",
        icon: "bi bi-graph-up-arrow",
        name: "Raporlama",
        type: "link",
        path: "/on-muhasebe/ozet/raporlama",
      },
    ],
  },

  {
    index: "2",
    icon: "bi bi-people",
    name: "Cari Hesaplar",
    type: "link",
    path: "/on-muhasebe/cari-hesaplar",
  },
  {
    index: "3",
    icon: "bi bi-cash-coin",
    name: "Finans Yönetimi",
    type: "menu",
    sub: [
      {
        index: "3-1",
        icon: "bi bi-safe",
        name: "Kasa",
        type: "link",
        path: "/on-muhasebe/finans-yonetimi/kasa",
      },
      {
        index: "3-2",
        icon: "bi bi-bank",
        name: "Banka",
        type: "link",
        path: "/on-muhasebe/finans-yonetimi/banka",
      },
      {
        index: "3-3",
        icon: "bi bi-card-list",
        name: "Çekler",
        type: "link",
        path: "/on-muhasebe/finans-yonetimi/cek",
      },
      {
        index: "3-4",
        icon: "bi bi-safe",
        name: "Senetler",
        type: "link",
        path: "/on-muhasebe/finans-yonetimi/senet",
      },
    ],
  },

  {
    index: "5",
    icon: "bi bi-arrow-left-right",
    name: "Alış-Satış Yönetimi",
    type: "menu",
    path: "/on-muhasebe/alis-satis-yonetimi/",
    sub: [
      {
        index: "5-1",
        icon: "bi bi-card-list",
        name: "Fatura",
        type: "link",
        path: "/on-muhasebe/alis-satis-yonetimi/fatura",
      },
      {
        index: "5-2",
        icon: "bi bi-safe",
        name: "İrsaliye",
        type: "link",
        path: "/on-muhasebe/alis-satis-yonetimi/irsaliye",
      },
      {
        index: "5-3",
        icon: "bi bi-basket",
        name: "Sipariş",
        type: "link",
        path: "/on-muhasebe/alis-satis-yonetimi/siparis",
      },
      {
        index: "5-4",
        icon: "bi bi-basket",
        name: "Teklif",
        type: "link",
        path: "/on-muhasebe/alis-satis-yonetimi/teklif",
      },
    ],
  },
  {
    index: "6",
    icon: "bi bi-box-seam",
    name: "Stok-Hizmet Yönetimi",
    type: "menu",
    path: "/on-muhasebe/stok-hizmet-yonetimi/",
    sub: [
      {
        index: "6-1",
        icon: "bi bi-card-list",
        name: "Stok Kartları",
        type: "link",
        path: "/on-muhasebe/stok-hizmet-yonetimi/stok-kartlari",
      },
      {
        index: "6-2",
        icon: "bi bi-boxes",
        name: "Stoklar",
        type: "link",
        path: "/on-muhasebe/stok-hizmet-yonetimi/stoklar",
      },
      {
        index: "6-3",
        icon: "bi bi-card-list",
        name: "Dönüşüm",
        type: "link",
        path: "/on-muhasebe/stok-hizmet-yonetimi/donusum",
      },
      {
        index: "6-4",
        icon: "bi bi-arrow-down-up",
        name: "Stok Hareketleri",
        type: "link",
        path: "/on-muhasebe/stok-hizmet-yonetimi/stok-hareketleri",
      },
      {
        index: "6-5",
        icon: "bi bi-card-list",
        name: "Hizmet-Masraf Kartları",
        type: "link",
        path: "/on-muhasebe/stok-hizmet-yonetimi/hizmet-masraf-kartlari",
      },
      {
        index: "6-6",
        icon: "bi bi-card-list",
        name: "Depo Kartları",
        type: "link",
        path: "/on-muhasebe/stok-hizmet-yonetimi/depo-kartlari",
      },
    ],
  },
  {
    index: "7",
    icon: "bi bi-pc-display",
    name: "Sabit Kıymet Yönetimi",
    type: "menu",
    path: "/on-muhasebe/sabit-kiymet-yonetimi/",
    sub: [
      {
        index: "7-1",
        icon: "bi bi-card-list",
        name: "Sabit Kıymet Kartları",
        type: "link",
        path: "/on-muhasebe/sabit-kiymet-yonetimi/kartlar",
      },
      {
        index: "7-2",
        icon: "bi bi-arrow-down-up",
        name: "Sabit Kıymet Hareketleri",
        type: "link",
        path: "/on-muhasebe/sabit-kiymet-yonetimi/hareketler",
      },
    ],
  },
  {
    index: "8",
    icon: "bi bi-people-fill",
    name: "Personel Yönetimi",
    type: "link",
    path: "/on-muhasebe/personel-yonetimi/",
  },
  {
    index: "9",
    icon: "bi bi-building",
    name: "Büro Yönetimi",
    type: "menu",
    path: "/on-muhasebe/buro-yonetimi/",
    sub: [
      {
        index: "9-1",
        icon: "bi bi-card-list",
        name: "Kiralar",
        type: "link",
        path: "/on-muhasebe/buro-yonetimi/kiralar",
      },
      {
        index: "9-2",
        icon: "bi bi-clipboard-minus",
        name: "Sabit İşletme Giderleri",
        type: "link",
        path: "/on-muhasebe/buro-yonetimi/sabit-isletme-giderleri",
      },
    ],
  },
];
const e_donusum = [
  {
    index: "10-1",
    icon: "bi bi-card-list",
    name: "E-Fatura",
    type: "link",
    path: "/e-donusum/fatura",
  },
  {
    index: "10-2",
    icon: "bi bi-safe",
    name: "E-İrsaliye",
    type: "link",
    path: "/e-donusum/irsaliye",
  },
  {
    index: "10-3",
    icon: "bi bi-archive",
    name: "E-Arşiv",
    type: "link",
    path: "/e-donusum/arsiv",
  },
  {
    index: "10-4",
    icon: "bi bi-receipt-cutoff",
    name: "Serbest Meslek Makbuzu",
    type: "link",
    path: "/e-donusum/smm",
  },
  {
    index: "10-5",
    icon: "bi bi-receipt",
    name: "Müstahsil Makbuzu",
    type: "link",
    path: "/e-donusum/e-mm",
  },
];
const kobi = [
  {
    index: "12",
    icon: "bi bi-people",
    name: "Cari Hesap",
    type: "link",
    path: "/kobi/cari-hesap",
  },
  {
    index: "13",
    icon: "bi bi-basket",
    name: "Sipariş",
    type: "link",
    path: "/kobi/siparis",
  },
  {
    index: "14",
    icon: "bi bi-safe",
    name: "Kasa",
    type: "link",
    path: "/kobi/kasa",
  },
  {
    index: "15",
    icon: "bi bi-bank",
    name: "Banka",
    type: "link",
    path: "/kobi/banka",
  },
];
const genel = [
  {
    index: "16",
    icon: "bi bi-graph-up-arrow",
    name: "Giriş Ekranı",
    type: "menu",
    sub: [
      {
        index: "16-1",
        icon: "bi bi-graph-up-arrow",
        name: "Giriş",
        type: "link",
        path: "/genel/giris-ekrani/giris",
      },
      {
        index: "16-2",
        icon: "bi bi-graph-up-arrow",
        name: "Şifremi Unuttum",
        type: "link",
        path: "/genel/giris-ekrani/sifremi-unuttum",
      },
    ],
  },
  {
    index: "17",
    icon: "bi bi-people-fill",
    name: "Kayıt",
    type: "link",
    path: "/genel/kayit-ekrani",
  },
  {
    index: "18",
    icon: "bi bi-people-fill",
    name: "Telefon Doğrulaması",
    type: "link",
    path: "/genel/dogrulama-ekrani",
  },
  {
    index: "19",
    icon: "bi bi-graph-up-arrow",
    name: "Kullanıcı",
    type: "menu",
    sub: [
      {
        index: "19-1",
        icon: "bi bi-graph-up-arrow",
        name: "Profil",
        type: "link",
        path: "/genel/kullanici/profil",
      },
      {
        index: "19-2",
        icon: "bi bi-graph-up-arrow",
        name: "Firma",
        type: "link",
        path: "/genel/kullanici/firma",
      },
    ],
  },
];

export default { on_muhasebe, e_donusum, kobi, genel };
