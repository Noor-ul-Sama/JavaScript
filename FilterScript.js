

function filterObject(c) {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.classList.remove("show");
        if (c === "all" || box.classList.contains(c)) {
            box.classList.add("show");
        }
    });
}
