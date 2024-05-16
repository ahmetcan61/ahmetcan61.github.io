document.addEventListener('DOMContentLoaded', function() {
    var deadline = new Date("2024-12-31 23:59:59").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + " gün " + hours + " saat "
        + minutes + " dakika " + seconds + " saniye ";

        if (t < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Doğum günün kutlu olsun!";
        }
    }, 1000);
});
