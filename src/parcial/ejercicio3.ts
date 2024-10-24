 // Crea una interfaz llamada ContacInfo 

 interface ContacInfo {
    id: number,
    name: string,
    phoneNumber: number
 }

function valPhone(phoneNumber: number): boolean {
    const phone = phoneNumber.toString();
    if (phone.length === 10) {
        return true;
    }
    return false;
}

class Contact implements ContacInfo {
    id: number;
    name: string;
    phoneNumber: number;

    constructor(id: number, name: string, phoneNumber: number) {
        this.id = id;
        this.name = name;
        if (valPhone(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw new Error('numero invalido');
        }
    }

// leer o obtener datos
    getContact(): ContacInfo {
        return {
            id: this.id,
            name: this.name,
            phoneNumber: this.phoneNumber
        };
    }
// actualizar
    updateContact(name: string, phoneNumber: number): void {
        this.name = name;
        if (valPhone(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw new Error('numero invalido');
        }
    }
}

