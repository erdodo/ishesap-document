<template>
  <div>
    <Header></Header>
    <div class="d-flex">
      <Aside></Aside>
      <div style="height: calc(100vh - 61px - 64px)" class="overflow-auto w-100 py-4 px-2">
        <div class="container">
          <el-card class="w-100 mb-3">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">
                Anasayfa
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/on-muhasebe' }">
                Ön Muhasebe
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/on-muhasebe/alis-satis-yonetimi' }">
                Alış-Satış Yönetimi
              </el-breadcrumb-item>
              <el-breadcrumb-item>Teklif İşlemleri</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <div class="post" id="kt_post">
            <!--begin::Questions-->
            <div class="mb-10">
              <!--begin::Question-->
              <div class="mb-0">
                <!--begin::Head-->
                <div class="d-flex align-items-center mb-4">
                  <!--begin::Title-->
                  <h1 class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1" ref="fatura">
                    Teklifler nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    Teklifler bir müşterinize (carinize) özel olarak oluşturmak
                    istediğiniz teklifler için tasarlanmıştır.
                  </p>
                  <p>
                    Burada Ekleye tıkladğımızda özel bir sayfa açılır. Üst
                    tarafta Teklif bilgileri yer alırken alt tarafta Fiş-Kalem
                    kısmı bulunur. Üst tarafta Cari Hesap, Teklif No, Teklif
                    Tarihi, Geçerlilik Tarihi, Para Birimi ve Döviz Kuru yer
                    alır. Alt tarafta ise Mal/Hizmet Türü, Depo Kartları,
                    Miktar, Birim, Birim Fiyat, KDV, İskonto/Arttırım,
                    İskonto/Arttırım Oranı, Açıklama, Toplamlar ve Silme tuşu
                    yer alır. Toplamlar o satırın toplamını gösterir. Mal/Hizmet
                    Türü seçildiğinde ilgili kolon gösterilir ve seçilmek
                    zorundadır.
                  </p>
                  <p>
                    En altta ise Kayıtlı Notlar ve Not bölümü bulunur. İstenilen
                    bir not el ile girilebilir. Ya da daha önce kayıt edilen bir
                    not varsa Kayıtlı Notlar bölümünde seçilerek otomatik
                    doldurulabilir. Hemen sağ tarafında ise Teklifin toplam
                    tutarları gösterilir. Kaydet butonu ile tamamlanır.
                  </p>
                  <p>
                    Kaydedilen veri tabloya düşer ve o teklife özel olarak bir
                    Teklif Sayfası oluşur. Bu sayfayı inceleyip müşterinize
                    gönderebilirsiniz. Bu sayfada oluşturduğunuz teklifin
                    detayları gösterilir. Sağ altta ise "Kabul Et" ve "Reddet"
                    butonları bulunur. Müşteri Kabul Et butonuna tıklarsa Teklif
                    geçerli olur ve tabloya o teklifin yanına "Sipariş oluştur"
                    adında bir buton daha gelir. Bu buton sayesinde teklifinizi
                    Siparişe dönüştürüp müşterinize gönderebilirsiniz. Reddet
                    butonuna tıklarsa teklif geçerli olmaz ve işlem kapatılır.
                  </p>
                </article>
              </div>
              <!--end::Question-->
              <!--begin::Separator-->
              <el-divider />
              <!--end::Separator-->
            </div>
            <!--end::Questions-->
            <!--begin::Pagination-->
            <div class="d-none">
              <router-link to="/docs/finans-yonetimi/cek-senet/senet/musteri-senet"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">Önceki</router-link>
              <router-link to="/docs/alis-satis-yonetimi/irsaliye"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">Sonraki</router-link>
            </div>
            <!--end::Questions-->
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
