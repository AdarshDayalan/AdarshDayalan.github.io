const img_id = init_label(9)
const img_xy = init_xy(img_id)

// const img1 = document.getElementById("img1")
// const img1_xy = [img1.offsetLeft, img1.offsetTop]

// const img2 = document.getElementById("img2")
// const img2_xy = [img2.offsetLeft, img2.offsetTop]

// const img3 = document.getElementById("img3")
// const img3_xy = [img3.offsetLeft, img3.offsetTop]

const mid_x = screen.width/2
const mid_y = screen.height/2

function coordinate(event) {
    const x = event.clientX;
    const y = event.clientY;

    for (const [idx, _] of img_id.entries()) {
        if(idx % 2 == 0) {
            move1(x,y,img_id[idx], img_xy[idx])
        } else {
            move2(x,y,img_id[idx], img_xy[idx])
        }
      }

 }

 function move1(x, y, img, img_xy) {
    let [img_x, img_y] = img_xy
    img.style.left = img_x + ((x-mid_x)/mid_x) * 2 * img.width + "px"
    img.style.top = img_y + ((y-mid_y)/mid_y) * 2* img.height + "px"
 }

 function move2(x, y, img, img_xy) {
    let [img_x, img_y] = img_xy
    img.style.left = img_x - ((x-mid_x)/mid_x) * 2 * img.width + "px"
    img.style.top = img_y - ((y-mid_y)/mid_y) * 2 * img.height + "px"
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
        arr_xy.push([img.offsetLeft, img.offsetTop])
    }
    // console.log(arr_xy[0])
    return arr_xy
}

function ToggleDark() {
    document.body.classList.toggle('dark-theme');
    console.log("Toggled")
    const btn = document.getElementById("dark-btn");
    console.log(btn.src)
    if(btn.src.includes("png%20images/dark-mode.png")) {
        console.log("Switched")
        btn.src = "png images/light-mode.png";
    } else {
        btn.src = "png images/dark-mode.png";
    }
  }