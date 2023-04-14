import DetailComponent from "./MovieDetails";
import { mockData } from "../../utils/mockData";

export default {
  title: "Example/MovieDetail",
  component: DetailComponent,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    movie: mockData,
  },
};
