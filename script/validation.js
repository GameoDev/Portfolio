let initial = null;

document.querySelector("#first_name").addEventListener("click", function (e) {
  if (initial == null) {
    initial = this;
  } else {
    console.log(initial);
    if (initial.value == "") {
      initial.nextElementSibling.style.color = "red";
    } else initial.nextElementSibling.style.color = "rgb(50, 50, 234)";
    initial = this;
  }
});

document.querySelector("#last_name").addEventListener("click", function (e) {
  if (initial == null) {
    initial = this;
  } else {
    if (initial.value == "") {
      initial.nextElementSibling.style.color = "red";
    } else initial.nextElementSibling.style.color = "rgb(50, 50, 234)";
    initial = this;
  }
});

document.querySelector("#email_form").addEventListener("click", function (e) {
  if (initial == null) {
    initial = this;
  } else {
    if (initial != null) {
      if (initial.value == "") {
        initial.nextElementSibling.style.color = "red";
      } else initial.nextElementSibling.style.color = "rgb(50, 50, 234)";
      initial = this;
    }
  }
});

document.querySelector("#subject_form").addEventListener("click", function (e) {
  if (initial == null) {
    initial = this;
  } else {
    console.log(initial.value == "");
    if (initial.value == "") {
      initial.nextElementSibling.style.color = "red";
    } else initial.nextElementSibling.style.color = "rgb(50, 50, 234)";
    initial = this;
  }
});

document.querySelector("#message_form").addEventListener("click", function (e) {
  if (initial == null) {
    initial = this;
  } else {
    if (initial.value == "") {
      initial.nextElementSibling.style.color = "red";
    } else initial.nextElementSibling.style.color = "rgb(50, 50, 234)";
    initial = this;
  }
});

document.querySelector("#submitBtn").addEventListener("click", function (e) {
  let inputInfo = document.querySelectorAll("input");
  inputInfo = Array.from(inputInfo);
  let i = 1;
  for (let field of inputInfo) {
    if (!field.value.match(field.getAttribute("pattern"))) {
      if (field.nextElementSibling != null) {
        field.nextElementSibling.style.color = "red";
        continue;
      }
    } else {
      if (field.nextElementSibling != null) {
        initial.nextElementSibling.style.color = "rgb(50, 50, 234)";
      }
      i += 1;
    }
  }
  if (i < inputInfo.length) {
    e.preventDefault();
  }
});
