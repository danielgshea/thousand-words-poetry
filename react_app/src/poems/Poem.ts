import Author from "./Author"

interface poem {
    title: string;
    author: Author;
    content: string;
  };

export default class Poem implements poem {
    title: string;
    author: Author;
    content: string;
    constructor(title: string, author: Author, content: string) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
}