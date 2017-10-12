window.addEventListener('load',function(){
    let box = document.querySelector('.win');
    let imgBox = document.querySelector('ul.imgBox');
    let imgW = window.innerWidth;
    /* 原来位置（手指按下时） +  手指滑动位置  mx
    *  元素原来位置offsetX         cx
    * 移动的距离=mx-cx
    *
    * */
    let startx ,cx ;
    imgBox.innerHTML += imgBox.innerHTML;
    // len子元素个数
    let len = imgBox.childElementCount;
    imgBox.style.width = `${imgW*len}px`
    imgBox.addEventListener('touchstart',function(e){
        let event = e.changedTouches[0];

        cx = event.pageX;
        this.style.transition = 'none';
        let num = this.offsetLeft / imgW;
        if(num==0){
            num = -4;
        }
        if(num==1-len){
            num = -3;
        }
        imgBox.style.left = `${num*imgW}px`;
        startx = this.offsetLeft;
    })
    imgBox.addEventListener('touchmove',function(e){
        let event = e.changedTouches[0];
        let mx = event.pageX;
        let lefts = startx + (mx-cx);
        imgBox.style.left = `${lefts}px`;
    })
    /*ul向左移的 一个li为一个1 向左移动的位置
    offseLeft(向左移动的距离) / imgW(一个图片的宽度)= 向左移动的距离为几个图片
    * -0.4    -0.7    1.3   1.6   2.1   2.8
    *  -0       -1     1     -2     2     3
    *
    * */
    imgBox.addEventListener('touchend',function(){
        let lefts = this.offsetLeft;
        let num = Math.round(lefts / imgW);
        console.log(num)
        this.style.transition = 'all ease .5s';
        this.style.left = `${num*imgW}px`;

    })


})