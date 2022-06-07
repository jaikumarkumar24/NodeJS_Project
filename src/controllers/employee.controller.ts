import { employeeService } from '../services/index';


 class employeeController{

    public employeeAll(){        
        try {
            return employeeService.employeeAllView();
        } catch (error) {
            return error;
        }
    }

    public employeeView(){
        try {
            return employeeService.employeeAllView();
        } catch (error) {
            return error;
        }
    }

    public employeeInsert(employeeData:any){
        try {
            return employeeService.employeeInsert(employeeData);
        } catch (error) {
            return error;
        }
    }

    public employeeUpdate(){
        try {
            return "";
        } catch (error) {
            return error;
        }
    }

    public employeeDelete(){
        try {
            return "";
        } catch (error) {
            return error;
        }
    }
} 

const employee = new employeeController();

export {employee};