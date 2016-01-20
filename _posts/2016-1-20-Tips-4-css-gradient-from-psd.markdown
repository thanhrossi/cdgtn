---
layout: post
comments: true
title:  "Tips for Css gradient from PSD"
date:   2016-1-20 09:02:59 +0700
categories: tech
---
## Vấn đề convert css gradient từ file PSD
Thi thoảng vẫn hay làm việc với CSS gradient. Với những cái gradient đơn giản, kiểu kiểu top bottom ntn thì tự chọn màu rồi tính toán color stop,.. Quá dễ nhể

<img src="http://i.imgur.com/Pm75Dbg.png" alt="gradient" />

{% highlight css linenos %}
.selector {
	background-image: -webkit-linear-gradient(#83AACC, #C9E2F6);
	background-image: -o-linear-gradient(#83AACC, #C9E2F6);
	background-image: linear-gradient(#83AACC, #C9E2F6);
}
{% endhighlight %}
Mặc định thì nó sẽ chạy linear gradient từ trên xuống dưới với 2 phổ màu. Hoặc nếu bạn chả đếm được chính xác thì thôi, cắt xừ lấy một miếng ảnh sau đó repeat nó :D

Nhưng với các dạng gradient phức tạp hơn thì thôi. Bỏ mợ. Không thế nào mà đếm chính xác hoặc cắt ảnh được. Thôi thì dùng Photoshop để convert cho lành
Yêu cầu: Photoshop CC 2015 +

1.Thoạt tiên chọn layer cần lấy css, nhấp chuột phải chọn Copy CSS
<img src="http://i.imgur.com/f3mixjk.jpg" alt="Copy css" />

Paste nó ra là có ngay đoạn css có gradient mình cần dùng. Quá ngon.!

1.1. Cơ mà thi thoảng nó đếch copy được gradient từ layer đấy. mà nó lại chuyển thành background image : img-url, ôi thôi. Bực mình
Nhưng mà ko sao , bôi cao sẽ khỏi. Chọn layer đó chuột phải, rồi vào Gradient overlay-> Gradient -> Gradient editor. bấm new để lưu lại mẫu gradient đấy.

<img src="http://i.imgur.com/YwLBary.png" alt="Gradient css" />

Tạo layer mới và apply gradient mà mình vừa lưu,và quay lại bước 1.

Quá đơn giản nhỉ. 

Bonus: tương tự với border gradient :D. Đề mô luông !
<p data-height="268" data-theme-id="0" data-slug-hash="qbrvyj" data-default-tab="result" data-user="thanhrossi" class='codepen'>See the Pen <a href='http://codepen.io/thanhrossi/pen/qbrvyj/'>Border gradient css3</a> by Thanh Tran (<a href='http://codepen.io/thanhrossi'>@thanhrossi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

