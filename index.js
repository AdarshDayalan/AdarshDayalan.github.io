const img_id = init_label(9)
const img_xy = init_xy(img_id)

const wiggle_mult = 1.0

const mid_x = screen.width/2
const mid_y = screen.height/2

function vh(v) {
    var h = document.documentElement.clientHeight;
    return (v / h) * 100;
}
  
function vw(v) {
    var w = document.documentElement.clientWidth;
    return (v / w) * 100;
}

function coordinate(event) {
    const x = event.clientX;
    const y = event.clientY;

    if(screen.width > 800) {
        for (const [idx, _] of img_id.entries()) {
            let r = idx % 4
            if(r == 0) {
                move4(x,y,img_id[idx], img_xy[idx])
            } else if (r == 1){
                move3(x,y,img_id[idx], img_xy[idx])
            } else if (r == 2){
                move2(x,y,img_id[idx], img_xy[idx])
            } else {
                move1(x,y,img_id[idx], img_xy[idx])
            }
        }
    }
 }

function href_none(element) {
    element.href=none; 
}

 function move1(x, y, img, img_xy) {
    let [img_x, img_y] = img_xy
    img.style.left = img_x - vw(((x-mid_x)/mid_x)  * wiggle_mult * img.width) + "vw"
    img.style.top = img_y - vh(((y-mid_y)/mid_y) * wiggle_mult * img.height) + "vh"
 }

 function move2(x, y, img, img_xy) {
    let [img_x, img_y] = img_xy
    img.style.left = img_x + vw(((x-mid_x)/mid_x)  * wiggle_mult * img.width) + "vw"
    img.style.top = img_y + vh(((y-mid_y)/mid_y) * wiggle_mult * img.height) + "vh"
 }

 function move3(x, y, img, img_xy) {
    let [img_x, img_y] = img_xy
    img.style.left = img_x + vw(((x-mid_x)/mid_x) * wiggle_mult * img.width) + "vw"
    img.style.top = img_y - vh(((y-mid_y)/mid_y) * wiggle_mult * img.height) + "vh"
 }

 function move4(x, y, img, img_xy) {
    let [img_x, img_y] = img_xy
    img.style.left = img_x - vw(((x-mid_x)/mid_x)  * img.width) + "vw"
    img.style.top = img_y + vh(((y-mid_y)/mid_y) * img.height) + "vh"
 }

 function init_label(n) {
     const arr = []
     for (let step = 0; step < n; step++) {
         arr.push(document.getElementById(("img"+step)))
     }
     console.log(arr)
     return arr
 }

 function init_xy(arr) {
     arr_xy = []
    for (const img of arr) {
        arr_xy.push([vw(img.offsetLeft), vh(img.offsetTop)])
    }
    // console.log(arr_xy[0])
    return arr_xy
}

function ToggleDark() {
    document.body.classList.toggle('dark-theme');
    const btn = document.getElementById("dark-btn");
    const arw = document.getElementById("down-arw-img")
    const nav_logo = document.getElementById("nav-logo")
    const footer_logo = document.getElementById("footer-img")

    console.log(btn.src)
    if(btn.src.includes("png%20images/btn-grey.png")) {
        btn.src = "png images/btn-white.png";
        arw.src = "png images/arrow-down-white.png"
        nav_logo.src = "Images/logo_crop_white.png"
        footer_logo.src = "Images/logo_crop_grey.png"
    } else {
        btn.src = "png images/btn-grey.png";
        arw.src = "png images/arrow-down-grey.png"
        nav_logo.src = "Images/logo_crop_grey.png"
        footer_logo.src = "Images/logo_crop_white.png"
    }
  }