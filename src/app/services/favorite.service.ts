import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    public addFavorite(characterId: number): void {
        let favoriteCharacters = this.getAllFavorites();
        if (favoriteCharacters.length >= 5) {
            return;
        }
        favoriteCharacters.push(characterId);
        localStorage.setItem('MarvelFavoriteCharacters', JSON.stringify(favoriteCharacters));
    }

    public getAllFavorites(): Array<number> {
        const marvelFavoriteCharacters = localStorage.getItem('MarvelFavoriteCharacters');
        if (marvelFavoriteCharacters) {
            return JSON.parse(marvelFavoriteCharacters);
        }
        return [];
    }

    public removeFavorite(characterId: number): void {
        let favoriteCharacters = this.getAllFavorites();
        let index = favoriteCharacters.findIndex(char => char == characterId);
        if (index >= 0) {
            favoriteCharacters.splice(index, 1);
        }
        localStorage.setItem('MarvelFavoriteCharacters', JSON.stringify(favoriteCharacters));
    }

    public isFavorited(characterId: number): boolean {
        let favoriteCharacters = this.getAllFavorites();
        let index = favoriteCharacters.findIndex(char => char == characterId);
        return index >= 0;
    }
}
