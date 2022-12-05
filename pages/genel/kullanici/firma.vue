<template>
  <div>
    <Header></Header>
    <div class="d-flex">
      <Aside></Aside>
      <div style="height: calc(100vh - 61px - 64px)" class="overflow-auto w-100 py-4 px-2">
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
              <el-breadcrumb-item> Firma </el-breadcrumb-item>
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
                  <h1 class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1" ref="kobiBanka">
                    Firma nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                  <!--begin::Icons-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    Firma, kullanıcının firmasının bilgilerini görebildiği,
                    gerekli ayarlarının bulunduğu yerdir.
                  </p>
                  <p>
                    Burada sol tarafta Firmanın bilgileri yer alırken sağ
                    tarafta seçilebilir menüler bulunmaktadır. Düzenle, Şube
                    Ayarları, Erişim Sahipleri, Adres Bilgileri gibi bölümler
                    yer alır.
                  </p>
                  <p>
                    Düzenle, firmanın bilgilerinin düzenleneceği yerdir. Kayıt
                    olurken oluşan hesabınız merkez şube olarak kabul edilir.
                    İsterseniz alt şubelerde oluşturabilirsiniz. Bunu Şube
                    Ayarlarında yaparsınız. Ayrıca Erişim Sahipleri kısmından o
                    şubelere kullanıcı oluşturabilirsiniz. Erişim sahipleri
                    sadece kendi verilerini görebilirken Merkez şube herşeyi
                    görür ve yönetebilir.
                  </p>
                  <p>
                    *Erişim Sahibi oluştururken TCKN, Telefon Numarası ve
                    E-Posta bilgisini doğru girdiğinizden emin olun. Kullanıcı
                    oluştururken belirlenen E-Posta adresine bir şifre
                    gönderilir. Kullanıcı E-Posta adresi ve şifre ile giriş
                    yapabilir.
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
            <div class="d-none">
              <router-link to="/docs/kobi/kasa" class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">
                Önceki</router-link>
              <router-link to="/docs/kobi/fatura" class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">
                Sonraki</router-link>
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