let earlyStart = document.querySelector(".bottomButton");

let errorMsg = document.querySelector(".error_msg");

let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

earlyStart.addEventListener("click", (e) => {
  e.preventDefault();
  errorMsg.classList.toggle(
    "display",
    iemail.value.length == 0 || !mailformat.test(iemail.value)
  );
});
