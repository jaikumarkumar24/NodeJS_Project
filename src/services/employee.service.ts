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

    public employeeView(empId:any){
        try {
            return dbService.findById(employeeModel,empId);
        } catch (error) {
            return error;
        }    
    }

    public employeeUpdate(empId:any,employeeData:any){
        try {
            return dbService.findByUpdate(employeeModel,empId,employeeData);
        } catch (error) {
            return error;
        }
    }

    public employeeDelete(employeeData:any){
        try {
            return dbService.findByDelete(employeeModel,employeeData);
        } catch (error) {
            return error;
        }
    }
}

const employeeService = new employeeOperationService();
export {employeeService};