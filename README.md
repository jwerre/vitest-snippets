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
- describe(name, fn) - Creates a test suite to group related tests.
- test(name, fn, options?) - Creates an individual test case.
- it(name, fn, options?) - An alias for test.
- bench(name, fn, options?) - Creates an individual benchmark case.

#### Test- test.extends - extend the test context with custom fixtures
- test.skip(name, fn?) - Skips this test.
- test.skipIf(condition)(name, fn?) - Skips this test if the condition is true.
- test.only(name, fn) - Runs only this test (and other .only tests).
- test.concurrent(name, fn) - Runs this test concurrently with others.
- test.todo(name) - Marks a test as not yet implemented.
- test.skipIf(condition)(name, fn) - Skips the test if the condition is true.
- test.runIf(condition)(name, fn) - Runs the test only if the condition is true.
- test.each(cases)(name, fn) - Runs a test multiple times with different data.

#### Describe
- describe.skip(name, fn?) - Skips this test suite.
- describe.skipIf(condition)(name, fn?) - Skips this test suite if the condition is true.
- describe.runIf(condition)(name, fn?) - Runs this test suite only if the condition is true.
- describe.only(name, fn) - Runs only this test suite.
- describe.concurrent(name, fn) - Runs all tests in this suite concurrently.
- describe.sequential(name, fn) - Runs all tests in this suite sequentially.
- describe.shuffle(name, fn) - Runs all tests in this suite in a random order.
- describe.todo(name) - Marks a test suite as not yet implemented.
- describe.each(cases)(name, fn) - Runs a suite multiple times with different data.
- describe.for(cases)(name, fn) - Runs a suite multiple times with different data.

#### Bench
- bench.skip(name, fn?) - Skips this benchmark.
- bench.only(name, fn) - Runs only this benchmark.
- bench.todo(name) - Marks a benchmark as not yet implemented.

#### Setup and Teardown
- beforeEach(fn) - Runs a function before each test in the suite.
- afterEach(fn) - Runs a function after each test in the suite.
- beforeAll(fn) - Runs a function once before all tests in the suite.
- afterAll(fn) - Runs a function once after all tests in the suite.

#### Test Hooks
- onTestFinished(fn) - Registers a cleanup function to run when the test finishes.
- onTestFailed(fn) - Registers a function to run when the test fails.

### Mocks
- .getMockImplementation() - Returns the current mock implementation.
- .getMockName() - Returns the custom name for the mock.
- .mockClear() - Clears call and instance history.
- .mockName(name) - Sets a custom name for the mock.
- .mockImplementation(fn) - Sets the default implementation of a mock.
- .mockImplementationOnce(fn) - Sets a one-time implementation.
- .withImplementation(fn, cb) - Runs a callback with a temporary implementation.
- .mockRejectedValue(error) - Sets an error to be returned as a rejected promise.
- .mockRejectedValueOnce(error) - Sets a one-time error to be returned as a rejected promise.
- .mockReset() - Clears history and resets implementation to vi.fn().
- .mockRestore() - Clears history and restores the original implementation (for spies).
- .mockResolvedValue(value) - Sets a value to be returned as a resolved promise.
- .mockResolvedValueOnce(value) - Sets a one-time value to be returned as a resolved promise.
- .mockReturnThis() - Sets the mock to return this context.
- .mockReturnValue(value) - Sets a value to be returned.
- .mockReturnValueOnce(value) - Sets a one-time value to be returned.
- .mock.calls - An array containing all call arguments.
- .mock.lastCall - The arguments of the last call.
- .mock.results - An array containing all call results (return/throw).
- .mock.settledResults - An array of settled promise results.
- .mock.invocationCallOrder - An array of invocation call orders.
- .mock.contexts - An array of this contexts for all calls.
- .mock.instances - An array of instances created by the mock.

### Vi Utility

