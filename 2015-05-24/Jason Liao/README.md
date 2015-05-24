# TopView 大前端的第一次培训

## 编辑器与编辑器的插件

- [Sublime Text](http://www.sublimetext.com/)
- [Brackets](http://brackets.io/)
- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)

## [Sublime Text 3](http://www.sublimetext.com/)

`Ctrl` + ` ` `

复制下面这一串东西, 就可以用`install package`命令了
```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

如果你的是 Sublime Text 2 就是下面这串
```
import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')
```

等到运用完后, 重启一下编辑器, `Ctrl` + `Shift` + `P` 输入`install` 然后 `Enter`

如果你的 Sublime Text 本来就可以`Ctrl` + `Shift` + `P` 打开包管理的话, 就不用做上面这些东西了

## [Emmet](http://emmet.io/)

我们输入`Emmet`, 然后回车, 等一下, 就可以感受他的强大了

## [SublimeLinter](http://www.sublimelinter.com/en/latest/)

这个可以检验我们的 JavaScript 写得是不是规范

我们还可以根据我们自己的使用习惯去改变配置文件

## Other

- ColorPicker (调色盘)
- JsMinifier (JavaScript压缩)
- SideBarEnhancements (浏览器预览)
- Prefixr (CSS添加前缀)

## [HTML/CSS Style Guide](http://google.github.io/styleguide/htmlcssguide.xml)

### Indentation (缩进)
两个空格的缩进，不要把 tabs 和 spaces 混在一起使用

### Use only lowercase (使用小写)
HTML的标签，属性，属性值(部分除外)，CSS选择器，属性，属性值

### Trailing Whitespace (去掉不必要的空格)

### Encoding (编码 UTF-8)
```javascript
<meta charset="utf-8">
```

### Comments (注释)
**Code Tells You How, Comments Tell You Why**

### Multimedia Fallback(多媒体反馈)
像视频，音频，图片这些，一定要加上`alt`属性

### type Attributes(type属性)
不用使用`type="text/css"` 或者 `type="text/javascript"`在使用CSS和JavaScript的时候

### HTML Quotation Marks(HTML中的引号)
HTML里的属性值都要用`"`去引住

### Shorthand Properties (速记属性)
`margin` `padding` `background` `font` 之类的

### 0 and Units(属性值为0时省去单位)

### Declaration Stops(声明结束)
每个属性值之后都要应有分号

### Property Name Stops(属性名结束)
属性名结束后要有一个空格

### Declaration Block Separation
每个选择器与大括号之间有一个空格, 并且在同一行

### Selector and Declaration Separation
当对多个选择器写相同样式时, 应每个选择器新起一行
```css
a:focus, a:active {
	position: relative;
}
```
```css
a:focus,
a:active {
	position: relative;
}
```

### CSS Quotation Marks
用单引号

## [JavaScript Style Guide](http://google.github.io/styleguide/javascriptguide.xml)

### Declarations with var: Always(始终用var去声明变量)

### Semicolons(分号)
你装上了 Sublimelinter 之后, 你就会知道什么时候要加, 什么时候不用加了

### Multiline string literals(多行的字符串)
```javascript
var str = 'A rather long string of English text, an error message ' +
		'actually that just keeps going and going -- an error ' +
    	'message to make the Energizer bunny blush (right through ' +
    	'those Schwarzenegger shades)!';
```
字符串一定要用单引号

### Space(空格)

- 数值操作符两边留空
- 赋值操作符/等价判断符两边留一空格
- 数组值, 函数参数值中逗号后留一空格
- 空行不要有空格
- 行尾不要有空格
- 逗号与冒号后面要留一空格
- 空对象与空数组不需要填入空格
- 函数名末尾和左括号之间留一空格
- 函数右括号与大括号之间留一空格
- if语句else语句后留一空格
