<template>
  <!--begin::Content-->
  <!--begin::Post-->
  <div class="post" id="kt_post" ref="register">
    <!--begin::Questions-->
    <div class="mb-10">
      <!--begin::Question-->
      <div class="mb-0">
        <!--begin::Head-->
        <div class="d-flex align-items-center mb-4">
          <!--begin::Title-->
          <h1 class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1">
            Kayıt ol ekranı nasıl çalışır?
          </h1>
          <!--end::Title-->
        </div>
        <!--end::Head-->
        <!--begin::Summary-->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Kayıt ol ekranı üç aşamadan oluşur.
        </div>
        <ol class="fs-base fw-normal text-gray-700 my-4 docText">
          <li>Kullanıcı Bilgileri</li>
          <li>Firma Bilgileri</li>
          <li>Ödeme Bilgileri</li>
        </ol>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          “Kullanıcı Bilgileri” bölümünde kişinin Adı, Soyadı, Telefon Numarası,
          E-posta Adresi ve Şifre bulunur. Bunları doldurmak zorunludur. Burada
          ki bilgileri doğru bir şekilde doldurmak önemlidir. Sonraki butonuna
          tıklandığında ikinci adıma geçilir.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Firma Bilgilerinde, Firma Adı, kayıtlı Vergi Dairesi ve TCKN ya da VKN
          bulunur. Zorunlu alanların doldurulması gerekir. Sonraki butonu ile
          son adıma geçilir.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Ödeme Bilgilerinde ise Adres bilgileri ve varsa “Promosyon Kodu”
          girilebilir. Üye Ol butonu ile kayıt işleminizi tamamlayabilirsiniz ve
          Giriş ekranına yönlendirilirsiniz.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          *Promosyon Kodunuz yoksa ilk başta 30 günlük deneme süresi ile
          kullanıma başlayabilirsiniz.
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
        to="/docs/giris/dogrulama"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
      >
        Önceki</router-link
      >
      <router-link
        to="/docs/anasayfa/araclar"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
        >Sonraki</router-link
      >
    </div>
    <!--end::Questions-->
  </div>
  <!--end::Post-->
  <!--end::Content-->
</template>
