import { NextApiRequest, NextApiResponse } from "next";

import NextCors from "nextjs-cors";

import axios, { AxiosError, AxiosResponse } from "axios";
import gettoken from "../../../utils/getToken";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import { fileURLToPath } from "url";
import { NextResponse } from "next/server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URL = `https://${process.env.SUBDOMAIN}.rest.marketingcloudapis.com/hub/v1/dataevents/key:${process.env.DATA_EXTENSION_KEY_GRACIAS}/rowset`;

interface bodyReq {
  email: string;
  comentario: string;
  pais: string;
  experiencia: string;
}

type Data = { message: string } | bodyReq;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return BNrouter(req, res);
    default:
      res.status(400).json({ message: "Bad Request" });
  }
}

const BNrouter = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  const {
    email,
    comentario,
    pais = "Chile",
    experiencia,
  }: bodyReq = JSON.parse(req.body);

  const dataBody = [
    {
      keys: {
        EMAIL: email,
      },
      values: {
        EMAIL: email,
        COMENTARIO: comentario,
        PAIS: pais,
        EXPERIENCIA: experiencia,
      },
    },
  ];

  try {
    const token = await gettoken();
    if (!token) {
      return res.status(500).json({ message: "no hay token" });
    }

    const response: AxiosResponse = await axios.post(URL, dataBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.redirect(302, "/Thanks");
    // return res.redirect(307, "https://www.natura.cl/");
    // res.status(200).json({ message: "Correcto" });
  } catch (err: any) {
    res.status(500).json({ message: err.response.data });
  }
};
