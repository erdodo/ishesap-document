(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    456: function (t, n, l) {
      "use strict";
      l.r(n);
      var r = l(54),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "post", attrs: { id: "kt_post" } }, [
              n("div", { staticClass: "mb-10" }, [
                n("div", { staticClass: "mb-0" }, [
                  n("div", { staticClass: "d-flex align-items-center mb-4" }, [
                    n(
                      "h1",
                      {
                        ref: "login",
                        staticClass:
                          "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                      },
                      [
                        t._v(
                          "\n          Giriş ekranı nasıl çalışır?\n        "
                        ),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 mb-4 docText",
                    },
                    [
                      t._v(
                        "\n        Tanıtım sayfamızda sağ üstte “Giriş Yap” butonuna tıklanıldığında\n        Kullanıcı Girişi sayfası karşımıza çıkıyor. Burada daha önceden üye\n        olan kullanıcılar yazılıma giriş yapabilir. Eğer bir hesabınız yoksa\n        “Üyeliğimi Başlat” butonu ile Kayıt olma ekranına gidilebilir.\n      "
                      ),
                    ]
                  ),
                ]),
                t._v(" "),
                n("div", { staticClass: "separator separator-dashed my-8" }),
              ]),
              t._v(" "),
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
                      attrs: { to: "/docs" },
                    },
                    [t._v("Önceki\n    ")]
                  ),
                  t._v(" "),
                  n(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/giris/dogrulama" },
                    },
                    [t._v("\n      Sonraki")]
                  ),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = component.exports;
    },
  },
]);
