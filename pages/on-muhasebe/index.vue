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
              <el-breadcrumb-item> Ön Muhasebe </el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/ozet'">
                <el-card class="my-2 animate">
                Özet
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/cari-hesaplar'">
                <el-card class="my-2 animate">
                Cari Hesaplar
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/finans-yonetimi'">
                <el-card class="my-2 animate">
                Finans Yönetimi
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/alis-satis-yonetimi'">
                <el-card class="my-2 animate">
                Alış-Satış Yönetimi
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/stok-hizmet-yonetimi'">
                <el-card class="my-2 animate">
                Stok-Hizmet Yönetimi
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/sabit-kiymet-yonetimi'">
                <el-card class="my-2 animate">
                Sabit Kıymet Yönetimi
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/personel-yonetimi'">
                <el-card class="my-2 animate">
                Personel Yönetimi
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/buro-yonetimi'">
                <el-card class="my-2 animate">
                Büro Yönetimi
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
