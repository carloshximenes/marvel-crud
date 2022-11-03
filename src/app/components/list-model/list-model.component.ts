import { Component, Input } from '@angular/core';
import { IComic } from 'src/app/interfaces/comic.interface';
import { IEvent } from 'src/app/interfaces/event.interface';
import { ISerie } from 'src/app/interfaces/serie.interface';
import { IStory } from 'src/app/interfaces/story.interface';

@Component({
  selector: 'app-list-model',
  templateUrl: './list-model.component.html',
  styleUrls: ['./list-model.component.scss']
})

export class ListModelComponent {
  @Input() title: string;
  @Input() data: ISerie | IComic | IStory | IEvent;
}
