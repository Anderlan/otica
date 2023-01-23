import React from 'react';
import SecaoCapa from '../SecaoCapa';
import SecaoProdutos from '../SecaoProdutos';
import SecaoSobre from '../SecaoSobre';
import SecaoContato from '../SecaoContato';
import Rodape from '../Rodape';

export default function Topo(){
    return(
        <div>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
            <Rodape />
        </div>
    )
}