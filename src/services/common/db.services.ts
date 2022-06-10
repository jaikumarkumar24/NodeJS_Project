

class dbOperation {
    public findByAll(model:any){
        return model.find().populate('name')
        .exec();;
    }

    public save(model:any,data:any){
        const employee = model.create(data);
        return employee;
    }

    public findById(model:any,data:any){
        const employee =  model.findById(data);
        return employee;
    }

    public findByUpdate(model:any,empId:any,data:any){

        const updatedEmployee = model.updateOne({_id: empId}, {$set: data});
        return updatedEmployee;
    }

    public findByDelete(model:any,data:any){
        const deleteEmployee = model.deleteOne({_id: data});
        return deleteEmployee;
    }
}

const dbService = new dbOperation();

export {dbService};