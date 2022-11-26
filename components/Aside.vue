<template>
  <div
    class="position-relative"
    style="width: auto; height: calc(100vh - 61px - 64px)"
  >
    <transition name="el-fade-in">
      <el-menu
        v-show="getMenuVisible"
        :class="width < 900 ? 'position-absolute' : ''"
        default-active="2"
        class="top-0 h-100"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span>Navigator Four</span>
        </el-menu-item>

        <el-menu-item v-if="width < 900" index="-1" @click="menuKapat()">
          <i class="bi bi-x-lg h5"></i>
          <span>Menüyü Kapat</span>
        </el-menu-item>
      </el-menu>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      width: 0,
    };
  },
  mounted() {
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
