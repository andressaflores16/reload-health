import { Desktop } from "../entities/Desktop";

export interface DesktopGateway {
    getDesktopsByCompanyId(id: string): Promise<Desktop[] | undefined>
}