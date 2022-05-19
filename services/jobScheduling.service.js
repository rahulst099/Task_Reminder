const schedule = require("node-schedule");
const {mailService} = require("../services/email.service")
const User = require("../models/index").User;
const Task = require("../models/index").Task;

async function remainder(){
    try{
        let data = await Task.findAll({
            where : {
                completed : false
            },
            attributes : ['userid','task']
        });
        let useridarr = data.map((val) => val.userid);
        let emaildata = await User.findAll({
            where : {
                id : useridarr
            },
            attributes : ['email','id']
        });
        for(let key in emaildata){
            let temp = [];
            for(let datakey in data){
                if(data[datakey].userid === emaildata[key].id){
                    temp.push(data[datakey].task);
                }
            }
            mailService(emaildata[key].email,"Pending Task",temp);
        }
    }
    catch(e){
        console.log(e)
    }
}

module.exports.myjob = schedule.scheduleJob('*/5 * * * *',async ()=>{
    remainder();
}); 

module.exports.myjob = schedule.scheduleJob('*/10 * * * *',async ()=>{
    remainder();
}); 

module.exports.myjob = schedule.scheduleJob('*/15 * * * *',async ()=>{
    remainder();
}); 