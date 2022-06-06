const backgraund_image = [
  "backgraund_image/00000986.jpg",
  "backgraund_image/00000982.jpg",
  "backgraund_image/glf0017-026.jpg",
  "backgraund_image/gray.png"
];

const mannequin_image = [
  "images/male_avatar_f.webp",
  "images/male_avatar_b.webp"
];

const fullscreen_image = [
  "icon/fullscreen_up.svg",
  "icon/fullscreen_down.svg"
]

const error_icon = "this.src='./sample_icon/error_icon.svg'";

var top_number_01 = 0;
var top_number_02 = 0;
var top_number_03 = 0;
var top_number_04 = 0;
var top_number_05 = 0;

var bottom_number_01 = 0;
var bottom_number_02 = 0;
var bottom_number_03 = 0;

var Front_back = 0;

var backgraund_number = 0;

var fullscreen_effect = 0;

function open() {
  mannequin();

  backgraund();

  left_top_1_display();
  left_top_2_display();
  left_top_3_display();
  right_top_1_display();
  right_top_2_display();

  left_top_1_slider();
  left_top_2_slider();
  left_top_3_slider();
  right_top_1_slider();
  right_top_2_slider();

  top_image();

  left_bottom_1_display();
  right_bottom_1_display();
  right_bottom_2_display();

  left_bottom_1_slider();
  right_bottom_1_slider();
  right_bottom_2_slider();

  bottom_image();

  top_select();

  icon_select();

  icon_display(2)
}

function left_top_1_display() {
  var ele1 = document.getElementById("left_top_11");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "left_top_11");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "left_top_12");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  var div_5 = document.createElement('div');
  div_5.setAttribute("onclick", "left_top_back(0)");
  div_5.setAttribute("id", "left_top_11_icon");
  div_5.classList.add("effect-target");
  var img = document.createElement('img');
  img.setAttribute('src', "icon/open.svg");
  img.setAttribute("id", "left_top_12_icon");
  div_5.appendChild(img);
  div_1.appendChild(div_5);

  document.getElementById('left_swiper_box').appendChild(div_1);
  
  for (l = 0; l < top_icon_01.length; l++) {
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    (function (n) {
      img.onclick = function () {
        left_top_1_click(n);
      };
    })(l);
    img.src = top_icon_01[l][1];
    img.id = "top_icon_10_" + l;
    img.className = ("Choices");
    div.appendChild(img);

    document.getElementById('left_top_12').appendChild(div);
  }
}

function left_top_2_display() {
  var ele1 = document.getElementById("left_top_21");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "left_top_21");
  div_1.className = "swiper-container gallery-thumbs effect-target";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "left_top_22");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  var div_5 = document.createElement('div');
  div_5.setAttribute("onclick", "left_top_back(1)");
  div_5.setAttribute("id", "left_top_21_icon");
  var img = document.createElement('img');
  img.setAttribute('src', "icon/back.svg");
  img.setAttribute("id", "left_top_22_icon");
  div_5.appendChild(img);
  div_1.appendChild(div_5);

  document.getElementById('left_swiper_box').appendChild(div_1);

  for (l = 0; l < top_icon_01[top_number_01][0].length; l++) {
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    (function (n) {
      img.onclick = function () {
        left_top_2_click(n);
      };
    })(l);
    img.src = top_icon_01[top_number_01][0][l][1];
    img.id = "top_icon_20_" + l;
    img.className = ("Choices");
    div.appendChild(img);

    document.getElementById('left_top_22').appendChild(div);
  }
}

function left_top_3_display() {
  var ele1 = document.getElementById("left_top_31");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "left_top_31");
  div_1.className = "swiper-container gallery-thumbs effect-target";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "left_top_32");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  var div_5 = document.createElement('div');
  div_5.setAttribute("onclick", "left_top_back(2)");
  div_5.setAttribute("id", "left_top_31_icon");
  
  var img = document.createElement('img');
  img.setAttribute('src', "icon/back.svg");
  img.setAttribute("id", "left_top_32_icon");
  div_5.appendChild(img);
  div_1.appendChild(div_5);

  document.getElementById('left_swiper_box').appendChild(div_1);
  for (l = 0; l < top_icon_01[top_number_01][0][top_number_02][0].length; l++) {
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    (function (n) {
      img.onclick = function () {
        left_top_3_click(n);
      };
    })(l);
    img.src = top_icon_01[top_number_01][0][top_number_02][0][l][1];
    img.id = "top_icon_30_" + l;
    img.className = ("Choices");
    div.appendChild(img);

    document.getElementById('left_top_32').appendChild(div);
  }
}

