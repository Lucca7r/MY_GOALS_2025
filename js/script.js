document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.goal-card');
    cards.forEach(card => {
        const checkbox = card.querySelector('.goal-checkbox');
        const cardId = card.querySelector('.goal-title').innerText;

        if (localStorage.getItem(cardId) === 'completed') {
            checkbox.checked = true;
            card.classList.add('completed');
        }

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                card.classList.add('completed');
                localStorage.setItem(cardId, 'completed');
            } else {
                card.classList.remove('completed');
                localStorage.removeItem(cardId);
            }
        });
    });
});