
document.querySelector('.accordion').addEventListener('click', function () {
    this.classList.toggle('active'); // הוספת/הסרת קלאס לכפתור
    var panel = this.nextElementSibling; // מציאת הפאנל הבא לכפתור
    panel.classList.toggle('show'); // הוספת/הסרת קלאס לפאנל
});

function html() {
    document.getElementById("imgChange").src = "./Gallery/img-HTML.png";
}
function css() {
    document.getElementById("imgChange").src = "./Gallery/img-CSS.png";
}
function js() {
    document.getElementById("imgChange").src = "./Gallery/img-JS.png";
}