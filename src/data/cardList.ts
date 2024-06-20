const localizacaoImage = require("../../assets/images/localizacao.png");
const moedaImage = require("../../assets/images/moeda.png");
const compraGarantidaImage = require("../../assets/images/compra-garantida.png");
const lojaOficialImage = require("../../assets/images/lojas-oficiais.png");
const categoriasImage = require("../../assets/images/categorias.png");

export interface CardsList {
    image: any;
    title: string;
    subtitle: string;
    textButton: string;
}

export const cardList: CardsList[] = [
    {
        image: localizacaoImage,
        title: "Insira sua localização",
        subtitle: "Confira os custos e prazos de entrega",
        textButton: "Inserir localização"
    },
    {
        image: moedaImage,
        title: "MENOS DE R$100",
        subtitle: "Confira os produtos com preços baixos",
        textButton: "Mostrar produtos"
    },
    {
        image: compraGarantidaImage,
        title: "COMPRA GARANTIDA",
        subtitle: "Cuidamos de você",
        textButton: "Como funciona"
    },
    {
        image: lojaOficialImage,
        title: "LOJAS OFICIAIS",
        subtitle: "Suas marcas preferidas",
        textButton: "Mostrar lojas"
    },
    {
        image: categoriasImage,
        title: "CATEGORIAS",
        subtitle: "Encontre celulares, roupas, imóveis e m...",
        textButton: "Ir para Categorias"
    },
];