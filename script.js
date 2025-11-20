document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');

    fetch('data.json')
        .then(response => response.json())
        .then(movies => {
            movies.forEach(movie => {
                const card = document.createElement('article');
                card.className = 'card';

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
                            <h2>${movie.title}</h2>
                            <p><strong>Lançamento:</strong> ${movie.releaseYear}</p>
                            <p><strong>Descrição:</strong> ${movie.description}</p>
                            ${createRatingStars(movie.rating)}
                            <p><strong>Gênero:</strong> ${movie.genre}</p>
                            <p><strong>Duração:</strong> ${movie.duration}</p>
                            <button>Ver Trailer</button>
                            <button>Assistir</button>
                        `;

                cardContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados dos filmes:', error);
            cardContainer.innerHTML = '<p>Não foi possível carregar os filmes. Tente novamente mais tarde.</p>';
        });
});
