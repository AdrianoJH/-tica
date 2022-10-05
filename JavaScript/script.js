function slide1() {
    document.getElementById('sld').src="./img/slide/slide1.webp";
    setTimeout("slide2()", 3000)
}

function slide2() {
    document.getElementById('sld').src="./img/slide/slide2.webp";
    setTimeout("slide3()", 3000)
}

function slide3() {
    document.getElementById('sld').src="./img/slide/slide3.jpg";
    setTimeout("slide1()", 3000)
}
