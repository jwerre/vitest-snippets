# Vitest Snippets for Zed Editor

A comprehensive collection of Vitest snippets designed to speed up test development in the Zed editor.

## Installation

To use these snippets in Zed:

1. Open Zed
2. Go to `Settings` → `Snippets`
3. Click `Configure Snippets`
4. Select the appropriate language (JavaScript or TypeScript)
5. Paste the content from the relevant snippet file

## Available Snippets

### Basic Test Structure
- `describe` - Create a test suite
- `test` - Create a test with test function
- `it` - Create a test with it function (alias for test)
- `bench` - Create a benchmark function

### Test Control Flow
- `test.skip` - Skip a test
- `test.only` - Run only this test
- `test.concurrent` - Run test concurrently
- `test.todo` - Create a todo test
- `describe.skip` - Skip a test suite
- `describe.only` - Run only this test suite
- `describe.concurrent` - Run test suite concurrently
- `describe.todo` - Create a todo test suite

### Test Data
- `test.each` - Test with multiple data sets
- `describe.each` - Describe with multiple data sets

### Test Hooks
- `beforeEach` - Setup before each test
- `afterEach` - Cleanup after each test
- `beforeAll` - Setup before all tests
- `afterAll` - Cleanup after all tests
- `onTestFinished` - Register cleanup function after test finishes
- `onTestFailed` - Register function to run when test fails

### Assertions
- `expect` - Expect assertion
- `expect.toBe` - Expect value to be equal
- `expect.toEqual` - Expect value to equal
- `expect.toStrictEqual` - Expect value to strictly equal
- `expect.toContain` - Expect array to contain value
- `expect.toThrow` - Expect function to throw error
- `expect.resolves` - Expect async function to resolve
- `expect.rejects` - Expect async function to reject
- `expect.soft` - Soft assertion that continues on failure
- `expect.poll` - Poll assertion until it passes

### Mocking
- `spyOn` - Create a spy on an object method
- `vi.fn` - Create a mock function
- `vi.mock` - Mock a module
- `vi.stub` - Stub an object property
- `mockImplementation` - Mock function implementation
- `mockReturnValue` - Mock function return value
- `mockResolvedValue` - Mock async function resolved value
- `mockRejectedValue` - Mock async function rejected value

### Test Context & Fixtures
- `test.extend` - Extend test context with fixtures

### Imports
- `import vitest` - Import common Vitest functions
- `import vitest types` - Import Vitest functions with type imports

### Async Tests
- `async test` - Create an async test
- `test with context` - Create a test with context (including expect)

## Usage Examples

### Basic Test
```
test('should work', () => {
  expect(true).toBe(true)
})
```

### Async Test with Expect
```
test('should work async', async ({ expect }) => {
  const result = await fetchData()
  expect(result).toBe('expected')
})
```

### Test Suite
```
describe('MyComponent', () => {
  beforeEach(() => {
    // setup
  })

  test('should render correctly', () => {
    expect(true).toBe(true)
  })
})
```

### Mock Function
```
const mockFn = vi.fn(() => 'mocked')
```

### Test with Data
```
test.each([
  [1, 1, 2],
  [2, 2, 4],
])('adds $1 + $2 to equal $3', (a, b, expected) => {
  expect(a + b).toBe(expected)
})
```

## Language Support

This snippet library provides separate snippets for:
- JavaScript (.js files)
- TypeScript (.ts files)

## Contributing

Feel free to contribute new snippets or improvements by submitting a pull request to the repository.

## License

MIT License