#### Mock Modules
- vi.mock(path, factory?) - Mocks an entire module (must be hoisted).
- vi.doMock(path, factory?) - Mocks a module without hoisting (for circular dependencies).
- vi.mocked(value, deep?) - Type-casts a value as a mock, asserting its mock type.
- vi.importActual(path) - Imports a module, bypassing any mocks.
- vi.importMock(path) - Imports a module with all its exports mocked.
- vi.unmock(path) - Specifies that a module should not be mocked (hoisted).
- vi.doUnmock(path) - Unmocks a module (non-hoisted version of vi.unmock).
- vi.resetModules() - Clears the module import cache.
- vi.dynamicImportSettled() - Waits for all dynamic imports to resolve or reject.

#### Mocking Functions and Objects
- vi.fn(implementation?) - Creates a new, empty mock function.
- vi.mockObject(object, overrides?) - Creates a deep mock of an object.
- vi.isMockFunction(fn) - Checks if a value is a mock function or spy.
- vi.clearAllMocks() - Clears mock.calls and mock.instances for all mocks.
- vi.resetAllMocks() - Resets all mocks (clears history, instances, and resets implementations).
- vi.restoreAllMocks() - Restores all spies and mocks to their original implementations.
- vi.spyOn(object, 'methodName') - Creates a spy on an existing object method.
- vi.stubEnv(name, value) - Stubs an environment variable (process.env).
- vi.unstubAllEnvs() - Restores all stubbed environment variables.
- vi.stubGlobal(name, value) - Stubs a global variable.
- vi.unstubAllGlobals() - Restores all stubbed global variables.

#### Fake Timers
- vi.advanceTimersByTime(ms) - Advances fake timers by a specified time (in ms).
- vi.advanceTimersByTimeAsync(ms) - Advances fake timers by time (async version).
- vi.advanceTimersToNextTimer() - Advances timers to the next scheduled timer.
- vi.advanceTimersToNextTimerAsync() - Advances to the next timer (async version).
- vi.advanceTimersToNextFrame() - Advances timers to the next requestAnimationFrame.
- vi.getTimerCount() - Returns the number of pending timers.
- vi.clearAllTimers() - Clears all pending timers.
- vi.getMockedSystemTime() - Gets the current mocked system time.
- vi.getRealSystemTime() - Gets the current real system time.
- vi.runAllTicks() - Runs all pending microtasks (e.g., process.nextTick).
- vi.runAllTimers() - Runs all pending macrotasks (timers).
- vi.runAllTimersAsync() - Runs all pending macrotasks (async version).
- vi.runOnlyPendingTimers() - Runs only currently pending timers.
- vi.runOnlyPendingTimersAsync() - Runs only pending timers (async version).
- vi.setSystemTime(date) - Sets the system time when fake timers are in use.
- vi.useFakeTimers() - Mocks timer functions (setTimeout, setInterval).
- vi.isFakeTimers() - Checks if timers are currently mocked.
- vi.useRealTimers() - Restores real timer functions.

#### Miscellaneous
- vi.waitFor(fn, options?) - Waits for an assertion function to pass.
- vi.waitUntil(fn, options?) - Waits for a condition function to return true.
- vi.hoisted(fn) - Hoists a function to the top (used inside vi.mock).
- vi.setConfig(config) - Sets Vitest configuration for the current test file.
- vi.resetConfig() - Resets Vitest configuration to its default.


### Assertions (expect)

