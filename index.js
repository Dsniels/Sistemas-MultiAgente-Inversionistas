class Inversionista {
    constructor(nombre, dinero, acciones){
        this.nombre = nombre;
        this.dinero = dinero;
        this.acciones = acciones;
    }

    desicion(precio){
        if(this.dinero > precio && Math.random() < 0.4){
            this.dinero -= precio;
            this.acciones++;
            console.log(`${this.nombre} compro una accion a ${precio}, cantidad de acciones: ${this.acciones}, cantidad de dinero : ${this.dinero}`);
            precio++;
            
        } else if(this.acciones > 0 && Math.random() < 0.5){
            this.money += precio;
            this.acciones--;
            console.log(`${this.nombre} vendio una accion a ${precio}, cantidad de acciones: ${this.acciones}, cantidad de dinero : ${this.dinero}`);
        
        }
    }
}

const Inversionistas = [
    new Inversionista('Pedro', 1200, 0),
    new Inversionista('Daniel', 1213, 40),
    new Inversionista('Nico', 5000, 50),
    new Inversionista('Alfred', 3000, 100)
];

let precio = 120;
for(let i = 0; i < 5; i++){
    for(const Inversor of Inversionistas){
        Inversor.desicion(precio);
    }
    precio += 2;
}