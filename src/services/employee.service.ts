import { employeeModel } from '../models'
import { dbService } from './common/db.services';


class employeeOperationService{
    public employeeAllView(){
        try {
            return dbService.findByAll(employeeModel);
        } catch (error) {
            return error;
        }        
    }

    public employeeInsert(employeeData:any){
        
        try {
            return dbService.save(employeeModel,employeeData);
        } catch (error) {
            return error;
        }
    }

    public employeeUpdate(employeeData:any){
        try {
            return dbService.save(employeeModel,employeeData);
        } catch (error) {
            return error;
        }
    }

    public employeeDelete(employeeData:any){
        try {
            return dbService.save(employeeModel,employeeData);
        } catch (error) {
            return error;
        }
    }
}

const employeeService = new employeeOperationService();
export {employeeService};