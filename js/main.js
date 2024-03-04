const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
    document.querySelector(".fa").classList.toggle("fa-bars");
    document.querySelector(".fa").classList.toggle("fa-close");
    this.classList.toggle("collapsible--expanded");
})
);