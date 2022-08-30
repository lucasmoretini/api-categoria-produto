const mongoose = require("mongoose");
const repository = require("../repositories/category-product-repository");

exports.get = async (req, res, next) => {
  const data = await repository.getProduct();
  res.status(200).send(data);
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const data = await repository.getProductById(id);

  if(data === null){
    res.status(400).send("Não foi possível obter o produto");
  }else{
    res.status(200).send(data);
  }
 
};

exports.post = async(req, res, next) => {
  try{
    await repository.createProduct(req.body);
    res.status(201).send({message: "Criado com successo"});
  }catch(erro){
    console.log(erro);
    res.status(400).send({message: "Falha ao cadastrar produto"});
  }
};

exports.put = async(req, res, next) => {
  try{
    const id = req.params.id;
    await repository.put(id, req.body);
    res.status(200).send({message: "Atualizado com sucesso"});
  }catch(erro){
    res.status(400).send({message: "Falha ao atualizar produto"});
  }
};

exports.delete = async(req, res, next) => {
  try{
    const id = req.params.id;
    await repository.deleteById(id);
    res.status(200).send({message: "Excluído com sucesso"});
  }catch(erro){
    res.status(400).send({message: "Falha ao deletar produto"});
  }
};