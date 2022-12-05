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
              <el-breadcrumb-item :to="{ path: '/on-muhasebe/stok-hizmet-yonetimi' }">
                Stok-Hizmet Yönetimi
              </el-breadcrumb-item>
              <el-breadcrumb-item>Hizmet-Masraf Kartları</el-breadcrumb-item>
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
                  <h1 class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1" ref="hizmetMasraf">
                    Hizmet ve Masraf Kartları nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                  <!--begin::Icons-->
                  <div class="d-flex align-items-center"></div>
                  <!--end::Icons-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    Hizmet-Masraf Kartları alınan veya satılan malların takibini
                    sağlamak için yapılmıştır. Ancak hizmet sektöründe veya
                    hizmet alım-satım durumlarında yapılan mal değil, hizmettir.
                    Takip edilen de hizmettir. Bu nedenle alınan ya da satılan
                    hizmetlere ait işlemlerin takip edilebilmesi için
                    Hizmet/Masraf Kartları sayfasına ihtiyaç duyulur. Bu
                    bağlamda, stok takibinin yapılması mümkün olmayan işlemler
                    ve hizmetler bu sayfada listelenir. Ekranın sağ üstünden
                    Ekle butonu ile ekleme menüsü açılabilir.
                  </p>

                  <p>
                    Ekleme menüsünde; Açıklama, Hizmet Masraf Adı, Hizmet Masraf
                    Kodu, Hizmet Masraf Türü, Para Birimi, KDV, KDV Dahil,
                    Vergili Ödenecek Tutar, Birim Fiyat, Etiket ve Kategori
                    kolonları bulunmaktadır. Burada "Hizmet Masraf Adı, Hizmet
                    Masraf Kodu ve Para Birimi" zorunlu tutulmuştur. Diğer
                    kolonlar isteğe göre doldurulabilir.
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
              <router-link to="/docs/stok-hizmet-yonetimi/stok-hareketleri"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">Önceki</router-link>
              <router-link to="/docs/stok-hizmet-yonetimi/depo-kartlari"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">Sonraki</router-link>
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
