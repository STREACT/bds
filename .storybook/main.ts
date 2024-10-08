import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: [
		{
			directory: '../lib',
			titlePrefix: 'BDS Buzzle Design System',
			files: '**/*.@(mdx|stories.@(mdx|ts|tsx))',
		},
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-viewport',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	core: {
		disableTelemetry: true,
	},
};

export default config;
