document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.querySelector('#name').value;
    if (name === "") {
        alert("Please enter your name.");
        event.preventDefault();
    }
});
