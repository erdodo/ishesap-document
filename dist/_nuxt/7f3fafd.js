(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    466: function (t, n, r) {
      "use strict";
      r.r(n);
      var e = r(54),
        component = Object(e.a)(
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
                        ref: "verification",
                        staticClass:
                          "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                      },
                      [
                        t._v(
                          "\n          Doğrulama ekranı nasıl çalışır?\n        "
                        ),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      t._v(
                        "\n        Giriş yaptıktan sonra kayıtlı telefon numaranıza 6 haneli bir\n        doğrulama kodu gönderilir. 2 dakika içinde telefonunuza gelen kod\n        girildiyse başarılı bir şekilde giriş yapılır ve sizi Ana Sayfaya\n        yönlendirir.\n      "
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
                      attrs: { to: "/docs/giris/giris-ekrani" },
                    },
                    [t._v("Önceki")]
                  ),
                  t._v(" "),
                  n(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/kayit/kayit-ekrani" },
                    },
                    [t._v("Sonraki")]
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
