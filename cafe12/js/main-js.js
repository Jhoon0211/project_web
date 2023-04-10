window.onload = function(){
    // 배경 이미지 change
    let picture = ["./images/header1.jpg", "./images/header2.jpg",
                "./images/header3.jpg"];
    let p_idx = 0;

showPicture(); // 함수 호출

function showPicture(){
    let img = document.querySelector("#pic");
    img.src = picture[p_Idx];
    p_idx += 1

    if(p_idx == picture.length)
        p_idx = 0;
    setTimeout(showPicture, 2000); // 콜백 함수
    }

// 디지털 시계
let watch = setInterval(myWatch, 1000);
        

function setWatch(){
    const date = new Date();
    let now = date.toLocalTimeString(); // 시간 형식
    document.getElementById("demo").innerHTML = now;
    }
}