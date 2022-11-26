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
            ref="maliPersonel"
          >
            Mali Personel Hareketleri nasıl çalışır?
          </h1>
          <!--end::Title-->
        </div>
        <!--end::Head-->
        <!--begin::Summary-->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Mali Personel Hareketleri, Personel Kartlarında tanımladığımız
          Personellerimize bir ödeme yapılacağı zaman kullanılan sayfadır.
          Yapılan işlemler kayıt edildikten sonra burada listelenir. Sağ üstten
          Ekle butonuna tıklanarak ekleme yapılabilir.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Ekleme menüsünde; Açıklama, Personel Kartları, Personel Ödeme Türü,
          İşlem Tarihi ve Tutar kolonları bulunmaktadır.
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
        to="/docs/personel-yonetimi/kartlar"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
        >Önceki</router-link
      >
      <router-link
        to="/docs/buro-yonetimi/kiralar"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
      >
        Sonraki</router-link
      >
    </div>
    <!--end::Questions-->
  </div>
  <!--end::Post-->
  <!--end::Content-->
</template>
