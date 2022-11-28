<template>
  <div>
    <Header></Header>
    <div class="d-flex">
      <Aside></Aside>
      <div style="height: 100vh" class="overflow-auto w-100 py-4 px-2">
        <div class="containter">
          <el-card class="w-100">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }"
                >Anasayfa</el-breadcrumb-item
              >
              <el-breadcrumb-item :to="{ path: '/alis-satis' }"
                >Alış-Satış Yönetimi</el-breadcrumb-item
              >
              <el-breadcrumb-item>Fatura</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <!-------  KODLAR BURAYA İLK --------->
          <!-- <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" /> -->
          <!-------  KODLAR BURAYA SON --------->
          <div class="d-flex justify-content-between mb-0 footers container">
            <router-link
              to="/"
              class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
              >Önceki</router-link
            >
            <router-link
              to="/"
              class="btn btn-light btn-active-light-primary fw-bold fs-6 mx-2"
              >Sonraki</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
