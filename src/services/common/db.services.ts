

class dbOperation {
    public findByAll(model:any){
        return model.find();
    }

    public save(model:any,data:any){
        const employee = model.create(data);
        return employee;
    }

    public findById(model:any,data:any){
        const employee =  model.findById(data);
        return employee;
    }

    public findByUpdate(model:any,data:any){
        const employee =  model.updateOne(data);
        return employee;
    }
}

const dbService = new dbOperation();

export {dbService};