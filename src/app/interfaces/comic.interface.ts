type ComicSummary = {
    resorceURI: string,
    name: string
}

export interface IComic {
    available: number,
    returned: number,
    collectionURI: string,
    items: ComicSummary[]
}