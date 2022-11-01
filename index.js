const prompt = require("prompt-sync")({ sigint: true });
var stock = [];

const addProductToStock = (produit) => {
  stock.push(produit);
  
};

const displayProduct = () => {
  console.log(stock);
  return stock;
};

// function sortProducts(p1,p2){
//     if(p1.prix > p2.prix) return p2;
//     else return p1;
// }

const sortStock = () => {
  stock.sort((p1, p2) => {
    return p1.prix - p2.prix;
  });
  console.log(stock);
};

const removeProduct = (index) => {
    if(index > -1){
        stock.splice(index,1);
    }
    console.log(stock);
}

const printMenu = () => {
  console.log("1. Ajouter un produit");
  console.log("2. Afficher les produits");
  console.log("3. Trier les produits");
  console.log("4. Supprimer un produit");
  console.log("0. Quitter");
}

const main = () => {
   let choix;  
  do{
  printMenu();
  
   choix = prompt("Choisissez une option : ");
  switch (true) {
    case choix == 1:
      addProductToStock({name: "prodiut1", prix: 70, instock: true});
      addProductToStock({name: "prodiut2", prix: 15, instock: false});
      addProductToStock({name: "prodiut3", prix: 5, instock: true});
      console.log(stock);
      break;
    case choix == 2:
      displayProduct();
      break;
    case choix == 3:
      sortStock();
      break;
    case choix == 4:
      removeProduct(1);
      break;
  }
}while(choix != 0);
};

main();









