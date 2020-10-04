const $submitButton = document.getElementById("start");
const $message = document.getElementById("generate");
const $copyButton = document.getElementById("copy");

$submitButton.onclick = () => {
  var u = document.frm.url.value;
  var s = document.frm.src.value;
  var m = document.frm.med.value;
  var c = document.frm.camp.value;
  if (u && s && m && c) {
    var message = "";
    message += u;
    message += "?utm_source=";
    message += s;
    message += "&utm_medium=";
    message += m;
    message += "&utm_campaign="
    message += c;
    $message.style.display = "inherit";
    $message.innerHTML = message;
    $copyButton.style.display = "inline";
  }
};

$copyButton.onclick = () => {
  var copyText = document.getElementById("generate");
  if (copyText.value) {
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  else {
    alert("Field is empty");
  }
};