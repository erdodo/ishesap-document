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
              <el-breadcrumb-item :to="{ path: '/on-muhasebe' }">
                Ön Muhasebe
              </el-breadcrumb-item>
              <el-breadcrumb-item>Stok-Hizmet Yönetimi</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/stok-hizmet-yonetimi/stok-kartlari'">
                <el-card class="my-2 animate">
                Stok Kartları
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/stok-hizmet-yonetimi/stoklar'">
                <el-card class="my-2 animate">
                Stoklar
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/stok-hizmet-yonetimi/donusum'">
                <el-card class="my-2 animate">
                Dönüşüm
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/stok-hizmet-yonetimi/stok-hareketleri'">
                <el-card class="my-2 animate">
                Stok Hareketleri
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/stok-hizmet-yonetimi/hizmet-masraf-kartlari'">
                <el-card class="my-2 animate">
                Hizmet-Masraf Kartları
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/stok-hizmet-yonetimi/depo-kartlari'">
                <el-card class="my-2 animate">
                Depo Kartları
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
