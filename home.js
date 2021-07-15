function copyCode(wallet_value) {
  // Define Variabe
  var copyText = document.getElementById(wallet_value);
  // Create Area for text to go
  var input = document.createElement("textArea");
  // Add variable text to text area
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 99999); 
  // Return to user
  document.execCommand("copy");
  // Removes the text area and alert the user
  input.remove();
  document.getElementById("copied_box").innerHTML = "<div style='background-color: rgba(0, 255, 30, 0.4); width:15%; margin-left: auto; margin-right: auto; border-radius: 25px;'>Copied!</div>";
} 