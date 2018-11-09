function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let count = 0;
  
  while (Math.random() >= 0.5) {
    ++count;
  }
  return (`You got ${count} tails in a row!`);
}