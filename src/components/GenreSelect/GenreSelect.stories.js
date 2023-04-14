import { within, userEvent } from "@storybook/testing-library";
import GenreSelect from "../../components/GenreSelect/GenreSelect";
import { GenresList } from "../../utils";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/GenreSelect",
  component: GenreSelect,
  tags: ["autodocs"],
  argTypes: { onChange: { action: "Genre Selecteed" } },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = {
  args: {
    genreList: GenresList,
    currentSelected: "ALL",
  },
};

export const SelectGenre = {
  args: {
    genreList: GenresList,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const actionSelect = await canvas.getByText("CRIME");
    await userEvent.click(actionSelect);
  },
};