- expect(value) - The function used to create an assertion.
- .assert(value) - Chai's assert API as expect.assert for convenience
- .not - Inverts the meaning of the next matcher.
- .poll(fn, options?) - Polls a function until the assertion passes.
- .rejects - Unwraps a promise's rejected reason.
- .resolves - Unwraps a promise's resolved value.
- .soft(value) - Creates a soft assertion that doesn't stop the test on failure.
- .toBe(value) - Checks for strict equality (Object.is).
- .toBeCloseTo(number, precision?) - Checks if a number is close to another.
- .toBeDefined() - Checks that a value is not undefined.
- .toBeFalsy() - Checks that a value is falsy.
- .toBeGreaterThan(number) - Checks if a number is greater than another.
- .toBeGreaterThanOrEqual(number) - Checks if a number is greater than or equal.
- .toBeInstanceOf(class) - Checks if a value is an instance of a class.
- .toBeLessThan(number) - Checks if a number is less than another.
- .toBeLessThanOrEqual(number) - Checks if a number is less than or equal.
- .toBeNaN() - Checks that a value is NaN.
- .toBeNull() - Checks that a value is null.
- .toBeNullable() - Checks that a value is null or undefined.
- .toBeOneOf(array) - Checks if a value is one of the members of an array.
- .toBeTruthy() - Checks that a value is truthy.
- .toBeTypeOf(type) - Checks the type of a value (e.g., 'string').
- .toBeUndefined() - Checks that a value is undefined.
- .toContain(value) - Checks if an array or string contains a value.
- .toContainEqual(value) - Checks if an array contains an element with deep equality.
- .toEqual(value) - Deeply checks for equality of properties.
- .toHaveLength(number) - Checks the length of an array or string.
- .toHaveProperty(path, value?) - Checks if an object has a property.
- .toMatch(regexp | string) - Checks if a string matches a regex or substring.
- .toMatchFileSnapshot(filepath) - Compares a value to a snapshot in a separate file.
- .toMatchInlineSnapshot() - Compares a value to an inline snapshot.
- .toMatchObject(object) - Checks if an object contains the specified properties.
- .toMatchSnapshot() - Compares a value to a stored snapshot.
- .toSatisfy(predicate) - Checks if a value satisfies a predicate function.
- .toStrictEqual(value) - Deeply checks for equality, including object types.
- .toThrowError(error?) - Checks that a function throws an error.
- .toThrowErrorMatchingInlineSnapshot() - Checks if an error message matches an inline snapshot.
- .toThrowErrorMatchingSnapshot() - Checks if an error message matches a snapshot.
- expect.assertions(count) - Verifies that a specific number of assertions are called.
- expect.hasAssertions() - Verifies that at least one assertion is called.
- expect.unreachable() - Marks a line as unreachable.
- expect.anything() - Matches any value except null or undefined.
- expect.any(constructor) - Matches any value created with the given constructor.
- expect.closeTo(number, precision?) - Matches a number close to the expected value.
- expect.arrayContaining(array) - Matches an array containing the specified elements.
- expect.objectContaining(object) - Matches an object containing the specified properties.
- expect.stringContaining(string) - Matches a string containing the specified substring.
- expect.stringMatching(regexp) - Matches a string against a regex.
- expect.schemaMatching(schema) - Matches a value against a Zod schema.
- expect.addSnapshotSerializer(serializer) - Adds a custom snapshot serializer.
- expect.extend(matchers) - Adds custom matchers to expect.
- expect.addEqualityTesters(testers) - Adds custom equality testers.

##### Mock Function Matchers
- .toHaveBeenCalled() - Checks if a mock function was called.
- .toHaveBeenCalledTimes(number) - Checks how many times a mock was called.
- .toHaveBeenCalledWith(...args) - Checks if a mock was called with specific arguments.
- .toHaveBeenCalledBefore(mock) - Checks if a mock was called before another mock.
- .toHaveBeenCalledAfter(mock) - Checks if a mock was called after another mock.
- .toHaveBeenCalledExactlyOnceWith(...args) - Checks if a mock was called exactly once with specific args.
- .toHaveBeenLastCalledWith(...args) - Checks the arguments of the last call.
- .toHaveBeenNthCalledWith(n, ...args) - Checks the arguments of the nth call.
- .toHaveReturned() - Checks if a mock function returned successfully.
- .toHaveReturnedTimes(number) - Checks how many times a mock returned.
- .toHaveReturnedWith(value) - Checks if a mock returned a specific value.
- .toHaveLastReturnedWith(value) - Checks the return value of the last call.
- .toHaveNthReturnedWith(n, value) - Checks the return value of the nth call.

##### Promise Matchers (.resolves / .rejects)
- .toHaveResolved() - Checks if a promise resolved.
- .toHaveResolvedTimes(number) - Checks how many times a promise resolved.
- .toHaveResolvedWith(value) - Checks if a promise resolved with a specific value.
- .toHaveLastResolvedWith(value) - Checks the last resolved value.
- .toHaveNthResolvedWith(n, value) - Checks the nth resolved value.

