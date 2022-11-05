import { Request, Response, NextFunction } from 'express';
import { stripHtml } from 'string-strip-html';

export function sanitizeInputs(properties: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    let object: any;

    if (req.body) object = req.body;
    if (req.params) object = req.params;

    const sanitizedObject = {};

    properties.forEach((propertie) => {
      if (object[propertie]) {
        sanitizedObject[propertie] = stripHtml(object[propertie]).result;
      }
    });

    res.locals.data = sanitizedObject;

    next();
  };
}
