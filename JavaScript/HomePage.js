const firebaseConfig = {
  apiKey: "AIzaSyBQ8PEWzBmCnDb39nv9AzS-3nJngZAJbmg",
  authDomain: "sporumhayat.firebaseapp.com",
  databaseURL: "https://sporumhayat-default-rtdb.firebaseio.com",
  projectId: "sporumhayat",
  storageBucket: "sporumhayat.appspot.com",
  messagingSenderId: "109187164608",
  appId: "1:109187164608:web:53501ded4ddc1e0bcd4025",
  measurementId: "G-48VS2T0M9H"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
//besin isimlerinin veritabanından çekildiği kısım
const besinler = firebase.database().ref("Besinler");
const besinname=[""];
besinler.once("value",function(snapshot){
  snapshot.forEach(function(element){
     besinname.push(element.val());
  })
});
//yakın tahminin sunulduğu kısım
var sayac=1;
function ara(){
    besinname.sort();
    const icerik=document.getElementById("searchbox").value;
    for(var i=0;i<besinname.length;++i)
    {
        if((icerik.toLowerCase())==(besinname[i].slice(0,icerik.length)).toLowerCase())
        {
            if(sayac<7)
            {
                document.getElementById(sayac).value=besinname[i];
                document.getElementById("g"+sayac).style.opacity=100;
                sayac++;
            }
            else
                break;
        }
        for(var g=1;g<=6;++g)
        {
          if(sayac==g)
          {
              for(var e=6;e>=sayac;--e)
              {
                  document.getElementById("g"+e).style.opacity=0;
              }
          }
        }
    }
    sayac=1;
    if(icerik.length==0)
    {
        document.getElementById("g1").style.opacity=0;
        document.getElementById("g2").style.opacity=0;
        document.getElementById("g3").style.opacity=0;
        document.getElementById("g4").style.opacity=0;
        document.getElementById("g5").style.opacity=0;
        document.getElementById("g6").style.opacity=0;
    }
}

//aranan besin
var arananbesin=firebase.database().ref("Arabag");

//enter a basıldığında girilen doğru ise besin sayfasına yönlendirildiği kısım
$(document).keypress(function (event) {
  var keycode=(event.keyCode ? event.keyCode : event.which);
  if (keycode ==13)
  {
      const icerik=document.getElementById("searchbox").value;
      if(icerik.length>0)
      {
          for(var i=0;i<besinname.length;++i)
          {
              if((icerik.toLowerCase())==(besinname[i].toLowerCase()))
              {
                  arananbesin.set({arananbesin:besinname[i]});
                  document.getElementById("gecis").click();
                  break;
              }
          }
      }
      else
        alert("arama başarısız");
  }
});
//ara butonuna veya yakın tahminlerden biri seçildiğinde çalışacak kısım
function bul(){
  const icerik=document.getElementById("searchbox").value;
  if(icerik.length>0)
  {
      for(var i=0;i<besinname.length;++i)
      {
          if((icerik.toLowerCase())==(besinname[i].toLowerCase()))
          {
              alert(besinname[i]);
              document.getElementById("gecis").click();
              break;
          }
      }
  }
}








  //besin isimlerini diziye atama
  /*
  var besinsayisi=0;
  const besinler = firebase.database().ref("Besinler");
  const besinname=[""];
  besinler.once("value",function(snapshot){
    snapshot.forEach(function(element){
       besinname.push(element.val());
    })
    console.log(besinname.length);
  });
  */
  //BesinR veri tabanı oluşumu.
  /*
  var besinR = firebase.database().ref("BesinR");
  besinR.set({
    Akceviz:{
        Porsiyon:100,
        Kalori:612
    },
    Bakla:{
        Porsiyon:100,
        Kalori:84
    },
    Bambu_Filizi:{
        Porsiyon:100,
        Kalori:27
    },
    Bamya:{
        Porsiyon:100,
        Kalori:33
    },
    Barbunya_Fasulyesi:{
        Porsiyon:100,
        Kalori:347
    },
    Bezelye:{
        Porsiyon:100,
        Kalori:42
    },
    Börülce:{
        Porsiyon:100,
        Kalori:341
    },
    Chili_Fasulye:{
        Porsiyon:100,
        Kalori:97
    },
    Fazulye_Filizi:{
        Porsiyon:100,
        Kalori:30
    },
    Kahverengi_Mercimek:{
        Porsiyon:100,
        Kalori:353
    },
    Katı_Tofu:{
        Porsiyon:100,
        Kalori:70
    },
    Kestane_İçi:{
        Porsiyon:100,
        Kalori:210
    },
    Kuru_Fasulye:{
        Porsiyon:100,
        Kalori:336
    },
    Beyaz_Fasulye:{
        Porsiyon:100,
        Kalori:336
    },
    Kırmızı_Barbunya:{
        Porsiyon:100,
        Kalori:124
    },
    Kırmızı_Fasulye:{
        Porsiyon:100,
        Kalori:337
    },
    Kırmızı_Mercimek:{
        Porsiyon:100,
        Kalori:329
    },
    Kızartılmış_Tofu:{
        Porsiyon:100,
        Kalori:271
    },
    Maş_Fasulyesi:{
        Porsiyon:100,
        Kalori:12
    },
    Mercimek:{
        Porsiyon:100,
        Kalori:353
    },
    Miso:{
        Porsiyon:100,
        Kalori:199
    },
    Nohut:{
        Porsiyon:100,
        Kalori:364
    },
    Pekan_Cevizi:{
        Porsiyon:100,
        Kalori:691
    },
    Sarı_Mercimek:{
        Porsiyon:100,
        Kalori:304
    },
    Siyah_Nohut:{
        Porsiyon:100,
        Kalori:364
    },
    Soya_Fasulyesi:{
        Porsiyon:100,
        Kalori:147
    },
    Soya_Fıstığı:{
        Porsiyon:100,
        Kalori:471
    },
    Soya_Mayonezi:{
        Porsiyon:100,
        Kalori:322
    },
    Soya_Peyniri:{
        Porsiyon:100,
        Kalori:235
    },
    Soya_Yoğurdu:{
        Porsiyon:100,
        Kalori:66
    },
    Tofu:{
        Porsiyon:100,
        Kalori:76
    },
    Uzun_Fasulye:{
        Porsiyon:100,
        Kalori:85
    },
    Yer_Fıstığı:{
        Porsiyon:100,
        Kalori:567
    },
    Yeşil_Fasulye:{
        Porsiyon:100,
        Kalori:31
    },
    Yeşil_Mercimek:{
        Porsiyon:100,
        Kalori:257
    },
    Yumuşak_Tofu:{
        Porsiyon:100,
        Kalori:55
    },
    Çok_Katı_Tofu:{
        Porsiyon:100,
        Kalori:91
    },
    Şeker_Bezelyesi:{
        Porsiyon:100,
        Kalori:42
    }
  })*/