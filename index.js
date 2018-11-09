function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let count = 0;
  let result = null;
  
  function flipCoin() {
    if (Math.random() >= 0.5) {
      result = 'tails';
    }
    else {
      result = 'heads';
    }
    count++;
  }
  
  while (result === 'tails') {
    flipCoin();
  }
  return (`You got ${count} tails in a row!`);
}