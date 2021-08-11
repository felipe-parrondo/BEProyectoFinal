var carrito = [

]

class Carrito{
    constructor(){}

    static guardar(prod){
        let tempObj = {
            id: carrito.length + 1,
            timestamp: (new Date(Date.now() )).toString(),
            producto: prod
        };
        carrito.push(tempObj);
        
        return tempObj; 
    };

    static leer(){
        if(carrito.length == 0){
            return "ningun objeto en el carrito";
        } else {
            return carrito;
        }
        
    };

    static leerId(tempId){
        if(carrito.length == 0){
            return "ningun objeto en el carrito";
        } else {
            return (carrito.find(i => i.id == tempId))
        }
    }

    static delete(tempId){
        let newArr = [];
        let elementoBorrado;
        
        carrito.forEach(i => {
            if(i.id != tempId){
                newArr.push(i);
            } else {
                elementoBorrado = i;
            }
        })

        carrito = [];
        carrito = newArr;

        for( let i = 0; i < carrito.length; i++){
            carrito[i].id = i + 1;
        }

        return elementoBorrado;
    }
};