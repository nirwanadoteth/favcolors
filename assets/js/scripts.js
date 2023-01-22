function openWarna(namawarna) {
    var i;
    var x = document.getElementsByClassName("warna");
    for (i = 0; i < x.length; i++) {
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

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    alert("This website is only for desktop. Please use desktop.");
    window.location.href =
        "https://10122222.github.io/favcolors/content/mobile.html";
}
