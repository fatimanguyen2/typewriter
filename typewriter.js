const sentence = "hello there from lighthouse labs";
let i = -50;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), i += 50)
}
setTimeout(() => console.log('\n'), i)