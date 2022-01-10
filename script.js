// 1. Fighting buttons:
let lastClicked = -1;
function fight (button) {
    // a little convoluted, but the button number (passed from the HTML) serves as a boolean
    // for the text changing mechanism:
    if (lastClicked === -1) {
        // if the argument didn't start yet (neither buttons have text next to them),
        // start the argument with whichever button was clicked
        document.getElementById(`button-${button}-text`).innerHTML = "I'm right!";
        lastClicked = button;
    } else {
        // once the argument started (otherwise the other branch would be chosen),
        // if the currently 'right' button was clicked again - its message changes to "I'm still right"
        // otherwise, the new button becomes the 'right' one.
        button === lastClicked ? stillRight(button) : retort(lastClicked);
        lastClicked = button;
    }
}

function stillRight (button) {
    // replaces the current 'right' button's message with one that is more appropriate
    document.getElementById(`button-${button}-text`).innerHTML = "I'm still right!";
}

function retort (button) {
    // swaps the two buttons' messages using a truthy-falsey trick
    document.getElementById(`button-${button}-text`).innerHTML = ""
    document.getElementById(`button-${Number(!button)}-text`).innerHTML = "No, <em>I'm</em> right!"
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
