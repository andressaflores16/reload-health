// import { Request, Response } from "express";
import { Request, Response } from 'restify';
import { ContributorDB } from '../../../data/contributorDB';
import { GetCompanyByNameUC } from '../../../business/usecase/company/getCompanyByName';
import { CompanyDB } from '../../../data/companyDB';
import { DesktopDB } from '../../../data/desktopDB';

export const GetCompanyByNameEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetCompanyByNameUC(CompanyDB.getInstance(), ContributorDB.getInstance(), DesktopDB.getInstance());

    console.log("name", req.query.name)

    const result = await uc.execute({
      name: req.query.name,
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
