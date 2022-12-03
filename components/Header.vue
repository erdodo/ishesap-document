<template>
  <el-menu
    class="d-flex"
    mode="horizontal"
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
        <h5 class="m-0">&nbsp;- Doküman</h5>
      </div>
    </el-menu-item>

    <template v-if="width >= 900">
      <el-menu-item
        index="/kobi"
        :class="
          this.$route.path.split('/')[1] == 'kobi'
            ? 'border-bottom border-primary'
            : ''
        "
        >Kobi</el-menu-item
      >
      <el-menu-item
        index="/on-muhasebe"
        :class="
          this.$route.path.split('/')[1] == 'on-muhasebe'
            ? 'border-bottom border-primary'
            : ''
        "
        >Ön Muhasebe</el-menu-item
      >
      <el-menu-item
        index="/muhasebe"
        :class="
          this.$route.path.split('/')[1] == 'resmi-muhasebe'
            ? 'border-bottom border-primary'
            : ''
        "
        >Resmi Muhasebe</el-menu-item
      >
      <el-menu-item
        index="/e-donusum"
        :class="
          this.$route.path.split('/')[1] == 'e-donusum'
            ? 'border-bottom border-primary'
            : ''
        "
        >E-Dönüşüm</el-menu-item
      >
      <el-menu-item
        index="/genel"
        :class="
          this.$route.path.split('/')[1] == 'genel'
            ? 'border-bottom border-primary'
            : ''
        "
        >Genel</el-menu-item
      >
      <el-menu-item class="w-100 active-iptal"></el-menu-item>

      <div class="right-buttons">
        <a href="https://www.ishesap.vercel.app/login" target="_blank" rel="noopener noreferrer">Üye Ol</a>
        <a href="https://www.ishesap.vercel.app/register" target="_blank" rel="noopener noreferrer">Giriş Yap</a>
      </div>
    </template>
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
.right-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin-right: 20px;
}
.right-buttons a {
  word-wrap: break-word;
  text-decoration: none;
  color: #909399;
}
.right-buttons a:hover {
  color: #000;
}
</style>
