// 1. Fighting buttons:

function fight (buttNo) {
    const b0text = document.getElementById('button-0-text');
    const b1text = document.getElementById('button-1-text');
    if (!b0text.innerHTML && !b1text.innerHTML) {
        document.getElementById(`button-${buttNo}-text`).innerHTML = "I'm right!";
    } else if (buttNo) {
        b0text.innerHTML = "";
        b1text.innerHTML = "No, <em>I'm</em> right!";
    } else {
        b1text.innerHTML = "";
        b0text.innerHTML = "No, <em>I'm</em> right!";
    }
}

//2. Hover-averse text:
const hoverText = document.getElementById("no-hover");
hoverText.onmouseover = () => alert("Hey, I told you not to hover over me!");


//3-4. Form submission and validation:
const submitButton = document.getElementById('form-submit');
const password = document.getElementById('form-password');
const confirm = document.getElementById('form-confirm');
const incorrect = () => alert('Password incorrect.');
submitButton.onclick = () => {
    if (password.value !== '12345678') {
        if (confirm.textContent) {
            // in case the user is validating the password again with another (for some reason)
            confirm.textContent = "";
        }
        // timeout so that the text from the h1 disappears before the alert
        setTimeout(incorrect, 100);
    } else {
        confirm.textContent = "Information correct."
    }
}


//5. Sphere Volume:
const radiusSubmit = document.getElementById('submit-radius');
const rad = document.getElementById('sphere-radius');
const result = document.getElementById('sphere-result');
radiusSubmit.addEventListener('click', () => {
    const radius = Number(rad.value);
    if (radius < 0) {
        result.textContent = "Negative volume."
    } else {
        result.textContent = `The volume of a sphere with radius ${radius} ≈ ${Math.floor((4/3)*Math.PI*Math.pow(radius, 3)*1000)/1000}.`;
    }
});
