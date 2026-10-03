'use strict';

const values = [true, 'hello', false, "farm", 5, false, 'word', 10, "80", true, 'JavaScript', 20, 90,];

const counts = {};

for (const value of values) {
  const type = typeof value;

  if (!counts[type]) {
    counts[type] = 0;
  }

  counts[type]++;
}

console.log(counts)