# recursion

- recursion is hard to wrap your head around
- it's the "other" way to solve problems, the other being iteration
  - iteration is insanely more common, in fact i used iteration in literally all of the problems i've been solving

## martin & the dragon

- once upon a time, there was a boy named martin
- there was also a dragon
- there was also a wizard
- i will give u list, mr. wizard says. tell me if any of these are ODD
- martin goes 2 dragon and asks him to help
- dragon: SORRY BUDDY, I'LL ONLY TELL YOU IF THE FIRST NUMBER IN THAT LIST IS ODD
- martin: but dad
- dragon: SRY
- martin: 🤔
- martin: okay, hello mr. dragon, is the first number in this list odd?
  - dragon: NAH B
    - martin: \*secretly removes the first number\*
      - martin: okay, hello mr. dragon, is the first number in this list odd?
        - dragon: NAH B
          - martin: \*secretly removes the first number\*
            - ...
              - martin: okay, hello mr. dragon, is the first number in this list odd?
                - dragon: THAT LIST IS EMPTY, WHADDIYOUMEAN
              - martin: oh, guess not then
      - oh, guess not then
- oh, guess not then

## objectives for this section

- what the hell is recursion
  - why is it useful
- understand the **two essential components** of a recursive function
- what the hell is the call stack
- helper method recursion vs. pure recursion?

## what is recursion?

- just a **process (function or functions) that calls itself**

```js
function recurseFrom(i) {
  // edge case
  if (i === 0) return
  console.log(i)
  recurse(i - 1)
}
```

- it's EVERYWHERE!!!!
  - `JSON.parse` and `JSON.stringify` are recursive
    - on nested objects, they just keep calling themselves
  - anything involving DOM traversal is recursive (_tree recursion_)

### why use it?

- sometimes simpler to implement
- very powerful for complex data structures

### why not use it?

- it's sometimes less efficient than iteration

## the call stack

- when a function is _invoked_, it's **pushed** to the top of the call stack
- when a function _returns_, it's **popped** from the top, and control returns to the function call that is now at the top of the stack
  - (but the data doesn't necessarily go away... whatever it returns is stored in memory somewhere, depending on the engine implementation. if that returned data relies on any locally (to the function) scoped data, that scope and all of its data still exists as well)
- **recursion works because we continuously push the same function onto the call stack**
  - when a recursive function call finally returns, (**and it must return**, otherwise you get a seg fault) control is returned to the last call, then the last call... etc. they all return, and you're left with the value you originally wanted

### factorials: iteration vs. recursion

#### iterative factorial:

```js
function factorial(n) {
  // edge case
  if (n < 0) return undefined

  // base case
  if (n <= 2) return n

  let cur = n
  for (let i = n; i > 1; i -= 1) {
    cur *= i
  }

  return cur // O(n)
}
```

#### recursive factorial:

```js
function factorial(n) {
  // edge case
  if (n < 0) return undefined

  // base case
  if (n <= 2) return n

  return n * factorial(n - 1) // O(n)
}
```

#### what are the tradeoffs between these two methods?

- _recursive factorial_ requires more visualization and **inductive reasoning**
  - we assumed that `factorial` would return for our base case: `if (n <= 2) return n`
    - from this assumption, we apply the same protocol to any value of n, trusting that when we reach our edge case, we will arrive at a concrete answer
- when we use recursion, _we **defer** the answer to our non-base cases and work towards the base case_

- _iterative factorial_ is **step-by-step**
  - we still start with a base case, but instead of formulating a solution for that base case and deferring all our answers until we reach it...
    - we instead evaluate the solution at each step, _then continue to **accumulate** information until we reach the base case_

#### pitfalls

- no base case, or base case is wrong
  - shit goes forever
- S T A C K O V E R F L O W

### pure recursion vs. helper function recursion

- basically, helper function recursion requires on another function that isn't the one being invoked by user input
  - if we define a function `func`, within the body of `func` we might have defined a function `helper` which we are continually calling
- in **pure recursion**, if we define a function `func`, we're continually calling `func`
  - `func` is self-contained
