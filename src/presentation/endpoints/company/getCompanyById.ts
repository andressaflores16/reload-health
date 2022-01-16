// import { Request, Response } from "express";
import { Request, Response } from 'restify';
import { GetCompanyByIdUC } from '../../../business/usecase/company/getCompanyById';
import { CompanyDB } from '../../../data/companyDB';

export const GetCompanyByIdEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetCompanyByIdUC(new CompanyDB());

    const result = await uc.execute({
      id: req.params.id,
    });

    res.send(result).status(200);
  } catch (err) {
    res
      .send({
        errMessage: err.message,
      })
      .status(err.status || 400);
  }
};
