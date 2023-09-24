/* A estação espacial internacional precisa manter-se em contato constante com a
terra. No entanto, ocorre um delay de 2.5 segundos nessa comunicação. Além
disso, existe a possibilidade dessa comunicação ser perdida. Utilize node para
simular essa situação, utilizando:
⇨ Uma promessa que:
◼ Executa uma Chamada a função fornecida (comunicacaoPerdida)
◼ Caso a comunicação tenha sido perdida, rejeita a promessa com: “Comunicação
perdida”
◼ Caso a comunicação tenha sido enviada, resolve a promessa com: “Ok, todos
vivos na estação”
◼ Trata o caso de sucesso (then) exibindo: `Sucesso: ${msgSucesso}`
◼ Trata o caso de falha (catch) exibindo: `Falha: ${msgFalha}` */

const comunicacao = new Promise((resolve, reject) => {
  const perdida = false;
  setTimeout( () => {
    if(perdida) {
      reject("Comunicação Perdida");
    }
    resolve("Tudo normal");
  }, 2500);
});

comunicacao.then((response) => console.log(response))
.catch((e) => console.log(e))