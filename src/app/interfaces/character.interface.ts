import { IComic } from "./comic.interface"
import { IEvent } from "./event.interface"
import { ISerie } from "./serie.interface"
import { IStory } from "./story.interface"

type Url = {
    type: string,
    url: string
}

type Image = {
    path: string,
    extension: string
}

export interface ICharacter {
    id: number,
    name: string,
    description: string,
    modified: Date,
    resourceURI: string,
    urls: Url[],
    thumbnail: Image,
    comics: IComic,
    stories: IStory
    events: IEvent,
    series: ISerie
}