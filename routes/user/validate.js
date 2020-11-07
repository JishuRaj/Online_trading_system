const joi = require('joi')

const register_validation = (data) =>{
  const schema = joi.object({
  username : joi.string().min(6).max(12).required(),
  password : joi.string().min(8).max(50).required(),
  email:joi.string().email().min(6).max(50).required(),
  })
  return schema.validate(data);
}


const login_validation = (data)=>{
  const schema = joi.object({
    username: joi.string().min(6).max(12).required(),
    password:joi.string().min(8).max(50).required()
  })
  return schema.validate(data);
}

module.exports.register = register_validation;

module.exports.login = login_validation;