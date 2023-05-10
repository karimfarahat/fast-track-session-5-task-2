for (let index = 0; index < 6; index++) {
  var x = document.createElement("div");
  x.className = "col-md-4 pb-4";
  var z = document.createElement("div");
  z.className = "bot-card";
  x.prepend(z);
  var u = document.createElement("div");
  u.className = "icon mb-3";
  z.prepend(u);
  var i = document.createElement("img");
  i.src = "/assets/imgs/" + index + ".png";
  u.prepend(i);
  var g = document.createElement("div");
  g.className = "title pb-4";
  g.innerText = "الاكثر تنويعا";
  z.append(g);
  var f = document.createElement("div");
  f.className = "subtitle pb-3";
  f.innerText =
    "من خلال هذه الخدمة تتيح شركة دراية المالية للعميل الاستثمار في مجموعة واسعة من الصناديق الاستثمارية (ما يقارب (60) ستين صندوق استثماري)، تدار هذه الصناديق من قبل عشرة مدراء مختلفين";
  z.append(f);

  var y = document.getElementsByClassName("js-parent");
  y[0].append(x);
}
