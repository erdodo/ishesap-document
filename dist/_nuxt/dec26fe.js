(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    455: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(54),
        component = Object(r.a)(
          {},
          function () {
            var n = this,
              t = n._self._c;
            return t("div", { staticClass: "post", attrs: { id: "kt_post" } }, [
              t("div", { staticClass: "mb-10" }, [
                t("div", { staticClass: "mb-0" }, [
                  t("div", { staticClass: "d-flex align-items-center mb-4" }, [
                    t(
                      "h1",
                      {
                        ref: "kobiSiparis",
                        staticClass:
                          "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                      },
                      [
                        n._v(
                          "\n          Kobi Sipariş nasıl çalışır?\n        "
                        ),
                      ]
                    ),
                  ]),
                  n._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      n._v(
                        '\n        Kobiye ait oluşturulan tüm Siparişler burada listelenir. Alınan Ürün\n        ve Satılan ürün olarak ayrılmışlardır. Üst tarafta Genel Bakiye, Kalan\n        Ödemeler ve Kalan Tahsilat göstergeleri bulunur. Genel Bakiye, tahsil\n        edilmiş tutarlardan ödenmiş tutarları çıkarılıp bunların toplamından\n        hesaplanır. Kalan Ödemeler, alınan ürünlerin Kalan Tutarları\n        toplamından hesaplanır. Kalan Tahsilatlar, satılan ürünlerin Kalan\n        Tutarları toplamından hesaplanır. Sağ üstten "Ekle" butonu ile ekleme\n        işlemi yapılabilir.\n      '
                      ),
                    ]
                  ),
                  n._v(" "),
                  n._m(0),
                  n._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      n._v(
                        '\n        Eğer taksit bilgisi girilmediyse verilerin sağında "Ödeme" butonu\n        aktif olur. Bu butona tıkladığımızda karşımıza çıkan sayfada ürünün\n        bilgileri gösterilir. Hemen altında "Banka Ödeme" ve "Kasa Ödeme"\n        butonları vardır. Biri seçildikten sonra "Ödenecek Tutar" girilir. Ya\n        da istenilirse "Tamamını Öde" butonu ile tüm tutar bilgisi otomatik\n        girilebilir. Ödenen tutar "Ödenmiş Tutar" altında gösterilir. Ödeme\n        yapıldıktan sonra eğer tamamı ödendi ise "Ödeme" butonu kaybolur.\n      '
                      ),
                    ]
                  ),
                  n._v(" "),
                  t(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      n._v(
                        '\n        Taksik bilgisi girildiyse eğer verilerin sağında "Taksit" butonu aktif\n        olur. Örneğin; 1000₺\'lik bir ürün için taksit sayısı 4 ise "Taksit"\n        butonu 4 kez aktif olur. İlk başta "1. Taksit" butonu oluşur.\n        Tıklanıldığında Banka ya da Kasa seçimi sunulur. Seçildiğinde ise 250₺\n        Banka ya da Kasadan alınır. Son taksit ödenince Ödenmiş Tutar, Vergili\n        Ödenecek Tutar ile eşitlenir ve buton kaybolur.\n      '
                      ),
                    ]
                  ),
                ]),
                n._v(" "),
                t("div", { staticClass: "separator separator-dashed my-8" }),
              ]),
              n._v(" "),
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
                      attrs: { to: "/docs/kobi/cari" },
                    },
                    [n._v("Önceki\n    ")]
                  ),
                  n._v(" "),
                  t(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/kobi/kasa" },
                    },
                    [n._v("\n      Sonraki")]
                  ),
                ],
                1
              ),
            ]);
          },
          [
            function () {
              var n = this,
                t = n._self._c;
              return t(
                "div",
                { staticClass: "fs-base fw-normal text-gray-700 my-4 docText" },
                [
                  n._v(
                    "\n        Ekleme menüsünde; Cari Hesap, Ürün Adı, Alış-Satış seçimi, Tutar, KDV,\n        KDV Tutarı, KDV Dahil, Vergili Ödenecek Tutar, Taksit Sayısı, Taksit\n        Tutarı, Vade Tarihi, Ödenen Tutar ve Etiket kolonları bulunur. Zorunlu\n        alanlar "
                  ),
                  t("span", { staticClass: "text-danger" }, [n._v("*")]),
                  n._v(
                    ' ibaresiyle gösterilmiştir.\n        Taksit sayısı girilirse "Vergili Ödenecek Tutar" ilgili taksit\n        sayısına bölünerek Taksit Tutarı kolonunda hesaplanır. Ayrıca Ödenen\n        Tutar girilirse altında "Bankadan Ödeme" ve "Kasadan Ödeme" butonları\n        aktif olur.\n      '
                  ),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
  },
]);
