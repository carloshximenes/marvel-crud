import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from './characters-details.component';
import { CharactersDetailsRoutingModule } from './characters-details-routing.module';
import { CardModule } from 'primeng/card';
import { ListModelComponent } from '../list-model/list-model.component';



@NgModule({
  declarations: [CharactersDetailsComponent, ListModelComponent],
  imports: [
    CommonModule,
    CharactersDetailsRoutingModule,
    CardModule
  ],
  entryComponents: [ListModelComponent]
})
export class CharactersDetailsModule { }
