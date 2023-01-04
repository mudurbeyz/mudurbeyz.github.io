function hesapla(){
    var deger=$("input[name='cinsiyet']:checked").val();
    var kg=document.getElementById("kg").value;
    var yas=document.getElementById("yas").value;
    var boy=document.getElementById("cm").value;
    var aktiflik=$("input[name='aktiflik']:checked").val();
    var sonuc;
    if(deger!=null && kg!=null &&  yas!=null &&  boy!=null && aktiflik!=null)
    {
        if(kg<=200 && kg>0 && yas<=100 && yas>0 && boy<=250 && boy>0)
        {
            if(deger=="k")
                sonuc=655.1+(9.56*kg)+(1.85*boy)-(4.67*yas);
            if(deger=="e")
                sonuc=66.5+(13.75*kg)+(5*boy)-(6.77*yas);
            document.getElementById("sonuc").value=Math.round(sonuc*aktiflik);
        }
        else
            alert("Lütfen hesaplanabilir değerler giriniz");
    }
    else
        alert("Lütfen boş bırakmayınız");
}



//scrollar
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