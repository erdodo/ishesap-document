<template>
  <div
    class="position-relative"
    style="width: auto; min-width: 240px; height: calc(100vh - 61px - 64px)"
  >
    <el-menu
      v-show="getMenuVisible"
      :class="width < 900 ? 'position-absolute' : ''"
      :default-active="this.$route.path"
      class="top-0 h-100 overflow-auto"
      router
      :collapse-transition="false"
    >
      <template v-for="m in links">
        <el-menu-item
          :key="m.index"
          v-if="m.type == 'link'"
          :index="m.path"
          class="cursor-pointer"
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
          >
            <el-icon :class="s.icon" class="me-2"></el-icon>
            <template #title>
              <label class="m-0 p-0"> {{ s.name }} </label>
            </template>
          </el-menu-item>
        </el-submenu>
      </template>

      <el-menu-item v-if="width < 900" index="-1" @click="menuKapat()">
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
