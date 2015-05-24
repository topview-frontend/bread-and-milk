假设我们遇到下面这个问题，我们应该要怎么解决呢？

> 当我从浏览器地址栏输入google.com之后，会发生什么事情？

**假设我们之前并没有遇到过这个问题，或者这种问题**。那么，我们就可以把这个问题抽象出来，
于是，问题就变成了这样:
> 你是如何学习新事物的？

如果是**我个人**的话，我首先会查找该新事物的学习资源。  
但是，在如今信息泛滥的时代，我们要**如何筛选出有用的信息**呢？

这个时候就要找我们的好朋友google。他的算法已经帮助我们如何筛选对我们最又价值的东西了。
我们只需要学会使用keyword去搜索就可以了。

于是，对于上面的问题。我们可以google,
> what happens when you type in a URL in browser

然后，我们就可以得到这些[信息](https://www.google.com/#newwindow=1&q=what%20happens%20when%20you%20type%20in%20a%20URL%20in%20browser)

看了这个[回答](http://stackoverflow.com/questions/2092527/what-happens-when-you-type-in-a-url-in-browser)，我们就可以大致得知道问题解决的整体流程

1. check cache
2. ask server's IP address
3. DNS lookup
4. TCP connection
5. client HTTP request
6. server HTTP response
7. clien check response, 2xx, 3xx, etc
8. if cacheable, cache it.
9. client decode response
10. client render response

然后细分的话，我们可以从这篇[文章](https://github.com/alex/what-happens-when)了解到。
利用一些工具，把知识点呈现出来。
https://www.processon.com/diagraming/55617a34e4b03f15cf1c2647

（我忽略了一些知识点)

- Parse URL
    首先，当你按下`Enter`键的时候，浏览器先会检查你输入的是一个URL,还是一个keyword。  
    然后，检查这个URL的hostname有没有在HSTS, 如果有就使用`HTTPS`, 否则`HTTP`。  
    接下来，转换非ASCLL的Unicode字符。比如空格会被转成`%20`。

- DNS lookup
    首先，查询domain是不是在cache中。  
    如果不在，就去本地的`hosts`文件找。  
    再找不到的话，就去外面的最近DNS服务器找。直到找到，然后返回IP地址。

- TCP　connection  
    忽略..

- HTTP  
    待更新

- 页面渲染  
    大致就４个过程。

    1. 解析HTML, 根据标签(tag)来形成一棵*DOM Tree*。
    2. 解析CSS, 把规则(rule) attach到DOM Tree。这个时候，DOM Tree上的Node就会具有一些大小，颜色等等属性, 此时叫render tree。
    3. 根据CSS, 利用`position`, `float`等定位render tree.
    4. 操作系统调用UI接口来print这个layouted render tree.

    resources:

    - [浏览器渲染原理](http://coolshell.cn/articles/9666.html)
    - [前端必读：浏览器内部工作原理](http://kb.cnblogs.com/page/129756/)
    - firefox 3D view
