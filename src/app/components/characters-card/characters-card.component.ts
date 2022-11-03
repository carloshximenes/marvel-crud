import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from 'src/app/interfaces/character.interface';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent implements OnInit {

  @Input() data: ICharacter;

  get isFavorited(): boolean {
    return this.data && this._favoriteService.isFavorited(this.data.id);
  }

  constructor(private _router: Router, private _favoriteService: FavoriteService) { }

  ngOnInit(): void {

  }

  public favoriteHandler(): void {
    this.isFavorited ? this._favoriteService.removeFavorite(this.data.id) : this._favoriteService.addFavorite(this.data.id);
  }

  public getImage(): string {
    return `${this.data.thumbnail.path}.${this.data.thumbnail.extension}`;
  }

  public goTo(url: string) {
    window.open(url, '_blank');
  }

  public goToDetails(characterId: number): void {
    this._router.navigate(['/characters', characterId]);
  }
}
