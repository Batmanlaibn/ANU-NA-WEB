 // script.js
document.addEventListener('DOMContentLoaded', () => {
    const question1 = document.getElementById('question1');
    const yes1 = document.getElementById('yes1');
    const no1 = document.getElementById('no1');

    const question2 = document.getElementById('question2');
    const yes2 = document.getElementById('yes2');
    const no2 = document.getElementById('no2');

    const question3 = document.getElementById('question3');
    const agree = document.getElementById('agree');

    const finalMessage = document.getElementById('finalMessage');
    const hearts = document.getElementById('hearts');

    // Эхний асуултын үйлдэл
    yes1.addEventListener('click', () => {
        question1.classList.add('hidden');
        yes1.classList.add('hidden');
        no1.classList.add('hidden');

        question2.classList.remove('hidden');
        yes2.classList.remove('hidden');
        no2.classList.remove('hidden');
    });

    no1.addEventListener('click', () => {
        alert('Үнэхээр үгүй гэж үү?');
    });

    // Хоёр дахь асуултын үйлдэл
    yes2.addEventListener('click', () => {
        question2.classList.add('hidden');
        yes2.classList.add('hidden');
        no2.classList.add('hidden');

        question3.classList.remove('hidden');
        agree.classList.remove('hidden');
    });

    no2.addEventListener('click', () => {
        alert('Яагаад үгүй гэж? 😢');
    });

    // Сүүлчийн асуултын үйлдэл
    agree.addEventListener('click', () => {
        question3.classList.add('hidden');
        agree.classList.add('hidden');
        finalMessage.classList.remove('hidden');

        // "I LOVE YOU" + Зүрх 1000 удаа харуулах
        for (let i = 0; i < 1000; i++) {
            const heart = document.createElement('span');
            heart.textContent = 'I LOVE YOU ❤️';
            heart.classList.add('heart');
            hearts.appendChild(heart);
        }
    });
});