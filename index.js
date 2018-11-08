function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names}! You are employee #${i}.`)
  }
  return names
}

printBadges(names);