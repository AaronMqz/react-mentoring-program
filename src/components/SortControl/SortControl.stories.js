import SortControl from "./SortControl";

export default {
  title: "Example/SortControl",
  component: SortControl,
  tags: ["autodocs"],
  argTypes: { onChange: { action: "Sort By" } },
};

export const Default = {
  args: {
    current: "title",
  },
};
