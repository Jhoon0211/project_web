window.onload = function(){
    let text = document.querySelector("h1")

    // window 객체 scroll 이벤트 구현
    window.addEventListener('scroll', function(){
        let value = this.window.scrollY;
        // Y값 콘솔로 확인 
        console.log(value);

        if(value > 300){
            text.style.animation = "back_slide 1s ease-out forwards"
            // forwards : 300이상일땐 유지되어있음
        }else{
            text.style.animation = "go_slide 1s ease-out"
        }
    })
}