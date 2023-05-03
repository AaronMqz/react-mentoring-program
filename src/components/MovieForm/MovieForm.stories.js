import MovieForm from "./MovieForm";
import { initialMovieState } from "../../utils";

export default {
  title: "Example/MovieForm",
  component: MovieForm.Default,
  tags: ["autodocs"],
  argTypes: {
    handleSubmit: { action: "Form submit" },
    handleShandleResetubmit: { action: "Form reset" },
  },
};

export const AddMovie = {
  args: {
    titleForm: "DEFAULT TITLE",
    movie: initialMovieState,
  },
};
