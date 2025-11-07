import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		// Test environment (default is 'node', can be 'jsdom' or 'happy-dom' for browser-like testing)
		environment: 'node',

		// Include test files matching these patterns
		include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

		// Exclude these patterns from testing
		exclude: [
			'**/node_modules/**',
			'**/dist/**',
			'**/.{idea,git,cache,output,temp}/**',
			'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
		],

		// Global test timeout in milliseconds
		testTimeout: 10000,

		// Coverage configuration
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: [
				'coverage/**',
				'dist/**',
				'packages/*/test{,s}/**',
				'**/*.d.ts',
				'cypress/**',
				'test{,s}/**',
				'test{,-*}.{js,cjs,mjs,ts,tsx,jsx}',
				'**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}',
				'**/*{.,-}spec.{js,cjs,mjs,ts,tsx,jsx}',
				'**/__tests__/**',
				'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
				'**/.{eslint,mocha,prettier}rc.{js,cjs,yml}',
			],
		},

		// Enable globals (describe, it, expect, etc.) without importing
		globals: true,

		// Reporter configuration
		reporter: ['verbose'],
	},
});
