document.getElementById('passwordInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword(); 
    }
});

function checkPassword() {
    var input = document.getElementById('passwordInput').value;
    if (input === "password" || input === "PASSWORD") {
        document.getElementById('hiddenContent').style.display = 'block';
        document.getElementById('passwordPrompt').style.display = 'none';
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// Gordon, before you take the train to work, change the darn security measure and cipher it!!
// Do not just leave the password as A PASSWORD TO THE LIFE INC CACHED PAGE, or you-know-who will come again!!