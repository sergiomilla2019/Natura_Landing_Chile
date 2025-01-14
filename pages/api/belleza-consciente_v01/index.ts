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

const URL = `https://${process.env.SUBDOMAIN}.rest.marketingcloudapis.com/hub/v1/dataevents/key:${process.env.DATA_EXTENSION_KEY_BC1}/rowset`;

interface bodyReq {
  email: string;
  nombre: string;
  apellido: string;
  fecha: string;
  check1: boolean;
  check2: boolean;
  utm_medium: string;
  utm_source: string;
  todayDate: string;
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
    nombre,
    apellido,
    fecha,
    check1,
    check2,
    utm_medium,
    utm_source,
    todayDate,
  }: bodyReq = JSON.parse(req.body);

  const dataBody = [
    {
      keys: {
        EMAIL: email,
      },
      values: {
        PERSON_NAME: nombre,
        PERSON_SURNAME: apellido,
        FECHA_NACIMIENTO: fecha,
        "OK PROMOCIONES": check1,
        "OK MAYOR EDAD": check2,
        EMAIL: email,
        UTM_MEDIUM: utm_medium,
        UTM_SOURCE: utm_source,
        FECHA_REGISTRO: todayDate,
        LANDING: 'v01',
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
