import { Desktop } from "../entities/Desktop";

export interface DesktopGateway {
    getDesktopsByCompanyName(business_name: string): Promise<Desktop[] | undefined>;
    getDesktopsByCompanyId(id: string): Promise<Desktop[] | undefined>
}