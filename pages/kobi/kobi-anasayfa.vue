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
            ref="kobiAnasayfa"
          >
            Kobi Ana Sayfa nasıl çalışır?
          </h1>
          <!--end::Title-->
        </div>
        <!--end::Head-->
        <!--begin::Summary-->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Kobinin Ana Sayfası dört kısımdan oluşmaktadır. İlk başta "Hoş
          Geldiniz" yazısı ile beraber "Hızlı İşlemler" menüsü bulunmaktadır.
          Hemen altında "Yeni Özelliklerimiz" ve bunların sağ tarafında ise
          "Yardım" menüsü bulunmaktadır. En altta ise takvim gösterilmektedir.
          Bu menüler ne işe yarar?
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Hızlı İşlemler menüsünde Siparişleriniz için iki kart butonu
          bulunmaktadır. Bunlar, "Satın Al" ve "Satış Yap" butonlarıdır. Ayrıca
          yeni bir Cari Hesap oluşturmak istenirse "Cari" butonu bulunmaktadır.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Cari Ekleme menüsünde; Cari Hesap Adı, TCKN / VKN, Grubu, Genel
          Vade(Gün), Vergi Dairesi, Ticaret Sicil Numarası, Meslek Odası,
          Telefon ve Etiket kolonları bulunur. Zorunlu kolonlar
          <span class="text-danger">*</span> ibaresi ile gösterilir. Burada,
          "Cari Hesap Adı" ve "TCKN / VKN" kolonları zorunlu tutulmuştur. Ayrıca
          "TCKN / VKN" kısmında 11 hane girilmesi durumunda "Adı" ve "Soyadı"
          kolonları gelmektedir.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Sipariş Ekleme menüsünde; Cari Hesap, Ürün Adı, Tutar, KDV, KDV
          Tutarı, KDV Dahil, Vergili Ödenecek Tutar, Taksit Sayısı, Taksit
          Tutarı, Vade Tarihi ve Ödenen Tutar kolonları bulunur. Zorunlu
          kolonlar <span class="text-danger">*</span> ibaresi ile gösterilir.
          Burada, "Tutar" kolonları zorunlu tutulmuştur.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Burada "Cari Hesap" seçilirse belirli bir Cariye sipariş işlemi
          uygulanabilir. Ya da hiçbir şey seçilmeden sipariş işlemi de
          yapılabilir. Tutar girildikten sonra seçilen işlemler (KDV gibi)
          ilgili kolonlara otomatik olarak uygulanır. Taksit sayısı girildiğinde
          "Vergili Ödenecek Tutar" değeri ilgili taksit sayısına bölünerek
          hesaplanır. Ayrıca "Ödenen Tutar" kısmı da bir ön ödeme yapılacaksa
          yazılır ve altında "Bankadan Ödeme" ve "Kasadan Ödeme" butonları
          açılır. Bunlardan biri seçildiğinde ve "Ekle"ye tıkladığımızda işlem
          tamamlanmış olur.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Yeni Özelliklerimiz menüsünde duyurular ve sistem hakkında bilgiler
          yayınlanır. Bilmeniz gereken bir değişiklik yapıldığında "Yeni
          Özelliklerimiz" menüsünde gösterilecektir. Ayrıca kampanyalar ve özel
          özellikler için yayınlanacak olan duyurular da burada gösterilecektir.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Yardım menüsünde en sık sorulan soruların kısa yanıtları bulunur.
          Menüde başlıklara tıklayarak konu hakkında bilgi alabilirsiniz. Eğer
          yeterli gelmediyse ayrıntılı bilgi için ilgili butona tıklayıp doküman
          sayfasına gidebilirsiniz.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Takvim menüsünde, hesabınızda yapılan işlemler aylık olarak
          gösterilir. Burada istenilen işlemin üzerine tıklayıp ilgili işlemin
          sayfasına gidilebilir. Ya da bir işlemi başka bir tarihe sürükleyerek
          o tarihe taşınabilir.
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
        to="/docs/kobi/cari"
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
