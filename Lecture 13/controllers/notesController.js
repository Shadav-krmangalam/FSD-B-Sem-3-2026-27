const notes = require("../models/data")

const getNotes = (req,res)=>{
 
  res.status(200).send(notes)   
} 

const getNoteById = (req,res)=>{
  let {id} = req.params
  let note =  notes.find(note => note.id === Number(id))

  if(!note){
    return res.status(404).send("Mila nahi bhai")
  }
  res.status(200).send(note)
}

const createNote = (req,res)=>{
 
let {title,note,description,link,author,createdOn} = req.body
  let newData  = { 
    id:notes.length + 1,
    title,
    description,
    note,
    link,
    author,
    createdOn

  }

  notes.push(newData)
  res.status(201).send("Note Added Successfully")
}

const updateNote = (req,res)=>{
  let {id} = req.params
  let note = notes.find(element=>element.id === Number(id)) 

  Object.assign(note,req.body)
  res.status(200).send("Note Updated")
}

const deleteNote = (req,res)=>{
  let {id} = req.params;

  let note = notes.find(element => element.id === Number(id))

  let index = notes.indexOf(note)

  notes.splice(index,1)
  res.status(200).send("Note Deleted")
  
}

module.exports = {getNotes,getNoteById,createNote,updateNote,deleteNote}