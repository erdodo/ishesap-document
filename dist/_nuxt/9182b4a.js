(window.webpackJsonp = window.webpackJsonp || []).push([
  [43, 2, 3, 4, 5],
  {
    418: function (t, e, n) {
      var content = n(421);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(134).default)("5e2ec760", content, !0, { sourceMap: !1 });
    },
    419: function (t, e, n) {
      "use strict";
      n.r(e);
      e.default = {
        on_muhasebe: [
          {
            index: "1",
            icon: "bi bi-graph-up-arrow",
            name: "Özet",
            type: "menu",
            sub: [
              {
                icon: "bi bi-graph-up-arrow",
                name: "Grafikler",
                type: "link",
                path: "/Gostergeler",
              },
              {
                icon: "bi bi-graph-up-arrow",
                name: "Raporlama",
                type: "link",
                path: "/Raporlama",
              },
            ],
          },
          {
            index: "2",
            icon: "bi bi-people",
            name: "Cari Hesaplar",
            type: "link",
            path: "/cari-hesaplar",
          },
          {
            index: "3",
            icon: "bi bi-cash-coin",
            name: "Finans Yönetimi",
            type: "menu",
            sub: [
              {
                index: "3-1",
                icon: "bi bi-safe",
                name: "Kasa",
                type: "link",
                path: "/finans-yonetimi/kasa",
              },
              {
                index: "3-2",
                icon: "bi bi-bank",
                name: "Banka",
                type: "link",
                path: "/finans-yonetimi/banka",
              },
              {
                index: "3-3",
                icon: "bi bi-card-list",
                name: "Çekler",
                type: "link",
                path: "/finans-yonetimi/cek",
              },
              {
                index: "3-4",
                icon: "bi bi-safe",
                name: "Senetler",
                type: "link",
                path: "/finans-yonetimi/senet",
              },
            ],
          },
          {
            index: "5",
            icon: "bi bi-arrow-left-right",
            name: "Alış-Satış Yönetimi",
            type: "menu",
            path: "/alis-satis-yonetimi/",
            sub: [
              {
                index: "5-1",
                icon: "bi bi-card-list",
                name: "Fatura",
                type: "link",
                path: "/alis-satis-yonetimi/fatura",
              },
              {
                index: "5-2",
                icon: "bi bi-safe",
                name: "İrsaliye",
                type: "link",
                path: "/alis-satis-yonetimi/irsaliye",
              },
              {
                index: "5-3",
                icon: "bi bi-basket",
                name: "Sipariş",
                type: "link",
                path: "/alis-satis-yonetimi/siparis",
              },
              {
                index: "5-4",
                icon: "bi bi-basket",
                name: "Teklif",
                type: "link",
                path: "/alis-satis-yonetimi/teklif",
              },
            ],
          },
          {
            index: "6",
            icon: "bi bi-box-seam",
            name: "Stok-Hizmet Yönetimi",
            type: "menu",
            path: "/stok-hizmet-yonetimi/",
            sub: [
              {
                index: "6-1",
                icon: "bi bi-card-list",
                name: "Stok Kartları",
                type: "link",
                path: "/stok-hizmet-yonetimi/stok-kartlari",
              },
              {
                index: "6-2",
                icon: "bi bi-boxes",
                name: "Stoklar",
                type: "link",
                path: "/stok-hizmet-yonetimi/stoklar",
              },
              {
                index: "6-1",
                icon: "bi bi-card-list",
                name: "Dönüşüm",
                type: "link",
                path: "/stok-hizmet-yonetimi/uretim",
              },
              {
                index: "6-3",
                icon: "bi bi-arrow-down-up",
                name: "Stok Hareketleri",
                type: "link",
                path: "/stok-hizmet-yonetimi/stok-hareketleri",
              },
              {
                index: "6-4",
                icon: "bi bi-card-list",
                name: "Hizmet-Masraf Kartları",
                type: "link",
                path: "/stok-hizmet-yonetimi/hizmet-masraf-kartlari",
              },
              {
                index: "6-5",
                icon: "bi bi-card-list",
                name: "Depo Kartları",
                type: "link",
                path: "/stok-hizmet-yonetimi/depo-kartlari",
              },
            ],
          },
          {
            index: "7",
            icon: "bi bi-pc-display",
            name: "Sabit Kıymet Yönetimi",
            type: "menu",
            path: "/sabit-kiymet-yonetimi/",
            sub: [
              {
                index: "7-1",
                icon: "bi bi-card-list",
                name: "Sabit Kıymet Kartları",
                type: "link",
                path: "/sabit-kiymet-yonetimi/kartlar",
              },
              {
                index: "7-2",
                icon: "bi bi-arrow-down-up",
                name: "Sabit Kıymet Hareketleri",
                type: "link",
                path: "/sabit-kiymet-yonetimi/hareketler",
              },
            ],
          },
          {
            index: "8",
            icon: "bi bi-people-fill",
            name: "Personel Yönetimi",
            type: "link",
            path: "/personel-yonetimi/",
          },
          {
            index: "9",
            icon: "bi bi-building",
            name: "Büro Yönetimi",
            type: "menu",
            path: "/buro-yonetimi/",
            sub: [
              {
                index: "9-1",
                icon: "bi bi-card-list",
                name: "Kiralar",
                type: "link",
                path: "/buro-yonetimi/kiralar",
              },
              {
                index: "9-2",
                icon: "bi bi-clipboard-minus",
                name: "Sabit İşletme Giderleri",
                type: "link",
                path: "/buro-yonetimi/sabit-isletme-giderleri",
              },
            ],
          },
          {
            index: "10",
            icon: "bi bi-file-earmark-ruled",
            name: "E-Dönüşüm",
            path: "/e-donusum",
            type: "menu",
            sub: [
              {
                index: "10-1",
                icon: "bi bi-card-list",
                name: "E-Fatura",
                type: "link",
                path: "/e-donusum/fatura",
              },
              {
                index: "10-2",
                icon: "bi bi-safe",
                name: "E-İrsaliye",
                type: "link",
                path: "/e-donusum/irsaliye",
              },
              {
                index: "10-3",
                icon: "bi bi-archive",
                name: "E-Arşiv",
                type: "link",
                path: "/e-donusum/arsiv",
              },
              {
                index: "10-4",
                icon: "bi bi-receipt-cutoff",
                name: "Serbest Meslek Makbuzu",
                type: "link",
                path: "/e-donusum/smm",
              },
              {
                index: "10-5",
                icon: "bi bi-receipt",
                name: "Müstahsil Makbuzu",
                type: "link",
                path: "/e-donusum/e-mm",
              },
            ],
          },
          {
            index: "11",
            name: "Profil",
            icon: "bi bi-person",
            type: "menu",
            path: "/profil",
            sub: [
              {
                index: "11-1",
                icon: "bi bi-person",
                name: "Kullanıcı",
                type: "link",
                path: "/profil",
              },
              {
                index: "11-2",
                icon: "bi bi-building",
                name: "Firma",
                type: "link",
                path: "/firma",
              },
            ],
          },
        ],
      };
    },
    420: function (t, e, n) {
      "use strict";
      n(418);
    },
    421: function (t, e, n) {
      var r = n(133)(!1);
      r.push([t.i, ".active-iptal{border-bottom:none!important}", ""]),
        (t.exports = r);
    },
    422: function (t, e, n) {
      "use strict";
      var r = n(2),
        o = n(423);
      r(
        { target: "String", proto: !0, forced: n(424)("sub") },
        {
          sub: function () {
            return o(this, "sub", "", "");
          },
        }
      );
    },
    423: function (t, e, n) {
      var r = n(7),
        o = n(25),
        l = n(13),
        c = /"/g,
        m = r("".replace);
      t.exports = function (t, e, n, r) {
        var d = l(o(t)),
          h = "<" + e;
        return (
          "" !== n && (h += " " + n + '="' + m(l(r), c, "&quot;") + '"'),
          h + ">" + d + "</" + e + ">"
        );
      };
    },
    424: function (t, e, n) {
      var r = n(3);
      t.exports = function (t) {
        return r(function () {
          var e = ""[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      };
    },
    425: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {
          data: function () {
            return { width: 0 };
          },
          methods: {
            setMenu: function () {
              this.$store.commit("setMenuVisible");
            },
          },
          mounted: function () {
            var t = this;
            (this.width = window.innerWidth),
              window.addEventListener("resize", function () {
                t.width = window.innerWidth;
              });
          },
        },
        o = (n(420), n(54)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-menu",
              {
                staticClass: "d-flex",
                class: t.width < 900 ? " justify-content-between" : "",
                attrs: {
                  "default-active": t.activeIndex,
                  mode: "horizontal",
                  router: "",
                },
                on: { select: t.handleSelect },
              },
              [
                e(
                  "el-menu-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.width < 900,
                        expression: "width < 900",
                      },
                    ],
                    on: {
                      click: function (e) {
                        return t.setMenu();
                      },
                    },
                  },
                  [e("i", { staticClass: "bi bi-list h2" })]
                ),
                t._v(" "),
                e(
                  "el-menu-item",
                  {
                    staticClass: "active-iptal",
                    class: t.width < 900 ? "w-100 text-center" : "",
                    attrs: { index: "/" },
                  },
                  [
                    e(
                      "div",
                      { staticClass: "d-flex h-100 align-items-center" },
                      [
                        e("img", {
                          staticClass: "m-0",
                          staticStyle: { "max-height": "30px" },
                          attrs: { src: "/icon/is_black3.png", alt: "" },
                        }),
                        t._v(" "),
                        e("h5", { staticClass: "m-0" }, [t._v(" - Döküman")]),
                      ]
                    ),
                  ]
                ),
                t._v(" "),
                t.width >= 900
                  ? [
                      e("el-menu-item", { attrs: { index: "/kobi" } }, [
                        t._v("Kobi"),
                      ]),
                      t._v(" "),
                      e("el-menu-item", { attrs: { index: "/onmuhasebe" } }, [
                        t._v("Ön Muhasebe"),
                      ]),
                      t._v(" "),
                      e("el-menu-item", { attrs: { index: "/muhasebe" } }, [
                        t._v("Resmi Muhasebe"),
                      ]),
                      t._v(" "),
                      e("el-menu-item", { attrs: { index: "/edonusum" } }, [
                        t._v("E-Dönüşüm"),
                      ]),
                      t._v(" "),
                      e("el-menu-item", { staticClass: "w-100 active-iptal" }),
                      t._v(" "),
                      e("el-menu-item", { attrs: { index: "/uye-ol" } }, [
                        t._v("Üye Ol"),
                      ]),
                    ]
                  : t._e(),
                t._v(" "),
                e("el-menu-item", { attrs: { index: "/giris-yap" } }, [
                  t._v("Giriş Yap"),
                ]),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    426: function (t, e, n) {
      "use strict";
      n.r(e);
      n(31), n(422), n(45), n(35), n(44), n(15), n(75), n(36), n(76);
      var r = n(26),
        o = n(77),
        menu = n(419);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var c = {
          data: function () {
            return { width: 0, links: {} };
          },
          mounted: function () {
            var t = this;
            (this.links = menu.default.on_muhasebe),
              (this.width = window.innerWidth),
              window.addEventListener("resize", function () {
                t.width = window.innerWidth;
              });
          },
          methods: {
            menuKapat: function () {
              console.log("kapat"), this.$store.commit("setMenuVisible");
            },
          },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? l(Object(source), !0).forEach(function (e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : l(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })({}, Object(o.b)(["getMenuVisible"])),
        },
        m = c,
        d = n(54),
        component = Object(d.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "position-relative",
                staticStyle: {
                  width: "auto",
                  height: "calc(100vh - 61px - 64px)",
                },
              },
              [
                e(
                  "el-menu",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.getMenuVisible,
                        expression: "getMenuVisible",
                      },
                    ],
                    staticClass: "top-0 h-100 overflow-auto",
                    class: t.width < 900 ? "position-absolute" : "",
                    attrs: {
                      "default-active": this.$route.path,
                      router: "",
                      "collapse-transition": !1,
                    },
                  },
                  [
                    t._l(t.links, function (n) {
                      return [
                        "link" == n.type
                          ? e(
                              "el-menu-item",
                              {
                                key: n,
                                staticClass: "cursor-pointer",
                                attrs: { index: n.path },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function () {
                                        return [
                                          e("span", [
                                            t._v(" " + t._s(n.name) + " "),
                                          ]),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !0
                                ),
                              },
                              [e("el-icon", { class: n.icon })],
                              1
                            )
                          : t._e(),
                        t._v(" "),
                        "menu" == n.type
                          ? e(
                              "el-submenu",
                              {
                                key: n,
                                staticClass: "cursor-pointer",
                                attrs: {
                                  "show-timeout": 1,
                                  "hide-timeout": 1,
                                  index: n.index,
                                },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function () {
                                        return [
                                          e("el-icon", { class: n.icon }),
                                          t._v(" "),
                                          e("span", [
                                            t._v(" " + t._s(n.name) + " "),
                                          ]),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !0
                                ),
                              },
                              [
                                t._v(" "),
                                t._l(n.sub, function (s) {
                                  return e(
                                    "el-menu-item",
                                    {
                                      key: s,
                                      staticClass: "cursor-pointer",
                                      attrs: { index: s.path },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "title",
                                            fn: function () {
                                              return [
                                                e(
                                                  "label",
                                                  { staticClass: "m-0 p-0" },
                                                  [
                                                    t._v(
                                                      " " + t._s(s.name) + " "
                                                    ),
                                                  ]
                                                ),
                                              ];
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !0
                                      ),
                                    },
                                    [
                                      e("el-icon", {
                                        staticClass: "me-2",
                                        class: s.icon,
                                      }),
                                    ],
                                    1
                                  );
                                }),
                              ],
                              2
                            )
                          : t._e(),
                      ];
                    }),
                    t._v(" "),
                    t.width < 900
                      ? e(
                          "el-menu-item",
                          {
                            attrs: { index: "-1" },
                            on: {
                              click: function (e) {
                                return t.menuKapat();
                              },
                            },
                          },
                          [
                            e("i", { staticClass: "bi bi-x-lg h5" }),
                            t._v(" "),
                            e("span", [t._v("Menüyü Kapat")]),
                          ]
                        )
                      : t._e(),
                  ],
                  2
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    427: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = {},
        o = n(54),
        component = Object(o.a)(
          r,
          function () {
            var t = this._self._c;
            return t(
              "div",
              { staticClass: "w-100" },
              [t("el-card", [this._v(" Footer ")])],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    465: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(54),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e("Header"),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "d-flex" },
                  [
                    e("Aside"),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "overflow-auto w-100 py-4 px-2",
                        staticStyle: { height: "calc(100vh - 61px - 64px)" },
                      },
                      [
                        e(
                          "div",
                          { staticClass: "container" },
                          [
                            e(
                              "el-card",
                              { staticClass: "w-100 mb-3" },
                              [
                                e(
                                  "el-breadcrumb",
                                  {
                                    attrs: {
                                      "separator-class": "el-icon-arrow-right",
                                    },
                                  },
                                  [
                                    e(
                                      "el-breadcrumb-item",
                                      { attrs: { to: { path: "/" } } },
                                      [
                                        t._v(
                                          "\n              Anasayfa\n            "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "el-breadcrumb-item",
                                      {
                                        attrs: {
                                          to: { path: "/stok-hizmet-yonetimi" },
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n              Stok-Hizmet Yönetimi\n            "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e("el-breadcrumb-item", [t._v("Stoklar")]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "div",
                              { staticClass: "post", attrs: { id: "kt_post" } },
                              [
                                e("div", { staticClass: "mb-10" }, [
                                  e("div", { staticClass: "mb-0" }, [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-items-center mb-4",
                                      },
                                      [
                                        e(
                                          "h1",
                                          {
                                            ref: "stoklar",
                                            staticClass:
                                              "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                                          },
                                          [
                                            t._v(
                                              "\n                  Stoklar nasıl çalışır?\n                "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "fs-base fw-normal text-gray-700 my-4 docText",
                                      },
                                      [
                                        t._v(
                                          "\n                İlgili sayfada Stok bilgileri gösterilmektedir. Bu sayfada bir\n                Ekleme, Düzenleme ya da Silme işlemi yapılamaz. Stoğunuzu\n                etkileyecek işlemler yapıldığında burada gösterilir.\n                Stoklarınızı takip etmenizi sağlayan bu menü aynı zamanda\n                günlük dosyası gibi düşünülebilir.\n              "
                                        ),
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("div", {
                                    staticClass:
                                      "separator separator-dashed my-8",
                                  }),
                                ]),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "container d-flex justify-content-between footers",
                                  },
                                  [
                                    e(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                                        attrs: {
                                          to: "/docs/stok-hizmet-yonetimi/stok-kartlari",
                                        },
                                      },
                                      [t._v("Önceki")]
                                    ),
                                    t._v(" "),
                                    e(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                                        attrs: {
                                          to: "/docs/stok-hizmet-yonetimi/stok-hareketleri",
                                        },
                                      },
                                      [t._v("Sonraki")]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e("Footer"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        Header: n(425).default,
        Aside: n(426).default,
        Footer: n(427).default,
      });
    },
  },
]);
