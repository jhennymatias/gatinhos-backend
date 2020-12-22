const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { idAnimal, idProduto, grauToxidade } = request.body;
        await connection('animal_produto').insert({
            idAnimal,
            idProduto,
            grauToxidade

        });
        return response.json(grauToxidade);
    },

    async index(request, response) {
        const animal_produto = await connection('animal_produto').select('*');
        return response.json(animal_produto);
    },

    async dele(request, response) {
        const { idAnimal, idProduto } = request.params;
        await connection('animal_produto')
            .where('id_animal',idAnimal)
            .andWhere('id_produto', idProduto)
            .delete();
        
        return response.status(200).send("DELETE");
    }
};
