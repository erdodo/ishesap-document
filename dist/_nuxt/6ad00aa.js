(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    450: function (e, n, r) {
      "use strict";
      r.r(n);
      var l = r(54),
        component = Object(l.a)(
          {},
          function () {
            var e = this,
              n = e._self._c;
            return n("div", { staticClass: "post", attrs: { id: "kt_post" } }, [
              n("div", { staticClass: "mb-10" }, [
                n("div", { staticClass: "mb-0" }, [
                  n("div", { staticClass: "d-flex align-items-center mb-4" }, [
                    n(
                      "h1",
                      {
                        ref: "kobiAnasayfa",
                        staticClass:
                          "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                      },
                      [
                        e._v(
                          "\n          Kobi Ana Sayfa nasıl çalışır?\n        "
                        ),
                      ]
                    ),
                  ]),
                  e._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      e._v(
                        '\n        Kobinin Ana Sayfası dört kısımdan oluşmaktadır. İlk başta "Hoş\n        Geldiniz" yazısı ile beraber "Hızlı İşlemler" menüsü bulunmaktadır.\n        Hemen altında "Yeni Özelliklerimiz" ve bunların sağ tarafında ise\n        "Yardım" menüsü bulunmaktadır. En altta ise takvim gösterilmektedir.\n        Bu menüler ne işe yarar?\n      '
                      ),
                    ]
                  ),
                  e._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      e._v(
                        '\n        Hızlı İşlemler menüsünde Siparişleriniz için iki kart butonu\n        bulunmaktadır. Bunlar, "Satın Al" ve "Satış Yap" butonlarıdır. Ayrıca\n        yeni bir Cari Hesap oluşturmak istenirse "Cari" butonu bulunmaktadır.\n      '
                      ),
                    ]
                  ),
                  e._v(" "),
                  e._m(0),
                  e._v(" "),
                  e._m(1),
                  e._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      e._v(
                        '\n        Burada "Cari Hesap" seçilirse belirli bir Cariye sipariş işlemi\n        uygulanabilir. Ya da hiçbir şey seçilmeden sipariş işlemi de\n        yapılabilir. Tutar girildikten sonra seçilen işlemler (KDV gibi)\n        ilgili kolonlara otomatik olarak uygulanır. Taksit sayısı girildiğinde\n        "Vergili Ödenecek Tutar" değeri ilgili taksit sayısına bölünerek\n        hesaplanır. Ayrıca "Ödenen Tutar" kısmı da bir ön ödeme yapılacaksa\n        yazılır ve altında "Bankadan Ödeme" ve "Kasadan Ödeme" butonları\n        açılır. Bunlardan biri seçildiğinde ve "Ekle"ye tıkladığımızda işlem\n        tamamlanmış olur.\n      '
                      ),
                    ]
                  ),
                  e._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      e._v(
                        '\n        Yeni Özelliklerimiz menüsünde duyurular ve sistem hakkında bilgiler\n        yayınlanır. Bilmeniz gereken bir değişiklik yapıldığında "Yeni\n        Özelliklerimiz" menüsünde gösterilecektir. Ayrıca kampanyalar ve özel\n        özellikler için yayınlanacak olan duyurular da burada gösterilecektir.\n      '
                      ),
                    ]
                  ),
                  e._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      e._v(
                        "\n        Yardım menüsünde en sık sorulan soruların kısa yanıtları bulunur.\n        Menüde başlıklara tıklayarak konu hakkında bilgi alabilirsiniz. Eğer\n        yeterli gelmediyse ayrıntılı bilgi için ilgili butona tıklayıp doküman\n        sayfasına gidebilirsiniz.\n      "
                      ),
                    ]
                  ),
                  e._v(" "),
                  n(
                    "div",
                    {
                      staticClass:
                        "fs-base fw-normal text-gray-700 my-4 docText",
                    },
                    [
                      e._v(
                        "\n        Takvim menüsünde, hesabınızda yapılan işlemler aylık olarak\n        gösterilir. Burada istenilen işlemin üzerine tıklayıp ilgili işlemin\n        sayfasına gidilebilir. Ya da bir işlemi başka bir tarihe sürükleyerek\n        o tarihe taşınabilir.\n      "
                      ),
                    ]
                  ),
                ]),
                e._v(" "),
                n("div", { staticClass: "separator separator-dashed my-8" }),
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
                      attrs: { to: "/docs/giris/dogrulama" },
                    },
                    [e._v("\n      Önceki")]
                  ),
                  e._v(" "),
                  n(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-light btn-active-light-primary fw-bold fs-6 mx-2",
                      attrs: { to: "/docs/kobi/cari" },
                    },
                    [e._v("\n      Sonraki")]
                  ),
                ],
                1
              ),
            ]);
          },
          [
            function () {
              var e = this,
                n = e._self._c;
              return n(
                "div",
                { staticClass: "fs-base fw-normal text-gray-700 my-4 docText" },
                [
                  e._v(
                    "\n        Cari Ekleme menüsünde; Cari Hesap Adı, TCKN / VKN, Grubu, Genel\n        Vade(Gün), Vergi Dairesi, Ticaret Sicil Numarası, Meslek Odası,\n        Telefon ve Etiket kolonları bulunur. Zorunlu kolonlar\n        "
                  ),
                  n("span", { staticClass: "text-danger" }, [e._v("*")]),
                  e._v(
                    ' ibaresi ile gösterilir. Burada,\n        "Cari Hesap Adı" ve "TCKN / VKN" kolonları zorunlu tutulmuştur. Ayrıca\n        "TCKN / VKN" kısmında 11 hane girilmesi durumunda "Adı" ve "Soyadı"\n        kolonları gelmektedir.\n      '
                  ),
                ]
              );
            },
            function () {
              var e = this,
                n = e._self._c;
              return n(
                "div",
                { staticClass: "fs-base fw-normal text-gray-700 my-4 docText" },
                [
                  e._v(
                    "\n        Sipariş Ekleme menüsünde; Cari Hesap, Ürün Adı, Tutar, KDV, KDV\n        Tutarı, KDV Dahil, Vergili Ödenecek Tutar, Taksit Sayısı, Taksit\n        Tutarı, Vade Tarihi ve Ödenen Tutar kolonları bulunur. Zorunlu\n        kolonlar "
                  ),
                  n("span", { staticClass: "text-danger" }, [e._v("*")]),
                  e._v(
                    ' ibaresi ile gösterilir.\n        Burada, "Tutar" kolonları zorunlu tutulmuştur.\n      '
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
      n.default = component.exports;
    },
  },
]);
