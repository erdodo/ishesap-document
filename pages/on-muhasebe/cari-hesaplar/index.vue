<template>
  <div>
    <Header></Header>
    <div class="d-flex">
      <Aside></Aside>
      <div
        style="height: calc(100vh - 61px - 64px)"
        class="overflow-auto w-100 py-4 px-2"
      >
        <div class="container">
          <el-card class="w-100 mb-3">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">
                Anasayfa
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/on-muhasebe' }">
                Ön Muhasebe
              </el-breadcrumb-item>
              <el-breadcrumb-item>Cari Hesap</el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <!--begin::Content-->
          <!--begin::Post-->
          <div>
            <!--begin::Questions-->
            <div class="mb-10">
              <!--begin::Question-->
              <div class="mb-0">
                <!--begin::Head-->
                <div class="d-flex align-items-center mb-4">
                  <!--begin::Title-->
                  <h1 class="fw-bolder">Cari Hesap nasıl çalışır?</h1>
                  <!--end::Title-->
                </div>
                <!--end::Head-->
                <article>
                  <p>
                    Cari Hesap Ekle, Cari Hesap Adı, TCKN / VKN, Vergi Dairesi,
                    Adı, Soyadı, Grubu, Genel Vade, Ticaret Sicil Numarası, Oda
                    Sicil Numarası, Meslek Odası, Telefon, Etiket, Kategori ve
                    Resim kolonlarından oluşur.
                  </p>
                  <p>
                    Genel olarak tablolarımız belirli bir standartta
                    görüntülenir. Sol üstte, ilgili sayfadaki tablo adı bulunur.
                    Hemen altında Detaylı Arama, Gizle/Göster, Sayfalama, Çıktı
                    Al butonlarının yanı sıra Ekle ve bazı tablolarda İçeri
                    Aktar butonları bulunur.
                  </p>
                  <p>
                    Detaylı Arama tıklandığında mevcut tablodaki kolonlara göre
                    gelişmiş bir filtreleme sistemi ile arama yapılabilir.
                  </p>
                  <p>
                    Gizle/Göster, mevcut tabloda hangi verilerin gösterilip
                    gösterilmeyeceğini seçilebilir.
                  </p>
                  <p>
                    Sayfalama (varsayılan 10) tıklandığında tercihe göre bir
                    sayfada kaç tane verinin gösterileceği seçilebilir.
                  </p>
                  <p>
                    Çıktı Al butonu ile CSV, XLSX olarak tablodaki veriler dışa
                    aktarılabilir.
                  </p>
                  <p>
                    Tablonun başlık bölümünde son sırada “Ara” butonu bulunur.
                    Tıklandığında her kolonun altında kolonlara özel arama kısmı
                    açılır. İstenilen kolona göre arama yapılabilir. Başlıkların
                    yanlarında bulunan çift taraflı oklara tıklanarak o
                    kolondaki veriler sıralanabilir. (büyükten küçüğe, A’dan
                    Z’ye gibi)
                  </p>
                  <p>
                    Sol altta tablodaki toplam veri sayısı yazar. Hemen ortada
                    kaç sayfa olduğu ve mevcut sayfa bilgisi bulunur. Tıklayarak
                    istenilen sayfaya gidilebilir. Sağ altta ise bir sayfada kaç
                    veri gösteriliyor bilgisi yazar.
                  </p>
                  <p>
                    Tablo içerisindeki verilerin sonunda bir “kalem” simgesi
                    vardır. Buna tıklandığında o veri için seçenekler açılır.
                    Genelde “Detay, Düzenle, Sil” butonları bulunur. (Tablodan
                    tabloya değişiklik gösterir)
                  </p>
                  <p>
                    Ekle’ye tıkladığımızda ekranın sağ tarafından bir panel
                    açılır ve bulunan tabloya veri ekleme işlemi yapılabilir.
                  </p>
                  <p>
                    Ekle panelinde sol üstte tablonun adı bulunur. Hemen sağında
                    kapat butonu yer alırken onun altında "Taslak kaydını
                    yapıştır", "Son kaydedilen verileri getir" ve "Temizle"
                    butonları yer alır. "Taslak kaydını yapıştır", ekleme
                    panelinde bir önceki yazdığınız fakat kaydetmediğiniz
                    bilgileri aklında tutar ve onları otomatik doldurur. Bu bir
                    işlem yaparken (internetin gitmesi, sayfa yenilenmesi gibi)
                    istenmeyen durumlar gerçekleşirse kullanılabilir. "Son
                    kaydedilen verileri getir", mevcut tabloya daha önce ekleme
                    yaptıysanız son eklenen veriyi tekrar oluşturur. Bu sadece
                    ufak değişiklerinin olacağı çoklu işlemlerde pratiklik
                    sağlayabilir. Temizleye tıklandığında girilen tüm veriler
                    temizlenir. Kapat butonuna tıklandığında panel kapatılır.
                    Orta kısımda girilebilecek veriler bulunur. Zorunlu alanlar
                    kolon isimlerinin yanında * ibaresi ile belirtilmiştir.
                  </p>
                  <p>
                    Kolonların sağ tarafında bulunan "Ekle" ve "Düzenle"
                    butonları bazı seçilebilir kolonlara pratik bir şekilde veri
                    ekleyebilmek ya da o veriyi düzenleyebilmek için
                    yapılmıştır. En alttaki Kaydet butonu ile girilen veri
                    ilgili tabloya eklenebilir.
                  </p>
                  <p>
                    Tablolarda satırların üstüne tıkladığımızda seçilen verinin
                    alt sayfası var ise oraya yönlendirilir. Yoksa “Detay”
                    paneli açılır. Örneğin Cari Hesap’ın alt sayfası
                    bulunmaktadır.
                  </p>
                  <p>
                    Seçilen Cari Hesabın alt sayfası detaylı bir şekilde
                    gösterilir. 6 alt menüden oluşur. Hesap Bakiye Özeti, Adres
                    Ayarları, Banka Ayarları, İletişim Ayarları, Notlar ve
                    Düzenle menüsüne ek olarak sol üstte Cari’ye ait bilgiler
                    yer alır. Hemen altında açılır menüler bulunur. Hemen
                    sağında o cariye ait Alacak, Borç ve Bakiye bilgisinin bir
                    Donut grafiği yer alır. Sağ tarafta ise o cariye ait Notlar
                    ve Hesap Bakiye Özetinde oluşan verilerin Borç, Alacak ve
                    Bakiye bilgileri yer alır. Onun altındaki açılır menülerden
                    biri seçildiğinde o cariye istenilen işlem yapılabilir.
                    “Ödeme Al” altında, Banka Havale, Kasa Ödeme, Çek, Senet
                    modülleri bulunur. “Satış Yap” altında, Fatura, İrsaliye,
                    Sipariş modülleri bulunur… Örneğin Ödeme Al butonunda Banka
                    Havalesi seçildiğinde Bankadan Gelen Havale İşlemi tablosu
                    gelir.
                  </p>
                  <p>
                    Üst tarafta “Not/Hatırlatıcı” bölümü bulunur. Bu cariye özel
                    eklenen notlar burada listelenir. Notların yanındaki kaleme
                    tıklanıldığında düzenlenebilir ya da silinebilir. Burası
                    daha önce not eklenmediyse boş gözükür. Not eklemek için sağ
                    altındaki “+” butonuna tıklanabilir.
                  </p>
                </article>
              </div>
              <!--end::Question-->
              <!--begin::Separator-->
              <el-divider />
              <!--end::Separator-->
            </div>
            <!--end::Questions-->
            <!--begin::Pagination-->
            <div class="d-none">
              <router-link
                to="/docs/giris/dogrulama"
                class="btn btn-light fw-bold mx-2"
              >
                Önceki</router-link
              >
              <router-link
                to="/docs/finans-yonetimi/kartlar"
                class="btn btn-light fw-bold mx-2"
                >Sonraki</router-link
              >
            </div>
            <!--end::Questions-->
          </div>
          <!--end::Post-->
          <!--end::Content-->
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
