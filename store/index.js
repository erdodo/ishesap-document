export const state = () => ({
  menu_visible: true,
});

export const getters = {
  getMenuVisible(state) {
    console.log(state.menu_visible);
    return state.menu_visible;
  },
};

export const mutations = {
  setMenuVisible(state) {
    console.log("change");
    state.menu_visible = !state.menu_visible;
  },
};

export const actions = {};