### Assertions (assert)
- assert(value, message?) - Asserts that a value is truthy.
- assert.fail(message?) - Throws an assertion error.
- assert.isOk(value, message?) - Asserts that a value is truthy.
- assert.isNotOk(value, message?) - Asserts that a value is falsy.
- assert.equal(actual, expected, message?) - Asserts non-strict equality (==).
- assert.notEqual(actual, expected, message?) - Asserts non-strict inequality (!=).
- assert.strictEqual(actual, expected, message?) - Asserts strict equality (===).
- assert.deepEqual(actual, expected, message?) - Asserts deep equality.
- assert.notDeepEqual(actual, expected, message?) - Asserts deep inequality.
- assert.isAbove(value, above, message?) - Asserts value > above.
- assert.isAtLeast(value, atLeast, message?) - Asserts value >= atLeast.
- assert.isBelow(value, below, message?) - Asserts value < below.
- assert.isAtMost(value, atMost, message?) - Asserts value <= atMost.
- assert.isTrue(value, message?) - Asserts value === true.
- assert.isNotTrue(value, message?) - Asserts value !== true.
- assert.isFalse(value, message?) - Asserts value === false.
- assert.isNotFalse(value, message?) - Asserts value !== false.
- assert.isNull(value, message?) - Asserts value === null.
- assert.isNotNull(value, message?) - Asserts value !== null.
- assert.isNaN(value, message?) - Asserts value is NaN.
- assert.isNotNaN(value, message?) - Asserts value is not NaN.
- assert.exists(value, message?) - Asserts value is not null or undefined.
- assert.notExists(value, message?) - Asserts value is null or undefined.
- assert.isUndefined(value, message?) - Asserts value === undefined.
- assert.isDefined(value, message?) - Asserts value !== undefined.
- assert.isFunction(value, message?) - Asserts value is a function.
- assert.isNotFunction(value, message?) - Asserts value is not a function.
- assert.isObject(value, message?) - Asserts value is an object.
- assert.isNotObject(value, message?) - Asserts value is not an object.
- assert.isArray(value, message?) - Asserts value is an array.
- assert.isNotArray(value, message?) - Asserts value is not an array.
- assert.isString(value, message?) - Asserts value is a string.
- assert.isNotString(value, message?) - Asserts value is not a string.
- assert.isNumber(value, message?) - Asserts value is a number.
- assert.isNotNumber(value, message?) - Asserts value is not a number.
- assert.isFinite(value, message?) - Asserts value is a finite number.
- assert.isBoolean(value, message?) - Asserts value is a boolean.
- assert.isNotBoolean(value, message?) - Asserts value is not a boolean.
- assert.typeOf(value, type, message?) - Asserts typeof value === type.
- assert.notTypeOf(value, type, message?) - Asserts typeof value !== type.
- assert.instanceOf(value, constructor, message?) - Asserts value instanceof constructor.
- assert.notInstanceOf(value, constructor, message?) - Asserts !(value instanceof constructor).
- assert.include(haystack, needle, message?) - Asserts haystack.includes(needle).
- assert.notInclude(haystack, needle, message?) - Asserts !haystack.includes(needle).
- assert.deepInclude(haystack, needle, message?) - Asserts haystack deep-includes needle.
- assert.notDeepInclude(haystack, needle, message?) - Asserts haystack does not deep-include needle.
- assert.nestedInclude(value, path, needle, message?) - Asserts value has needle at path.
- assert.notNestedInclude(value, path, needle, message?) - Asserts value does not have needle at path.
- assert.deepNestedInclude(value, path, needle, message?) - Asserts value has deep-equal needle at path.
- assert.notDeepNestedInclude(value, path, needle, message?) - Asserts value does not have deep-equal needle at path.
- assert.ownInclude(value, needle, message?) - Asserts value has own property needle.
- assert.notOwnInclude(value, needle, message?) - Asserts value does not have own property needle.
- assert.deepOwnInclude(value, needle, message?) - Asserts value has deep-equal own property needle.
- assert.notDeepOwnInclude(value, needle, message?) - Asserts value does not have deep-equal own property needle.
- assert.match(value, regex, message?) - Asserts regex.test(value).
- assert.notMatch(value, regex, message?) - Asserts !regex.test(value).
- assert.property(object, prop, message?) - Asserts object has property prop.
- assert.notProperty(object, prop, message?) - Asserts object does not have property prop.
- assert.propertyVal(object, prop, value, message?) - Asserts object[prop] == value.
- assert.notPropertyVal(object, prop, value, message?) - Asserts object[prop] != value.
- assert.deepPropertyVal(object, prop, value, message?) - Asserts object[prop] deep equals value.
- assert.notDeepPropertyVal(object, prop, value, message?) - Asserts object[prop] does not deep equal value.
- assert.nestedProperty(object, path, message?) - Asserts object has nested property path.
- assert.notNestedProperty(object, path, message?) - Asserts object does not have nested property path.
- assert.nestedPropertyVal(object, path, value, message?) - Asserts nested property path equals value.
- assert.notNestedPropertyVal(object, path, value, message?) - Asserts nested property path does not equal value.
- assert.deepNestedPropertyVal(object, path, value, message?) - Asserts nested property path deep equals value.
- assert.notDeepNestedPropertyVal(object, path, value, message?) - Asserts nested property path does not deep equal value.
- assert.lengthOf(value, length, message?) - Asserts value.length === length.
- assert.hasAnyKeys(object, keys, message?) - Asserts object has at least one of keys.
- assert.hasAllKeys(object, keys, message?) - Asserts object has all keys.
- assert.containsAllKeys(object, keys, message?) - (Alias for hasAllKeys).
- assert.doesNotHaveAnyKeys(object, keys, message?) - Asserts object has none of keys.
- assert.doesNotHaveAllKeys(object, keys, message?) - Asserts object does not have all keys.
- assert.hasAnyDeepKeys(object, keys, message?) - Asserts object has at least one deep keys.
- assert.hasAllDeepKeys(object, keys, message?) - Asserts object has all deep keys.
- assert.containsAllDeepKeys(object, keys, message?) - (Alias for hasAllDeepKeys).
- assert.doesNotHaveAnyDeepKeys(object, keys, message?) - Asserts object has no deep keys.
- assert.doesNotHaveAllDeepKeys(object, keys, message?) - Asserts object does not have all deep keys.
- assert.throws(fn, error?, message?) - Asserts fn throws error.
- assert.doesNotThrow(fn, error?, message?) - Asserts fn does not throw error.
- assert.operator(val1, op, val2, message?) - Asserts val1 op val2 is truthy.
- assert.closeTo(actual, expected, delta, message?) - Asserts |actual - expected| <= delta.
- assert.sameMembers(set1, set2, message?) - Asserts set1 and set2 have the same members.
- assert.notSameMembers(set1, set2, message?) - Asserts set1 and set2 do not have the same members.
- assert.sameDeepMembers(set1, set2, message?) - Asserts set1 and set2 have the same deep members.
- assert.notSameDeepMembers(set1, set2, message?) - Asserts set1 and set2 do not have the same deep members.
- assert.sameOrderedMembers(set1, set2, message?) - Asserts set1 and set2 have same members in same order.
- assert.notSameOrderedMembers(set1, set2, message?) - Asserts set1 and set2 do not have same members in same order.
- assert.sameDeepOrderedMembers(set1, set2, message?) - Asserts set1 and set2 have same deep members in same order.
- assert.notSameDeepOrderedMembers(set1, set2, message?) - Asserts set1 and set2 do not have same deep members in same order.
- assert.includeMembers(superset, subset, message?) - Asserts superset includes all members of subset.
- assert.notIncludeMembers(superset, subset, message?) - Asserts superset does not include all members of subset.
- assert.includeDeepMembers(superset, subset, message?) - Asserts superset deep-includes all members of subset.
- assert.notIncludeDeepMembers(superset, subset, message?) - Asserts superset does not deep-include all members of subset.
- assert.includeOrderedMembers(superset, subset, message?) - Asserts superset includes all members of subset in order.
- assert.notIncludeOrderedMembers(superset, subset, message?) - Asserts superset does not include all members of subset in order.
- assert.includeDeepOrderedMembers(superset, subset, message?) - Asserts superset deep-includes all members of subset in order.
- assert.notIncludeDeepOrderedMembers(superset, subset, message?) - Asserts superset does not deep-include all members of subset in order.
- assert.oneOf(value, list, message?) - Asserts value is one of list.
- assert.changes(fn, object, prop, message?) - Asserts fn changes object[prop].
- assert.changesBy(fn, object, prop, delta, message?) - Asserts fn changes object[prop] by delta.
- assert.doesNotChange(fn, object, prop, message?) - Asserts fn does not change object[prop].
- assert.changesButNotBy(fn, object, prop, delta, message?) - Asserts fn changes object[prop] but not by delta.
- assert.increases(fn, object, prop, message?) - Asserts fn increases object[prop].
- assert.increasesBy(fn, object, prop, delta, message?) - Asserts fn increases object[prop] by delta.
- assert.doesNotIncrease(fn, object, prop, message?) - Asserts fn does not increase object[prop].
- assert.increasesButNotBy(fn, object, prop, delta, message?) - Asserts fn increases object[prop] but not by delta.
- assert.decreases(fn, object, prop, message?) - Asserts fn decreases object[prop].
- assert.decreasesBy(fn, object, prop, delta, message?) - Asserts fn decreases object[prop] by delta.
- assert.doesNotDecrease(fn, object, prop, message?) - Asserts fn does not decrease object[prop].
- assert.decreasesButNotBy(fn, object, prop, delta, message?) - Asserts fn decreases object[prop] but not by delta.
- assert.ifError(value, message?) - Asserts value is falsy.
- assert.isExtensible(object, message?) - Asserts object is extensible.
- assert.isNotExtensible(object, message?) - Asserts object is not extensible.
- assert.isSealed(object, message?) - Asserts object is sealed.
- assert.isNotSealed(object, message?) - Asserts object is not sealed.
- assert.isFrozen(object, message?) - Asserts object is frozen.
- assert.isNotFrozen(object, message?) - Asserts object is not frozen.
- assert.isEmpty(value, message?) - Asserts value is empty.
- assert.isNotEmpty(value, message?) - Asserts value is not empty.

