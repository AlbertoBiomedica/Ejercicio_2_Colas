class Colas {
    constructor() {
        this.queue = []
    }
    // Metodos
    // Encolar: agregar un elemento a la cola
    enqueue(element) {
        this.queue.push(element)
    }
    // Desencolar: eliminar el primer elemento de la cola
    dequeue() {
        return this.queue.shift()
    }
    //Peek: retornar el primer elemento de la cola, sin quitarlo de la cola
    peek() {
        return this.queue[0]
    }
    // Size: retornar el tamaño de la cola
    size() {
        return this.queue.length
    }

    // isEmpty: retorna true si la cola esta vacia
    isEmpty() {
        if (this.queue.length === 0) {
            return true
        } else {
            return false
        }
    }

    // print: imprime el contenido de la cola
    print() {
        console.log(this.queue)
    }
    // front: retorna el primer elemento de la cola
    front() {
        return this.queue[0]
    }
    // back: retorna el ultimo elemento de la cola
    back() {
        return this.queue[this.queue.length - 1]
    }
}