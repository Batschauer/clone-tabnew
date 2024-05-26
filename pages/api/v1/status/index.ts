import type { NextApiRequest, NextApiResponse } from "next";

// @ts-ignore: duplicate-identifier
function status(request: NextApiRequest, response: NextApiResponse) {
  response.status(200).json({ chave: "é um framework bem legal até." });
}

export default status;
