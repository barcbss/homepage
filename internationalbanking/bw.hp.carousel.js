jQuery(document).ready(function() {
  var on = 'Images/carousel_btn_on.png', off = 'Images/carousel_btn_off.png';
  var slides = $('#main-carousel li'), controls, interval,
    s, i, visible = -1, length = slides.length, 
    delay = 3000, duration = 1000, doslides=true;
  
  function showSlide(i) {
    var j, slide, control, images = $('#main-carousel .controls img');
    for (j = 0; slide = slides[j]; j++) {
      $(slides[j])['fade' + (i == j ? 'In' : 'Out')](duration);
      $(images[j]).attr('src', (i == j ? on : off));
    }
    visible = i;
  }
  
  function showNextSlide() {
    if (doslides) {
        showSlide((visible >= length - 1 || visible < 0) ? 0 : visible + 1);
    }
  }
  
  function play() { 
    pause();
    interval = setInterval(showNextSlide, delay + duration);
  }
  function pause() {
    interval && clearInterval(interval);
  }
  
  function buildControls() {
    for (i = 0, s = []; length > i; i++) {
      s[i] = '<li data-slide="' + i + '">' +
        '<img src="' + off + '" alt="' + (i + 1) + '" width="18" height="17" /></li>';
    }
    $('#main-carousel .controls').html('<ul>' + s.join("") + '</ul>');
    
    if (window['DD_belatedPNG']) {
      DD_belatedPNG.fix('#main-carousel .controls img');
    }
  
    controls = $('#main-carousel .controls li');
    controls.mouseover(function(ev) {
      interval && clearInterval(interval);
    }).click(function(ev) {
      doslides = false;
      ev.preventDefault();
      interval && clearInterval(interval);
      showSlide($(ev.target.parentNode).data('slide'));
    }).mouseout(function(ev) {
      interval = setInterval(showNextSlide, delay + duration);
    });
  }
  buildControls();
  showSlide(0);
  play();
});