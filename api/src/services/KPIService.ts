import ServiceContainer from "../containers/service.container";
import { KPI } from "../interfaces/KPI.interface";
import KPIModel from "../models/KPI/kpi.model";

class KPIService extends ServiceContainer<KPI> {
    constructor() {
        super(KPIModel);
    }
}

export default new KPIService();
