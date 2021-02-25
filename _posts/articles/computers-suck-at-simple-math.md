---
layout: article
date: 2021-02-18T13:26:20.241Z
title: Computers suck at simple math
thumbnail: images/simple-math.jpeg
slug: computers-suck-at-simple-math
---
Computers are terrible problem solvers, but great problem estimators. In fact, nearly all of the math performed by your computer gives what mathematicians would call an "approximate answer". 

Most of the time, these approximations are *close enough* to the exact solution that they don't make a difference. Sometimes, however, [they can cause massive problems](https://www.gao.gov/products/IMTEC-92-26), to say the least.

You can view an example of this finicky, inexact computer math right in your browser:

1. Right click on this page, or any page, and click **Inspect element**
2. In the panel that appears, select the **Console** tab.
3. In the console window, type `0.2 + 0.1` and hit enter.
4. Frown with confusion.

![Now that can't be right.](images/computer-math.png)

Any fourth grader could tell you that 0.2 + 0.1 = 0.3. But the computational wonder that is the computer before you just told you that 0.2 + 0.1 = 0.3000000000004. And that's because your computer didn't add those two numbers the way you did. It added their binary representations.

## Computer representations of numbers
Everything that ever has or ever will be stored on your computer is stored as a binary string - a bunch of 0s and 1s. Javascript, the language of browsers (i.e., the one you just typed into the console) stores numbers using **double-precision floating points**, which comprise three parts: the sign (-1 or +1, i.e., positive or negative), the mantissa (the digit representation), and the exponent (i.e., where we put the decimal point).

In a **double precision floating point** number, we have 52 bits in the mantissa, 1 bit for the sign, and 11 bits in the exponent, for a total of 64 bits. (A single precision floating point number uses just 32 bits).

Now here's where things get interesting. To store the number 0.2, we first convert it to binary. **But the binary representation of 0.2 is an infinite string**:
```
0.2 = 0.00110011001100110011.....
```
However, since our mantissa is only 51 bits long, we round the binary representation of 0.2, cutting it off:

```
0.2 = 0.0011001100110011001100110011001100110011001100110011001
```
We create our mantissa by moving the decimal two places to the right, as we would when writing a number in scientific notation:

```
Mantissa for 0.2
1.1001100110011001100110011001100110011001100110011001
```

Finally, we add our sign bit and 11 exponent bits:
```
0 01111111100 1100110011001100110011001100110011001100110011001100
```
When we add this to the binary representation of 0.1 (which, conveniently, is *exactly* 0.1), we get:
```
0 1.0011001100110011001100110011001100110011001100110100 01111111101
```
Which, when converted back to a human-readable number, gives:
```
0.30000000000000004
```
