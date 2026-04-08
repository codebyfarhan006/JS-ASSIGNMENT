# JS-Assignment - Assignment 4

## Question 1: Digit Gatekeeper
Loop from L to R. For each number, check three things: divisible by K, no digit 0, and digit sum is prime. Count all that pass.
**Complexity:** O(R × digits) — loops through all numbers in range.

## Question 2: Roll-Seed Lock
Apply the even/odd rule 3 times to N. Then check if result is 100–999 and middle digit equals seed.
**Complexity:** O(1) — fixed 3 steps, no loops needed.

## Question 3: Mirror Corridor
Try every X from 0 to 100000. For each, check if N+X is both a palindrome and divisible by K. Return the first match.
**Complexity:** O(100000 × digits) — brute force search.

## Question 4: Fare Calculator
Apply each fare rule one by one in order. Round up using modulo trick.
**Complexity:** O(1) — just math, no loops.

## Question 5: Skipping Numbers
Keep adding numbers 1, 2, 3... but skip any divisible by (seed+2). Stop when sum >= N.
**Complexity:** O(m) — depends on how large m needs to be.

## Question 6: Contest Score Judge
Calculate score, apply corrections in order, then check PASS/FAIL.
**Complexity:** O(1) — just math, no loops.
