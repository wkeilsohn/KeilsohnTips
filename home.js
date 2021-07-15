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
  document.getElementById("copied_box").innerHTML = "Copied!";
} 