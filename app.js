const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");

let leitor = new Reader();
let escritor = new Writer();

async function main() {
    let dados = await leitor.Read("./users.csv");
    let dadosProcessados = Processor.Process(dados);

    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);
}

main();