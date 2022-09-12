/*
 *轮播图特效
 *胜利工程师
 *日期：5月4日
 */
(function () {
    var carousel_list = document.getElementById('carousel_list');
    var circle_ol = document.getElementById('circle_ol');
    var circle_lis = circle_ol.getElementsByTagName('li')
    var right_btn = document.getElementById('right-btn');
    var left_btn = document.getElementById('left-btn');
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    carousel_list.appendChild(clone_li);


    idx = 0;
    right_btn.onclick = function () {
        carousel_list.style.transition = ' all 0.5s ease 0s';
        idx++;
        if (idx == 5) {
            setTimeout(function () {
                //去掉过渡
                carousel_list.style.transition = 'none';
                //去掉移动
                carousel_list.style.transform = 'none';
                idx = 0;
            }, 500)
        }
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';

        //小圆点
        setCircles();
    };

    left_btn.onclick = function () {
        if (idx == 0) { //去掉过渡
            carousel_list.style.transition = 'none';
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';

            setTimeout(function () {
                idx = 4;
                carousel_list.style.transition = ' all 0.5s ease 0s';
                carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
                setCircles();
            }, 0);
        } else {
            idx--;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        }

        //小圆点

        setCircles();
    }

    function setCircles() {
        for (var i = 0; i <= 5; i++) {
            if (i == 5 && idx == 5) {
                circle_lis[0].className = 'current';
                return;
            }
            if (i == idx) {
                circle_lis[i].className = 'current';
            } else {
                circle_lis[i].className = '';
            }
        }
    }
})();