function right_top_1_display() {
  var ele1 = document.getElementById("right_top_11");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "right_top_11");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "right_top_12");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('right_swiper_box').appendChild(div_1);
  for (l = 0; l < top_icon_01[top_number_01][0][top_number_02][0][top_number_03][0].length; l++) {
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var div_5 = document.createElement('p');
    div_5.classList.add("right_top_13");
    div_5.classList.add("Choices");

    var img = document.createElement('img');
    (function (n) {
      img.onclick = function () {
        right_top_1_click(n);
      };
    })(l);
    img.src = top_icon_01[top_number_01][0][top_number_02][0][top_number_03][0][l][0];
    // img.id = "top_icon_40_" + l;
    // img.className = ("Choices");
    div_5.id = "top_icon_40_" + l;
    div_5.appendChild(img);
    div.appendChild(div_5);

    document.getElementById('right_top_12').appendChild(div);
  }
}

function right_top_2_display() {
  var ele1 = document.getElementById("right_top_21");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "right_top_21");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "right_top_22");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('right_swiper_box').appendChild(div_1);
  for (l = 0; l < top_icon_01[top_number_01][0][top_number_02][0][top_number_03][0][top_number_04].length; l++) {
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    (function (n) {
      img.onclick = function () {
        right_top_2_click(n);
      };
    })(l);
    img.src = top_icon_01[top_number_01][0][top_number_02][0][top_number_03][0][top_number_04][l];
    img.id = "top_icon_50_" + l;
    img.className = ("Choices");
    div.appendChild(img);

    document.getElementById('right_top_22').appendChild(div);
  }
}

