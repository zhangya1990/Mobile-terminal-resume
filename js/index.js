//->REM响应式布局
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);

//->设置滑屏
var step = 0;
var stepFlag = false;
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical',
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    onSlidePrevEnd: function () {
        step--;
        console.log(step);
        if (step < 0) {
            step = 5;
        }
        if(step==6){
            step = 0;
        }
        change();
    },
    onSlideNextEnd: function () {
        step++;
        console.log(step);
        if (step > 7) {
            step = 2;
        }
        if (step == 1 && stepFlag==true) {
            step = 7;
        }
        change();
        stepFlag=true;
    }
});

function change() {
    var divList = document.querySelectorAll(".swiper-slide");
    [].forEach.call(divList, function (curDiv, index) {
        curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
    });
}

//音频的自动播放
~function(){
    var audioBox = document.querySelector('.audio');
    var myAudio = audioBox.getElementsByTagName('audio')[0];
    //延时播放音频文件，先让其它的内容加载
    window.setTimeout(function(){
        myAudio.play();
        myAudio.addEventListener('canplay',function(){
            //->当音频可以播放的时候触发这个事件
            audioBox.style.display = 'block';
            audioBox.className ='audio audioMove';
        },false);
    },1000);
    //->点击音乐图片实现音频的暂停播放
    audioBox.addEventListener('click',function(){
        if(myAudio.paused){
            //->当前是暂停的，我让它播放
            myAudio.play();
            audioBox.className ='audio audioMove';
        }else{
            //->当前是播放的，我让他暂停
            myAudio.pause();
            audioBox.className ='audio';
        }
    },false)
}();















