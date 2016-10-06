/**
 * Created by Tean on 2016/10/6.
 */

// 当前显示的下表
var cur = 0;
var allLi = $('indexBanner').getElementsByTagName('li');
// 克隆前三个子元素
for(var i = 0; i < 3; i++) {
    $('indexBanner').appendChild(allLi[i].cloneNode(true));
}
// 获取li的个数
var len = allLi.length;

$('btnRight').onclick = function () {
    cur++;
    if(cur == len-2) {
        cur = 1;
        $('indexBanner').style.left = 0;
    }
    animate($('indexBanner'), {left:-407 * cur});

};