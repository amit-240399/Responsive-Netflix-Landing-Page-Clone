const answers = document.querySelectorAll(".toggleQuesAns");
const icon = document.querySelectorAll("#icon");

answers.forEach((item, i) => {
  item.addEventListener("click", () => {
    for (var x = 0; x < answers.length; x++) {
      if (x == i) {
        answers[i].classList.toggle("active");
        if (icon[i].className == "fas fa-times") {
          icon[i].className = "fa fa-plus";
        } else {
          icon[i].className = "fas fa-times";
        }
      } else {
        answers[x].classList.remove("active");
        icon[x].className = "fa fa-plus";
      }
    }
  });
});
