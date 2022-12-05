<template>
  <div>
    <Header></Header>
    <div class="d-flex">
      <Aside></Aside>
      <div
        style="height: calc(100vh - 61px - 64px)"
        class="overflow-auto w-100 py-4 px-2"
      >
        <div class="container">
          <el-card class="w-100 mb-3">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">
                Anasayfa
              </el-breadcrumb-item>
              <el-breadcrumb-item> Genel </el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <nuxt-link :to="'/genel/giris-ekrani'">
                  <el-card class="my-2 animate">
                  Giriş Ekranı
                </el-card>
                </nuxt-link>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <nuxt-link :to="'/genel/kayit-ekrani'">
                  <el-card class="my-2 animate">
                  Kayıt
                </el-card>
                </nuxt-link>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <nuxt-link :to="'/genel/dogrulama-ekrani'">
                  <el-card class="my-2 animate">
                  Telefon Doğrulaması
                </el-card>
                </nuxt-link>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <nuxt-link :to="'/genel/kullanici'">
                  <el-card class="my-2 animate">
                  Kullanıcı
                </el-card>
                </nuxt-link>
              </div>
            </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
