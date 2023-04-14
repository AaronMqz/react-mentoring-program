import MovieTile from "./MovieTile";
import { mockData } from "../../utils/mockData";

export default {
  title: "Example/MovieTile",
  component: MovieTile,
  tags: ["autodocs"],
  argTypes: { handleClick: { action: "Movie click" } },
};

export const Default = {
  args: {
    movie: mockData,
  },
};