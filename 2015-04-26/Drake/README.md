# 从源码上分析bootstrap的grid system

## 概述
bootstrap的grid system由3部分组成:

- container
- row
- columns

container有2种。`container`: 固定宽度且水平居中; `container-fluid`: 满屏。
row占满整个container, 一行可以包括12个column。
column有4种类型：`lg`, `md`, `sm`, `xs`，分别对应着4种设备屏幕大小。

[learn more](http://getbootstrap.com/css/#grid)
## 准备
首先，我们先用bower来安装bootstrap-sass, 我们从bootstrap的sass源码来分析。
```
bower install bootstrap-sass --save
```
grid system主要涉及3个文件。`_grid.scss`, `mixin/_grid.scss`, `mixin/_gridframework.scss`。

## 分析
### container
```css
.container {
  @include container-fixed;

  @media (min-width: $screen-sm-min) {
    width: $container-sm;
  }
  // more
}
```
`@include`引入了一个mixin:`container-fixed`, 他设置了`margin-left`和`margin-right`都为`auto`。
然后通过media query来设定不同的`width`。
这样的话，就可以使得`.container`水平居中了。

`$screen-sm-min`4种设备屏幕大小的breakpoint之一（可以在`_variables.scss`)找到。
```
$screen-xs: 480px !default; // 手机
$screen-sm: 768px !default; // 平板
$screen-md: 992 !default;  // 桌面计算机
$screen-lg: 1200 !default;
```

### row
```css
.row {
  @include make-row;
}

@mixin make-row($gutter: $grid-gutter-width) {
  margin-left:  ($gutter / -2);
}

```
`make-row`设置了`margin-left/right`为**负值**，这样就可以把row的width变大。

### Columns
#### 创建column的公共样式
```
@include make-grid-columns;
```

```
@mixin make-grid-columns($i: 1, $list: ".col-xs-#{$i}, .col-sm-#{$i}, .col-md-#{$i}, .col-lg-#{$i}") {
  @for $i from (1 + 1) through $grid-columns {
    $list: "#{$list}, .col-xs-#{$i}, .col-sm-#{$i}, .col-md-#{$i}, .col-lg-#{$i}";
  }
  #{$list} {
    position: relative;
    padding-left:  ($grid-gutter-width / 2);
    padding-right: ($grid-gutter-width / 2);
  }
}

//上面的scss会编译成下面的css:
.col-[xs,sm,md,lg]-[1-9] {
    position: realative;
    padding-left: 15px;
}
```
`#{$i}`的作用是把`$i`字符串转换成变量。[doc](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_)

在for循环中，为什么不从1开始呢？  
因为`$list`每次循环后都要加上原来的`$list`（也就是`+=`），并且`$list`的初始值不能为空，所以他的初始值就是1(`col-sm-1`)。

> `position: relative`在这里的作用是什么呢？

在下面，我们会讲到每个column都有一个width, 他的值是percentage的。根据[doc](https://developer.mozilla.org/en-US/docs/Web/CSS/width), 百分比是相对于该元素的[containning block](http://segmentfault.com/q/1010000000668024/a-1020000000669136).

但我觉得他的作用是为了他的children(`position: absolute`)可以更好的定位。

#### 创建column的float的属性
```css
// 创建xs columns
@include make-grid(xs);

// 给column设置float属性
@mixin make-grid($class) {
  @include float-grid-columns($class);
}

// 这个跟上面的make-grid-columns差不多
@mixin float-grid-columns($class, $i: 1, $list: ".col-#{$class}-#{$i}") {
  @for $i from (1 + 1) through $grid-columns {
    $list: "#{$list}, .col-#{$class}-#{$i}";
  }
  #{$list} {
    float: left;
  }
}
```
>这里我有个疑问：既然`float-grid-columns`的作用是让每种column都浮动。那么他为什么不写在`make-grid-columns`里面呢？那里不是都写column的公共样式吗？

#### 创建column的width
```
@mixin make-grid($class) {
  // 传了个width参数
  @include loop-grid-columns($grid-columns, $class, width);
}

// 起到一个循环的作用
@mixin loop-grid-columns($columns, $class, $type) {
  @for $i from 0 through $columns {
    @include calc-grid-column($i, $class, $type);
  }
}

@mixin calc-grid-column($index, $class, $type) {
  @if ($type == width) and ($index > 0) {
    .col-#{$class}-#{$index} {
      width: percentage(($index / $grid-columns));
    }
  }
```

当我没设置`box-sizing: border-box`的时候，12个column不会刚好占满的一行。
因为有`padding`, `margin`的存在。

但如果设置之后，`margin`就属于`width`了。这样就刚刚好。

**这个也是bootstrap grid system能够平均分成12列的原因。**

#### 创建column的push
他会设置column的左边和他的containning block的距离
```scss
// 如果index不为0，如2。所以left: 2 / 12.
@if ($type == push) and ($index > 0) {
  .col-#{$class}-push-#{$index} {
    left: percentage(($index / $grid-columns));
  }
}
@if ($type == push) and ($index == 0) {
    .col-#{$class}-push-0 {
      left: auto;
    }
}
```

#### 创建column的offset
这个也会使得column偏移。**那他和上面的push有什么不同呢？**
```scss
@if ($type == offset) {
  .col-#{$class}-offset-#{$index} {
    margin-left: percentage(($index / $grid-columns));
  }
}
```
因为offset设置的是`margin-left`，所以他是占据空间的。
```html
// #column2在这里会挤压到另一行
<div class="col-lg-2 col-lg-offset-10" id="column1"></div>
<div class="col-lg-4" id="column2"></div>
```
```html
// #column2不会被挤压到另一行
<div class="col-lg-2 col-lg-push-10" id="column1"></div>
<div class="col-lg-4" id="column2"></div>
```
## 总结
- 利用`box-sizing: border-box`来平均分成12列，
- 利用`sass`来迅速开发
- 利用media query来做响应式
