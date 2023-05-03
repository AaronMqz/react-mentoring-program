export const GenresList = ["ALL", "DOCUMENTARY", "COMDEY", "HORROR", "CRIME"];

export const SortByOptions = [
  { id: "release_date", name: "RELEASE DATE" },
  { id: "title", name: "TITLE" },
];

export const initialMovieState = {
  id: 0,
  image_url: "",
  movie_name: "",
  tagline: "",
  release_date: "",
  vote_count: 0,
  vote_average: 0,
  description: "",
  budget: 0,
  revenue: 0,
  genres: [],
  duration: 0,
};

export const dummyMovieState = {
  image_url: "https://m.media-amazon.com/images/I/71eHZFw+GlL._AC_SY879_.jpg",
  movie_name: "Avengers: Inifinity War",
  release_year: "2018",
  genres: ["Action", "Adventure"],
  duration: "2h 29min",
  description:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.",
  rating: "8.4",
};
