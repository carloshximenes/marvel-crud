type SerieSummary = {
    resourceURI: string,
    name: string
}

export interface ISerie {
    available: number,
    returned: number,
    collectionURI: number,
    items: SerieSummary[]
}