---
layout: post
comments: true
title:  "Nhái promote slider của Hotdeal.vn"
date:   2015-12-23 16:24:00 +0700
categories: tech frontend
---
##Vấn đề
Có dạo nọ ông lead muốn t làm một cái slider giống của Hotdeal.vn. Nhìn kiểu ntn :
<img src="http://i289.photobucket.com/albums/ll201/tranthanh_album/assets/promote%20slider_zps0pq2mtf3.png~original" alt="Slider hotdeal.vn" />
Hoặc bạn có thể xem tại <a href="http://www.hotdeal.vn/ho-chi-minh/" target="_blank">trang chủ</a> của bỏn :D

Đại khái nó là 1 dạng slider có các layer con bên trong ,có thể thiết đặt thời gian ,với cả delay, vị trí xuất hiện, hiệu ứng chuyển layer nhìn mượt mượt. Quan trọng nó đơn giản và nhẹ, hơn cả là phải free :v (Cho nên loại bỏ Layer slider, Revolution slider,..)

##Giải quyết

Gúc một nhát tìm đc ngay một slider gọi là <a href="http://devrama.com/static/devrama-slider/" target="_blank">Devrama Slider</a> 
<img src="http://i289.photobucket.com/albums/ll201/tranthanh_album/assets/drslider_zpshuygqodx.png~original" alt="DR slider" />
Nhìn chuôi chuối và ko bắt mắt lắm, nhưng chắc style lại được. Với cả đống feature khác phong phú. 

Setup khá đơn giản. Chỉ cần link thư viện jquery, devrama.slider.js và gọi ra. Như này :
{% highlight html linenos %}
<html>
    <head>
        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="jquery.devrama.slider.js"></script>
    </head>
    <body> 
    <div id="my-slide">
        <img data-lazy-src="http://devrama.com/static/devrama-slider/images/265740754_141774705b_b.png" />
        <img data-lazy-src="http://devrama.com/static/devrama-slider/images/4247776023_81a3f048ca_b.png" />
        <img data-lazy-src="http://devrama.com/static/devrama-slider/images/4277941123_044d26b6df_b.png" />
        <img data-lazy-src="http://devrama.com/static/devrama-slider/images/4432435310_d5010f8efc_b.png" />
        <img data-lazy-src="http://devrama.com/static/devrama-slider/images/6240134386_db0f314ef6_b.png" />
    </div>
    <script type="text/javascript">
        $(document).ready(function(){
            $('#my-slide').DrSlider();
        });
    </script>   
</body>
</html> 
{% endhighlight %}

Nhái slider của hotdeal thì ban đầu view code mấy cái link ảnh của bỏn. và chia nó thành 5 slider. Sau đấy custom vị trí và delay của từng layer. Chi tiết là như thế này đây

<p data-height="500" data-theme-id="0" data-slug-hash="YymWOo" data-default-tab="result" data-user="thanhrossi" class='codepen'>See the Pen <a href='http://codepen.io/thanhrossi/pen/YymWOo/'>devrama Slider</a> by Thanh Tran (<a href='http://codepen.io/thanhrossi'>@thanhrossi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

##Kết luận
Slider dạng mà hotdeal dùng khá là phổ thông, cơ mà nếu đã có jquery plugin rồi thì cứ dùng và custom nó thôi. Đỡ nhọc, đỡ tốn xèng phải mua lic của bọn prenium slider kiểu Revolution, Layer slider,..

Hôm nay 23 rồi . Noel cũng chán vãi lái, hihi. Có bài nhạc của ô Bắc clunky
<div class="videoWrapper">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/IfjXCJGDOa0" frameborder="0" allowfullscreen></iframe>
</div>