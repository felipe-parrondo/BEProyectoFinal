var productos = [
    {
        title: 1,
        price: 1,
        thumbnail: 1,
        id: 3,
        codigo: 3000,
        timestamp: (new Date(Date.now() )).toString(),
        desc: this.title + " description",
        stock: true,
    },
    {
        title: "objetoDefaultPrueba",
        price: 69,
        thumbnail: "fotoPrueba",
        id: 1,
        codigo: 1000,
        timestamp: (new Date(Date.now() )).toString(),
        desc: this.title + " description",
        stock: true
    },
    {
        title: "objetoDefaultPrueba2",
        price: 70,
        thumbnail: "fotoPrueba",
        id: 2,
        codigo: 2000,
        timestamp: (new Date(Date.now() )).toString(),
        desc: this.title + " description",
        stock: true
    },
];


class Productos{
    constructor(){}

    static guardar(titulo, precio, foto){
        let tempObj = {
            title: titulo,
            price: precio,
            thumbnail: foto,
            id: productos.length + 1,
            codigo: productos.length + 1000,
            timestamp: (new Date(Date.now() )).toString(),
            desc: titulo + " description",
            stock: true
        };
        productos.push(tempObj);
        
        return tempObj; 
    };

    static leer(){
        if(productos.length == 0){
            return "ningun objeto cargado";
        } else {
            return productos;
        }
        
    };

    static leerId(tempId){
        if(productos.length == 0){
            return "ningun objeto cargado";
        } else {
            return (productos.find(i => i.id == tempId))
        }
    }

    static update(tempId, act){
        let tempInd = productos.findIndex(i => i.id == tempId)
        
        if(act.title){
            productos[tempInd].title = act.title
        }

        if(act.price){
            productos[tempInd].price = act.price
        }

        if(act.thumbnail){
            productos[tempInd].thumbnail = act.thumbnail
        }
    }

    static delete(tempId){
        let newArr = [];
        let elementoBorrado;
        
        productos.forEach(i => {
            if(i.id != tempId){
                newArr.push(i);
            } else {
                elementoBorrado = i;
            }
        })

        productos = [];
        productos = newArr;

        for( let i = 0; i < productos.length; i++){
            productos[i].id = i + 1;
        }

        return elementoBorrado;
    }
};

module.exports = {
    laClase : Productos,
    laLista : productos
}