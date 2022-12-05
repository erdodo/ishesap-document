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

              <el-breadcrumb-item>Finans Yönetimi</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/finans-yonetimi/kasa'">
                <el-card class="my-2 animate">
                Kasa
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/finans-yonetimi/banka'">
                <el-card class="my-2 animate">
                Banka
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/finans-yonetimi/cek'">
                <el-card class="my-2 animate">
                Çekler
              </el-card>
              </nuxt-link>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <nuxt-link :to="'/on-muhasebe/finans-yonetimi/senet'">
                <el-card class="my-2 animate">
                Senetler
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
