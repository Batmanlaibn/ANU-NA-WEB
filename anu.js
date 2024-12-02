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

    // First question
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

    // Second question
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

    // Final question
    agree.addEventListener('click', () => {
        question3.classList.add('hidden');
        agree.classList.add('hidden');
        finalMessage.classList.remove('hidden');

        // Generate hearts
        setInterval(() => {
            const heart = document.createElement('span');
            heart.textContent = '❤️';
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 3 + 's';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            hearts.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 300); // New heart every 300ms
    });
});
