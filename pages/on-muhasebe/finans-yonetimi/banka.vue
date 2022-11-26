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
              <el-breadcrumb-item :to="{ path: '/on-muhasebe' }">
                Ön Muhasebe
              </el-breadcrumb-item>
              <el-breadcrumb-item
                :to="{ path: '/on-muhasebe/finans-yonetimi' }"
              >
                Finans Yönetimi
              </el-breadcrumb-item>
              <el-breadcrumb-item>Banka İşlemleri</el-breadcrumb-item>
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
                    ref="finansBanka"
                  >
                    Banka nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <!--begin::Summary-->
                <p>
                  Bu panelde hiçbir işlem yapılmamaktadır. Burası görüntüleme ve
                  listelemek için tasarlanmıştır. Diğer panellerden yapıtığınız,
                  Bankanızı etkileyen tüm işlemler buraya yansıtılır. Bankanın
                  güncel bakiye durumu görüntülenir.
                </p>
                <p>Gelen Havale İşlemi</p>
                <p>
                  Bankaya gelen havale burada listelenir. Gelen Havale İşlemi
                  oluşturmak için “Ekle” butonuna tıklanmalıdır.
                </p>
                <p>
                  Ekleme menüsünde; Açıklama, Banka, İşlem Tipi, Belge No, İşlem
                  Tarihi, Tutar, Para Birimi, KDV, KDV Dahil, KDV Tutarı, Kaynak
                  Belge, Vergi Açıklaması, Vergili Ödenecek Tutar, Döviz Kuru,
                  Dövizli Tutar kolonları bulunmaktadır.
                </p>
                <p>
                  Bazı kolonlar veri girişine kapalıdır. Kendi içlerinde
                  hesaplanırlar ya da otomatik doldurulurlar. Ayrıca İşlem Tipi
                  seçildiğinde içerisinde “Kasa, Banka, Hizmet – Masraf ve Cari”
                  bulunur. Bunlarda biri seçildiğinde onun kolonu da açılır. Ve
                  ayrıca bunlardan “Cari” seçilirse “Tip” adında bir kolon daha
                  gösterilir. Bunun içeride ise “Fatura, Çek, Senet, Sabit Gider
                  ve Diğer” adında seçimler bulunur. Fatura seçildiğinde “Satış
                  Fatura”, Çek seçildiğinde “Müşteri Çek”, Senet seçildiğinde
                  “Müşteri Senet” kolonları gelirken “Sabit Gider” ya da “Diğer”
                  seçeneklerinde yeni bir kolon gelmez.
                </p>
                <p>
                  Kolonların bazıları seçildiğinde içerisinde bulunan (daha
                  önceden tanımlanmış) verilerin aynıları var ise o kolonlar
                  otomatik doldurulur. Örneğin; Bankamızdan, seçilen Cari Hesaba
                  tanımlı bir Müşteri Çek’in havalesini yapmak istiyoruz. Bunun
                  için Bankamızı seçeriz. İşlem Tipi olarak Cari seçildikten
                  sonra “Cari Hesap ve Tip” kolonları açılır. Buradan istenilen
                  Cari seçilir ve Tip seçiminden Çek seçilir. Kayıtlı olan çek
                  seçilir. Çekin içinde tanımlı olan Tutar, Döviz Kuru, Dövizli
                  Tutar ve Para Birimi otomatik olarak doldurulur ve aktifliği
                  kalkar, artık düzenlenemez hale gelir. Diğer kalan bilgilerde
                  doldurulabilir ve “Ekle” tıklandığında seçilen çek bankamızdan
                  havale edilmiş olur.
                </p>
                <p>
                  *Bu kolonlardan biri seçildiğinde ise diğerleri gizlenir ve
                  aktifliği kalkar.
                </p>
                <p>Giden Havale İşlemi</p>
                <p>
                  Bankadan Giden Havale İşlemi yapılacaksa bu panel
                  kullanılabilir. Yapılan işlemler tabloda listelenir.
                </p>
                <p>
                  *Boş tablolarda ortada ilgili tabloda veri olmadığını belirten
                  bir yazı ve simge bulunur. Ekleme işlemi yapılabilen
                  tablolarda buraya da tıklanarak ekleme yapılabilir.
                </p>
                <p>
                  Ekleme menüsünde; Açıklama, Banka, İşlem Tipi, Belge No, İşlem
                  Tarihi, Para Birimi, Tutar, KDV, KDV Dahil, KDV Tutarı, Vergi
                  Açıklaması, Vergili Ödenecek Tutar, Kaynak Belge, Döviz Kuru,
                  Dövizli Tutar kolonları bulunmaktadır. Burasıda neredeyse
                  tamamen Banka Gelen Havale İşlemi menüsü ile aynıdır. Sadece
                  “Tip” bölümünde Fatura seçildiğinde “Alış Fatura”, Çek
                  seçildiğinde “Firma Çek”, Senet seçildiğinde “Firma Senet”
                  kolonları gelirken yine “Sabit Gider” ya da “Diğer”
                  seçeneklerinde yeni bir kolon gelmez.
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
                to="/docs/finans-yonetimi/kasa"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Önceki</router-link
              >
              <router-link
                to="/docs/anasayfa/araclar"
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
