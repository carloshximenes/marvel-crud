import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersCardComponent } from './characters-card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FavoriteService } from 'src/app/services/favorite.service';



@NgModule({
  declarations: [CharactersCardComponent],
  exports: [CharactersCardComponent],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [FavoriteService]
})
export class CharactersCardModule { }
