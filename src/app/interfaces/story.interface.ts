type StorySummary = {
    resourceURI: string,
    name: string,
    type: "interior" | "cover"
}
export interface IStory {
    available: number,
    returned: number,
    collectionURI: string,
    items: StorySummary[]
}