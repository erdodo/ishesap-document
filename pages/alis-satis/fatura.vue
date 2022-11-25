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
            ref="fatura"
          >
            Fatura nasıl çalışır?
          </h1>
          <!--end::Title-->
          <!--begin::Icons-->
          <div class="d-flex align-items-center">
            <span
              class="ms-1"
              data-bs-toggle="tooltip"
              title="Bağlantıyı sabitle"
            >
              <!--begin::Svg Icon | path: assets/media/icons/duotune/abstract/abs022.svg-->
              <span
                class="svg-icon svg-icon-muted svg-icon-1"
                @click="scrollMeTo('fatura')"
                style="cursor: pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M11.425 7.325C12.925 5.825 15.225 5.825 16.725 7.325C18.225 8.825 18.225 11.125 16.725 12.625C15.225 14.125 12.925 14.125 11.425 12.625C9.92501 11.225 9.92501 8.825 11.425 7.325ZM8.42501 4.325C5.32501 7.425 5.32501 12.525 8.42501 15.625C11.525 18.725 16.625 18.725 19.725 15.625C22.825 12.525 22.825 7.425 19.725 4.325C16.525 1.225 11.525 1.225 8.42501 4.325Z"
                    fill="black"
                  />
                  <path
                    d="M11.325 17.525C10.025 18.025 8.425 17.725 7.325 16.725C5.825 15.225 5.825 12.925 7.325 11.425C8.825 9.92498 11.125 9.92498 12.625 11.425C13.225 12.025 13.625 12.925 13.725 13.725C14.825 13.825 15.925 13.525 16.725 12.625C17.125 12.225 17.425 11.825 17.525 11.325C17.125 10.225 16.525 9.22498 15.625 8.42498C12.525 5.32498 7.425 5.32498 4.325 8.42498C1.225 11.525 1.225 16.625 4.325 19.725C7.425 22.825 12.525 22.825 15.625 19.725C16.325 19.025 16.925 18.225 17.225 17.325C15.425 18.125 13.225 18.225 11.325 17.525Z"
                    fill="black"
                  />
                </svg>
              </span>
            </span>
            <!--end::Svg Icon-->
            <span class="ms-1" data-bs-toggle="tooltip" title="Yardım">
              <!--begin::Svg Icon | path: icons/duotune/general/gen045.svg-->
              <span class="svg-icon svg-icon-primary svg-icon-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    opacity="0.3"
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="10"
                    fill="black"
                  />
                  <rect
                    x="11"
                    y="17"
                    width="7"
                    height="2"
                    rx="1"
                    transform="rotate(-90 11 17)"
                    fill="black"
                  />
                  <rect
                    x="11"
                    y="9"
                    width="2"
                    height="2"
                    rx="1"
                    transform="rotate(-90 11 9)"
                    fill="black"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
            </span>
          </div>
          <!--end::Icons-->
        </div>
        <!--end::Head-->
        <!--begin::Summary-->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Ön Muhasebe / Alış - Satış Yönetimi / Fatura
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Fatura sayfası, Gelen (Alış) Fatura ve Giden (Satış) Fatura olmak
          üzere ikiye ayrılmıştır.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Gelen Fatura
        </div>
        <!-- <img
          src="/img/alis-fatura.png"
          alt="alis-fatura"
          class="img-fluid imageZoom"
          @click="imageKey = 0"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Oluşturduğumuz alış faturalar burada listelenir. Sağ üstten Ekle
          butonuna tıkladığımızda ekleme yapılabilir.
        </div>
        <!-- <img
          src="/img/alis-fatura-ekle.png"
          alt="alis-fatura-ekle"
          class="img-fluid imageZoom"
          @click="imageKey = 1"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Fatura ekleme menüsü, standart ekleme menülerinden farklı
          çalışmaktadır. Üst tarafta Faturaya ait genel bilgiler yer alırken alt
          tarafta ise o faturaya ait işlemler (hizmetler) gösterilir. Sol alttan
          "Yeni İşlem" butonuna tıklanarak istenildiği kadar yeni işlem
          eklenebilir. Her bir işlem kendi içinde oluşturulur. Sağ altta tarafta
          tüm işlemlerin genel tutarları gösterilir. Sağ alttan "Kaydet"
          butonuna tıklanarak girilen tüm veriler ve işlemler kaydedilir.
        </div>
        <!-- <img
          src="/img/alis_fatura_hizmet.png"
          alt="alis_fatura_hizmet"
          class="img-fluid imageZoom"
          @click="imageKey = 2"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Eklenen bir faturaya ekstra bir işlem eklemek gerekirse tablodan
          ilgili faturanın üstüne tıklanır. Karşımıza böyle bir sayfa
          çıkacaktır. Burada ilgili faturaya eklenen işlemler (hizmetler)
          gösterilir. Sağ üstten Ekle butonuna tıklayarak ekleme yapılabilir.
        </div>
        <!-- <img
          src="/img/alis_fatura_hizmet_ekle.png"
          alt="alis_fatura_hizmet_ekle"
          class="img-fluid imageZoom"
          @click="imageKey = 3"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Yeni hizmet ekleme menüsü, işlemleri tek tek eklemeyi sağlar. Toplu
          bir işlem oluşturulmak isteniyorsa fatura baştan oluşturulmalıdır.
        </div>
        <!-- <img
          src="/img/alis_fatura_odeme.png"
          alt="alis_fatura_odeme"
          class="img-fluid imageZoom"
          @click="imageKey = 4"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Alış Fatura tablosuda veri girildikten sonra tabloda ilgili verilerin
          sağ tarafında "Ödeme" butonu oluşur. Bu butona tıkladığımızda bizi
          böyle bir panel karşılar. Burada üst kısımda ilgili faturanın
          bilgileri gösterilir. Hemen altında "Banka Ödeme" veya "Kasa Ödeme"
          seçimleri vardır. Örneğin; Banka Ödeme seçildi. Hemen altında Banka
          Tanımı seçilir. Onun altında ise Ödenecek Tutar yer alır. İstenilen
          bilgiler doldurulduktan sonra "Ödeme" butonu ile ödeme işlemi
          gerçekleştirilir.
        </div>
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Giden Fatura
        </div>
        <!-- <img
          src="/img/satis-fatura.png"
          alt="satis-fatura"
          class="img-fluid imageZoom"
          @click="imageKey = 5"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Oluşturduğumuz satış faturalar burada listelenir. Sağ üstten Ekle
          butonuna tıkladığımızda ekleme yapılabilir.
        </div>
        <!-- <img
          src="/img/satis-fatura-ekle.png"
          alt="satis-fatura-ekle"
          class="img-fluid imageZoom"
          @click="imageKey = 6"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Fatura ekleme menüsü, standart ekleme menülerinden farklı
          çalışmaktadır. Üst tarafta Faturaya ait genel bilgiler yer alırken alt
          tarafta ise o faturaya ait işlemler (hizmetler) gösterilir. Sol alttan
          "Yeni İşlem" butonuna tıklanarak istenildiği kadar yeni işlem
          eklenebilir. Her bir işlem kendi içinde oluşturulur. Sağ altta tarafta
          tüm işlemlerin genel tutarları gösterilir. Sağ alttan "Kaydet"
          butonuna tıklanarak girilen tüm veriler ve işlemler kaydedilir.
        </div>
        <!-- <img
          src="/img/satis-fatura-hizmet.png"
          alt="satis-fatura-hizmet"
          class="img-fluid imageZoom"
          @click="imageKey = 7"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Eklenen bir faturaya ekstra bir işlem eklemek gerekirse tablodan
          ilgili faturanın üstüne tıklanır. Karşımıza böyle bir sayfa
          çıkacaktır. Burada ilgili faturaya eklenen işlemler (hizmetler)
          gösterilir. Sağ üstten Ekle butonuna tıklayarak ekleme yapılabilir.
        </div>
        <!-- <img
          src="/img/satis-fatura-hizmet-ekle.png"
          alt="satis-fatura-hizmet-ekle"
          class="img-fluid imageZoom"
          @click="imageKey = 8"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Yeni hizmet ekleme menüsü, işlemleri tek tek eklemeyi sağlar. Toplu
          bir işlem oluşturulmak isteniyorsa fatura baştan oluşturulmalıdır.
        </div>
        <!-- <img
          src="/img/satis-fatura-tahsilat.png"
          alt="satis-fatura-tahsilat"
          class="img-fluid imageZoom"
          @click="imageKey = 9"
          data-bs-toggle="modal"
          :data-bs-target="'#imgModalOpen' + src[imageKey]?.imageTitle"
        /> -->
        <div class="fs-base fw-normal text-gray-700 my-4 docText">
          Satış Fatura tablosuda veri girildikten sonra tabloda ilgili verilerin
          sağ tarafında "Tahsilat" butonu oluşur. Bu butona tıkladığımızda bizi
          böyle bir panel karşılar. Burada üst kısımda ilgili faturanın
          bilgileri gösterilir. Hemen altında "Banka Tahsilat" veya "Kasa
          Tahsilat" seçimleri vardır. Örneğin; Banka Tahsilat seçildi. Hemen
          altında Banka Tanımı seçilir. Onun altında ise Tahsil edilecek Tutar
          yer alır. İstenilen bilgiler doldurulduktan sonra "Tahsil Et" butonu
          ile tahsilat işlemi gerçekleştirilir.
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
        to="/docs/finans-yonetimi/cek-senet/senet/musteri-senet"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
        >Önceki</router-link
      >
      <router-link
        to="/docs/alis-satis-yonetimi/irsaliye"
        class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
        >Sonraki</router-link
      >
    </div>
    <!--end::Questions-->
  </div>
  <!--end::Post-->
  <!--end::Content-->
