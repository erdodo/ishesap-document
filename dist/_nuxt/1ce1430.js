(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    454: function (t, l, e) {
      "use strict";
      e.r(l);
      var n = e(54),
        component = Object(n.a)(
          {},
          function () {
            var t = this,
              l = t._self._c;
            return l("div", { staticClass: "post", attrs: { id: "kt_post" } }, [
              l("div", { staticClass: "mb-10" }, [
                l("div", { staticClass: "mb-0" }, [
                  l("div", { staticClass: "d-flex align-items-center mb-4" }, [
                    l(
                      "h1",
                      {
                        ref: "kobiKasa",
                        staticClass:
                          "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                      },
                      [t._v("\n          Kobi Kasa nasıl çalışır?\n        ")]
                    ),
                  ]),
                  t._v(" "),
                  l(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      t._v(
                        "\n        Kobiye ait Kasa üzerinden yapılan tüm ödemeler ve tahsilat işlemleri\n        burada listelenir. Alınan Ürün ve Satılan Ürünler gösterilir. Üst\n        tarafta Kasa Bakiyesi, Ödemeler Toplamı ve Tahsilatlar Toplamı\n        göstergeleri bulunur. Kasa Bakiyesi, Tahsilatlar Toplamından Ödemeler\n        Toplamını çıkartarak hesaplanır. Ödemeler Toplamı, Alınan Ürünler için\n        yapılan ödemelerin toplamını gösterir. Tahsilatlar Toplamı, Satılan\n        Ürünler için yapılan tahsilat toplamlarını gösterir.\n      "
                      ),
                    ]
                  ),
                ]),
                t._v(" "),
                l("div", { staticClass: "separator separator-dashed my-8" }),
              ]),
              t._v(" "),
              l(
                "div",
                {
                  staticClass:
                    "container d-flex justify-content-between footers",
                },
                [
                  l(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/kobi/siparis" },
                    },
                    [t._v("\n      Önceki")]
                  ),
                  t._v(" "),
                  l(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/kobi/banka" },
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
      l.default = component.exports;
    },
  },
]);
