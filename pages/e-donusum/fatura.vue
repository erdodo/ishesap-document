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
              <el-breadcrumb-item :to="{ path: '/e-donusum' }">
                E-Dönüşüm
              </el-breadcrumb-item>
              <el-breadcrumb-item>e-Fatura</el-breadcrumb-item>
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
                  <h1
                    class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1"
                    ref="fatura"
                  >
                    e-Fatura nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    e-Fatura modülü üç bölümden oluşur. Bunlar "Tümü, Taslak ve Giden" olarak tanımlanmıştır.
                  </p>
                  <h5>Tüm e-Faturalar</h5>
                  <p>
                    Burada oluşturmuş olduğumuz e-Faturaların tamamı gösterilir. Yani Taslak faturalar ve Giden faturalar beraber gösterilir.
                  </p>
                  <h5>Taslak e-Faturalar</h5>
                  <p>
                    Taslak faturalar yeni oluşturduğumuz ve işlem bekleyen faturalardır. Oluşturulan faturaların sağ tarafında "Faturayı Görüntüle" butonu ile bir panel açılabilir.
                    Bu panelde yapmış olduğunuz e-Faturanın bir önizlemesi gösterilirken, "PDF indir", "XML indir", "HTML indir" ve "Faturayı Gönder" butonları bulunur.
                    İndirme butonları gerekli dosyaları bilgisayarınıza indirmenize yararken gönderme butonu faturayı "MBT" sistemine gönderilir. Burada onaylanırsa eğer e-Faturanız resmileşmiş olur.
                  </p>
                  <h5>Giden e-Faturalar</h5>
                  <p>
                    Burada gönderilmiş e-Faturaların bir listesi gösterilir. Sadece Giden işlemlerinizi daha pratik görebilmeniz için tasarlanmıştır.
                  </p>
                  <p>
                    e-Fatura ekleme menüsü; tablolardan sağ üstten "Ekle" butonu ile açılır. Kullanıcıyı yeni bir sayfaya yönlendirir.
                    Burada sol üstte "Fatura Bilgileri" yer alır hemen sağında varsa "İrsaliye/Sipariş Bilgileri" girilebilir. Alt tarafta ise
                    "Fiş-Kalem" ekleme bölümü bulunur. "Satır Ekle" butonu ile istenildiği kadar satır eklenebilir. Mal/Hizmet Türü seçildiğinde seçilen bilgiye göre bir kolon aktif olur. Örneğin
                    Stok Kartı seçildi Stok Kartı kolonu açılır ve zorunlu olur. Diğer Vergiler butonu ile vergi eklenebilir. Tıklanıldığında bir panel açılır.
                    Vergi Türü seçildiğinde oranı girilmelidir. Her satır için özel olarak seçilmelidir. Ayrıca her satırın toplamı "Toplamlar" içinde yazar.
                  </p>
                  <p>
                    Fatura Bilgileri kısmında "Fatura Tipi" ne göre ekranda bazı değişiklikler olur. Örneğin "İade" Faturası oluşturmak istiyoruz. Seçildiğinde, Fiş-Kalem'in üstüne
                    "İade Bilgileri" adında bir bölüm açılır. Burada "İade Fatura Numarası" ve "İade Fatura Tarihi" bilgileri girmeniz beklenir. Aynı şekilde "SGK" tipinde bir fatura
                    oluşturmak istersek "SGK Bilgileri" bölümü açılır.
                  </p>
                  <p>
                    En altta solda "Kayıtlı Notlar" ve "Not" bölümü bulunur. Buradaya not yazılabilir ya da kayıtlı notlardan önceden oluşturduğumuz bir not seçilebilir.
                    Ya da yeni bir not oluşturup bunu bir sonraki işlemlerde kullanmak için kayıt edebiliriz. Sağ tarafında ise Genel Toplamlar gösterilir. Yapmış olduğunuz
                    bütün Fiş-Kalemlerin ortak bir hesabı burada yazar. Son olarak "Kaydet" butonu ile fatura oluşturulabilir.
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
            <div class="container d-flex justify-content-between footers">
              <router-link
                to="/docs/finans-yonetimi/cek-senet/senet/musteri-senet"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Önceki</router-link
              >
              <router-link
                to="/docs/alis-satis-yonetimi/irsaliye"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Sonraki</router-link
              >
            </div>
            <!--end::Questions-->
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
