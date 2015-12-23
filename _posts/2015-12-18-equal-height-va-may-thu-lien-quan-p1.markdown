---
layout: post
comments: true
title:  "Equal height và mấy thứ liên quan p1"
date:   2015-12-18 21:23:00 +0700
categories: tech frontend
---
##Equal height
Từ dạo ở Open Digital (OD) mình hay làm một số element dạng list như kiểu list các món ăn ,rồi list các categories chả hạn. Toàn lóng nga lóng ngóng và nhận được các support từ các thành viên khác khá nửa vời. Và chốt đi chốt lại cũng để xử lý, tống khứ được issues và delivery đúng hạn.

Sang cty mới (zamba-vc) ,mò lại một số dạng list của ông frontend dev cũ và các site e-commmerce kiểu như hotdeal ,amazon, alibaba,.. mình nhận ra nhiều điều.

Khớ khớ. Thế tóm lại "y cùa hây" là cái quái gì ?? :D. Thời kì mới tập tõm làm web mình thường chia 3 cột đại khái dạng ntn: 

<img src="http://4.bp.blogspot.com/-m9FUgcomN5I/VZFIYAY1otI/AAAAAAAAAnE/fZ3wtRps7Q0/s1600/3-column.png" alt="Web 3 cột">

Ô hô ,nhưng lúc dựng lên nó lại cột thấp cột cao, kiểu như main-content dài vãi chưởng, sidebar ngắn dài khác nhau do content giữa 3 cột nó cũng khác. 

rồi thì dạng list ntn 
<img src="http://i289.photobucket.com/albums/ll201/tranthanh_album/assets/equal-height_zpsuyzjkjm2.png~original" alt="MC list">

Đến đây bạn thấy rồi đấy .Công việc của mình là chia các list item thành các cột có chiều cao bằng nhau từ trên xuống dưới sao (chiều cao cố định chung, hoặc theo hàng) .
##Giải quyết vấn đề
Có khá nhiều giải pháp, cơ mà mình thích dùng css với các thuộc tính mà nhiều trình duyệt hỗ trợ ,và đảm bảo được nhiều lỗi  phát sinh

-c1: dùng float. Với cách này ta đặt Width và Height bằng nhau sao cho tổng chiều rộng thật (bao gồm border, margin ,padding,.. dùng box-sizing
: border-box làm cái này) của các item sẽ bằng nhau và kết thành một hàng. Height thì luôn luôn phải bằng nhau . Qua ngưỡng đó mình phải ẩn các content tràn ra bằng thuộc tính overflow: hidden;
vd này chia 4 item/row thì sẽ có width: 25% (100%/4) và float:left ()	, height cho đại khoảng 200px

<p data-height="268" data-theme-id="0" data-slug-hash="VeaQjx" data-default-tab="result" data-user="thanhrossi" class='codepen'>See the Pen <a href='http://codepen.io/thanhrossi/pen/VeaQjx/'>Equal columns - use float</a> by Thanh Tran (<a href='http://codepen.io/thanhrossi'>@thanhrossi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

-c2: Dùng table .Khi dùng table thì mặc định các ô (td) luôn luôn có chiều cao bằng nhau ,ta chỉ cần thêm width  đều nhau là ok . Tuy nhiên table phù hợp cho việc trình bày các dữ liệu dạng bảng , làm email template ,dùng cho việc dàn trang thì hoàn toàn không nên vì nó phức tạp và rối rắm ,không tiện cho việc làm cho các list item responsive

<p data-height="268" data-theme-id="0" data-slug-hash="MKyQQJ" data-default-tab="result" data-user="thanhrossi" class='codepen'>See the Pen <a href='http://codepen.io/thanhrossi/pen/MKyQQJ/'>Equal height -table</a> by Thanh Tran (<a href='http://codepen.io/thanhrossi'>@thanhrossi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

-c3: Dùng flexbox css. Tuy nhiên với các trình duyệt cũ ko hỗ trợ thuộc tính này thì ko dùng đc. Bạn có thể xem tại <a href="http://caniuse.com/#feat=flexbox">đây</a>

<p data-height="268" data-theme-id="0" data-slug-hash="GoZQzV" data-default-tab="result" data-user="thanhrossi" class='codepen'>See the Pen <a href='http://codepen.io/thanhrossi/pen/GoZQzV/'>Equal height - flexbox</a> by Thanh Tran (<a href='http://codepen.io/thanhrossi'>@thanhrossi</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>



