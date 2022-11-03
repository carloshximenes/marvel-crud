import { IfStmt } from '@angular/compiler';
import { ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ICharacter } from 'src/app/interfaces/character.interface';
import { IComic } from 'src/app/interfaces/comic.interface';
import { IEvent } from 'src/app/interfaces/event.interface';
import { ISerie } from 'src/app/interfaces/serie.interface';
import { IStory } from 'src/app/interfaces/story.interface';
import { ListModelComponent } from '../list-model/list-model.component';
import { CharactersDetailsService } from './characters-details.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
  private id: number;
  public character: ICharacter;
  private componentRef: ComponentRef<ListModelComponent>;
  private dynamicComponentLoaded: boolean = false;

  @ViewChild("listContainer", { read: ViewContainerRef }) container;


  constructor(private _route: ActivatedRoute, private _service: CharactersDetailsService, private _resolver: ComponentFactoryResolver, private _ref: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.getId();
    this.getDataById();
  }

  ngAfterViewChecked() {
    if (this.character != null && !this.dynamicComponentLoaded) {
      this.loadLists(this.character);
    }
    this._ref.detectChanges();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  private getId(): void {
    this._route.params.pipe(take(1)).subscribe(params => this.id = + params['id'])
  }

  private getDataById(): void {
    this._service.getSuperHeroBy(this.id).pipe(take(1)).subscribe(
      result => this.character = result.data.results[0]
    )
  }

  public getImage(): string {
    return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
  }

  public loadLists(data: ICharacter): void {
    if (!data) {
      return;
    }
    this.dynamicComponentLoaded = true;
    this.createComponent('Series', data.series);
    this.createComponent('Comics', data.comics);
    this.createComponent('Events', data.events);
    this.createComponent('Stories', data.stories);
  }

  private createComponent(title: string, data: ISerie | IComic | IStory | IEvent) {
    if (!this.container) {
      return;
    }

    const factory: ComponentFactory<ListModelComponent> = this._resolver.resolveComponentFactory(ListModelComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.title = title;
    this.componentRef.instance.data = data;
  }
}
