(window.webpackJsonp = window.webpackJsonp || []).push([
  [15, 2, 3, 4, 5],
  {
    418: function (e, t, n) {
      var content = n(421);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, n(134).default)("5e2ec760", content, !0, { sourceMap: !1 });
    },
    419: function (e, t, n) {
      "use strict";
      n.r(t);
      t.default = {
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
    420: function (e, t, n) {
      "use strict";
      n(418);
    },
    421: function (e, t, n) {
      var r = n(133)(!1);
      r.push([e.i, ".active-iptal{border-bottom:none!important}", ""]),
        (e.exports = r);
    },
    422: function (e, t, n) {
      "use strict";
      var r = n(2),
        l = n(423);
      r(
        { target: "String", proto: !0, forced: n(424)("sub") },
        {
          sub: function () {
            return l(this, "sub", "", "");
          },
        }
      );
    },
    423: function (e, t, n) {
      var r = n(7),
        l = n(25),
        o = n(13),
        d = /"/g,
        m = r("".replace);
      e.exports = function (e, t, n, r) {
        var c = o(l(e)),
          k = "<" + t;
        return (
          "" !== n && (k += " " + n + '="' + m(o(r), d, "&quot;") + '"'),
          k + ">" + c + "</" + t + ">"
        );
      };
    },
    424: function (e, t, n) {
      var r = n(3);
      e.exports = function (e) {
        return r(function () {
          var t = ""[e]('"');
          return t !== t.toLowerCase() || t.split('"').length > 3;
        });
      };
    },
    425: function (e, t, n) {
      "use strict";
      n.r(t);
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
            var e = this;
            (this.width = window.innerWidth),
              window.addEventListener("resize", function () {
                e.width = window.innerWidth;
              });
          },
        },
        l = (n(420), n(54)),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "el-menu",
              {
                staticClass: "d-flex",
                class: e.width < 900 ? " justify-content-between" : "",
                attrs: {
                  "default-active": e.activeIndex,
                  mode: "horizontal",
                  router: "",
                },
                on: { select: e.handleSelect },
              },
              [
                t(
                  "el-menu-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.width < 900,
                        expression: "width < 900",
                      },
                    ],
                    on: {
                      click: function (t) {
                        return e.setMenu();
                      },
                    },
                  },
                  [t("i", { staticClass: "bi bi-list h2" })]
                ),
                e._v(" "),
                t(
                  "el-menu-item",
                  {
                    staticClass: "active-iptal",
                    class: e.width < 900 ? "w-100 text-center" : "",
                    attrs: { index: "/" },
                  },
                  [
                    t(
                      "div",
                      { staticClass: "d-flex h-100 align-items-center" },
                      [
                        t("img", {
                          staticClass: "m-0",
                          staticStyle: { "max-height": "30px" },
                          attrs: { src: "/icon/is_black3.png", alt: "" },
                        }),
                        e._v(" "),
                        t("h5", { staticClass: "m-0" }, [e._v(" - Döküman")]),
                      ]
                    ),
                  ]
                ),
                e._v(" "),
                e.width >= 900
                  ? [
                      t("el-menu-item", { attrs: { index: "/kobi" } }, [
                        e._v("Kobi"),
                      ]),
                      e._v(" "),
                      t("el-menu-item", { attrs: { index: "/onmuhasebe" } }, [
                        e._v("Ön Muhasebe"),
                      ]),
                      e._v(" "),
                      t("el-menu-item", { attrs: { index: "/muhasebe" } }, [
                        e._v("Resmi Muhasebe"),
                      ]),
                      e._v(" "),
                      t("el-menu-item", { attrs: { index: "/edonusum" } }, [
                        e._v("E-Dönüşüm"),
                      ]),
                      e._v(" "),
                      t("el-menu-item", { staticClass: "w-100 active-iptal" }),
                      e._v(" "),
                      t("el-menu-item", { attrs: { index: "/uye-ol" } }, [
                        e._v("Üye Ol"),
                      ]),
                    ]
                  : e._e(),
                e._v(" "),
                t("el-menu-item", { attrs: { index: "/giris-yap" } }, [
                  e._v("Giriş Yap"),
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
      t.default = component.exports;
    },
    426: function (e, t, n) {
      "use strict";
      n.r(t);
      n(31), n(422), n(45), n(35), n(44), n(15), n(75), n(36), n(76);
      var r = n(26),
        l = n(77),
        menu = n(419);
      function o(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      var d = {
          data: function () {
            return { width: 0, links: {} };
          },
          mounted: function () {
            var e = this;
            (this.links = menu.default.on_muhasebe),
              (this.width = window.innerWidth),
              window.addEventListener("resize", function () {
                e.width = window.innerWidth;
              });
          },
          methods: {
            menuKapat: function () {
              console.log("kapat"), this.$store.commit("setMenuVisible");
            },
          },
          computed: (function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? o(Object(source), !0).forEach(function (t) {
                    Object(r.a)(e, t, source[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : o(Object(source)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(source, t)
                    );
                  });
            }
            return e;
          })({}, Object(l.b)(["getMenuVisible"])),
        },
        m = d,
        c = n(54),
        component = Object(c.a)(
          m,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "position-relative",
                staticStyle: {
                  width: "auto",
                  height: "calc(100vh - 61px - 64px)",
                },
              },
              [
                t(
                  "el-menu",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.getMenuVisible,
                        expression: "getMenuVisible",
                      },
                    ],
                    staticClass: "top-0 h-100 overflow-auto",
                    class: e.width < 900 ? "position-absolute" : "",
                    attrs: {
                      "default-active": this.$route.path,
                      router: "",
                      "collapse-transition": !1,
                    },
                  },
                  [
                    e._l(e.links, function (n) {
                      return [
                        "link" == n.type
                          ? t(
                              "el-menu-item",
                              {
                                key: n,
                                staticClass: "cursor-pointer",
                                attrs: { index: n.path },
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function () {
                                        return [
                                          t("span", [
                                            e._v(" " + e._s(n.name) + " "),
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
                              [t("el-icon", { class: n.icon })],
                              1
                            )
                          : e._e(),
                        e._v(" "),
                        "menu" == n.type
                          ? t(
                              "el-submenu",
                              {
                                key: n,
                                staticClass: "cursor-pointer",
                                attrs: {
                                  "show-timeout": 1,
                                  "hide-timeout": 1,
                                  index: n.index,
                                },
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function () {
                                        return [
                                          t("el-icon", { class: n.icon }),
                                          e._v(" "),
                                          t("span", [
                                            e._v(" " + e._s(n.name) + " "),
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
                                e._v(" "),
                                e._l(n.sub, function (s) {
                                  return t(
                                    "el-menu-item",
                                    {
                                      key: s,
                                      staticClass: "cursor-pointer",
                                      attrs: { index: s.path },
                                      scopedSlots: e._u(
                                        [
                                          {
                                            key: "title",
                                            fn: function () {
                                              return [
                                                t(
                                                  "label",
                                                  { staticClass: "m-0 p-0" },
                                                  [
                                                    e._v(
                                                      " " + e._s(s.name) + " "
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
                                      t("el-icon", {
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
                          : e._e(),
                      ];
                    }),
                    e._v(" "),
                    e.width < 900
                      ? t(
                          "el-menu-item",
                          {
                            attrs: { index: "-1" },
                            on: {
                              click: function (t) {
                                return e.menuKapat();
                              },
                            },
                          },
                          [
                            t("i", { staticClass: "bi bi-x-lg h5" }),
                            e._v(" "),
                            t("span", [e._v("Menüyü Kapat")]),
                          ]
                        )
                      : e._e(),
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
      t.default = component.exports;
    },
    427: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = {},
        l = n(54),
        component = Object(l.a)(
          r,
          function () {
            var e = this._self._c;
            return e(
              "div",
              { staticClass: "w-100" },
              [e("el-card", [this._v(" Footer ")])],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    432: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = {},
        l = n(54),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              [
                t("Header"),
                e._v(" "),
                t(
                  "div",
                  { staticClass: "d-flex" },
                  [
                    t("Aside"),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "overflow-auto w-100 py-4 px-2",
                        staticStyle: { height: "calc(100vh - 61px - 64px)" },
                      },
                      [
                        t(
                          "div",
                          { staticClass: "container" },
                          [
                            t(
                              "el-card",
                              { staticClass: "w-100 mb-3" },
                              [
                                t(
                                  "el-breadcrumb",
                                  {
                                    attrs: {
                                      "separator-class": "el-icon-arrow-right",
                                    },
                                  },
                                  [
                                    t(
                                      "el-breadcrumb-item",
                                      { attrs: { to: { path: "/" } } },
                                      [
                                        e._v(
                                          "\n              Anasayfa\n            "
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    t(
                                      "el-breadcrumb-item",
                                      { attrs: { to: { path: "/e-donusum" } } },
                                      [
                                        e._v(
                                          "\n              E-Dönüşüm\n            "
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    t("el-breadcrumb-item", [e._v("e-Fatura")]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            t(
                              "div",
                              { staticClass: "post", attrs: { id: "kt_post" } },
                              [
                                t("div", { staticClass: "mb-10" }, [
                                  t("div", { staticClass: "mb-0" }, [
                                    t(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-items-center mb-4",
                                      },
                                      [
                                        t(
                                          "h1",
                                          {
                                            ref: "kobiCari",
                                            staticClass:
                                              "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                                          },
                                          [
                                            e._v(
                                              "\n                  Kobi Cari Hesap nasıl çalışır?\n                "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    t("p", [
                                      e._v(
                                        '\n                Kobiye ait oluşturulan Cari Hesaplar burada listelenir. Sol\n                üstte tablo adı, altında Detaylı Arama, Sayfalama, Çıktı Al,\n                Ara, Ekleme, Yardım gibi menüler bulunur. Veri\n                oluşturulduğunda üstüne tıklanıp detaylı alt menüsüne\n                gidilebilir. Sağ üstten "Ekle" butonu ile ekleme yapılabilir.\n              '
                                      ),
                                    ]),
                                    e._v(" "),
                                    e._m(0),
                                    e._v(" "),
                                    t("p", [
                                      e._v(
                                        '\n                Carinin detayına gidildiğinde bizi böyle bir sayfa karşılar.\n                Sol üstte ilgili carinin bilgileri yer alır. Hemen sağında\n                ilgili cariye eklenen notlar ve ekleme butonu yer alır.\n                Altında "Satış Yap" ve "Satın Al" butonları bulunurken sağında\n                ilgili cariye ait Borç, Alacak ve Bakiye göstergeleri bulunur.\n                Ayrıca 4 panele ayrılmıştır. Bunlar, Hesap Bakiye Özeti,\n                Sattıklarım, Aldıklarım ve Düzenle panelleridir. Hesap Bakiye\n                Özeti alınan ödemelerin tamamının listelendiği bölümdür.\n              '
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("p", [
                                      e._v(
                                        '\n                Sattıklarım menüsünde ilgili cariye eklenen satılan ürün\n                siparişleri gösterilir. Buradan ürünlerin Vergili Ödenecek\n                Tutarı ile Ödenmiş Tutar eşit değilse "Hızlı İşlem" altında\n                "Ödeme Butonu" bulunur. Taksit bilgisi girildiyse "Ödeme\n                Butonu" yerine "Taksit" butonu bulunur. Tıklandığında\n                "Bankadan" ya da "Kasadan" ödeme butonları çıkar. Seçildiğinde\n                ise bir sorgu yapılır ve eminseniz işlem tamamlanır. Örneğin 3\n                taksit bilgisi girildiyse "1. Taksit" yazar. İlk taksit\n                ödendiğinde "2. Taksit" yazar. Tüm taksitler ödendiğinde işlem\n                tamamlanır. Ödeme yapıldığı taktirde Kalan Tutardan düşülür.\n                Tamamı ödenirse eğer Kalan Tutar sıfırlanır ve Ödeme butonu\n                kaldırılır.\n              '
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("p", [
                                      e._v(
                                        '\n                Satış Yap butonuna tıklandığında bir sipariş ekleme menüsü\n                açılır. Ekleme menüsünde; Ürün Adı, Tutar, KDV, KDV Tutarı,\n                KDV Dahil, Vergili Ödenecek Tutar, Taksit Sayısı, Taksit\n                Tutarı, Vade Tarihi ve Ödenen Tutar kolonları bulunur. Taksit\n                sayısı girilirse "Vergili Ödenecek Tutar" ilgili taksit\n                sayısına bölünerek Taksit Tutarı kolonunda hesaplanır. Ayrıca\n                Ödenen Tutar girilirse altında "Bankadan Ödeme" ve "Kasadan\n                Ödeme" butonları aktif olur. Ekle dediğimizde Kobi Sipariş\n                tablosuna satılan ürün eklenmiş olur.\n              '
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("p", [
                                      e._v(
                                        '\n                Aldıklarım menüsünde ise ilgili cariye eklenen alınan ürün\n                siparişleri gösterilir. Buradan ürünlerin Vergili Ödenecek\n                Tutarı ile Ödenmiş Tutar eşit değilse "Hızlı İşlem" altında\n                "Ödeme Butonu" bulunur. Ödeme yapıldığı taktirde Kalan\n                Tutardan düşülür. Tamamı ödenirse eğer Kalan Tutar sıfırlanır\n                ve Ödeme butonu kaldırılır. Sattıklarım ile benzer şekilde\n                çalışır.\n              '
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("p", [
                                      e._v(
                                        '\n                Satın Al butonuna tıklandığında bir sipariş ekleme menüsü\n                açılır. Ekleme menüsünde; Ürün Adı, Tutar, KDV, KDV Tutarı,\n                KDV Dahil, Vergili Ödenecek Tutar, Taksit Sayısı, Taksit\n                Tutarı, Vade Tarihi ve Ödenen Tutar kolonları bulunur. Taksit\n                sayısı girilirse "Vergili Ödenecek Tutar" ilgili taksit\n                sayısına bölünerek Taksit Tutarı kolonunda hesaplanır. Ayrıca\n                Ödenen Tutar girilirse altında "Bankadan Ödeme" ve "Kasadan\n                Ödeme" butonları aktif olur. Ekle dediğimizde Kobi Sipariş\n                tablosuna alınan ürün eklenmiş olur.\n              '
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("p", [
                                      e._v(
                                        "\n                Düzenle menüsünden ise ilgili cari bilgileri düzenlenebilir.\n                Ayrıca Eklenen notlarda bulunur. Not ekleme modalı şu şekilde\n                gözükür.\n              "
                                      ),
                                    ]),
                                  ]),
                                  e._v(" "),
                                  t("div", {
                                    staticClass:
                                      "separator separator-dashed my-8",
                                  }),
                                ]),
                                e._v(" "),
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "container d-flex justify-content-between footers",
                                  },
                                  [
                                    t(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                                        attrs: { to: "/docs/giris/dogrulama" },
                                      },
                                      [e._v("\n              Önceki")]
                                    ),
                                    e._v(" "),
                                    t(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                                        attrs: {
                                          to: "/docs/finans-yonetimi/kartlar",
                                        },
                                      },
                                      [e._v("Sonraki")]
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
                e._v(" "),
                t("Footer"),
              ],
              1
            );
          },
          [
            function () {
              var e = this,
                t = e._self._c;
              return t("p", [
                e._v(
                  "\n                Ekleme menüsünde; Cari Hesap Adı, TCKN / VKN, Grubu, Genel\n                Vade(Gün), Vergi Dairesi, Ticaret Sicil Numarası, Meslek\n                Odası, Telefon ve Etiket kolonları bulunur. Zorunlu alanlar\n                "
                ),
                t("span", { staticClass: "text-danger" }, [e._v("*")]),
                e._v(
                  ' ibaresiyle gösterilmiştir.\n                Burada "Cari Hesap Adı" ve "TCKN / VKN" zorunlu tutulmuştur.\n                Ayrıca TCKN / VKN kolonu 11 hane girildiği taktirde "Adı" ve\n                "Soyadı" kolonları aktif olur.\n              '
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, {
        Header: n(425).default,
        Aside: n(426).default,
        Footer: n(427).default,
      });
    },
  },
]);
