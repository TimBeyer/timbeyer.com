var a = document,
    b = self,
    c = a.getElementById("c"),
    d = c.getContext("2d"),
    e = b.innerWidth,
    f = b.innerHeight;
c.width = e;
c.height = f;
var g = e / 2,
    h = f / 2,
    i = Math,
    j = i.min(g, h),
    k = i.cos,
    l = i.sin,
    m = i.random,
    n = 0,
    o = 0,
    p, q, r = 0,
    s = 1,
    t, u, v = 1;
a.onclick = function () {
    w()
};
a.onkeydown = function (B) {
    switch (B.keyCode) {
    case 67:
        r = !r;
        d.strokeStyle = "white";
        break;
    case 32:
        w();
        d.fillRect(0, 0, e, f);
        break;
    case 70:
        s = !s;
        d.lineWidth = s ? 0.1 : 0.5;
        break;
    case 80:
        x();
        break;
    case 83:
        window.open(c.toDataURL())
    }
};
var y = m(),
    z = m(),
    A = m();
d.strokeStyle = "white";
d.lineWidth = 0.1;
d.fillRect(0, 0, e, f);
w();
x();

function w() {
    x();
    d.closePath();
    d.beginPath();
    o = n = 0;
    z = m();
    A = m();
    y = m();
    x()
}
d.beginPath();

function C() {
    p = g + j * y * ((1 - z) * l(n) + A * z * l((1 - z) / z * n));
    q = h + j * y * ((1 - z) * k(n) + A * z * k((1 - z) / z * n));
    d.lineTo(p, q);
    n += 0.05
}
function D() {
    d.stroke();
    o++;
    if (s ? o % 20 == 0 : 1) with(d) {
        closePath();
        beginPath();
        moveTo(p, q);
        if (r) strokeStyle = "rgb(" + i.floor(m() * 256) + "," + i.floor(m() * 256) + "," + i.floor(m() * 256) + ")"
    }
}
function x() {
    if (v) {
        t = setInterval(D, 20);
        u = setInterval(C, 10);
        v = 0
    } else {
        clearInterval(t);
        clearInterval(u);
        v = 1
    }
};