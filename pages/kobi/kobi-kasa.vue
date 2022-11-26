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
            ref="kobiKasa"
          >
            Kobi Kasa nasıl çalışır?
          </h1>
          <!--end::Title-->
        </div>
        <!--end::Head-->
        <!--begin::Summary-->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Kobiye ait Kasa üzerinden yapılan tüm ödemeler ve tahsilat işlemleri
          burada listelenir. Alınan Ürün ve Satılan Ürünler gösterilir. Üst
          tarafta Kasa Bakiyesi, Ödemeler Toplamı ve Tahsilatlar Toplamı
          göstergeleri bulunur. Kasa Bakiyesi, Tahsilatlar Toplamından Ödemeler
          Toplamını çıkartarak hesaplanır. Ödemeler Toplamı, Alınan Ürünler için
          yapılan ödemelerin toplamını gösterir. Tahsilatlar Toplamı, Satılan
          Ürünler için yapılan tahsilat toplamlarını gösterir.
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
        to="/docs/kobi/siparis"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
      >
        Önceki</router-link
      >
      <router-link
        to="/docs/kobi/banka"
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
