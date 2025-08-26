# Exercise: deepClone

Goal: implement a safe deep clone for JSON-serializable objects.

Contract
- Input: an object/array composed of JSON-serializable values
- Output: a new object deeply equal to the input but with no shared references

Notes
- This implementation uses JSON serialization and therefore won't handle functions, Dates, Maps, Sets, etc.
- Tests verify nested objects are not the same reference.
