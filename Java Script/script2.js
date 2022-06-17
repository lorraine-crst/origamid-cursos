var vencedores = [
    {
        nome : "Equipe Super",
        pais : "Brasil"
    },
    {
        nome : "Time Maximo",
        pais : "EUA"
    },
    {
        nome : "Mega Grupo",
        pais : "Canadá"
    }
 ];
 
 var podioPorPais = vencedores.map(function(item, indice){
    return item.pais;
 });
 
