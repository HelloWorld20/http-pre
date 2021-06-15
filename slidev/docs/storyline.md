
<!-- page 1 -->

最近看了http权威指南，有收获，借此机会与大家分享一下收获与总结

<!-- page 2 -->

看完本篇可以了解到以下内容

* http缓存
* RESTful API
* http2、http3
* 兔展在什么地方用到了什么优化？
* 如何详细的分析关于网络造成的问题

<!-- page3 -->

此次将会以时间线的形式去讲

0.9->1.0->1.0+->1.1->2.0->3.0

<!-- page4 -->

一句话带过 0.9的内容

<!-- page5 -->

为了满足互联网的丰富的内容，添加了以下内容

* 请求头
* 状态码
* 添加请求方法
....


<!-- page6 --> 

RESTful api规范

<!-- page6 -->

常见的请求头的作用

* Set Cookie、 Cookie
* pragma
* content-type
* content-length

<!-- page7 -->

（可能需要n个篇幅讲一下几个请求头）
* content-type 弄个下载demo？同样的资源，不同的content-type，一个预览，一个下载

<!-- page8 -->

经过开发者对请求头的扩展，诞生了1.0+，诞生了几个重要的方法

* Connection: keep-alive
* Last-Modified & If-Modified-Since & If-Unmodified-Since

<!-- page9 -->

（可能需要几个篇幅讲解一下几个请求头）
* Connection: keep-alive的现场演示


<!-- page10 -->

新一版本http规范落地，把1.0+的规范纳入，并且又加入了一些新特性

* cache-control 1.0+的还是1.1的？
* Etag & If-None-Match & If-Match
* 管道？
...

<!-- page11 -->

用一个demo，解释一下Etag、cache-control等缓存操作

<!-- page12 -->

兔展一些使用场景

* h5作品使用静态文件缓存数据
* 有没有什么库可以实现？

<!-- page13 -->

很快，但是还是不够快。还存在的问题，提出http2，http2解决了以下问题

* 二进制协议
* 多工
* 数据流
* 头信息压缩
* 服务器推送

<!-- page14 -->

跑一下http2 测试网站，解释一下，多工与数据流。

<!-- page15 -->

解释一些服务器推送

<!-- page16 -->

当前的使用场景、如何开启http2

<!-- page17 -->

未来的畅想 http3，以及当前的进度
