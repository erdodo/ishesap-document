<template>
  <el-menu
    :default-active="activeIndex"
    class="d-flex"
    mode="horizontal"
    @select="handleSelect"
    :class="width < 900 ? ' justify-content-between' : ''"
    router
  >
    <el-menu-item @click="setMenu()" v-show="width < 900">
      <i class="bi bi-list h2"></i>
    </el-menu-item>

    <el-menu-item
      index="/"
      class="active-iptal"
      :class="width < 900 ? 'w-100 text-center' : ''"
    >
      <div class="d-flex h-100 align-items-center">
        <img
          src="/icon/is_black3.png"
          class="m-0"
          style="max-height: 30px"
          alt=""
        />
        <h5 class="m-0">&nbsp;- Döküman</h5>
      </div>
    </el-menu-item>

    <template v-if="width >= 900">
      <el-menu-item index="/kobi">Kobi</el-menu-item>
      <el-menu-item index="/onmuhasebe">Ön Muhasebe</el-menu-item>
      <el-menu-item index="/muhasebe">Resmi Muhasebe</el-menu-item>
      <el-menu-item index="/edonusum">E-Dönüşüm</el-menu-item>
      <el-menu-item class="w-100 active-iptal"></el-menu-item>

      <el-menu-item index="/uye-ol">Üye Ol</el-menu-item>
    </template>
    <el-menu-item index="/giris-yap">Giriş Yap</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
    };
  },
  methods: {
    setMenu() {
      this.$store.commit("setMenuVisible");
    },
  },
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
};
</script>

<style>
.active-iptal {
  border-bottom: none !important;
}
</style>
