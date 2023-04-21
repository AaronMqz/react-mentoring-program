import DetailComponent from "./MovieDetails";
import { dummyMovieState } from "../../utils";

export default {
  title: "Example/MovieDetail",
  component: DetailComponent,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    movie: dummyMovieState,
  },
};
