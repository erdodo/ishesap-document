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
              <el-breadcrumb-item :to="{ path: '/buro-yonetimi' }">
                Büro Yönetimi
              </el-breadcrumb-item>
              <el-breadcrumb-item>Sabit İşletme Giderleri</el-breadcrumb-item>
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
                    ref="sabitGider"
                  >
                    Sabit İşletme Giderleri nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->

                <p>
                  Sabit İşletme Giderleri, işletmenin Elektrik, Su, Telefon,
                  Doğalgaz, Aidat gibi giderlerinin takibi için tasarlanmıştır.
                  Eklenen giderler burada listelenir.
                </p>

                <p>
                  Ekleme menüsünde; Açıklama, Gider Türü, Futara Numarası, Son
                  Ödeme Tarihi, Para Birimi ve Tutar kolonları bulunmaktadır.
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
                to="/docs/buro-yonetimi/kiralar"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
              >
                Önceki</router-link
              >
              <router-link
                to="/docs"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2 disabled"
                >Sonraki
              </router-link>
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
