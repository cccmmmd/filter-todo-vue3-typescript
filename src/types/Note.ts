export type Category = 'work' | 'private' | 'family';

export interface Note {
    title: String,
    id: Number,
    date: Date,
    category?: Category,
    content?: String,
}

