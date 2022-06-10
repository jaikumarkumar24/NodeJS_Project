const mockingoose = require('mockingoose');
import { MongoDBOps } from '../constants';

declare type ExpectedReturnType = string | number | boolean | object;

class MongoDBMock {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public toReturn(mockModel: any, expected: ExpectedReturnType, op?: MongoDBOps) {
    return mockingoose(mockModel).toReturn(expected, op);
  }

  public resetAll() {
    return mockingoose.resetAll();
  }
}

export const dbMock = new MongoDBMock();
