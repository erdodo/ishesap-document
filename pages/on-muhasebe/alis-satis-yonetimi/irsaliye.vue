<template>
  <div>
    <Header></Header>
    <div class="d-flex">
      <Aside></Aside>
      <div style="height: calc(100vh - 61px - 64px)" class="overflow-auto w-100 py-4 px-2">
        <div class="container">
          <el-card class="w-100 mb-3">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">Anasayfa</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/on-muhasebe' }">
                Ön Muhasebe
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/on-muhasebe/alis-satis-yonetimi' }">Alış-Satış
                Yönetimi</el-breadcrumb-item>
              <el-breadcrumb-item>İrsaliye İşlemleri</el-breadcrumb-item>
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
                    İrsaliye nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    İrsaliye sayfası, Gelen (Alış) İrsaliye ve Giden (Satış) İrsaliye
                    olmak üzere ikiye ayrılmıştır.
                  </p>
                  <h5>Gelen İrsaliye</h5>
                  <p>
                    Oluşturduğumuz Gelen İrsaliyeler burada listelenir. Sağ üstten
                    Ekle butonuna tıkladığımızda ekleme yapılabilir.
                  </p>
                  <p>
                    İrsaliye ekleme menüsü, standart ekleme menülerinden farklı
                    çalışmaktadır. Üst tarafta irsaliyeye ait genel bilgiler yer
                    alırken alt tarafta ise o irsaliyeye ait işlemler (hizmetler,
                    fiş, kalem) gösterilir. Sol alttan "Satır Ekle" butonuna
                    tıklanarak istenildiği kadar yeni işlem eklenebilir. Her bir
                    işlem kendi içinde oluşturulur. Sağ alt tarafta tüm
                    işlemlerin genel tutarları gösterilir. Sağ alttan "Kaydet"
                    butonuna tıklanarak girilen tüm veriler ve işlemler
                    kaydedilir.
                  </p>
                  <p>
                    Stok Kartı, Depo Kartı gibi bilgiler girilerek satırlar oluşturulmalıdır. Her
                    satırın toplamı "Toplamlar" kısmından takip edilebilir.
                    Kaldırmak istenilirse sağ taraftaki "X" butonuna
                    basılabilir.
                  </p>
                  <h5>Giden İrsaliye</h5>
                  <p>
                    Oluşturduğumuz Giden İrsaliyeler burada listelenir. Sağ üstten
                    Ekle butonuna tıkladığımızda ekleme yapılabilir.
                  </p>
                  <p>
                    İrsaliye ekleme menüsü, standart ekleme menülerinden farklı
                    çalışmaktadır. Üst tarafta irsaliyeye ait genel bilgiler yer
                    alırken alt tarafta ise o irsaliyeye ait işlemler (hizmetler)
                    gösterilir. Sol alttan "Satır Ekle" butonuna tıklanarak
                    istenildiği kadar yeni işlem eklenebilir. Her bir işlem
                    kendi içinde oluşturulur. Sağ alt tarafta tüm işlemlerin
                    genel tutarları gösterilir. Sağ alttan "Kaydet" butonuna
                    tıklanarak girilen tüm veriler ve işlemler kaydedilir.
                  </p>
                  <p>
                    Stok Kartı, Depo Kartı gibi bilgiler girilerek satırlar oluşturulmalıdır. Her
                    satırın toplamı "Toplamlar" kısmından takip edilebilir.
                    Kaldırmak istenilirse sağ taraftaki "X" butonuna
                    basılabilir.
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
