import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const snippetFile = resolve(
	dirname(__filename),
	'../snippets',
	'javascript.json'
);

describe('Vitest snippets', () => {
	let snippets;

	beforeAll(async () => {
		const raw = await fs.promises.readFile(snippetFile, 'utf8');
		snippets = JSON.parse(raw);
	});

	it('should contain snippet objects', () => {
		const snippetKeys = Object.keys(snippets);
		expect(snippetKeys.length).toBeGreaterThan(0);
	});

	it('should have each snippet with the correct structure', () => {
		Object.entries(snippets).forEach(([, snippet]) => {
			// Each snippet should be an object
			expect(typeof snippet).toBe('object');
			expect(snippet).not.toBeNull();

			const keys = Object.keys(snippet);
			expect(keys).toHaveLength(3);

			// Should have exactly the required properties
			expect(keys).toEqual(
				expect.arrayContaining(['prefix', 'body', 'description'])
			);

			const { prefix, body, description } = snippet;

			// Validate prefix property
			expect(prefix).toBeDefined();
			expect(prefix).toEqual(expect.any(String));
			expect(prefix.length).toBeGreaterThan(0);

			// Validate body property
			expect(body).toBeDefined();
			expect(body).toBeInstanceOf(Array);
			expect(body.length).toBeGreaterThan(0);
			body.forEach((item) => {
				expect(item).toEqual(expect.any(String));
				expect(item.length).toBeGreaterThan(0);
			});

			// Validate description property
			expect(description).toBeDefined();
			expect(description).toEqual(expect.any(String));
			expect(description.length).toBeGreaterThan(0);
		});
	});
});
