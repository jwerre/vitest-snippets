import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		// Test environment (default is 'node', can be 'jsdom' or 'happy-dom' for browser-like testing)
		environment: 'node',

		// Include test files matching these patterns
		include: ['**/*.{test,spec}.js'],

		// Exclude these patterns from testing
		exclude: [
			'**/node_modules/**',
			'**/dist/**',
			'**/.{idea,git,cache,output,temp}/**',
			'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
		],

		server: {
			watch: {
				// Watch files matching this pattern
				include: ['**/snippets.json'],
			},
		},

		// Global test timeout in milliseconds
		testTimeout: 10000,

		// Enable globals (describe, it, expect, etc.) without importing
		globals: true,

		// Reporter configuration
		reporter: ['verbose'],
	},
});
