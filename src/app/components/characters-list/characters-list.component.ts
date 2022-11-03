import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { FavoriteService } from 'src/app/services/favorite.service';
import { ICharacter } from '../../interfaces/character.interface';
import { CharactersListService } from './characters-list.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  public characters: ICharacter[] = [];
  public form: FormGroup;
  public isLoading: boolean = false;
  public totalCharactersFounded: number = -1;
  public currentPage: number = 0;
  public totalPages: number = 0;
  public offset: number = 20;

  get previousPageIsAvailable(): boolean {
    return this.currentPage > 0;
  }

  get nextPageIsAvailable(): boolean {
    return this.currentPage < this.totalPages - 1;
  }

  get buttonIsDisabled(): boolean {
    return this.inputIsInvalid || this.isLoading;
  }

  get inputIsInvalid(): boolean {
    return this.form.get('name').touched && this.form.get('name').invalid;
  }

  constructor(private _service: CharactersListService, private _fb: FormBuilder, private _favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this._fb.group(
      { name: [null, Validators.required] }
    )
  }

  public searchCharacterHandler(): void {
    this.form.markAllAsTouched();

    if (this.buttonIsDisabled) {
      return;
    }

    const { name } = this.form.getRawValue();
    this.getSuperHeroes(name);
  }

  private getSuperHeroes(nameStartsWith: string, offset: number = 0, order: string = 'name'): void {
    this.isLoading = true;
    this.characters = [];
    this._service.getAllSuperHeroesBy(nameStartsWith, offset, order).pipe(take(1)).subscribe(
      result => {
        this.characters = result['data'].results;
        this.sortByFavoriteFirst();
        this.offset = result['data'].limit;
        this.totalCharactersFounded = result['data'].total;
        this.totalPages = Math.ceil(this.totalCharactersFounded / this.offset);
        this.isLoading = false;
      }
    )
  }

  private sortByFavoriteFirst(): void {
    this.characters.sort((a, b) => this._favoriteService.isFavorited(a.id) !== this._favoriteService.isFavorited(b.id) ? this._favoriteService.isFavorited(a.id) ? -1 : 1 : 0);
  }

  public goToNextPage(): void {
    if (this.nextPageIsAvailable) {
      this.currentPage += 1;
      this.goToPage();
    }
  }

  public goToPreviousPage(): void {
    if (this.previousPageIsAvailable) {
      this.currentPage -= 1;
      this.goToPage();
    }
  }

  private goToPage(): void {
    const { name } = this.form.getRawValue();
    let newOffset = this.currentPage * this.offset;
    this.getSuperHeroes(name, newOffset);
  }
}
