import Counter from "../../components/Counter/Counter";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/Counter",
  component: Counter,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Action = {
  args: {
    initialValue: 12,
  },
};
