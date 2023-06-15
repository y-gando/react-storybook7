import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

// HellowButton をサイドメニューに追加
type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: 'Default',
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary',
        color: 'primary',
    },
};

export const Danger: Story = {
    args: {
        children: 'Danger',
        color: 'danger',
    },
};

export const PrimarySmall: Story = {
    // render: () => (
    //     <Button color="primary" size="size">
    //         Primary
    //     </Button>
    // ),
    args: {
        ...Primary.args,
        size: 'sm',
    },
};

export const PrimaryLarge: Story = {
    // render: () => (
    //     <Button color="primary" size="lg">
    //         Primary
    //     </Button>
    // ),
    args: {
        ...Primary.args,
        size: 'lg',
    },
};
