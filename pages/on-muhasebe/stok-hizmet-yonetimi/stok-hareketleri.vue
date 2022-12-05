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
                Stok Hizmet Yönetimi
              </el-breadcrumb-item>
              <el-breadcrumb-item>Stok Hareketleri</el-breadcrumb-item>
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
                  <h1 class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1" ref="stokHareketleri">
                    Stok Hareketleri nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    İlgili sayfada Stok Hareketleri bilgileri gösterilmektedir.
                    Bu sayfada bir Ekleme, Düzenleme ya da Silme işlemi
                    yapılamaz. Stoklarınız içerisindeki bütün hareketliliği
                    listelemek amacıyla oluşturulmuştur. Stoklar üzerinde
                    yapılan tüm hareketliliği takip etmenizi sağlayan bu menü
                    aynı zamanda günlük dosyası gibi düşünülebilir.
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
              <router-link to="/docs/stok-hizmet-yonetimi/stoklar"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">Önceki</router-link>
              <router-link to="/docs/stok-hizmet-yonetimi/hizmet-masraf-kartlari"
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
