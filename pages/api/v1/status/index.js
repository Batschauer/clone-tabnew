import database from "../../../../infra/database.js";

function status(request, response) {
  response.status(200).json({ chave: "é um framework bem legal até." });
}

export default status;
