function initMap() {
  const loc = { lat: 10.5, lng: -66.9166 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 12
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// sticky menu bg
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// smoth scrolling
$('#navbar a, .btn').on('click', function(e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
