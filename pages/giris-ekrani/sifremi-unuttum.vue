<template>
  <div>
    <Header></Header>
    <div class="d-flex">
      <Aside></Aside>
      <div style="height: 100vh" class="overflow-auto w-100 py-4 px-2">
        <div class="container">
          <el-card class="w-100">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"
                >Anasayfa</el-breadcrumb-item
              >
              <el-breadcrumb-item :to="{ path: '/giris-ekrani' }"
                >Giriş Ekranı</el-breadcrumb-item
              >
              <el-breadcrumb-item>Şifremi Unuttum</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <!-------  KODLAR BURAYA  --------->
          <div class="post mt-3" style="width: auto" id="kt_post">
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
                    Şifremi Unuttum nasıl çalışır?
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
                <div class="fs-base fw-normal text-gray-700 mb-4 docText">
                  Eğer zaten kayıtlı bir kullanıcıysanız ve şifrenizi
                  unuttuysanız bu butona tıklayınız. Açılan pencerede E-Posta
                  adresinizi girdikten sonra "Gönder"e tıklayınız. Kayıtlı
                  E-Posta adresinize yeni şifrenizin olduğu bir mail
                  gönderilecektir. O şifre ile tekrar giriş yapabilir.
                  Dilerseniz sonrasında panelde ki profil kısmından şifrenizi
                  güncelleyebilirsiniz.
                </div>
                <el-image
                  class="img-fluid"
                  :src="url"
                  :preview-src-list="srcList"
                  :initial-index="4"
                  fit="cover"
                />
                <!--end::Summary-->
              </div>
              <!--end::Question-->
              <!--begin::Separator-->
              <div class="separator separator-dashed my-8"></div>
              <!--end::Separator-->
            </div>
            <!--end::Questions-->
            <!--begin::Pagination-->
            <div class="d-flex justify-content-between mb-0 footers container">
              <router-link
                to="/giris-ekrani/giris"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Önceki</router-link
              >
              <router-link
                to="/kayit-ekrani/kayit-1"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
                >Sonraki</router-link
              >
            </div>
            <!--end::Questions-->
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "/img/sifre-unut.png",
      srcList: ["/img/sifre-unut.png"],
    };
  },
};
</script>