### Type Testing
- expectTypeOf(value) - Asserts the type of a value at compile time.
- assertType(value) - Asserts a value's type; fails with a type error if incorrect.

#### **Type Matchers (for expectTypeOf & assertType)**
- .not - Inverts the meaning of the next type matcher.
- .toEqualTypeOf<T>() - Checks if types are exactly equal.
- .toMatchTypeOf<T>() - Checks if the type matches a subset of T.
- .toExtend<T>() - Checks if the type extends T.
- .toMatchObjectType<T>() - Checks if the type matches an object subset.
- .extract<T>() - Extracts a type from a union.
- .exclude<T>() - Excludes a type from a union.
- .returns - Accesses the return type of a function type.
- .parameters - Accesses the parameters type of a function as a tuple.
- .parameter(index) - Accesses the type of a function parameter at a specific index.
- .constructorParameters - Accesses constructor parameters type as a tuple.
- .instance - Accesses the instance type of a class.
- .items - Accesses the type of array items.
- .resolves - Accesses the resolved type of a promise.
- .guards<T>() - Checks if a function is a type guard.
- .asserts<T>() - Checks if a function is an assertion function.
- .toBeAny() - Checks if the type is any.
- .toBeUnknown() - Checks if the type is unknown.
- .toBeNever() - Checks if the type is never.
- .toBeFunction() - Checks if the type is a function.
- .toBeObject() - Checks if the type is an object.
- .toBeArray() - Checks if the type is an array.
- .toBeString() - Checks if the type is a string.
- .toBeBoolean() - Checks if the type is a boolean.
- .toBeVoid() - Checks if the type is void.
- .toBeSymbol() - Checks if the type is symbol.
- .toBeNull() - Checks if the type is null.
- .toBeUndefined() - Checks if the type is undefined.
- .toBeNullable() - Checks if the type is nullable (or null or undefined).
- .toBeCallableWith(...args) - Checks if a function is callable with given arguments.
- .toBeConstructibleWith(...args) - Checks if a class is constructible with given arguments.
- .toHaveProperty(key, expectedType?) - Checks if an object type has a specific property.


## Contributing

Feel free to contribute new snippets or improvements by submitting a pull request to the repository.

## License

MIT License
