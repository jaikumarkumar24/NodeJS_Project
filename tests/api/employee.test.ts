import { employeeModel } from '../../src/models';
import { employeeService } from '../../src/services';
import { dbMock, MongoDBOps } from '../mocks';

describe('employee api', () => {

    describe('employeedata', () => {
      test('should return the list of employee data ', async () => {
        dbMock.toReturn(employeeModel,[
          {
            name: "rolex",
            empcode: "emp002",
            designation:"Sr.Developer",
            mobile:8344378374,
            status:"Active"
          }
        ], MongoDBOps.find);

        const results = employeeService.employeeAllView();
        expect(results[0].name).toBe('rolex');
        
      });
    });
  });