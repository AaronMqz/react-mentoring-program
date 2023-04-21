import MovieTile from "./MovieTile";
import { dummyMovieState } from "../../utils";

export default {
  title: "Example/MovieTile",
  component: MovieTile,
  tags: ["autodocs"],
  argTypes: { handleClick: { action: "Movie click" } },
};

export const Default = {
  args: {
    movie: dummyMovieState,
  },
};
