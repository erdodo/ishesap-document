(window.webpackJsonp = window.webpackJsonp || []).push([
  [19, 2, 3, 4, 5],
  {
    418: function (e, n, t) {
      var content = t(421);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, t(134).default)("5e2ec760", content, !0, { sourceMap: !1 });
    },
    419: function (e, n, t) {
      "use strict";
      t.r(n);
      n.default = {
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
    420: function (e, n, t) {
      "use strict";
      t(418);
    },
    421: function (e, n, t) {
      var r = t(133)(!1);
      r.push([e.i, ".active-iptal{border-bottom:none!important}", ""]),
        (e.exports = r);
    },
    422: function (e, n, t) {
      "use strict";
      var r = t(2),
        l = t(423);
      r(
        { target: "String", proto: !0, forced: t(424)("sub") },
        {
          sub: function () {
            return l(this, "sub", "", "");
          },
        }
      );
    },
    423: function (e, n, t) {
      var r = t(7),
        l = t(25),
        o = t(13),
        m = /"/g,
        d = r("".replace);
      e.exports = function (e, n, t, r) {
        var c = o(l(e)),
          k = "<" + n;
        return (
          "" !== t && (k += " " + t + '="' + d(o(r), m, "&quot;") + '"'),
          k + ">" + c + "</" + n + ">"
        );
      };
    },
    424: function (e, n, t) {
      var r = t(3);
      e.exports = function (e) {
        return r(function () {
          var n = ""[e]('"');
          return n !== n.toLowerCase() || n.split('"').length > 3;
        });
      };
    },
    425: function (e, n, t) {
      "use strict";
      t.r(n);
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
        l = (t(420), t(54)),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              n = e._self._c;
            return n(
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
                n(
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
                      click: function (n) {
                        return e.setMenu();
                      },
                    },
                  },
                  [n("i", { staticClass: "bi bi-list h2" })]
                ),
                e._v(" "),
                n(
                  "el-menu-item",
                  {
                    staticClass: "active-iptal",
                    class: e.width < 900 ? "w-100 text-center" : "",
                    attrs: { index: "/" },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "d-flex h-100 align-items-center" },
                      [
                        n("img", {
                          staticClass: "m-0",
                          staticStyle: { "max-height": "30px" },
                          attrs: { src: "/icon/is_black3.png", alt: "" },
                        }),
                        e._v(" "),
                        n("h5", { staticClass: "m-0" }, [e._v(" - Döküman")]),
                      ]
                    ),
                  ]
                ),
                e._v(" "),
                e.width >= 900
                  ? [
                      n("el-menu-item", { attrs: { index: "/kobi" } }, [
                        e._v("Kobi"),
                      ]),
                      e._v(" "),
                      n("el-menu-item", { attrs: { index: "/onmuhasebe" } }, [
                        e._v("Ön Muhasebe"),
                      ]),
                      e._v(" "),
                      n("el-menu-item", { attrs: { index: "/muhasebe" } }, [
                        e._v("Resmi Muhasebe"),
                      ]),
                      e._v(" "),
                      n("el-menu-item", { attrs: { index: "/edonusum" } }, [
                        e._v("E-Dönüşüm"),
                      ]),
                      e._v(" "),
                      n("el-menu-item", { staticClass: "w-100 active-iptal" }),
                      e._v(" "),
                      n("el-menu-item", { attrs: { index: "/uye-ol" } }, [
                        e._v("Üye Ol"),
                      ]),
                    ]
                  : e._e(),
                e._v(" "),
                n("el-menu-item", { attrs: { index: "/giris-yap" } }, [
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
      n.default = component.exports;
    },
    426: function (e, n, t) {
      "use strict";
      t.r(n);
      t(31), t(422), t(45), t(35), t(44), t(15), t(75), t(36), t(76);
      var r = t(26),
        l = t(77),
        menu = t(419);
      function o(object, e) {
        var n = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(object);
          e &&
            (t = t.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      var m = {
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
                ? o(Object(source), !0).forEach(function (n) {
                    Object(r.a)(e, n, source[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : o(Object(source)).forEach(function (n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(source, n)
                    );
                  });
            }
            return e;
          })({}, Object(l.b)(["getMenuVisible"])),
        },
        d = m,
        c = t(54),
        component = Object(c.a)(
          d,
          function () {
            var e = this,
              n = e._self._c;
            return n(
              "div",
              {
                staticClass: "position-relative",
                staticStyle: {
                  width: "auto",
                  height: "calc(100vh - 61px - 64px)",
                },
              },
              [
                n(
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
                    e._l(e.links, function (t) {
                      return [
                        "link" == t.type
                          ? n(
                              "el-menu-item",
                              {
                                key: t,
                                staticClass: "cursor-pointer",
                                attrs: { index: t.path },
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function () {
                                        return [
                                          n("span", [
                                            e._v(" " + e._s(t.name) + " "),
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
                              [n("el-icon", { class: t.icon })],
                              1
                            )
                          : e._e(),
                        e._v(" "),
                        "menu" == t.type
                          ? n(
                              "el-submenu",
                              {
                                key: t,
                                staticClass: "cursor-pointer",
                                attrs: {
                                  "show-timeout": 1,
                                  "hide-timeout": 1,
                                  index: t.index,
                                },
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function () {
                                        return [
                                          n("el-icon", { class: t.icon }),
                                          e._v(" "),
                                          n("span", [
                                            e._v(" " + e._s(t.name) + " "),
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
                                e._l(t.sub, function (s) {
                                  return n(
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
                                                n(
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
                                      n("el-icon", {
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
                      ? n(
                          "el-menu-item",
                          {
                            attrs: { index: "-1" },
                            on: {
                              click: function (n) {
                                return e.menuKapat();
                              },
                            },
                          },
                          [
                            n("i", { staticClass: "bi bi-x-lg h5" }),
                            e._v(" "),
                            n("span", [e._v("Menüyü Kapat")]),
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
      n.default = component.exports;
    },
    427: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = {},
        l = t(54),
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
      n.default = component.exports;
    },
    445: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(54),
        component = Object(r.a)(
          {},
          function () {
            var e = this,
              n = e._self._c;
            return n(
              "div",
              [
                n("Header"),
                e._v(" "),
                n(
                  "div",
                  { staticClass: "d-flex" },
                  [
                    n("Aside"),
                    e._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "overflow-auto w-100 py-4 px-2",
                        staticStyle: { height: "calc(100vh - 61px - 64px)" },
                      },
                      [
                        n(
                          "div",
                          { staticClass: "container" },
                          [
                            n(
                              "el-card",
                              { staticClass: "w-100 mb-3" },
                              [
                                n(
                                  "el-breadcrumb",
                                  {
                                    attrs: {
                                      "separator-class": "el-icon-arrow-right",
                                    },
                                  },
                                  [
                                    n(
                                      "el-breadcrumb-item",
                                      { attrs: { to: { path: "/" } } },
                                      [
                                        e._v(
                                          "\n              Anasayfa\n            "
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    n(
                                      "el-breadcrumb-item",
                                      {
                                        attrs: {
                                          to: { path: "/finans-yonetimi" },
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n              Finans Yönetimi\n            "
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    n("el-breadcrumb-item", [
                                      e._v("Banka İşlemleri"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            n(
                              "div",
                              { staticClass: "post", attrs: { id: "kt_post" } },
                              [
                                n("div", { staticClass: "mb-10" }, [
                                  n("div", { staticClass: "mb-0" }, [
                                    n(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-items-center mb-4",
                                      },
                                      [
                                        n(
                                          "h1",
                                          {
                                            ref: "finansBanka",
                                            staticClass:
                                              "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                                          },
                                          [
                                            e._v(
                                              "\n                  Banka nasıl çalışır?\n                "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                Bu panelde hiçbir işlem yapılmamaktadır. Burası görüntüleme ve\n                listelemek için tasarlanmıştır. Diğer panellerden yapıtığınız,\n                Bankanızı etkileyen tüm işlemler buraya yansıtılır. Bankanın\n                güncel bakiye durumu görüntülenir.\n              "
                                      ),
                                    ]),
                                    e._v(" "),
                                    n("p", [e._v("Gelen Havale İşlemi")]),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                Bankaya gelen havale burada listelenir. Gelen Havale İşlemi\n                oluşturmak için “Ekle” butonuna tıklanmalıdır.\n              "
                                      ),
                                    ]),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                Ekleme menüsünde; Açıklama, Banka, İşlem Tipi, Belge No, İşlem\n                Tarihi, Tutar, Para Birimi, KDV, KDV Dahil, KDV Tutarı, Kaynak\n                Belge, Vergi Açıklaması, Vergili Ödenecek Tutar, Döviz Kuru,\n                Dövizli Tutar kolonları bulunmaktadır.\n              "
                                      ),
                                    ]),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                Bazı kolonlar veri girişine kapalıdır. Kendi içlerinde\n                hesaplanırlar ya da otomatik doldurulurlar. Ayrıca İşlem Tipi\n                seçildiğinde içerisinde “Kasa, Banka, Hizmet – Masraf ve Cari”\n                bulunur. Bunlarda biri seçildiğinde onun kolonu da açılır. Ve\n                ayrıca bunlardan “Cari” seçilirse “Tip” adında bir kolon daha\n                gösterilir. Bunun içeride ise “Fatura, Çek, Senet, Sabit Gider\n                ve Diğer” adında seçimler bulunur. Fatura seçildiğinde “Satış\n                Fatura”, Çek seçildiğinde “Müşteri Çek”, Senet seçildiğinde\n                “Müşteri Senet” kolonları gelirken “Sabit Gider” ya da “Diğer”\n                seçeneklerinde yeni bir kolon gelmez.\n              "
                                      ),
                                    ]),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                Kolonların bazıları seçildiğinde içerisinde bulunan (daha\n                önceden tanımlanmış) verilerin aynıları var ise o kolonlar\n                otomatik doldurulur. Örneğin; Bankamızdan, seçilen Cari Hesaba\n                tanımlı bir Müşteri Çek’in havalesini yapmak istiyoruz. Bunun\n                için Bankamızı seçeriz. İşlem Tipi olarak Cari seçildikten\n                sonra “Cari Hesap ve Tip” kolonları açılır. Buradan istenilen\n                Cari seçilir ve Tip seçiminden Çek seçilir. Kayıtlı olan çek\n                seçilir. Çekin içinde tanımlı olan Tutar, Döviz Kuru, Dövizli\n                Tutar ve Para Birimi otomatik olarak doldurulur ve aktifliği\n                kalkar, artık düzenlenemez hale gelir. Diğer kalan bilgilerde\n                doldurulabilir ve “Ekle” tıklandığında seçilen çek bankamızdan\n                havale edilmiş olur.\n              "
                                      ),
                                    ]),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                *Bu kolonlardan biri seçildiğinde ise diğerleri gizlenir ve\n                aktifliği kalkar.\n              "
                                      ),
                                    ]),
                                    e._v(" "),
                                    n("p", [e._v("Giden Havale İşlemi")]),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                Bankadan Giden Havale İşlemi yapılacaksa bu panel\n                kullanılabilir. Yapılan işlemler tabloda listelenir.\n              "
                                      ),
                                    ]),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                *Boş tablolarda ortada ilgili tabloda veri olmadığını belirten\n                bir yazı ve simge bulunur. Ekleme işlemi yapılabilen\n                tablolarda buraya da tıklanarak ekleme yapılabilir.\n              "
                                      ),
                                    ]),
                                    e._v(" "),
                                    n("p", [
                                      e._v(
                                        "\n                Ekleme menüsünde; Açıklama, Banka, İşlem Tipi, Belge No, İşlem\n                Tarihi, Para Birimi, Tutar, KDV, KDV Dahil, KDV Tutarı, Vergi\n                Açıklaması, Vergili Ödenecek Tutar, Kaynak Belge, Döviz Kuru,\n                Dövizli Tutar kolonları bulunmaktadır. Burasıda neredeyse\n                tamamen Banka Gelen Havale İşlemi menüsü ile aynıdır. Sadece\n                “Tip” bölümünde Fatura seçildiğinde “Alış Fatura”, Çek\n                seçildiğinde “Firma Çek”, Senet seçildiğinde “Firma Senet”\n                kolonları gelirken yine “Sabit Gider” ya da “Diğer”\n                seçeneklerinde yeni bir kolon gelmez.\n              "
                                      ),
                                    ]),
                                  ]),
                                  e._v(" "),
                                  n("div", {
                                    staticClass:
                                      "separator separator-dashed my-8",
                                  }),
                                ]),
                                e._v(" "),
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "container d-flex justify-content-between footers",
                                  },
                                  [
                                    n(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                                        attrs: {
                                          to: "/docs/finans-yonetimi/kasa",
                                        },
                                      },
                                      [e._v("Önceki")]
                                    ),
                                    e._v(" "),
                                    n(
                                      "router-link",
                                      {
                                        staticClass:
                                          "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                                        attrs: { to: "/docs/anasayfa/araclar" },
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
                n("Footer"),
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
      n.default = component.exports;
      installComponents(component, {
        Header: t(425).default,
        Aside: t(426).default,
        Footer: t(427).default,
      });
    },
  },
]);
