const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { idProduto, idComposicao, grauToxidade } = request.body;
        await connection('produto_composicao').insert({
            idProduto,
            idComposicao

        });
        return response.json(idComposicao);
    },

    async index(request, response) {
        const produto_composicao = await connection('produto_composicao').select('*');
        return response.json(produto_composicao);
    },

    async dele(request, response) {
        const { idProduto, idComposicao } = request.params;
        await connection('produto_composicao')
            .where('id_Produto',idProduto)
            .andWhere('id_produto', idProduto)
            .delete();
        
        return response.status(200).send("DELETE");
    }
};
