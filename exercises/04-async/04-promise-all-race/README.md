# Exercise: reflectAll

Goal: implement a helper similar to Promise.allSettled that returns status objects for each promise.

Contract
- Input: array of promises or values
- Output: Promise resolving to array of result objects {status: 'fulfilled'|'rejected', value|reason}.
