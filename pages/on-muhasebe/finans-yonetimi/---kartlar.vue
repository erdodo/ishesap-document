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
            ref="finansKartlar"
          >
            Kartlar nasıl çalışır?
          </h1>
          <!--end::Title-->
        </div>
        <!--end::Head-->
        <article>
          <div class="fs-base fw-normal text-gray-700 my-4 docText">
            Bu bölümde Kasa ve Banka Kartları oluşturulabilir. Oluşturduğumuz
            kartlar ileride Tahsilat, Ödeme ya da Gelen Havale, Giden Havale
            gibi işlemlerde kullanılabilir.
          </div>
          <div class="fs-base fw-normal text-gray-700 my-4 docText">
            Kasa Kartı
          </div>
          <div class="fs-base fw-normal text-gray-700 my-4 docText">
            Tanımlanan Kasa Kartları burada listelenir. Üst tarafta Kasa ve
            Banka arasında geçiş yapılabilir. Hemen altında Detaylı Arama,
            sayfalama, Çıktı Al, Ara ve Ekle butonları görülebilir. Kayıtlı
            verilerin sol tarafında bir kalem sembolü vardır. Buna tıklayarak
            düzenleme, seçme, silme gibi işlemler yapılabilir.
          </div>
          <div class="fs-base fw-normal text-gray-700 my-4 docText">
            Kasa Kartı eklemek için; Kasa Kartı, Para Birimi, Kasa Şube,
            Kategori ve Etiket kolonlarından oluşmaktadır.
          </div>
          <div class="fs-base fw-normal text-gray-700 my-4 docText">
            Banka Kartı
          </div>
          <div class="fs-base fw-normal text-gray-700 my-4 docText">
            Kasa Kartına benzer şekilde tasarlanmıştır. Tabloda lislenen ve
            gözüken veriler daha kolay bir kullanım için azaltılmıştır.
          </div>
          <div class="fs-base fw-normal text-gray-700 my-4 docText">
            Banka Kartı eklemek için; Banka Tanımı, Bankalar, Banka Şube, IBAN,
            Hesap Numarası, Müşteri Numarası, Para Birimi, Hesap Tipi, Hesap
            Niteliği, Kategori, Etiket ve Swift kolonlarından oluşmaktadır.
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
        to="/docs/cari-hesaplar"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
      >
        Önceki</router-link
      >
      <router-link
        to="/docs/finans-yonetimi/kasa"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
        >Sonraki</router-link
      >
    </div>
    <!--end::Questions-->
  </div>
  <!--end::Post-->
  <!--end::Content-->
</template>
