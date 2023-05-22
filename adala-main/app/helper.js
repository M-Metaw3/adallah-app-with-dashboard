class Helper {
    static formatMyAPIRes = (res, resStatus, apiStatus, data, apiMessage) => {// format the response
        return res.status(resStatus).send({ apiStatus, data, apiMessage })
    }
    static handlingMyFunction = async (req, res, fun, message) => {// handling any error in the api controller function 
        try {
            let result = await fun(req)
            return this.formatMyAPIRes(res, 200, true, result, message)
        } catch (e) {
            console.log(e.name)
            if (e.name == 'Error') {
                return this.formatMyAPIRes(res, 200, false, e, e.message)
            } else if (e.name == 'MongoServerError' || e.name == 'ValidationError' || e.name == 'CastError') {
                return this.formatMyAPIRes(res, 400, false, e, e.message)
            } else {
                return this.formatMyAPIRes(res, 500, false, e, e.message)
            }
        }
    }
    static isThisIdExistInThisModel = async (id, model, modelName,populate,anotherpopulate) => { //to prevent any error to happen when not find the document of the id in the model
        let exist
        if(populate&&anotherpopulate){
            exist = await model.findById(id).populate(populate).populate(anotherpopulate)
        }else if(populate&&!anotherpopulate){
            exist = await model.findById(id).populate(populate)
        }else{
            exist = await model.findById(id)
        }
        if (exist) {
            return exist
        } else {
            const e = new Error(`this ${modelName} does not exist`)
            e.name = 'ValidationError'
            throw e
        }
    }
}
module.exports = Helper