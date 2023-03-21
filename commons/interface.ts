export interface Author {
    profile: string,
    name: string,
    view: string,
    bio: string
}

export interface Article {
    id: string,
    title: string,
    date: string,
    category: string,
    type: string,
    content: string,
    image: string,
    author: Author;
}