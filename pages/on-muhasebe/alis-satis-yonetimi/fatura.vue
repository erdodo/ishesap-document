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
              <el-breadcrumb-item :to="{ path: '/' }"
                >Anasayfa</el-breadcrumb-item
              >
              <el-breadcrumb-item :to="{ path: '/on-muhasebe' }">
                Ön Muhasebe
              </el-breadcrumb-item>
              <el-breadcrumb-item
                :to="{ path: '/on-muhasebe/alis-satis-yonetimi' }"
                >Alış-Satış Yönetimi</el-breadcrumb-item
              >
              <el-breadcrumb-item>Fatura İşlemleri</el-breadcrumb-item>
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
                    Fatura nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    Fatura sayfası, Gelen (Alış) Fatura ve Giden (Satış) Fatura
                    olmak üzere ikiye ayrılmıştır.
                  </p>
                  <h5>Gelen Fatura</h5>
                  <p>
                    Oluşturduğumuz Gelen Faturalar burada listelenir. Sağ üstten
                    Ekle butonuna tıkladığımızda ekleme yapılabilir.
                  </p>
                  <p>
                    Fatura ekleme menüsü, standart ekleme menülerinden farklı
                    çalışmaktadır. Üst tarafta Faturaya ait genel bilgiler yer
                    alırken alt tarafta ise o faturaya ait işlemler (hizmetler,
                    fiş, kalem) gösterilir. Sol alttan "Satır Ekle" butonuna
                    tıklanarak istenildiği kadar yeni işlem eklenebilir. Her bir
                    işlem kendi içinde oluşturulur. Sağ alt tarafta tüm
                    işlemlerin genel tutarları gösterilir. Sağ alttan "Kaydet"
                    butonuna tıklanarak girilen tüm veriler ve işlemler
                    kaydedilir.
                  </p>
                  <p>
                    Burada Mal/Hizmet Türü kolonunda "Stok Kartı, Hizmet Ve
                    Masraf Kartı, Sabit Kıymet Kartı" seçenekleri bulunur.
                    Bunlarda biri seçilirse ilgili seçeneğin kolonu gösterilir.
                    Stok Kartında ekstra olarak "Depo Kartları" kolonu da
                    gösterilir. "Diğer Vergiler" butonu ile vergi türleri
                    arasından seçim yapılabilir ve oranları girilebilir. Her
                    satırın toplamı "Toplamlar" kısmından takip edilebilir.
                    Kaldırmak istenilirse sağ taraftaki "X" butonuna
                    basılabilir.
                  </p>
                  <p>
                    Alış Fatura tablosunda veri girildikten sonra tabloda ilgili
                    verilerin sağ tarafında "Ödeme" butonu oluşur. Bu butona
                    tıkladığımızda bizi bir panel karşılar. Burada üst kısımda
                    ilgili faturanın bilgileri gösterilir. Hemen altında "Banka
                    Ödeme" veya "Kasa Ödeme" seçimleri vardır. Örneğin; Banka
                    Ödeme seçildi. Hemen altında Banka Tanımı seçilir. Onun
                    altında ise Ödenecek Tutar yer alır. İstenilen bilgiler
                    doldurulduktan sonra "Ödeme" butonu ile ödeme işlemi
                    gerçekleştirilir.
                  </p>
                  <h5>Giden Fatura</h5>
                  <p>
                    Oluşturduğumuz satış faturalar burada listelenir. Sağ üstten
                    Ekle butonuna tıkladığımızda ekleme yapılabilir.
                  </p>
                  <p>
                    Fatura ekleme menüsü, standart ekleme menülerinden farklı
                    çalışmaktadır. Üst tarafta Faturaya ait genel bilgiler yer
                    alırken alt tarafta ise o faturaya ait işlemler (hizmetler)
                    gösterilir. Sol alttan "Satır Ekle" butonuna tıklanarak
                    istenildiği kadar yeni işlem eklenebilir. Her bir işlem
                    kendi içinde oluşturulur. Sağ alt tarafta tüm işlemlerin
                    genel tutarları gösterilir. Sağ alttan "Kaydet" butonuna
                    tıklanarak girilen tüm veriler ve işlemler kaydedilir.
                  </p>
                  <p>
                    Eklenen bir faturaya ekstra bir işlem eklemek gerekirse
                    tablodan ilgili faturanın üstüne tıklanır. Karşımıza böyle
                    bir sayfa çıkacaktır. Burada ilgili faturaya eklenen
                    işlemler (hizmetler) gösterilir. Sağ üstten Ekle butonuna
                    tıklayarak ekleme yapılabilir.
                  </p>
                  <p>
                    Yeni hizmet ekleme menüsü, işlemleri tek tek eklemeyi
                    sağlar. Toplu bir işlem oluşturulmak isteniyorsa fatura
                    baştan oluşturulmalıdır.
                  </p>
                  <p>
                    Satış Fatura tablosuda veri girildikten sonra tabloda ilgili
                    verilerin sağ tarafında "Tahsilat" butonu oluşur. Bu butona
                    tıkladığımızda bizi böyle bir panel karşılar. Burada üst
                    kısımda ilgili faturanın bilgileri gösterilir. Hemen altında
                    "Banka Tahsilat" veya "Kasa Tahsilat" seçimleri vardır.
                    Örneğin; Banka Tahsilat seçildi. Hemen altında Banka Tanımı
                    seçilir. Onun altında ise Tahsil edilecek Tutar yer alır.
                    İstenilen bilgiler doldurulduktan sonra "Tahsil Et" butonu
                    ile tahsilat işlemi gerçekleştirilir.
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
