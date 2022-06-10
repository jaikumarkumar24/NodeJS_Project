import { employeeModel } from '../../src/models';
import { employeeService } from '../../src/services';
import { dbMock, MongoDBOps } from '../mocks';

describe('employee api', () => {
  
    describe('employeedata', () => {
      test('should return the list of employee data ', async () => {
        dbMock.toReturn(employeeModel,[
          {
            name: "abc",
            empcode: "emp001",
            designation:"Developer",
            mobile:8333221231,
            status:"Active"
          }
        ], MongoDBOps.find);

        const results = await employeeService.employeeAllView();
        console.log(results);
        expect(results[0].name).toBe('abc');

      });
    });
  });