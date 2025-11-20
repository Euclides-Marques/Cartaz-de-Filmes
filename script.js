function iniciarBusca() {
    const searchTerm = document.querySelector('input[type="text"]').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => { 
        const title = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'flex' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');

    fetch('data.json')
        .then(response => response.json())
        .then(movies => {
            movies.forEach(movie => {
                const card = document.createElement('article');
                card.classList.add('card');

                const createRatingStars = (rating) => {
                    let starsHTML = '';
                    for (let i = 1; i <= 5; i++) {
                        if (i <= rating) {
                            starsHTML += '<span class="star filled">★</span>';
                        } else {
                            starsHTML += '<span class="star">☆</span>';
                        }
                    }
                    return `<div class="rating">${starsHTML}</div>`;
                };

                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="${movie.posterUrl}" alt="Pôster de ${movie.title}">
                        </div>
                        <div class="card-back">
                            <h2>${movie.title}</h2>
                            <p><strong>Lançamento:</strong> ${movie.releaseYear}</p>
                            ${createRatingStars(movie.rating)}
                            <p><strong>Gênero:</strong> ${movie.genre}</p>
                            <p><strong>Duração:</strong> ${movie.duration}</p>
                            <div>
                                <button class="trailer-btn">Ver Trailer</button>
                            </div>
                        </div>
                    </div>
                `;

                cardContainer.appendChild(card);

                card.querySelector('.trailer-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    window.open(movie.trailerUrl, '_blank');
                });
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados dos filmes:', error);
            cardContainer.innerHTML = '<p>Não foi possível carregar os filmes. Tente novamente mais tarde.</p>';
        });
});
