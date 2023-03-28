const mongoose = require('mongoose')

const deletedUser=mongoose.Schema({

deletedUsers:{
    type:Object
}

})


const DeletedUsers = mongoose.model('DeletedUsers',deletedUser)
module.exports= DeletedUsers