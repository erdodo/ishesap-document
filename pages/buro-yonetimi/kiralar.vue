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
            ref="kiralar"
          >
            Kiralar nasıl çalışır?
          </h1>
          <!--end::Title-->
        </div>
        <!--end::Head-->
        <!--begin::Summary-->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Kiralar ya da Kira Yönetimi, kiraların takibi için tasarlanmıştır.
          Eklenen kiralar burada listelenir.
        </div>

        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Ekleme menüsünde; Açıklama, Kira Yönetimi Şube, Alacak Hesabı, Alacak
          Hesabı Tutarı, Borç Hesabı, Borç Hesabı Tutarı, Alacak/Borç Hesabı,
          Alacak/Borç Hesabı Tutarı ve Kira Yönetimi Fiş Tarihi kolonları
          bulunmaktadır.
        </div>
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
        to="/docs/personel-yonetimi/mali-personel-hareketi"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
        >Önceki</router-link
      >
      <router-link
        to="/docs/buro-yonetimi/sabit-isletme-giderleri"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
        >Sonraki</router-link
      >
    </div>
    <!--end::Questions-->
  </div>
  <!--end::Post-->
  <!--end::Content-->
</template>
