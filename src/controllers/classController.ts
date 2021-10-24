import { Request, Response, NextFunction } from "express";

export const getClasses = (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.body);
};


export const addClass = (req: Request, res: Response, next: NextFunction): void => {
  console.log(req.body);
};
