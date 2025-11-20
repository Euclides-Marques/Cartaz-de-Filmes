document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const searchInput = document.getElementById('search-input');
    const genreFilter = document.getElementById('genre-filter');
    let allMovies = [];

    const createRatingStars = (rating) => {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<span class="star ${i <= rating ? 'filled' : ''}">${i <= rating ? '★' : '☆'}</span>`;
        }
        return `<div class="rating">${starsHTML}</div>`;
    };

    const renderMovies = (movies) => {
        cardContainer.innerHTML = '';
        if (movies.length === 0) {
            cardContainer.innerHTML = '<p class="no-results">Nenhum filme encontrado.</p>';
            return;
        }
        movies.forEach(movie => {
            const card = document.createElement('article');
            card.classList.add('card');
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
    };

    const populateGenreFilter = (movies) => {
        const genres = new Set();
        movies.forEach(movie => {
            movie.genre.split(',').forEach(g => genres.add(g.trim()));
        });

        genreFilter.innerHTML = '<option value="">Todos</option>';
        [...genres].sort().forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreFilter.appendChild(option);
        });
    };

    const filterAndRender = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreFilter.value.toLowerCase();

        const filteredMovies = allMovies.filter(movie => {
            const titleMatch = movie.title.toLowerCase().includes(searchTerm);
            const genreMatch = selectedGenre ? movie.genre.toLowerCase().includes(selectedGenre) : true;
            return titleMatch && genreMatch;
        });

        renderMovies(filteredMovies);
    };
    
    fetch('data.json')
        .then(response => response.json())
        .then(movies => {
            allMovies = movies;
            populateGenreFilter(allMovies);
            renderMovies(allMovies);

            searchInput.addEventListener('input', filterAndRender);
            genreFilter.addEventListener('change', filterAndRender);
        })
        .catch(error => {
            console.error('Erro ao carregar os dados dos filmes:', error);
            cardContainer.innerHTML = '<p>Não foi possível carregar os filmes. Tente novamente mais tarde.</p>';
        });
});
