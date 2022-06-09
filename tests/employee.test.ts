/* import mockingoose from 'mockingoose';
import { employeeModel } from '../src/models';
import { employeeService } from '../src/services';

describe('employee service', () => {
    describe('employeedata', () => {
      it ('should return the list of employee data ', async () => {
        mockingoose(employeeModel).toReturn([
          {
            name: "rolex",
            empcode: "emp002",
            designation:"Sr.Developer",
            mobile:8344378374,
            status:"Active"
          }
        ], 'find');
        const results = employeeService.employeeAllView();
        expect(results[0].name).toBe('rolex');
      });
    });
  }); */