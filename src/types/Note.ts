export type Category = 'work' | 'private' | 'family';

export interface Note {
    title: String,
    id: PropertyKey,
    date: Date,
    category?: Category,
    content?: String,
}

