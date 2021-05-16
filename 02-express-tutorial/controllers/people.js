let {people}=require('../data')

const getPeople=(req, res) => {
  res.status(200).json({success: true, data: people})
}

const creatPerson = (req, res) => {
  const {name} = req.body
  if (!name) {
    return res.status(400).json({success: false, msg: "Please provide name"})
  }
  res.status(201).send({success: true, person: name})
}

const createPersonPostman = (req, res) => {
  const {name} = req.body
  if (!name) {
    return res.status(400).json({success: false, msg: "Please provide name"})
  }
  res.status(201).send({success: true, data: [...people, name]})
}

const updatePerson = (req, res) => {
  const {id} = req.params
  const {name} = req.body

  const person = people.find(per => per.id === Number(id))

  if (!person) {
    return res
      .status(400)
      .json({success: false, msg: `No person with id ${id}`})
  }

  const newPeople = people.map(per => {
    if (per.id === Number(id)) {
      per.name = name
    }
    return per
  })

  res.status(200).json({success: true, data: newPeople})
}

const deleterPerson = (req, res) => {
  const {id} = req.params
  const person = people.find(per => per.id === Number(id))

  if (!person) {
    return res
      .status(400)
      .json({success: false, msg: `No person with id ${id}`})
  }

  const newPeople = people.filter(person => person.id !== Number(id))
  return res.status(200).json({success: true, data: newPeople})
}

module.exports = {
  getPeople,
  creatPerson,
  createPersonPostman,
  updatePerson,
  deleterPerson,
}
