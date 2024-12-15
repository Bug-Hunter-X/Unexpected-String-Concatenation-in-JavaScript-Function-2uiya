# Unexpected String Concatenation in JavaScript Function

This repository demonstrates a common error in JavaScript: unexpected string concatenation when using the + operator with non-numeric values.

## Bug Description
The function `foo` is intended to add two numbers. However, if the inputs are strings, the + operator will perform string concatenation instead of numerical addition, leading to incorrect results.

## Solution
The solution involves explicit type checking and conversion to ensure that the inputs are numbers before performing the addition.