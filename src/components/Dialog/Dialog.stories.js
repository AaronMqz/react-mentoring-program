import DialogComponent from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import { initialMovieState, dummyMovieState } from "../../utils";

export default {
  title: "Example/Dialog",
  component: DialogComponent,
  tags: ["autodocs"],
  argTypes: { toogle: { action: "Close modal" } },
};

export const AddMovie = {
  args: {
    children: (
      <MovieForm.Default
        movie={initialMovieState}
        titleForm="ADD MOVIE"
      ></MovieForm.Default>
    ),
  },
};

export const EditMovie = {
  args: {
    children: (
      <MovieForm.Default
        movie={dummyMovieState}
        titleForm="EDIT MOVIE"
      ></MovieForm.Default>
    ),
  },
};

export const DeleteMovie = {
  args: {
    children: (
      <MovieForm.Delete
        movie={initialMovieState}
        titleForm="DELETE MOVIE"
      ></MovieForm.Delete>
    ),
  },
};