</template>

<script>
export default {
  data() {
    return {
      imageKey: "",
      //   src: [
      //     {
      //       image: require("/img/alis-fatura.png"),
      //       imageAlt: "alis-fatura",
      //       imageTitle: "alis-fatura",
      //     },
      //     {
      //       image: require("/img/alis-fatura-ekle.png"),
      //       imageAlt: "alis-fatura-ekle",
      //       imageTitle: "alis-fatura-ekle",
      //     },
      //     {
      //       image: require("/img/alis_fatura_hizmet.png"),
      //       imageAlt: "alis_fatura_hizmet",
      //       imageTitle: "alis_fatura_hizmet",
      //     },
      //     {
      //       image: require("/img/alis_fatura_hizmet_ekle.png"),
      //       imageAlt: "alis_fatura_hizmet_ekle",
      //       imageTitle: "alis_fatura_hizmet_ekle",
      //     },
      //     {
      //       image: require("/img/alis_fatura_odeme.png"),
      //       imageAlt: "alis_fatura_odeme",
      //       imageTitle: "alis_fatura_odeme",
      //     },
      //     {
      //       image: require("/img/satis-fatura.png"),
      //       imageAlt: "satis-fatura",
      //       imageTitle: "satis-fatura",
      //     },
      //     {
      //       image: require("/img/satis-fatura-ekle.png"),
      //       imageAlt: "satis-fatura-ekle",
      //       imageTitle: "satis-fatura-ekle",
      //     },
      //     {
      //       image: require("/img/satis-fatura-hizmet.png"),
      //       imageAlt: "satis-fatura-hizmet",
      //       imageTitle: "satis-fatura-hizmet",
      //     },
      //     {
      //       image: require("/img/satis-fatura-hizmet-ekle.png"),
      //       imageAlt: "satis-fatura-hizmet-ekle",
      //       imageTitle: "satis-fatura-hizmet-ekle",
      //     },
      //     {
      //       image: require("/img/satis-fatura-tahsilat.png"),
      //       imageAlt: "satis-fatura-tahsilat",
      //       imageTitle: "satis-fatura-tahsilat",
      //     },
      //   ],
    };
  },
  methods: {
    scrollMeTo(refName) {
      let element = this.$refs[refName];
      let top = element.offsetTop - 90;

      window.scrollTo(0, top);
    },
  },
};
</script>

<style></style>
