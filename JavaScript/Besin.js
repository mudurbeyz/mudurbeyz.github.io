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


//aranan besin
var arananbesin=firebase.database().ref("Arabag/arananbesin");



//besin sayfası açıldığında çalışacak kısım
function acilis(){
  return arananbesin.once('value').then((snapshot) => {
    var aranan=snapshot.val();
	document.getElementById("besinad").innerHTML=aranan;
    firebase.database().ref("Resimler/"+aranan.toLowerCase()).once('value').then((snapshot) => {
      var resimurl=snapshot.val();
      document.getElementById("besinresim").src=resimurl;
    });
	firebase.database().ref("BesinR/"+aranan+"/Kalori").once("value",function(snapshot){
		document.getElementById("besinkalori").innerHTML=snapshot.val();
	});
	firebase.database().ref("BesinR/"+aranan+"/Porsiyon").once("value",function(snapshot){
		document.getElementById("besinmiktar").innerHTML=snapshot.val();
	  });
  });
}

function gosterge(){
	document.getElementById("kkalori").innerHTML=Math.round(Number(document.getElementById("besinkalori").innerText)*(Number(document.getElementById("kmiktar").value)/100));
}




const sliders = document.querySelectorAll(".slider-ui");

sliders.forEach(slider => {
	let input = slider.querySelector("input[type=range]");
	let min = input.getAttribute("min");
	let max = input.getAttribute("max");
	let valueElem = slider.querySelector(".value");

	slider.querySelector(".min").innerText = min;
	slider.querySelector(".max").innerText = max;

	function setValueElem() {
		valueElem.innerText = input.value;
		let percent = (input.value - min) / (max - min) * 100;
		valueElem.style.left = percent + "%";
	}
	setValueElem();

	input.addEventListener("input", setValueElem);
	input.addEventListener("mousedown", () => {
		valueElem.classList.add("up");
	});
	input.addEventListener("mouseup", () => {
		valueElem.classList.remove("up");
	});
});