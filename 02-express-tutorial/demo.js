const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
// const longFavoriteWords = favoriteWords.filter(favoriteWords => { return favoriteWords.length > 7})

function words7(word) {
    return word.length > 7
}

const longFavoriteWords = favoriteWords.filter(words7(favoriteWords))

