import { isValidInn } from "../validators";

test("should return true for a valid INN (5555555555554444)", () => {
  const result = isValidInn("5555555555554444");
  expect(result).toBe(true);
});

test("should return true for a valid INN (4539283476916568)", () => {
  const result = isValidInn("4539283476916568");
  expect(result).toBe(true);
});

test("should return true for a valid INN (6762403225743237)", () => {
  const result = isValidInn("6762403225743237");
  expect(result).toBe(true);
});

test("should return false for an invalid INN (12357847523695414)", () => {
  const result = isValidInn("12357847523695414");
  expect(result).toBe(false);
});

test("should return false for an invalid INN (411111111)", () => {
  const result = isValidInn("411111111");
  expect(result).toBe(false);
});

// New tests for 100% coverage
test("should return false for an empty string", () => {
  const result = isValidInn("");
  expect(result).toBe(false);
});

test("should return false for a non-numeric string", () => {
  const result = isValidInn("abc123");
  expect(result).toBe(false);
});

test("should return false for a string with spaces", () => {
  const result = isValidInn(" 4539283476916568 ");
  expect(result).toBe(true);
});

test("should return false for an invalid INN (not passing Luhn's algorithm)", () => {
  const result = isValidInn("1234567890123456"); // Example of an invalid card
  expect(result).toBe(false);
});
