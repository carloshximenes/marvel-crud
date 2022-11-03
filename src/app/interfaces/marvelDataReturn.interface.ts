import { ICharacter } from "./character.interface"
import { ISerie } from "./serie.interface"

type DataReturn = {
    count: number,
    limit: number,
    offset: number,
    results: ICharacter[],
    total: number
}

export interface IMarvelDataReturn {
    attributionHTML: string,
    attributionText: string,
    code: number,
    copyright: string,
    data: DataReturn,
    etag: string,
    status: string
}