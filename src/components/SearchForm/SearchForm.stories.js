import SearchFormComponent from "../../components/SearchForm/SearchForm";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/SearchForm",
  component: SearchFormComponent,
  tags: ["autodocs"],
  argTypes: { onChange: { action: "Search" } },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = {
  args: {
    searchQuery: "Mama Coco",
  },
};
