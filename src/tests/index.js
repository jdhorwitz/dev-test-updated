const assert = require("assert");
const palindrome = require("../code/palindrome");
const removeProperty = require("../code/removeProperty");
const deepClone = require("../code/deepClone");
const fib = require("../code/fib");
const balancedBrackets = require("../code/balancedBrackets");
const closedLoops = require("../code/closedLoops");
const flattenArray = require("../code/flattenArray");

const personalDetail = {
  name: "Amby Int",
  address: {
    location: "Calgary",
    zip: "123456",
    phoneNumber: {
      homePhone: 9992342345,
      workPhone: 123987543
    }
  }
};

module.exports = {
  runPalindromeTests: function() {
    assert(palindrome("racecar") === true);
    assert(palindrome("race car") === true);
    assert(palindrome("not a palindrome") === false);
    assert(palindrome("A man, a plan, a canal. Panama") === true);
    assert(palindrome("never odd or even") === true);
    assert(palindrome("nope") === false);
    assert(palindrome("almostomla") === false);
    assert(palindrome("My age is 0, 0 si ega ym.") === true);
    assert(palindrome("1 eye for of 1 eye.") === false);
    assert(palindrome("0_0 (: /- :) 0–0") === true);

    console.log("All palindrome tests passed!!!");
  },
  runRemovePropertyTests: function() {
    assert(removeProperty({ a: 1, b: 2, c: 3 }, "b") === true);
    assert(removeProperty({ a: 1, b: 2, c: 3 }, "a") === true);
    assert(removeProperty({ a: 1, b: 2, c: 3 }, "c") === true);
    assert(removeProperty({ a: 1, b: 2, c: 3 }, "q") === false);
    assert(removeProperty({ a: 1, b: 2, c: 3 }, 3) === false);
    assert(removeProperty({ a: 1, b: 2, c: 3 }, "Night") === false);

    console.log("All remove property tests passed!!!");
  },
  runDeepCloneTests: function() {
    const clonedObject = deepClone(personalDetail);

    assert(clonedObject !== personalDetail);
    assert(clonedObject.name === personalDetail.name);
    assert(clonedObject.address.location === personalDetail.address.location);
    assert(clonedObject.address.zip === personalDetail.address.zip);
    assert(
      clonedObject.address.phoneNumber.homePhone ===
        personalDetail.address.phoneNumber.homePhone
    );
    assert(
      clonedObject.address.phoneNumber.workPhone ===
        personalDetail.address.phoneNumber.workPhone
    );

    console.log("All deep clone tests passed!!!");
  },
  runFibTests: function() {
    assert(fib(1) === 1);
    assert(fib(-5) === 1);
    assert(fib(5) === 5);
    assert(fib(20) === 6765);

    console.log("All fibonacci tests passed!!!");
  },
  runBalancedBracketsTests: function() {
    assert(balancedBrackets("()[]{}(([])){[()][]}") === true);
    assert(balancedBrackets("())[]{}") === false);
    assert(balancedBrackets("[(])") === false);

    console.log("All balanced brackets tests passed!!!");
  },
  runClosedLoopsTests: function() {
    assert(closedLoops(2876) === 3);
    assert(closedLoops(1111) === 0);
    assert(closedLoops(976832) === 4);

    console.log("All closed loops tests passed!!!");
  },
  runFlattenArrayTests: function() {
    const x = flattenArray([1, 2, [3, [4], 5, 6], 7]);
    const y = [1, 2, 3, 4, 5, 6, 7];

    const a = flattenArray([9, [8, [7, [6, [5]]], 4, 3, 2, 1]]);
    const b = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    assert(x.sort().join(",") === y.sort().join(","));
    assert(a.sort().join(",") === b.sort().join(","));

    console.log("All flatten array tests passed!!!");
  }
};
