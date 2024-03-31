document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
    var description = document.getElementById("description").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "execute.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Success: Folder and file created
                alert("Folder and file created successfully on desktop!");
            } else {
                // Error: Failed to create folder or file
                alert("Error: Failed to create folder or file.");
            }
        }
    };
    xhr.send("option1=" + encodeURIComponent(option1) + "&option2=" + encodeURIComponent(option2) + "&description=" + encodeURIComponent(description));
});
