// عرض الرسالة المخفية
function showMessage() {
    const secretMessage = document.getElementById('secret-message');
    secretMessage.style.display = 'block';
    secretMessage.style.animation = 'fadeIn 2s forwards';
}

// إضافة تأثير انزلاق للنصوص
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((element, index) => {
        element.style.animation = `slideIn 1.5s ease-in-out ${index * 0.5}s forwards`;
    });
});