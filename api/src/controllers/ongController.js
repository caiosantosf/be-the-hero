const conn = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
  async index(req, res){
    const ongs = await conn('ongs').select('*')
    return res.json(ongs)
  },

  async create(req, res){
    const data = req.body
    const id = generateUniqueId()

    await conn('ongs').insert({ id, ...data })

    return res.json({id});
  }
}