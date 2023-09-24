import chalk from "chalk";

const sucess = chalk.yellowBright();
const error = chalk.rgb(238, 75, 43).underline();

// const toLigado = new Promise((resolve, reject) => {
//   const status = true;
//   if(status) {
//     resolve('Tá ligado o treco');
//   }
//   reject('Tá desligado o trem');
// });

// toLigado.then((response) => console.log(chalk.red(response)))
// .catch((e) => console.log(chalk.blue(e)));

console.log(chalk.bgCyan("Hello World"));

console.log(chalk.bgBlackBright("Hello World"));

console.log(chalk.yellowBright("Hello World"));

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));

console.log(chalk.hex('#DEADED').bold('Bold gray!'));

console.log(chalk.rgb(238, 75, 43).underline('Esse é vermelho??'));