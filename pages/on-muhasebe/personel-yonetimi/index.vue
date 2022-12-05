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
              <el-breadcrumb-item :to="{ path: '/on-muhasebe' }">
                Ön Muhasebe
              </el-breadcrumb-item>
              <el-breadcrumb-item>Personel Yönetimi</el-breadcrumb-item>
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
                  <h1 class="fs-2 fw-bolder text-gray-900 text-hover-primary me-1" ref="personelKartlari">
                    Personel Kartları nasıl çalışır?
                  </h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    Personel Kartları, şirket, kurum altında çalışan, bulunan
                    personellerinizi kayıt edip listeleyebildiğiniz bölümdür.
                    Sağ üstten Ekle butonuna tıklanarak ekleme yapılabilir.
                  </p>
                  <p>
                    Ekleme menüsünde, Resim, TCKN, Adı, Soyadı, Sicil Numarası,
                    Telefon, Doğum Tarihi, Cinsiyet, Görev, E-Posta, Adres, İşe
                    Giriş Tarihi, Net Maaş, Brüt Maaş, Not, Etiket ve Kategori
                    kolonları bulunur.
                  </p>
                  <p>
                    Oluşturulan personelin tablodan üstüne tıklandığında
                    Personel Detay sayfasına gidilir. Burada o personele ait
                    bilgiler yer alırken Mali Personel Hareketleri, Yıllık İzin
                    Talebi tabloları gibi bölümler bulunur.
                  </p>
                  <p>
                    Mali Personel Hareketleri, personelinize yapılacak ödemeleri
                    kontrol etmenizi sağlar. Ekleme menüsünde o personele ait
                    ödeme işlemi yapılabilir. Ekleme menüsünde,Personel Ödeme
                    Türü, Düzenleme Tarihi, Tutar ve Açıklama kolonları bulunur.
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
              <router-link to="/docs/sabit-kiymet-yonetimi/hareket"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">Önceki</router-link>
              <router-link to="/docs/personel-yonetimi/mali-personel-hareketi"
                class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2">Sonraki</router-link>
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
