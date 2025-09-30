const img = document.getElementById("dw0rsec");
const centerThreshold = 100;
const imgWidth = img.width;
const imgHeight = img.height;
const centerX = imgWidth / 2;
const centerY = imgHeight / 2;
const blocked = "%cYOU ARE BLOCKED FOR CLICKING MY FACE !!!";
const warning = "%cLast warning...";

let clickCount = 1;

img.addEventListener("mousemove", function(event) {
  if (clickCount < 7) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    if (
      mouseX > centerX - centerThreshold && mouseX < centerX + centerThreshold &&
      mouseY > centerY - centerThreshold && mouseY < centerY + centerThreshold
    ) {
      img.src = "/assets/images/dw0rsec_touched.png";
    } else {
      if (clickCount > 2) {
        img.src = "/assets/images/dw0rsec_angry.png";
      } else {
        img.src = "/assets/images/dw0rsec.png";
      }      
    }
  }
});

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/; SameSite=None; Secure`;
}

function base64UrlEncode(str) {
  return btoa(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function createJWT(payload, secretKey) {
  const header = {
    alg: "HS256",
    typ: "JWT"
  };

  const payloadJson = JSON.stringify(payload);
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(payloadJson);
  const data = `${encodedHeader}.${encodedPayload}`;

  return crypto.subtle.digest("SHA-256", new TextEncoder().encode(data)).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
      const signature = base64UrlEncode(hashHex);

      return `${encodedHeader}.${encodedPayload}.${signature}`;
    });
}

const payload = {
  userId: 1,
  username: "visitor",
  role: "guest"
};

function generateRandomString(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
}

// should be on the backend
const randomString = generateRandomString(32);
const secretKey = randomString;
const tokenFc = "1befc8108b3b9da077d317e79d0c241e";

createJWT(payload, secretKey).then(jwt => {
  setCookie("token", jwt);
});

img.addEventListener("click", function(event) {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  if (
    mouseX > centerX - centerThreshold && mouseX < centerX + centerThreshold &&
    mouseY > centerY - centerThreshold && mouseY < centerY + centerThreshold
  ) {
    if (clickCount === 1) {
      console.log("Yikes !");
    } else if (clickCount === 2) {
      console.log("Whoa !");
    } else if (clickCount === 3) {
      console.log("Agh !");
    } else if (clickCount === 4) {
      console.log("Ugh, that hurt !");
      alert("dw0rsec: You should really stop clicking my face! 😠");
    } else if (clickCount === 5) {
      console.log(warning, "color: yellow");
    } else if (clickCount === 6) {
      console.log(blocked, "color: red");
      img.src = "/assets/images/blocked.png";
      localStorage.setItem("tokenFc", tokenFc);
      setCookie("FaceClicker", "i said stop");
    } 

    clickCount++;
  }
}); 
