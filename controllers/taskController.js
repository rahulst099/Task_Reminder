
const taskmodel = require("../models/index").Task

exports.createTask = async (req,res) => {
    try{
        await taskmodel.create({userid : req.user.id,task : req.body.task,completed : false});

        return res.status(200).send({
            status : "Success",
            message : "Task Created Successfully"
        })
    }
    catch(e){
        return res.status(500).send({
            status : "Error",
            message : "Server Side Error"
        })
    }
}

exports.markDoneTask = async (req,res) => {
    try{
        await taskmodel.update({completed : true},{
            where : {
                id : req.body.id,
                userid : req.body.userid
            } 
        });

        return res.status(200).send({
            status : "Success",
            message : "Task marked as Done"
        })
    }
    catch(e){
        return res.status(500).send({
            status : "Error",
            message : "Server Side Error"
        })
    }

}

exports.fetchtask = async (req,res) => { 
    try{
        let data = await taskmodel.findAll({
            where : {
                userid : req.user.id
            }
        });

        return res.status(200).send({
            status : "Success",
            message : "Task List",
            data : data
        })
    }
    catch(e){
        return res.status(500).send({
            status : "Error",
            message : "Server Side Error"
        })
    }
}

exports.fetchDoneTask = async (req,res) => {
    try{
        let data = taskmodel.findAll({
            where : {
                userid : req.user.id,
                completed : true
            }
        })

        return res.status(200).send({
            status : "Success",
            message : "Completed Task",
            data : data
        })
    }
    catch(e){
        return res.status(500).send({
            status : "Error",
            message : "Server Side Error"
        })
    }
}

exports.pendingTask = async (req,res) => {
    try{
        let data = await taskmodel.findAll({
            where : {
                userid : req.user.id,
                completed : false
            }
        })

        return res.status(200).send({
            status : "Success",
            message : "Pending Task",
            data : data
        })
    }
    catch(e){
        return res.status(500).send({
            status : "Error",
            message : "Server Side Error"
        }) 
    }
}