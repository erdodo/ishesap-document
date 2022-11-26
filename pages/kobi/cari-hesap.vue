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
              <el-breadcrumb-item> Cari Hesap </el-breadcrumb-item>
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
                    ref="kobiCari"
                  >
                    Kobi Cari Hesap nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <!--begin::Summary-->
                <p>
                  Kobiye ait oluşturulan Cari Hesaplar burada listelenir. Sol
                  üstte tablo adı, altında Detaylı Arama, Sayfalama, Çıktı Al,
                  Ara, Ekleme, Yardım gibi menüler bulunur. Veri
                  oluşturulduğunda üstüne tıklanıp detaylı alt menüsüne
                  gidilebilir. Sağ üstten "Ekle" butonu ile ekleme yapılabilir.
                </p>
                <p>
                  Ekleme menüsünde; Cari Hesap Adı, TCKN / VKN, Grubu, Genel
                  Vade(Gün), Vergi Dairesi, Ticaret Sicil Numarası, Meslek
                  Odası, Telefon ve Etiket kolonları bulunur. Zorunlu alanlar
                  <span class="text-danger">*</span> ibaresiyle gösterilmiştir.
                  Burada "Cari Hesap Adı" ve "TCKN / VKN" zorunlu tutulmuştur.
                  Ayrıca TCKN / VKN kolonu 11 hane girildiği taktirde "Adı" ve
                  "Soyadı" kolonları aktif olur.
                </p>
                <p>
                  Carinin detayına gidildiğinde bizi böyle bir sayfa karşılar.
                  Sol üstte ilgili carinin bilgileri yer alır. Hemen sağında
                  ilgili cariye eklenen notlar ve ekleme butonu yer alır.
                  Altında "Satış Yap" ve "Satın Al" butonları bulunurken sağında
                  ilgili cariye ait Borç, Alacak ve Bakiye göstergeleri bulunur.
                  Ayrıca 4 panele ayrılmıştır. Bunlar, Hesap Bakiye Özeti,
                  Sattıklarım, Aldıklarım ve Düzenle panelleridir. Hesap Bakiye
                  Özeti alınan ödemelerin tamamının listelendiği bölümdür.
                </p>
                <p>
                  Sattıklarım menüsünde ilgili cariye eklenen satılan ürün
                  siparişleri gösterilir. Buradan ürünlerin Vergili Ödenecek
                  Tutarı ile Ödenmiş Tutar eşit değilse "Hızlı İşlem" altında
                  "Ödeme Butonu" bulunur. Taksit bilgisi girildiyse "Ödeme
                  Butonu" yerine "Taksit" butonu bulunur. Tıklandığında
                  "Bankadan" ya da "Kasadan" ödeme butonları çıkar. Seçildiğinde
                  ise bir sorgu yapılır ve eminseniz işlem tamamlanır. Örneğin 3
                  taksit bilgisi girildiyse "1. Taksit" yazar. İlk taksit
                  ödendiğinde "2. Taksit" yazar. Tüm taksitler ödendiğinde işlem
                  tamamlanır. Ödeme yapıldığı taktirde Kalan Tutardan düşülür.
                  Tamamı ödenirse eğer Kalan Tutar sıfırlanır ve Ödeme butonu
                  kaldırılır.
                </p>
                <p>
                  Satış Yap butonuna tıklandığında bir sipariş ekleme menüsü
                  açılır. Ekleme menüsünde; Ürün Adı, Tutar, KDV, KDV Tutarı,
                  KDV Dahil, Vergili Ödenecek Tutar, Taksit Sayısı, Taksit
                  Tutarı, Vade Tarihi ve Ödenen Tutar kolonları bulunur. Taksit
                  sayısı girilirse "Vergili Ödenecek Tutar" ilgili taksit
                  sayısına bölünerek Taksit Tutarı kolonunda hesaplanır. Ayrıca
                  Ödenen Tutar girilirse altında "Bankadan Ödeme" ve "Kasadan
                  Ödeme" butonları aktif olur. Ekle dediğimizde Kobi Sipariş
                  tablosuna satılan ürün eklenmiş olur.
                </p>
                <p>
                  Aldıklarım menüsünde ise ilgili cariye eklenen alınan ürün
                  siparişleri gösterilir. Buradan ürünlerin Vergili Ödenecek
                  Tutarı ile Ödenmiş Tutar eşit değilse "Hızlı İşlem" altında
                  "Ödeme Butonu" bulunur. Ödeme yapıldığı taktirde Kalan
                  Tutardan düşülür. Tamamı ödenirse eğer Kalan Tutar sıfırlanır
                  ve Ödeme butonu kaldırılır. Sattıklarım ile benzer şekilde
                  çalışır.
                </p>
                <p>
                  Satın Al butonuna tıklandığında bir sipariş ekleme menüsü
                  açılır. Ekleme menüsünde; Ürün Adı, Tutar, KDV, KDV Tutarı,
                  KDV Dahil, Vergili Ödenecek Tutar, Taksit Sayısı, Taksit
                  Tutarı, Vade Tarihi ve Ödenen Tutar kolonları bulunur. Taksit
                  sayısı girilirse "Vergili Ödenecek Tutar" ilgili taksit
                  sayısına bölünerek Taksit Tutarı kolonunda hesaplanır. Ayrıca
                  Ödenen Tutar girilirse altında "Bankadan Ödeme" ve "Kasadan
                  Ödeme" butonları aktif olur. Ekle dediğimizde Kobi Sipariş
                  tablosuna alınan ürün eklenmiş olur.
                </p>
                <p>
                  Düzenle menüsünden ise ilgili cari bilgileri düzenlenebilir.
                  Ayrıca Eklenen notlarda bulunur. Not ekleme modalı şu şekilde
                  gözükür.
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
                to="/docs/kobi/anasayfa"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
              >
                Önceki</router-link
              >
              <router-link
                to="/docs/kobi/siparis"
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
