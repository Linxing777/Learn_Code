脸{
    眼睛：放大1cm;
    鼻子：长高1cm;
    嘴: 张开;
}
选择器的优先级：
内联样式>包含选择符>id选择器 > class选择器 > 类型选择器
/* h1{
    color: red;
}
h2{
    color: green;
}
h3{
    color: blue;
}
div{
    color: yellow;
    background-color: aliceblue;
} */
/* a:link{
    background-color:darkblue;
    color: white;
    text-decoration-line: none;
}
a:visited{
    background-color:darkblue;
    color: white;
}
a:hover{
    background-color: red;
}
a:active{
    background-color: red;
} 
可以变成下面    
*/
/* a{
    background-color:darkblue;
    color: white;
    text-decoration-line: none;
}
a:hover{
    background-color: red;
}
.home{
    background-color: red;
} */
 文本属性 
.pq{
    0-255 0最小 255最大
    color:rgb(255, 0, 0);
    前两位是红色，中间两位是绿色，最后两位是蓝色
    color:#ff0000;
    font-weight: bolder;
    font-style: italic;
    倾斜：
        italic; 倾斜
        oblique;更加倾斜
        noermal;正常
    font-align: 
        center;
        left;
        right;
        justify;两端对齐
    line-height: 文字行高;
    letter-spacing: 文字间距;eg:我是一个人（中文字之间的间距    ）
    word-spacing: 单词间距(英文之间的间距);
    text-indent: 2em(字体的大小两倍)首行缩进;
    text-decoration:
        underline;下划线
        overline;上划线
        line-through;删除线
        none;
    text-transform:(英文)
        uppercase;大写
        lowercase;小写
        capitalize;首字母大写
    font:italic bold 12px/1em 宋体;
    解释：
        字体样式 字体粗细 字体大小 行高 字体

}
列表属性
{
    ul{
        list-style-type:disc;
            解释：
                disc实心圆
                circle空心圆
                square实心方块
                none无
        list-style-image: url(图片路径); 
        list-style:type image position;
            解释：
                type: 列表样式类型
                image: 列表样式图片
                position: 列表样式位置;
    }
    li{
        border: 1px solid red;
        解释：
            边框宽度 边框样式 边框颜色
        list-style-position: inside;
            解释：
                inside; 列表项在内容中
                outside; 列表项在内容外
    }
    背景属性
    .box{
        background-color:rbg(255, 0, 0,0) ;
        解释：255, 0, 0,0.5;最后一位是透明度
        background-image: url(图片路径);
        background-repeat: no-repeat;
        解释：
            repeat; 重复
            repeat-x; 水平重复
            repeat-y; 垂直重复
            no-repeat; 不重复
        background-position: center;
        解释：
            center; 居中
            left; 左对齐
            right; 右对齐
            top; 上对齐
            bottom; 下对齐
            x y; 自定义位置
        background-attachment: fixed;
        解释：
            fixed; 固定
            scroll; 滚动
        background: color image repeat position attachment;
    }

}