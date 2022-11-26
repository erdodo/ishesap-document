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
              <el-breadcrumb-item>Çek işlemleri</el-breadcrumb-item>
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
                    ref="cekIslemleri"
                  >
                    Çekler nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <p>Müşteri Çek</p>
                <p>
                  Gelen çeklerimizi listelediğimiz ekrandır. Müşteri Çekler
                  “Ekle” menüsünden ilgili kolonları doldurarak oluşturulabilir.
                </p>
                <p>
                  Ekleme menüsünde; Cari Hesap, Çek Numarası, Çeki Düzenleyen,
                  Vade Tarihi, Hesap No, Banka Şube Adı, Şehirler, Para Birimi,
                  Dövizli Tutar, Tutar, Döviz Kuru, Döviz Kuru Kaynağı, Döviz
                  Kuru Açıklaması, Kur Tarihi, İşlem Tarihi, Etiket ve Pozisyon
                  kolonları bulunur.
                </p>
                <p>
                  *Para Birimi seçildiğinde otomatik olarak Döviz Kuru
                  doldurulur. Tutar girildiyse eğer Dövizli Tutar hesaplanır.
                </p>
                <p>
                  *Pozisyon kolonu seçilebilirdir. İçerisinde; Beklemede,
                  Karşılıksız, İcrada, Tahsil Edildi, İade Edildi, Ciroda,
                  Teminatta, Tahsilatta, Portföyde ve Ödendi seçenekleri
                  bulunur.
                </p>
                <p>Firma Çek</p>
                <p>
                  Giden çeklerimizi listelediğimiz ekrandır. Firma Çekler “Ekle”
                  menüsünden ilgili kolonları doldurarak oluşturulabilir.
                </p>
                <p>
                  Ekleme menüsünde; Cari Hesap, Çek Numarası, Çeki Düzenleyen,
                  Vade Tarihi, Hesap No, Banka Şube Adı, Şehirler, Para Birimi,
                  Dövizli Tutar, Tutar, Döviz Kuru, Döviz Kuru Kaynağı, Döviz
                  Kuru Açıklaması, Kur Tarihi, İşlem Tarihi, Etiket ve Pozisyon
                  kolonları bulunur.
                </p>
                <p>
                  *Para Birimi seçildiğinde otomatik olarak Döviz Kuru
                  doldurulur. Tutar girildiyse eğer Dövizli Tutar hesaplanır.
                </p>
                <p>
                  *Pozisyon kolonu seçilebilirdir. İçerisinde; Beklemede,
                  Karşılıksız, İcrada, Tahsil Edildi, İade Edildi, Ciroda,
                  Teminatta, Tahsilatta, Portföyde ve Ödendi seçenekleri
                  bulunur.
                </p>
                <p>
                  Gelen Çeklerde ve Senetlerde Tahsilat işlemi yapılabilir.
                  Bunun için ilgili verinin sağ tarafında Hızlı İşlem sütununda
                  “Tahsilat” butonu vardır. Buna tıkladığımızda bir panel
                  açılır.
                </p>
                <p>
                  Burada ilgili çek ya da senetin bilgileri gösterilir. Hemen
                  altında Banka ya da Kasa seçimi bulunur. Nereden tahsil
                  edilmesini istiyorsa orası seçilir. Örneğin kasayı seçtik.
                  Sonrasında daha önceden oluşturduğumuz, istediğimiz bir kasayı
                  seçiyoruz ve “Tahsil Et” butonuna tıklıyoruz. Eğer herşey
                  doğruysa işlem başarılı bir şekilde gerçekleşecektir.
                </p>
                <p>
                  Giden Çeklerde ve Senetlerde ise Ödeme işlemi yapılabilir.
                  Bunun için ilgili verinin sağ tarafında Hızlı İşlem sütununda
                  “Ödeme” butonu vardır. Buna tıkladığımızda bir panel açılır.
                </p>
                <p>
                  Burada ilgili çek ya da senetin bilgileri gösterilir. Hemen
                  altında Banka ya da Kasa seçimi bulunur. Nereden ödeme
                  yapılmak isteniyorsa orası seçilir. Örneğin bankayı seçtik.
                  Sonrasında daha önceden oluşturduğumuz, istediğimiz bir
                  bankayı seçiyoruz ve “Ödeme” butonuna tıklıyoruz. Eğer herşey
                  doğruysa işlem başarılı bir şekilde gerçekleşecektir.
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
                to="/docs/finans-yonetimi/banka"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Önceki</router-link
              >
              <router-link
                to="/docs/finans-yonetimi/cek-senet/senet/musteri-senet"
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
