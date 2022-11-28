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
              <el-breadcrumb-item :to="{ path: '/e-donusum' }">
                E-Dönüşüm
              </el-breadcrumb-item>
              <el-breadcrumb-item>Serbest Meslek Makbuzu</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
