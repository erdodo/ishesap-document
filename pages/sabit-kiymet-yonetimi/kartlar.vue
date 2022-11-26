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
              <el-breadcrumb-item :to="{ path: '/sabit-kiymet-yonetimi' }">
                Sabit Kıymet Yönetimi
              </el-breadcrumb-item>
              <el-breadcrumb-item>Sabit Kıymet Kartları</el-breadcrumb-item>
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
                    ref="sabitKartlari"
                  >
                    Sabit Kıymet Kartları nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <!--begin::Summary-->

                <p>
                  Bu sayfada oluşturulan Sabit Kıymet Kartları bilgileri
                  listelenir. Sabit Kıymet kartları oluşturulup hesaplamalar
                  yapıldıktan sonra gösterilir. Ekranın sağ üstünden Ekle
                  butonuna tıklanarak ekleme yapılabilir.
                </p>

                <p>
                  Ekleme menüsünde; Sabit Kıymet Adı, Sabit Kıymet Kodu, Giriş
                  Birimi, Çıkış Birimi, Amortisman Listesi, Faydalı Ömür, Normal
                  Amortisman Oranı, Aktife Giriş Tarihi, Aktife Giriş Değeri,
                  Miktar, İlave Maliyet, Toplam Aktif Değer, Devreden Birikmiş
                  Amortisman Tutarı, Birikmiş Amortisman, Net Değer ve Kategori
                  kolonları bulunmaktadır. Burada "Sabit Kıymet Adı ve Sabit
                  Kıymet Kodu" zorunlu tutulmuştur. Diğer kolonlar isteğe göre
                  doldurulabilir.
                </p>
                <p>
                  "Amortisman Listesi" içerisinde seçim yapıldığında "Faydali
                  Ömür ve Normal Amortisman Oranı" kolonları seçilen amortismana
                  göre otomatik doldurulacaktır. Diğer bilgiler girildiğinde
                  gerekli hesaplamalar da yapılır.
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
                to="/docs/stok-hizmet-yonetimi/depo-kartlari"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Önceki</router-link
              >
              <router-link
                to="/docs/sabit-kiymet-yonetimi/hareket"
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
