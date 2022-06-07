

class dbOperation {
    public findByAll(model:any){
        return model.find();
    }

    public save(model:any,data:any){
        const employee = model.create(data);
        return employee;
    }
}

const dbService = new dbOperation();

export {dbService};