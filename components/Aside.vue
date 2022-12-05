<template>
  <div
    v-show="getMenuVisible"
    class="position-relative"
    style="width: auto; min-width: 240px; height: calc(100vh - 61px - 64px)"
  >
    <el-menu
      :class="width < 900 ? 'position-absolute ' : ''"
      :style="width < 900 ? 'width:100vw ' : ''"
      :default-active="this.$route.path"
      class="top-0 h-100 overflow-auto"
      router
      :collapse-transition="false"
    >
      <template v-if="width < 900">
        <el-menu-item
          index="/kobi"
          class="d-flex align-items-center"
          :class="
            this.$route.path.split('/')[1] == 'kobi'
              ? 'border-bottom border-primary'
              : ''
          "
          ><h4 class="m-0 p-0">Kobi</h4></el-menu-item
        >
        <el-menu-item
          index="/on-muhasebe"
          class="d-flex align-items-center"
          :class="
            this.$route.path.split('/')[1] == 'on-muhasebe'
              ? 'border-bottom border-primary'
              : ''
          "
          ><h4 class="m-0 p-0">Ön Muhasebe</h4></el-menu-item
        >
        <el-menu-item
          index="/muhasebe"
          class="d-flex align-items-center"
          :class="
            this.$route.path.split('/')[1] == 'resmi-muhasebe'
              ? 'border-bottom border-primary'
              : ''
          "
          ><h4 class="m-0 p-0">Resmi Muhasebe</h4></el-menu-item
        >
        <el-menu-item
          index="/e-donusum"
          class="d-flex align-items-center"
          :class="
            this.$route.path.split('/')[1] == 'e-donusum'
              ? 'border-bottom border-primary'
              : ''
          "
          ><h4 class="m-0 p-0">E-Dönüşüm</h4></el-menu-item
        >
        <el-menu-item
          index="/genel"
          class="d-flex align-items-center"
          :class="
            this.$route.path.split('/')[1] == 'genel'
              ? 'border-bottom border-primary'
              : ''
          "
          ><h4 class="m-0 p-0">Genel</h4></el-menu-item
        >
        <el-divider></el-divider>
      </template>
      <template v-for="m in links">
        <el-menu-item
          :key="m.index"
          v-if="m.type == 'link'"
          :index="m.path"
          class="cursor-pointer"
          @click="menuKapat()"
        >
          <el-icon :class="m.icon"></el-icon>
          <template #title>
            <span> {{ m.name }} </span>
          </template>
        </el-menu-item>
        <el-submenu
          :show-timeout="1"
          :hide-timeout="1"
          :key="m.index"
          v-if="m.type == 'menu'"
          :index="m.index"
          class="cursor-pointer"
        >
          <template #title>
            <el-icon :class="m.icon"></el-icon>
            <span> {{ m.name }} </span>
          </template>
          <el-menu-item
            v-for="s in m.sub"
            :key="s.index"
            :index="s.path"
            class="cursor-pointer"
            @click="menuKapat()"
          >
            <el-icon :class="s.icon" class="me-2"></el-icon>
            <template #title>
              <label class="m-0 p-0"> {{ s.name }} </label>
            </template>
          </el-menu-item>
        </el-submenu>
      </template>

      <el-menu-item v-if="width < 900" @click="menuKapat()">
        <i class="bi bi-x-lg h5"></i>
        <span>Menüyü Kapat</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import menu from "./menu.js";
export default {
  data() {
    return {
      width: 0,
      links: {},
    };
  },
  mounted() {
    if (this.$route.path.split("/")[1] == "on-muhasebe")
      this.links = menu.on_muhasebe;

    if (this.$route.path.split("/")[1] == "e-donusum")
      this.links = menu.e_donusum;

    if (this.$route.path.split("/")[1] == "kobi") this.links = menu.kobi;

    if (this.$route.path.split("/")[1] == "genel") this.links = menu.genel;
    this.width = window.innerWidth;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
  watch: {
    $route(newData) {
      console.log("Change route page", newData);
      this.menuKapat();
    },
  },
  methods: {
    menuKapat() {
      console.log("kapat");
      this.$store.commit("setMenuVisible");
    },
  },
  computed: {
    ...mapGetters(["getMenuVisible"]),
  },
};
</script>

<style></style>
