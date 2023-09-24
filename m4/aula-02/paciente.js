import chalk from "chalk";

const sucess = chalk.yellowBright();
const error = chalk.rgb(238, 75, 43).underline();

const verificarFebre = new Promise((resolve, reject) => {
  const temperatura = 39;
  setTimeout(() => {
    if(temperatura > 37.5) {
      reject(chalk.rgb(238, 75, 43).underline('Paciente com febre'))
    } else if(temperatura < 35) {
      resolve(chalk.blue('Paciente com temperatura muito baixa'));
    }
    resolve(chalk.yellowBright('Paciente sem febre'))
  }, 3000)
});

verificarFebre.then((response) => console.log(response))
.catch((e) => console.log(e));