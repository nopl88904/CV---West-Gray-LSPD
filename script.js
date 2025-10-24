// script.js

// مؤشر دائري
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// تعطيل زر الماوس الأيمن مع تشغيل صوت beep
const beep = new Audio('https://www.soundjay.com/button/beep-07.wav');
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  beep.play();
});

// منع اختصارات لوحة المفاتيح لفتح أدوات المطور والمصدر
document.addEventListener('keydown', e => {
  if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
      (e.ctrlKey && e.key.toLowerCase() === 'u') ||
      (e.ctrlKey && e.key.toLowerCase() === 's') ||
      (e.ctrlKey && e.key.toLowerCase() === 'a') ||
      (e.ctrlKey && e.key.toLowerCase() === 'p')
  ) {
    e.preventDefault();
    beep.play();
  }
});
