#CSS3 2D转换和动画属性案例分析

标签（空格分隔）： css3

---


**思路**
本例主要是把边框设置成圆，然后把圆的边框的一部分使用border-color: transparent;把边框透明，主要目的是对比看出动态效果。接着使用transform,@keyframes属性设置旋转的方向角度时间等等。

##CSS3 2D 转换transform
适用浏览器：
Internet Explorer 10、Firefox 以及 Opera 支持 transform 属性。
Chrome 和 Safari 需要前缀 -webkit-。
注释：Internet Explorer 9 需要前缀 -ms-。
**2D转换有五种：**

 **1. 移动translate(x,y)**

> transform:translate(20px,40px)

表示X轴方向移动20px,y轴方向移动40px

**2.旋转rotate()元素顺时针旋转给定的角度**。允许负值，元素将逆时针旋转。
本例主要用了这个方法，通过不同的旋转角度得到动态效果

> 0% {
>             -webkit-transform: rotate(0deg);
>             transform: rotate(0deg);
>         }
> 20% {
>             -webkit-transform: rotate(720deg);
>             transform: rotate(720deg);
>         }

**3.缩放scale(x,y)**
> transform: scale(2,4);

把宽度转换为原始尺寸的2倍，把高度转换为原始高度的 4 倍。
**4.倾斜skew(x,y)**

> transform:skew(10deg, 10deg)

 X轴倾斜10度，Y轴倾斜10度

**5.矩阵.matrix()方法**
 把所有 2D 转换方法组合在一起。matrix()方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。可以实现上面的所有效果，但是计算起来相当麻烦，所以很少用.
 详细可以参考[张鑫旭理解CSS3 transform中的Matrix(矩阵)](http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-矩阵"http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-矩阵")
 

##@keyframes规则（关键帧）
适用浏览器：
目前浏览器都不支持 @keyframes 规则。
Firefox 支持替代的 @-moz-keyframes 规则。
Opera 支持替代的 @-o-keyframes 规则。
Safari 和 Chrome 支持替代的 @-webkit-keyframes 规则。
**语法**

> @keyframes animationname {keyframes-selector {css-styles;}}

@keyframes用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。
0% 是动画的开始，100%是动画的完成。为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。
例1： 

> @keyframes line1 {
>         0% {
>             -webkit-transform: rotate(0deg);
>             transform: rotate(0deg);
>         }
>         20% {
>             -webkit-transform: rotate(720deg);
>             transform: rotate(720deg);
>         }
>         50% {
>             -webkit-transform: rotate(1080deg);
>             transform: rotate(1080deg);
>         }
>         75% {
>             -webkit-transform: rotate(1300deg);
>             transform: rotate(1300deg);
>         }
>         100% {
>             -webkit-transform: rotate(2500deg);
>             transform: rotate(2500deg);
>         }
>     }



当你在@keyframes中创建动画时，请把它捆绑到某个选择器，否则不会产生动画效果。
**通过规定至少以下两项 CSS3 动画属性，即可将动画绑定到选择器：**

 - 规定动画的名称
 - 规定动画的时长

**注释**：您必须定义动画的名称和时长。如果忽略时长，则动画不会允许，因为默认值是 0。

##CSS3的动画属性animation
适用浏览器：
Internet Explorer 10、Firefox 以及 Opera 支持 animation 属性。
Safari 和 Chrome 支持替代的 -webkit-animation 属性。

animation：是一个复合属性，所有动画的简写属性，除了animation-play-state
**语法**
> animation ：animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction
animation-fill-mode

例2：

>    a .line1 {
>         -webkit-animation: line1 14s ease-in-out 1s infinite alternate;
>         animation: line1 15s ease-in-out 1s infinite alternate;
>     }

 1. **animation-name** 规定 @keyframes 动画的名称。
如上两例中的`line1`
 2. **animation-duration**  动画持续时间，默认无穷大
 3. **animation-timing-function** 规定动画的速度曲线。默认是 "ease"。
**语法**
> animation-timing-function：linear |  ease | ease-in | ease-out 
> |ease-in-out | cubic-bezier(n,n,n,n)

 4. **animation-delay** 规定动画何时开始。默认是 0。
 5. **animation-iteration-count** 规定动画被播放的次数。默认是 1。
 语法

> animation-iteration-count: n|infinite;

n	定义动画播放次数的数值。	
infinite	规定动画应该无限次播放。
 6. **animation-direction** 规定动画是否在下一周期逆向地播放。默认是 "normal"。
 **语法**

> animation-direction: normal|alternate;

alternate:动画轮流反向播放
 7. **animation-fill-mode**规定对象动画时间之外的状态。
**语法**
> animation-fill-mode : none | forwards | backwards | both;

none：不改变默认行为。
forwards：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
backwards：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
both：向前和向后填充模式都被应用。
8. **animation-play-state**规定动画是否正在运行或暂停。默认是 "running"。
  **语法**

> animation-play-state: paused|running;

paused	规定动画已暂停。	
running	规定动画正在播放。

最后说下本案例中的
**border-radius**
适用浏览器：IE9+、Firefox 4+、Chrome、Safari 5+ 以及 Opera 支持 border-radius 属性。
本例中多处用到border-radius，其值和宽度高度的值是一样的。

>  width: 60px;
> 
>  height: 60px;
> 
>  border-radius: 60px;

**经总结，当border的宽度为0或很小时，只要border-radius的值大于等于width的一半，都会出现圆的效果，且效果一样**
