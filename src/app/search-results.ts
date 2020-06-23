export interface byTitledata{
     Search: [object];
     totalResults: number;
     Response: boolean;
}

export interface byTitleDatedata{
     Year, Metascore, imdbRating: number;
     Released, DVD: Date;

     Genre, Runtime, Rated, Title, Director, Writer,
     Actors, Plot, Language, Country, Awards, Poster,
     Ratings, imdbVotes, imdbID, Type, BoxOffice,
     Production, Website: string;
}