const one =  document.getElementById('one');
const year = new Date().getFullYear();

one.textContent = `© ${year} Miguel Laguna Lawn Services. All Rights Reserved`;


document.getElementById("name").addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z\s]/g, "");

    if (this.value.length < 3) {
        this.setCustomValidity("The name must be at least 8 characters long.");
    } 
      else if (this.value.length > 30) {
        this.setCustomValidity("The name is too long.");}
    else {
        this.setCustomValidity("");
    }
});


document.getElementById("tel").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");

    if (this.value.length < 10) {
        this.setCustomValidity("The number must have 10 digits.");
    } else {
        this.setCustomValidity("");
    }
});

document.querySelector("form").addEventListener("submit", function () {
    setTimeout(() => {
        this.reset();
    }, 100);
});

// document.getElementById("name").addEventListener("input", function () {
//     this.value = this.value.replace(/[^A-Za-z\s]/g, "");
//     if (this.value.length < 8) {
//         this.setCustomValidity("");
//     } else {
//         this.setCustomValidity("");
//     }
// });


// document.getElementById("tel").addEventListener("input", function () {
//     this.value = this.value.replace(/[^0-9]/g, "");

// });