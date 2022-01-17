import { DesktopGateway } from '../business/gateways';
import { Desktop } from '../business/entities';
import { BaseDB } from './baseDB';

export class DesktopDB extends BaseDB implements DesktopGateway {
  private contributorTableName = 'desktops';

  public async getDesktopsByCompanyId(
    id: string,
  ): Promise<Desktop[] | undefined> {
    const result = await this.connection
      .select('*')
      .from(this.contributorTableName)
      .where('company_id', id);

    if (!result.length) {
      return undefined;
    }

    return result.map((desktop) => {
      return new Desktop(
        desktop.id,
        desktop.platform,
        desktop.type,
        desktop.os,
        desktop.ip
      );
    });
  }
}
