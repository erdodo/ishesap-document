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
              <el-breadcrumb-item :to="{ path: '/stok-hizmet-yonetimi' }">
                Stok-Hizmet Yönetimi
              </el-breadcrumb-item>
              <el-breadcrumb-item>Stok Kartları</el-breadcrumb-item>
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
                    ref="stokKartlari"
                  >
                    Stok Kartları nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->

                <p>
                  Bu sayfada oluşturulan Stok Kartları bilgileri listelenir.
                  Stok Kartı eklerken sizin doldurabileceğiniz birçok alan
                  bulunurken burada sadece belirlediklerimiz gösterilir.
                </p>

                <p>
                  Ekleme menüsünde; Açıklama, Stok Adı, Stok Türü, Stok Kodu,
                  Giriş Birimi, Çıkış Birimi, Birim Fiyat Formatı, Para Birimi,
                  Alış Fiyatı, Alış KDV Oranı, Satış Fiyatı, Satış KDV Oranı,
                  Asgari Stok, Azami Stok, Fire Oranı, Temin Süresi, Ağırlık,
                  Genişlik, Yükseklik, Derinlik, Alan, Hacim ve bunların
                  türlerine ait kolonlar bulunmaktadır. Burada "Stok Adı, Stok
                  Kodu ve Para Birimi" zorunlu tutulmuştur. Diğer kolonlar
                  isteğe göre doldurulabilir. Giriş ve Çıkış Birimlerinin
                  içeriği; Adet, Çift, Gün, Saat, Paket, Kutu, Kilogram, Gram,
                  Ton, Litre, Mililitre, Santimetre, Metre, Metrekare,
                  Santimetrekare, Kilowatt saat değerleri bulunur. Ürün
                  (malzeme) bilgilerinizi girip Ekle butonuna tıklandıktan sonra
                  Stok Kartınız oluşturulur.
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
                to="/docs/alis-satis-yonetimi/siparis"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Önceki</router-link
              >
              <router-link
                to="/docs/stok-hizmet-yonetimi/stoklar"
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
