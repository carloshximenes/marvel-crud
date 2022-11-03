type EventSummary = {
    resourceURI: string,
    name: string
}

export interface IEvent {
    available: number,
    returned: number,
    collectionURI: string,
    items: EventSummary[]
}