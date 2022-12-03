<template>
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
            ref="profile"
          >
            Profil nasıl çalışır?
          </h1>
          <!--end::Title-->
        </div>
        <!--end::Head-->
        <article>
          <div class="fs-base fw-normal text-gray-700 my-4 docText">
            Profil menüsü kendi içinde bölümlere ayrılmıştır. Profil Bilgileri,
            Firma Bilgileri, Firma Adres Bilgileri, İletişim Tercihleri gibi
            bölümlere ayrılmıştır.
          </div>
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
        to="/docs/giris/dogrulama"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
      >
        Önceki</router-link
      >
      <router-link
        to="/docs/finans-yonetimi/kartlar"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
        >Sonraki</router-link
      >
    </div>
    <!--end::Questions-->
  </div>
  <!--end::Post-->
  <!--end::Content-->
</template>

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
              <el-breadcrumb-item :to="{ path: '/genel' }">
                Genel
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/genel/kullanici' }">
                Kullanıcı
              </el-breadcrumb-item>
              <el-breadcrumb-item> Profil </el-breadcrumb-item>
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
                    ref="kobiBanka"
                  >
                    Profil nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                  <!--begin::Icons-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    Profil menüsü kendi içinde bölümlere ayrılmıştır. Profil Bilgileri,
            Firma Bilgileri, Firma Adres Bilgileri, İletişim Tercihleri gibi
            bölümlere ayrılmıştır.
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
                to="/docs/kobi/kasa"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
              >
                Önceki</router-link
              >
              <router-link
                to="/docs/kobi/fatura"
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
