const img = document.getElementById("dw0rsec");
const centerThreshold = 100;
const imgWidth = img.width;
const imgHeight = img.height;

const centerX = imgWidth / 2;
const centerY = imgHeight / 2;

const killer = '%cYOU MURDERER !!!';


let clickCount = 1;

img.addEventListener("mousemove", function(event) {
  if (clickCount < 16) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    if (
      mouseX > centerX - centerThreshold && mouseX < centerX + centerThreshold &&
      mouseY > centerY - centerThreshold && mouseY < centerY + centerThreshold
    ) {
      img.src = "/assets/images/dw0rsec_touched.png";
    } else {
      img.src = "/assets/images/dw0rsec.png";
    }
  }
});

img.addEventListener("mouseout", function() {
  if (clickCount < 16) {
    img.src = "/assets/images/dw0rsec.png";
  }
});

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

img.addEventListener("click", function() {
  if (clickCount === 1) {
    console.log('Yikes !');
  } else if (clickCount === 2) {
    console.log('Whoa !');
  } else if (clickCount === 3) {
    console.log('Agh !');
  } else if (clickCount === 4) {
    console.log('Ugh, that hurt !');
  } else if (clickCount === 5) {
    console.log('Ugh, why ?!');
  } else if (clickCount === 6) {
    console.log('Not again...');
  } else if (clickCount === 7) {
    console.log('Seriously ?!');
  } else if (clickCount === 8) {
    console.log('That\'s going to leave a mark!');
  } else if (clickCount === 9) {
    console.log('I feel that one.');
  } else if (clickCount === 10) {
    console.log('Ow! My feelings!');
  } else if (clickCount === 11) {
    console.log('Oof... this is too much.');
  } else if (clickCount === 12) {
    console.log('Can I just... no?!');
  } else if (clickCount === 13) {
    console.log('I give up...');
  } else if (clickCount === 14) {
    console.log('Really?!');
  } else if (clickCount === 15) {
    console.log('That\'s it, I\'m done!');
  } else if (clickCount === 16) {
    console.log(killer, 'color: red');
    img.src = "/assets/images/tombstone.png";
    setCookie('MURDERER', 'WW91IGFyZSBhIGtpbGxlciEgU2hhbWUgb24geW91Lg==')
  } 

  clickCount++;
});