export const state = () => ({
  menu_visible: true,
  themes: true,
});

export const getters = {
  getMenuVisible(state) {
    console.log(state.menu_visible);
    return state.menu_visible;
  },
  getThemes(state) {
    return state.themes;
  },
};

export const mutations = {
  setMenuVisible(state) {
    console.log("change");
    state.menu_visible = !state.menu_visible;
  },
  setThemes(state) {
    state.themes = !state.themes;
  },
};

export const actions = {};
