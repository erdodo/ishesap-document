(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    453: function (e, n, l) {
      "use strict";
      l.r(n);
      var r = l(54),
        component = Object(r.a)(
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
                        ref: "kobiCari",
                        staticClass:
                          "fs-2 fw-bolder text-gray-900 text-hover-primary me-1",
                      },
                      [
                        e._v(
                          "\n          Kobi Cari Hesap nasıl çalışır?\n        "
                        ),
                      ]
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      '\n        Kobiye ait oluşturulan Cari Hesaplar burada listelenir. Sol üstte\n        tablo adı, altında Detaylı Arama, Sayfalama, Çıktı Al, Ara, Ekleme,\n        Yardım gibi menüler bulunur. Veri oluşturulduğunda üstüne tıklanıp\n        detaylı alt menüsüne gidilebilir. Sağ üstten "Ekle" butonu ile ekleme\n        yapılabilir.\n      '
                    ),
                  ]),
                  e._v(" "),
                  e._m(0),
                  e._v(" "),
                  n("p", [
                    e._v(
                      '\n        Carinin detayına gidildiğinde bizi böyle bir sayfa karşılar. Sol üstte\n        ilgili carinin bilgileri yer alır. Hemen sağında ilgili cariye eklenen\n        notlar ve ekleme butonu yer alır. Altında "Satış Yap" ve "Satın Al"\n        butonları bulunurken sağında ilgili cariye ait Borç, Alacak ve Bakiye\n        göstergeleri bulunur. Ayrıca 4 panele ayrılmıştır. Bunlar, Hesap\n        Bakiye Özeti, Sattıklarım, Aldıklarım ve Düzenle panelleridir. Hesap\n        Bakiye Özeti alınan ödemelerin tamamının listelendiği bölümdür.\n      '
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      '\n        Sattıklarım menüsünde ilgili cariye eklenen satılan ürün siparişleri\n        gösterilir. Buradan ürünlerin Vergili Ödenecek Tutarı ile Ödenmiş\n        Tutar eşit değilse "Hızlı İşlem" altında "Ödeme Butonu" bulunur.\n        Taksit bilgisi girildiyse "Ödeme Butonu" yerine "Taksit" butonu\n        bulunur. Tıklandığında "Bankadan" ya da "Kasadan" ödeme butonları\n        çıkar. Seçildiğinde ise bir sorgu yapılır ve eminseniz işlem\n        tamamlanır. Örneğin 3 taksit bilgisi girildiyse "1. Taksit" yazar. İlk\n        taksit ödendiğinde "2. Taksit" yazar. Tüm taksitler ödendiğinde işlem\n        tamamlanır. Ödeme yapıldığı taktirde Kalan Tutardan düşülür. Tamamı\n        ödenirse eğer Kalan Tutar sıfırlanır ve Ödeme butonu kaldırılır.\n      '
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      '\n        Satış Yap butonuna tıklandığında bir sipariş ekleme menüsü açılır.\n        Ekleme menüsünde; Ürün Adı, Tutar, KDV, KDV Tutarı, KDV Dahil, Vergili\n        Ödenecek Tutar, Taksit Sayısı, Taksit Tutarı, Vade Tarihi ve Ödenen\n        Tutar kolonları bulunur. Taksit sayısı girilirse "Vergili Ödenecek\n        Tutar" ilgili taksit sayısına bölünerek Taksit Tutarı kolonunda\n        hesaplanır. Ayrıca Ödenen Tutar girilirse altında "Bankadan Ödeme" ve\n        "Kasadan Ödeme" butonları aktif olur. Ekle dediğimizde Kobi Sipariş\n        tablosuna satılan ürün eklenmiş olur.\n      '
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      '\n        Aldıklarım menüsünde ise ilgili cariye eklenen alınan ürün siparişleri\n        gösterilir. Buradan ürünlerin Vergili Ödenecek Tutarı ile Ödenmiş\n        Tutar eşit değilse "Hızlı İşlem" altında "Ödeme Butonu" bulunur. Ödeme\n        yapıldığı taktirde Kalan Tutardan düşülür. Tamamı ödenirse eğer Kalan\n        Tutar sıfırlanır ve Ödeme butonu kaldırılır. Sattıklarım ile benzer\n        şekilde çalışır.\n      '
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      '\n        Satın Al butonuna tıklandığında bir sipariş ekleme menüsü açılır.\n        Ekleme menüsünde; Ürün Adı, Tutar, KDV, KDV Tutarı, KDV Dahil, Vergili\n        Ödenecek Tutar, Taksit Sayısı, Taksit Tutarı, Vade Tarihi ve Ödenen\n        Tutar kolonları bulunur. Taksit sayısı girilirse "Vergili Ödenecek\n        Tutar" ilgili taksit sayısına bölünerek Taksit Tutarı kolonunda\n        hesaplanır. Ayrıca Ödenen Tutar girilirse altında "Bankadan Ödeme" ve\n        "Kasadan Ödeme" butonları aktif olur. Ekle dediğimizde Kobi Sipariş\n        tablosuna alınan ürün eklenmiş olur.\n      '
                    ),
                  ]),
                  e._v(" "),
                  n("p", [
                    e._v(
                      "\n        Düzenle menüsünden ise ilgili cari bilgileri düzenlenebilir. Ayrıca\n        Eklenen notlarda bulunur. Not ekleme modalı şu şekilde gözükür.\n      "
                    ),
                  ]),
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
                      attrs: { to: "/docs/finans-yonetimi/kartlar" },
                    },
                    [e._v("Sonraki")]
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
              return n("p", [
                e._v(
                  "\n        Ekleme menüsünde; Cari Hesap Adı, TCKN / VKN, Grubu, Genel Vade(Gün),\n        Vergi Dairesi, Ticaret Sicil Numarası, Meslek Odası, Telefon ve Etiket\n        kolonları bulunur. Zorunlu alanlar\n        "
                ),
                n("span", { staticClass: "text-danger" }, [e._v("*")]),
                e._v(
                  ' ibaresiyle gösterilmiştir. Burada\n        "Cari Hesap Adı" ve "TCKN / VKN" zorunlu tutulmuştur. Ayrıca TCKN /\n        VKN kolonu 11 hane girildiği taktirde "Adı" ve "Soyadı" kolonları\n        aktif olur.\n      '
                ),
              ]);
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
