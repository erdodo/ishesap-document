(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    451: function (t, l, n) {
      "use strict";
      n.r(l);
      var e = n(54),
        component = Object(e.a)(
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
                        ref: "kobiBanka",
                        staticClass:
                          "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                      },
                      [t._v("\n          Kobi Banka nasıl çalışır?\n        ")]
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
                        "\n        Kobiye ait Banka üzerinden yapılan tüm ödemeler ve tahsilat işlemleri\n        burada listelenir. Alınan Ürün ve Satılan Ürünler gösterilir. Üst\n        tarafta Banka Bakiyesi, Ödemeler Toplamı ve Tahsilatlar Toplamı\n        göstergeleri bulunur. Banka Bakiyesi, Tahsilatlar Toplamından Ödemeler\n        Toplamını çıkartarak hesaplanır. Ödemeler Toplamı, Alınan Ürünler için\n        yapılan ödemelerin toplamını gösterir. Tahsilatlar Toplamı, Satılan\n        Ürünler için yapılan tahsilat toplamlarını gösterir.\n      "
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
                      attrs: { to: "/docs/kobi/kasa" },
                    },
                    [t._v("\n      Önceki")]
                  ),
                  t._v(" "),
                  l(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/kobi/fatura" },
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
