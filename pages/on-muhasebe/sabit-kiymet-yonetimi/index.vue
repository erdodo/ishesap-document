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
              <el-breadcrumb-item>Sabit Kıymet Yönetimi</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/sabit-kiymet-yonetimi/kartlar'">
                <el-card class="my-2 animate">
                Sabit Kıymet Kartları
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/sabit-kiymet-yonetimi/hareketler'">
                <el-card class="my-2 animate">
                Sabit Kıymet Hareketleri
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
