function gettingVal() {
    var gender = document.getElementById("genders").value;
    var age = document.getElementById("ages").value;

    if (gender == "female" && age == "teen"){
        document.getElementById('first_image').src = 'universial.jpeg';
        document.getElementById('second_image').src = 'sm.jpeg';
        document.getElementById('last_image').src = 'diseny.jpeg';
        document.getElementById('first_text').innerHTML = '"Universial Studio, Los Angeles, USA"';
        document.getElementById('second_text').innerHTML = '"SM Entertainment, Seoul, Korea"';
        document.getElementById('last_text').innerHTML = '"Diseney Land, Los Angeles, USA"';
    }
    else if (gender == "female" && age == "twenty"){
        document.getElementById('first_image').src = 'greece.jpeg';
        document.getElementById('second_image').src = 'machu.jpg';
        document.getElementById('last_image').src = 'lu.jpg';
        document.getElementById('first_text').innerHTML = '"Santorini, Greece"';
        document.getElementById('second_text').innerHTML = '"Machu picchu, Peru"';
        document.getElementById('last_text').innerHTML = '"Le musee du louvre, Paris, France"';
    }
    else if (gender == "female" && age == "thirty"){
        document.getElementById('first_image').src = 'tokyo.jpeg';
        document.getElementById('second_image').src = 'catle.jpg';
        document.getElementById('last_image').src = 'bangkok.jpg';
        document.getElementById('first_text').innerHTML = '"Tokyo Tower, Tokyo, Japan"';
        document.getElementById('second_text').innerHTML = '"Great Wall, Bejing, China"';
        document.getElementById('last_text').innerHTML = '"Wat Pho, Bangkok, Thailand"';
    }
    else if (gender == "female" && age == "fourtyabove"){
        document.getElementById('first_image').src = 'bali.jpg';
        document.getElementById('second_image').src = 'guam.jpg';
        document.getElementById('last_image').src = 'hawaii.jpg';
        document.getElementById('first_text').innerHTML = '"Bali, Indonesia"';
        document.getElementById('second_text').innerHTML = '"Guam, USA"';
        document.getElementById('last_text').innerHTML = '"Hawaii, USA"';
    }
    else if (gender == "male" && age == "teen"){
        document.getElementById('first_image').src = 'grand.jpg';
        document.getElementById('second_image').src = 'land.jpg';
        document.getElementById('last_image').src = 'swit.jpg';
        document.getElementById('first_text').innerHTML = '"Grand Canyon, Arizona, USA"';
        document.getElementById('second_text').innerHTML = '"Diseney Land, Los Angeles, USA"';
        document.getElementById('last_text').innerHTML = '"Alps, Switzerland"';
    }
    else if (gender == "male" && age == "twenty"){
        document.getElementById('first_image').src = 'england.jpg';
        document.getElementById('second_image').src = 'rome.jpg';
        document.getElementById('last_image').src = 'florida.jpg';
        document.getElementById('first_text').innerHTML = '"Big Ban, London, United Kingdom"';
        document.getElementById('second_text').innerHTML = '"Colosseum, Roma, Italy"';
        document.getElementById('last_text').innerHTML = '"Miami beach, Miami, USA"';
    }
    else if (gender == "male" && age == "thirty"){
        document.getElementById('first_image').src = 'austraila.jpg';
        document.getElementById('second_image').src = 'japan.jpg';
        document.getElementById('last_image').src = 'spain.jpg';
        document.getElementById('first_text').innerHTML = '"Opera House, Sydney, Austrailia"';
        document.getElementById('second_text').innerHTML = '"Tokyo Towel, Tokyo, Japan"';
        document.getElementById('last_text').innerHTML = '"Barcelona, Spain"';
    }
    else if (gender == "male" && age == "fourtyabove"){
        document.getElementById('first_image').src = 'bangkok.jpg';
        document.getElementById('second_image').src = 'mexico.jpg';
        document.getElementById('last_image').src = 'canada.jpg';
        document.getElementById('first_text').innerHTML = '"Wat Pho, Bangkok, Thailand"';
        document.getElementById('second_text').innerHTML = '"Mexico city, Mexico"';
        document.getElementById('last_text').innerHTML = '"Vancouver, Canada"';
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}