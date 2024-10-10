import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render('pages/page');
}

export const incluir = (req: Request, res: Response) => {
    // res.render('pages/page');
}