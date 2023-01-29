function openWarna(namawarna) {
    var x = document.getElementsByClassName("warna");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(namawarna).style.display = "block";
}

let docTitle = document.title;
window.addEventListener("blur", function () {
    document.title = "Come back :(";
});
window.addEventListener("focus", function () {
    document.title = docTitle;
});
