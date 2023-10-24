import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthorized(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  //Verifica se existe um token se não imediatamente retorna status não autorizado

  if (!authToken) {
    res.status(401).end();
  }

  const [, token] = authToken.split(" "); //Separa o token no header

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    // console.log(sub);

    req.user_id = sub;

    next();
  } catch (err) {
    return res.status(401).end();
  }
}
