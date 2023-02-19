'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
};

BinarySearchTree.prototype.insert = function(value){
   if (this.value < value) {
      if (this.right === null) this.right = new BinarySearchTree(value);
      else this.right.insert(value);
   };
   if (this.value >= value) {
      if (this.left === null) this.left = new BinarySearchTree(value);
      else this.left.insert(value);
   };
};

BinarySearchTree.prototype.contains = function(value){
   if (value === this.value) return true;
   if (value > this.value){
      if (!this.right) return false;
      return this.right.contains(value);
   };
   if (value < this.value){
      if (!this.left) return false;
      return this.left.contains(value);
   };

};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   //post-order
   if (order === 'post-order') {
     //izq -> der -> root
     //izq
     if (this.left !== null) this.left.depthFirstForEach(cb, order);
     //der
     if (this.right !== null) this.right.depthFirstForEach(cb, order);
     //root
     cb(this.value);
   }
      //pre-order
    else if (order === 'pre-order') {
      //root -> izq -> der
     //root
    cb(this.value);
      //izq
      if (this.left !== null) this.left.depthFirstForEach(cb, order);
      //der
      if (this.right !== null) this.right.depthFirstForEach(cb, order);
   }
   //in-order default!!
   else{
      //izq -> root -> der
      //izq
      if (this.left !== null) this.left.depthFirstForEach(cb, order);
      //root
      cb(this.value);
      //der
      if (this.right !== null) this.right.depthFirstForEach(cb, order);
   }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue){
   if (!queue) queue = [];
   //agregar nodo de la izq a la fila
   if (this.left !== null) queue.push(this.left);
   //guardar lo que esta en la derecha
   if (this.right !== null) queue.push(this.right);
   //ejecutarse en el nodo actual
   cb(this.value);
   //ejecuta el siguinete nodo en la fila de ejecucion
   if (queue.length > 0) queue.shift().breadthFirstForEach(cb, queue);
};

BinarySearchTree.prototype.size = function(){
   if (this.left === null && this.right === null) return 1;
   if (this.right !== null){
      if(this.left !== null) return 1 + this.left.size() + this.right.size();
       else return 1 + this.right.size();
   }else if (this.left !== null) return 1 + this.left.size();
 
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
