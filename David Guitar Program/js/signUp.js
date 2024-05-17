
/* סקריפט לדף ההרשמה */


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // הסתר את ההודעה אם הייתה מוצגת קודם לכן
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'none';

    // הצגת ההודעה לאחר לחיצה על כפתור השליחה
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'ההודעה נשלחה בהצלחה!';

    // איפוס הטופס
    document.getElementById('contact-form').reset();
});
