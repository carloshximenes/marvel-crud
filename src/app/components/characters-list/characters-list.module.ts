import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list.component';
import { CharactersListRoutingModule } from './characters-list-routing.module';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from "@angular/common/http";
import { CharactersCardModule } from '../characters-card/characters-card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoriteService } from 'src/app/services/favorite.service';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CharactersListRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CharactersCardModule
  ],
  providers: [FavoriteService]
})
export class CharactersListModule { }
