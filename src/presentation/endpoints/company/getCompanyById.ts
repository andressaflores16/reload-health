// import { Request, Response } from "express";
import { Request, Response } from 'restify';
import { ContributorDB } from '../../../data/contributorDB';
import { GetCompanyByIdUC } from '../../../business/usecase/company/getCompanyById';
import { CompanyDB } from '../../../data/companyDB';
import { DesktopDB } from '../../../data/desktopDB';

export const GetCompanyByIdEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetCompanyByIdUC(CompanyDB.getInstance(), ContributorDB.getInstance(), DesktopDB.getInstance());

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
