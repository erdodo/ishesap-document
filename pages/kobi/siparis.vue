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
              <el-breadcrumb-item :to="{ path: '/kobi' }">
                Kobi
              </el-breadcrumb-item>
              <el-breadcrumb-item> Sipariş </el-breadcrumb-item>
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
                    ref="kobiSiparis"
                  >
                    Kobi Sipariş nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <!--begin::Summary-->
                <p>
                  Kobiye ait oluşturulan tüm Siparişler burada listelenir.
                  Alınan Ürün ve Satılan ürün olarak ayrılmışlardır. Üst tarafta
                  Genel Bakiye, Kalan Ödemeler ve Kalan Tahsilat göstergeleri
                  bulunur. Genel Bakiye, tahsil edilmiş tutarlardan ödenmiş
                  tutarları çıkarılıp bunların toplamından hesaplanır. Kalan
                  Ödemeler, alınan ürünlerin Kalan Tutarları toplamından
                  hesaplanır. Kalan Tahsilatlar, satılan ürünlerin Kalan
                  Tutarları toplamından hesaplanır. Sağ üstten "Ekle" butonu ile
                  ekleme işlemi yapılabilir.
                </p>
                <p>
                  Ekleme menüsünde; Cari Hesap, Ürün Adı, Alış-Satış seçimi,
                  Tutar, KDV, KDV Tutarı, KDV Dahil, Vergili Ödenecek Tutar,
                  Taksit Sayısı, Taksit Tutarı, Vade Tarihi, Ödenen Tutar ve
                  Etiket kolonları bulunur. Zorunlu alanlar
                  <span class="text-danger">*</span> ibaresiyle gösterilmiştir.
                  Taksit sayısı girilirse "Vergili Ödenecek Tutar" ilgili taksit
                  sayısına bölünerek Taksit Tutarı kolonunda hesaplanır. Ayrıca
                  Ödenen Tutar girilirse altında "Bankadan Ödeme" ve "Kasadan
                  Ödeme" butonları aktif olur.
                </p>
                <p>
                  Eğer taksit bilgisi girilmediyse verilerin sağında "Ödeme"
                  butonu aktif olur. Bu butona tıkladığımızda karşımıza çıkan
                  sayfada ürünün bilgileri gösterilir. Hemen altında "Banka
                  Ödeme" ve "Kasa Ödeme" butonları vardır. Biri seçildikten
                  sonra "Ödenecek Tutar" girilir. Ya da istenilirse "Tamamını
                  Öde" butonu ile tüm tutar bilgisi otomatik girilebilir. Ödenen
                  tutar "Ödenmiş Tutar" altında gösterilir. Ödeme yapıldıktan
                  sonra eğer tamamı ödendi ise "Ödeme" butonu kaybolur.
                </p>
                <p>
                  Taksik bilgisi girildiyse eğer verilerin sağında "Taksit"
                  butonu aktif olur. Örneğin; 1000₺'lik bir ürün için taksit
                  sayısı 4 ise "Taksit" butonu 4 kez aktif olur. İlk başta "1.
                  Taksit" butonu oluşur. Tıklanıldığında Banka ya da Kasa seçimi
                  sunulur. Seçildiğinde ise 250₺ Banka ya da Kasadan alınır. Son
                  taksit ödenince Ödenmiş Tutar, Vergili Ödenecek Tutar ile
                  eşitlenir ve buton kaybolur.
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
                to="/docs/kobi/cari"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Önceki
              </router-link>
              <router-link
                to="/docs/kobi/kasa"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
              >
                Sonraki</router-link
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
