(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    449: function (t, r, l) {
      "use strict";
      l.r(r);
      var e = l(54),
        component = Object(e.a)(
          {},
          function () {
            var t = this,
              r = t._self._c;
            return r("div", { staticClass: "post", attrs: { id: "kt_post" } }, [
              r("div", { staticClass: "mb-10" }, [
                r("div", { staticClass: "mb-0" }, [
                  r("div", { staticClass: "d-flex align-items-center mb-4" }, [
                    r(
                      "h1",
                      {
                        ref: "profile",
                        staticClass:
                          "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                      },
                      [t._v("\n          Profil nasıl çalışır?\n        ")]
                    ),
                  ]),
                  t._v(" "),
                  r(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      t._v(
                        "\n        Profil menüsü kendi içinde bölümlere ayrılmıştır. Profil Bilgileri,\n        Firma Bilgileri, Firma Adres Bilgileri, İletişim Tercihleri gibi\n        bölümlere ayrılmıştır.\n      "
                      ),
                    ]
                  ),
                ]),
                t._v(" "),
                r("div", { staticClass: "separator separator-dashed my-8" }),
              ]),
              t._v(" "),
              r(
                "div",
                {
                  staticClass:
                    "container d-flex justify-content-between footers",
                },
                [
                  r(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/giris/dogrulama" },
                    },
                    [t._v("\n      Önceki")]
                  ),
                  t._v(" "),
                  r(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/finans-yonetimi/kartlar" },
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
      r.default = component.exports;
    },
  },
]);