function left_top_1_slider() {
  let client_h = document.getElementById('left_top_12').clientHeight;
  var galleryThumbs = new Swiper('#left_top_11', {
    direction: 'vertical',
    slidesPerView: (client_h + 20) / 100,
    preventClicks: true,
    initialSlide: top_number_01,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

function left_top_2_slider() {
  let client_h = document.getElementById('left_top_22').clientHeight;
  var galleryThumbs = new Swiper('#left_top_21', {
    direction: 'vertical',
    slidesPerView: (client_h + 20) / 100,
    preventClicks: true,
    initialSlide: top_number_02,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

function left_top_3_slider() {
  let client_h = document.getElementById('left_top_32').clientHeight;
  var galleryThumbs = new Swiper('#left_top_31', {
    direction: 'vertical',
    slidesPerView: (client_h + 20) / 100,
    preventClicks: true,
    initialSlide: top_number_03,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

function right_top_1_slider() {
  let client_h = document.getElementById('right_top_12').clientHeight;
  var galleryThumbs = new Swiper('#right_top_11', {
    direction: 'vertical',
    slidesPerView: (client_h + 20) / 100,
    preventClicks: true,
    initialSlide: top_number_04,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

function right_top_2_slider() {
  let client_h = document.getElementById('right_top_12').clientHeight;
  var galleryThumbs = new Swiper('#right_top_21', {
    direction: 'vertical',
    slidesPerView: (client_h + 20) / 100,
    preventClicks: true,
    initialSlide: top_number_05,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

function top_image() {
  var ele1 = document.getElementById("main_image_top");
  ele1.removeAttribute("id");
  
  var img = document.createElement('img');
  file_name = Product_image[top_number_03][top_number_04][top_number_05][Front_back];
  img.setAttribute('src', file_name);
  img.setAttribute("id", "main_image_top");
  img.classList.add("feedin");
  img.setAttribute('onerror', error_icon);

  document.getElementById('main_box').appendChild(img);

  img.addEventListener('load', (e)=> {
    ele1.classList.toggle("out");
  });

  ele1.addEventListener('transitionend', () => {
    ele1.remove();
  });
}

function left_bottom_1_display() {
  var ele1 = document.getElementById("left_bottom_11");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "left_bottom_11");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "left_bottom_12");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('left_swiper_box').appendChild(div_1);
  for (l = 0; l < bottom_icon_01.length; l++) {
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    (function (n) {
      img.onclick = function () {
        left_bottom_1_click(n);
      };
    })(l);
    img.src = bottom_icon_01[l][1];
    img.id = "bottom_icon_10_" + l;
    img.className = ("Choices");
    div.appendChild(img);

    document.getElementById('left_bottom_12').appendChild(div);
  }
}

function right_bottom_1_display() {
  var ele1 = document.getElementById("right_bottom_11");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "right_bottom_11");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "right_bottom_12");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('right_swiper_box').appendChild(div_1);
  for (l = 0; l < bottom_icon_01[bottom_number_01][0].length; l++) {
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var div_5 = document.createElement('p');
    div_5.classList.add("right_bottom_13");
    div_5.classList.add("Choices");

    var img = document.createElement('img');
    (function (n) {
      img.onclick = function () {
        right_bottom_1_click(n);
      };
    })(l);
    img.src = bottom_icon_01[bottom_number_01][0][l][0];
    // img.id = "bottom_icon_20_" + l;
    // img.className = ("Choices");
    // div.appendChild(img);
    div_5.id = "bottom_icon_20_" + l;
    div_5.appendChild(img);
    div.appendChild(div_5);

    document.getElementById('right_bottom_12').appendChild(div);
  }
}

function right_bottom_2_display() {
  var ele1 = document.getElementById("right_bottom_21");
  ele1.remove();

  var div_1 = document.createElement('div');
  div_1.setAttribute("id", "right_bottom_21");
  div_1.className = "swiper-container gallery-thumbs";

  var div_2 = document.createElement('div');
  div_2.setAttribute("id", "right_bottom_22");
  div_2.className = "swiper-wrapper";
  div_1.appendChild(div_2);

  var div_3 = document.createElement('div');
  div_3.className = "swiper-button-next";
  div_1.appendChild(div_3);

  var div_4 = document.createElement('div');
  div_4.className = "swiper-button-prev";
  div_1.appendChild(div_4);

  document.getElementById('right_swiper_box').appendChild(div_1);
  for (l = 0; l < bottom_icon_01[bottom_number_01][0][bottom_number_02].length; l++) {
    var div = document.createElement('div');
    div.className = ('swiper-slide');

    var img = document.createElement('img');
    (function (n) {
      img.onclick = function () {
        right_bottom_2_click(n);
      };
    })(l);
    img.src = bottom_icon_01[bottom_number_01][0][bottom_number_02][l];
    img.id = "bottom_icon_30_" + l;
    img.className = ("Choices");
    div.appendChild(img);

    document.getElementById('right_bottom_22').appendChild(div);
  }
}

function left_bottom_1_slider() {
  let client_h = document.getElementById('left_bottom_12').clientHeight;
  var galleryThumbs = new Swiper('#left_bottom_11', {
    direction: 'vertical',
    slidesPerView: (client_h + 20) / 100,
    preventClicks: true,
    initialSlide: bottom_number_01,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

function right_bottom_1_slider() {
  let client_h = document.getElementById('right_bottom_12').clientHeight;
  var galleryThumbs = new Swiper('#right_bottom_11', {
    direction: 'vertical',
    slidesPerView: (client_h + 20) / 100,
    preventClicks: true,
    initialSlide: bottom_number_02,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

function right_bottom_2_slider() {
  let client_h = document.getElementById('right_bottom_22').clientHeight;
  var galleryThumbs = new Swiper('#right_bottom_21', {
    direction: 'vertical',
    slidesPerView: (client_h + 20) / 100,
    preventClicks: true,
    initialSlide: bottom_number_03,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
  });
}

function bottom_image() {
  var ele1 = document.getElementById("main_image_bottom");
  ele1.removeAttribute("id");
  
  var img = document.createElement('img');
  file_name = Product_image_bottom[bottom_number_01][bottom_number_02][bottom_number_03][Front_back];
  img.setAttribute('src', file_name);
  img.setAttribute("id", "main_image_bottom");
  img.classList.add("feedin");
  img.setAttribute('onerror', error_icon);
  
  document.getElementById('main_box').appendChild(img);

  img.addEventListener('load', (e)=> {
    ele1.classList.toggle("out");
  });

  ele1.addEventListener('transitionend', () => {
    ele1.remove();
  });
}

function mannequin() {
  var ele1 = document.getElementById("main_image_mannequin");
  ele1.removeAttribute("id");
  
  var img = document.createElement('img');
  var file_name2 = mannequin_image[Front_back];
  img.setAttribute('src', file_name2);
  img.setAttribute("id", "main_image_mannequin");
  img.classList.add("feedin");
  img.setAttribute('onerror', error_icon);

  document.getElementById('main_box').appendChild(img);

  img.addEventListener('load', (e)=> {
    ele1.classList.toggle("out");
  });

  ele1.addEventListener('transitionend', () => {
    ele1.remove();
  });
}

function backgraund() {

  var file_name = backgraund_image[backgraund_number];
  var img_elements = document.getElementById('backgraund_image');
  img_elements.setAttribute('src', file_name);

  // if (file_name == "") {
  //   img_elements.removeAttribute('src');
  // }
  // else {
  //   img_elements.setAttribute('src', file_name);
  // }
};

function backgraund_change() {

  backgraund_number++;

  if(backgraund_number >= backgraund_image.length){
    backgraund_number = 0;
  }

  var ele1 = document.getElementById("backgraund_button")
  ele1.classList.add("active");

  ele1.addEventListener('transitionend', () => {
    ele1.classList.remove("active");
  });

  backgraund();
};

function order(){
  print();
}

function fullscreen(){
  fullscreen_effect++;
  
  if(fullscreen_effect == 1){
    var svg_name = fullscreen_image[fullscreen_effect];
    var svg = document.getElementById('fullscreen');
    svg.setAttribute('src', svg_name);
  }
  else{
    fullscreen_effect = 0;
    var svg_name = fullscreen_image[fullscreen_effect];
    var svg = document.getElementById('fullscreen');
    svg.setAttribute('src', svg_name);
  }
  
  var ele = document.getElementsByClassName('effect-target');
  for(i=0;i<ele.length;i++){
    ele[i].classList.toggle("is-show");
  }

  
  // var ele1 = document.getElementById("fullscreen")
  // ele1.classList.add("active");

  // ele1.addEventListener('transitionend', () => {
  //   ele1.classList.remove("active");
  // });
}

function rotate() {
  if (Front_back == 0) {
    Front_back = 1;
  }
  else {
    Front_back = 0;
  }

  mannequin();

  top_image();
  bottom_image();

  // var ele1 = document.getElementById("rotate")
  // ele1.classList.add("active");

  // ele1.addEventListener('transitionend', () => {
  //   ele1.classList.remove("active");
  // });
}

function top_select(){
  var elme_d = document.getElementById('right_bottom_11');
  elme_d.style.display = "none";
  var elme_f = document.getElementById('right_bottom_21');
  elme_f.style.display = "none";
  var elme_d = document.getElementById('right_top_11');
  elme_d.style.display = "";
  var elme_f = document.getElementById('right_top_21');
  elme_f.style.display = "";
}

function bottom_select(){
  var elme_d = document.getElementById('right_top_11');
  elme_d.style.display = "none";
  var elme_f = document.getElementById('right_top_21');
  elme_f.style.display = "none";
  var elme_d = document.getElementById('right_bottom_11');
  elme_d.style.display = "";
  var elme_f = document.getElementById('right_bottom_21');
  elme_f.style.display = "";
}

function icon_select() {
  var elme_10 = document.getElementsByClassName("Choices");
  for (var i = 0; i < elme_10.length; i++) {
    elme_10[i].classList.remove("choosing");
  }

  var elme_0 = document.getElementById("top_icon_10_" + top_number_01);
  elme_0.classList.add("choosing");
  var elme_0 = document.getElementById("top_icon_20_" + top_number_02);
  elme_0.classList.add("choosing");
  var elme_0 = document.getElementById("top_icon_30_" + top_number_03);
  elme_0.classList.add("choosing");
  var elme_0 = document.getElementById("top_icon_40_" + top_number_04);
  elme_0.classList.add("choosing");
  var elme_0 = document.getElementById("top_icon_50_" + top_number_05);
  elme_0.classList.add("choosing");

  var elme_3 = document.getElementById("bottom_icon_10_" + bottom_number_01);
  elme_3.classList.add("choosing");
  var elme_3 = document.getElementById("bottom_icon_20_" + bottom_number_02);
  elme_3.classList.add("choosing");
  var elme_3 = document.getElementById("bottom_icon_30_" + bottom_number_03);
  elme_3.classList.add("choosing");
}

function left_top_3_click(x){
  top_number_03 = x;
  
  if (!Product_image[top_number_03]) {
    top_number_03 = 0;
  }
  if (!Product_image[top_number_03][top_number_04]) {
    top_number_04 = 0;
  }
  if (!Product_image[top_number_03][top_number_04][top_number_05]) {
    top_number_05 = 0;
  }

  top_image();
  top_select();

  right_top_1_display();
  right_top_2_display();

  right_top_1_slider();
  right_top_2_slider();
  
  icon_select();
}

function right_top_1_click(x){
  top_number_04 = x;
  
  if (!Product_image[top_number_03][top_number_04]) {
    top_number_04 = 0;
  }
  if (!Product_image[top_number_03][top_number_04][top_number_05]) {
    top_number_05 = 0;
  }

  top_image();
  top_select();

  right_top_2_display();

  right_top_2_slider();
  
  icon_select();
}

function right_top_2_click(x){
  top_number_05 = x;

  if (!Product_image[top_number_03][top_number_04][top_number_05]) {
    top_number_05 = 0;
  }

  top_image();
  top_select();
  
  icon_select();
}

function left_bottom_1_click(x){
  bottom_number_01 = x;
  
  if (!Product_image_bottom[bottom_number_01]) {
    bottom_number_01 = 0;
  }
  if (!Product_image_bottom[bottom_number_01][bottom_number_02]) {
    bottom_number_02 = 0;
  }
  if (!Product_image_bottom[bottom_number_01][bottom_number_02][bottom_number_03]) {
    bottom_number_03 = 0;
  }

  bottom_image();
  bottom_select();

  right_bottom_1_display();
  right_bottom_2_display();

  right_bottom_1_slider();
  right_bottom_2_slider();
  
  icon_select();
}

function right_bottom_1_click(x){
  bottom_number_02 = x;
  
  if (!Product_image_bottom[bottom_number_01][bottom_number_02]) {
    bottom_number_02 = 0;
  }
  if (!Product_image_bottom[bottom_number_01][bottom_number_02][bottom_number_03]) {
    bottom_number_03 = 0;
  }

  bottom_image();
  bottom_select();

  right_bottom_2_display();

  right_bottom_2_slider();
  
  icon_select();
}

function right_bottom_2_click(x){
  bottom_number_03 = x;

  if (!Product_image_bottom[bottom_number_01][bottom_number_02][bottom_number_03]) {
    bottom_number_03 = 0;
  }

  bottom_image();
  bottom_select();
  
  icon_select();
}

function left_top_back(x){
  if(x == 2){
    var ele = document.getElementById("left_top_31");
      ele.classList.toggle("is-show");
  }
  icon_display(2);
  if(x == 1){
    var ele = document.getElementById("left_top_21");
    ele.classList.toggle("is-show");
    
    var ele = document.getElementById("left_top_31");
    var result = ele.classList.contains("is-show");
    if(!result){
      ele.classList.toggle("is-show");
    }
    icon_display(1);
  }
  if(x == 0){
    var ele = document.getElementById("left_top_21");
    var result = ele.classList.contains("is-show");
    if(result){
      ele.classList.toggle("is-show");
    }
    var ele = document.getElementById("left_top_31");
    var result = ele.classList.contains("is-show");
    if(result){
      ele.classList.toggle("is-show");
    }
    icon_display(0);
  }
}

function icon_display(x){
  if(x==0){
    var ele = document.getElementById("left_top_11_icon");
    var result = ele.classList.contains("is-show");
    if(!result){
      ele.classList.toggle("is-show");
    }
    var ele = document.getElementById("left_top_21_icon");
    var result = ele.classList.contains("is-show");
    if(result){
      ele.classList.toggle("is-show");
    }
    var ele = document.getElementById("left_top_31_icon");
    var result = ele.classList.contains("is-show");
    if(result){
      ele.classList.toggle("is-show");
    }
  }
  if(x==2){
    var ele = document.getElementById("left_top_11_icon");
    var result = ele.classList.contains("is-show");
    if(!result){
      ele.classList.toggle("is-show");
    }
    var ele = document.getElementById("left_top_21_icon");
    var result = ele.classList.contains("is-show");
    if(result){
      ele.classList.toggle("is-show");
    }
    var ele = document.getElementById("left_top_31_icon");
    var result = ele.classList.contains("is-show");
    if(!result){
      ele.classList.toggle("is-show");
    }
  }
  if(x==1){
    var ele = document.getElementById("left_top_11_icon");
    var result = ele.classList.contains("is-show");
    if(result){
      ele.classList.toggle("is-show");
    }
    var ele = document.getElementById("left_top_21_icon");
    var result = ele.classList.contains("is-show");
    if(!result){
      ele.classList.toggle("is-show");
    }
    var ele = document.getElementById("left_top_31_icon");
    var result = ele.classList.contains("is-show");
    if(!result){
      ele.classList.toggle("is-show");
    }
  }
}

function left_top_1_click(){
  top_select();
  left_top_back(1)
}

function left_top_2_click(){
  top_select();
  left_top_back(2);
}
