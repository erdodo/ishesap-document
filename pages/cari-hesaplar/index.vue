<template>
  <div>
    <Header></Header>
    <div class="d-flex">
      <Aside></Aside>
      <div
        style="height: calc(100vh - 61px - 64px)"
        class="overflow-auto w-100 py-4 px-2"
      >
        <div class="container">
          <el-card class="w-100 mb-3">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">
                Anasayfa
              </el-breadcrumb-item>

              <el-breadcrumb-item>Cari Hesap</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <!--begin::Content-->
          <!--begin::Post-->
          <div class="post" id="kt_post">
            <!--begin::Questions-->
            <div class="mb-10">
              <!--begin::Question-->
              <div class="mb-0">
                <!--begin::Head-->
                <div class="d-flex align-items-center mb-4">
                  <!--begin::Title-->
                  <h1
                    class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1"
                    ref="cariHesap"
                  >
                    Cari Hesap nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <p>
                  Cari Hesap Ekle, Cari Hesap Adı, TCKN / VKN, Grubu, Genel
                  Vade, Vergi Daireleri, Ticaret Sicil Numarası, Etiket ve
                  Kategori kolonlarından oluşur.
                </p>
                <p>
                  Genel olarak tablolarımız belirli bir standartta görüntülenir.
                  Sol üstte, ilgili sayfadaki tablo adı bulunur. Hemen altında
                  Detaylı Arama, Sayfalama, Çıktı Al ve Ekle butonu bulunur.
                </p>
                <p>
                  Detaylı Arama tıklandığında mevcut tablodaki kolonlara göre
                  gelişmiş bir filtreleme sistemi ile arama yapılabilir.
                </p>
                <p>
                  Sayfalama (görseldeki 10) tıklandığında tercihe göre bir
                  sayfada kaç tane veri gösterileceği seçilebilir.
                </p>
                <p>
                  Çıktı Al butonu ile PDF, CSV, XLSX, TXT olarak tablodaki
                  veriler dışa aktarılabilir.
                </p>
                <p>
                  Tablonun başlık bölümünde ilk sırada “Ara” butonu bulunur.
                  Tıklandığında her kolonun altında kolonlara özel arama kısmı
                  açılır. İstenilen kolona göre arama yapılabilir. Başlıkların
                  yanlarında bulunan çift taraflı oklara tıklanarak o kolondaki
                  veriler sıralanabilir. (büyükten küçüğe, A’dan Z’ye gibi)
                </p>
                <p>
                  Sol altta tablodaki toplam veri sayısı yazar. Hemen ortada kaç
                  sayfa olduğu bilgisi bulunur. Tıklayarak istenilen sayfaya
                  gidilebilir. Sağ altta ise bir sayfada kaç veri gösteriliyor
                  bilgisi yazar.
                </p>
                <p class="fs-base fw-normal text-gray-700 my-4 docText">
                  Tablo içerisindeki verilerin ilk başında bir “kalem” simgesi
                  vardır. Buna tıklandığında o veri için seçenekler açılır.
                  Genelde “Detay, Düzenle, Seç, Sil” butonları bulunur.
                  (Tablodan tabloya değişiklik gösterir)
                </p>
                <p class="fs-base fw-normal text-gray-700 my-4 docText">
                  Ekle’ye tıkladığımızda ekranın sağ tarafından bir panel açılır
                  ve bulunan tabloya veri ekleme işlemi yapılabilir.
                </p>
                <p class="fs-base fw-normal text-gray-700 my-4 docText">
                  Ekle panelinde sol üstte tablonun adı bulunur. Hemen sağında
                  temizle ve kapat butonları bulunur. Temizleye tıklandığında
                  girilen tüm veriler temizlenir. Kapat butonuna tıklandığında
                  panel kapatılır. Orta kısımda girilebilecek veriler bulunur.
                  Zorunlu alanlar kolon isimlerinin yanında * ibaresi ile
                  belirtilmiştir.
                </p>
                <p class="fs-base fw-normal text-gray-700 my-4 docText">
                  Kolonların sağ üstünde bulunan Ekle butonu bazı seçilebilir
                  kolonlara pratik bir şekilde veri ekleyebilmek için
                  yapılmıştır. En alttaki Ekle butonu ile girilen veri ilgili
                  tabloya eklenebilir.
                </p>
                <p class="fs-base fw-normal text-gray-700 my-4 docText">
                  Tablolarda satırların üstüne tıkladığımızda seçilen verinin
                  alt sayfası var ise oraya yönlendirilir. Yoksa “Detay” paneli
                  açılır. Örneğin Cari Hesap’ın alt sayfası bulunmaktadır.
                </p>
                <p class="fs-base fw-normal text-gray-700 my-4 docText">
                  Seçilen Cari Hesabın alt sayfası detaylı bir şekilde
                  gösterilir. 6 alt menüden oluşur. Hesap Bakiye Özeti, Hesap
                  Ayarı, Adres Ayarı, Banka Ayarı, İletişim Ayarı ve Düzenle
                  menüsüne ek olarak sol üstte Cari’ye ait bilgiler yer alır.
                  Hemen altında açılır menüler bulunur. Sağ tarafta Hesap Bakiye
                  Özetinde oluşan verilerin Borç, Alacak ve Bakiye bilgileri yer
                  alır. Açılır menülerden biri seçildiğinde yeni tablo bölümü
                  eklenir. “Ödeme Al” altında, Banka Havale, Elden Tahsilat,
                  Çek, Senet modülleri bulunur. “Satış Yap” altında, Fatura,
                  İrsaliye, Sipariş modülleri bulunur… Örneğin Ödeme Al
                  butonunda Banka Havalesi seçildiğinde Bankadan Gelen Havale
                  İşlemi tablosu gelir.
                </p>
                <p class="fs-base fw-normal text-gray-700 my-4 docText">
                  Buradan bulunan Cari’ye Havale İşlemi bilgisi eklenebilir.
                  Eklenen veriye düzenle, sil gibi işlemler yapılabilir. Üst
                  tarafta orta bölümde “Not/Hatırlatıcı” bölümü bulunur. Bu
                  cariye özel eklenen notlar burada listelenir. Notların üstüne
                  tıklanıldığında düzenlenebilir ya da silinebilir. Burası daha
                  önce not eklenmediyse boş gözükür. Not eklemek için sağ
                  üstteki “+” butonuna tıklanabilir.
                </p>
                <p class="fs-base fw-normal text-gray-700 my-4 docText">
                  Başlık, Tarih ve Not bölümü bulunur.
                </p>
                <!--end::Summary-->
              </div>
              <!--end::Question-->
              <!--begin::Separator-->
              <div class="separator separator-dashed my-8"></div>
              <!--end::Separator-->
            </div>
            <!--end::Questions-->
            <!--begin::Pagination-->
            <div class="d-flex justify-content-between mb-0">
              <router-link
                to="/docs/giris/dogrulama"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
              >
                Önceki</router-link
              >
              <router-link
                to="/docs/finans-yonetimi/kartlar"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Sonraki</router-link
              >
            </div>
            <!--end::Questions-->
          </div>
          <!--end::Post-->
          <!--end::Content-->
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
