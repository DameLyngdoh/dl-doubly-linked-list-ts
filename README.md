### Doubly Linked List for TypeScript

A doubly linked-list implementation for TypeScript.

## Installation

### NPM
```sh
npm install dl-doubly-linked-list-ts
```

### Build
```sh
tsc
```

## Description

### Node
A node is a vertex in the list, implemented in the `DLNode` class and has three fields:

|Field|Type|Getter|Setter|Description|
|-|-|-|-|-|
|`data`|`T` (generic)|Yes|Yes|Data object contained in the node.|
|`next`|`DLNode | null`|Yes|Yes|Reference to next node, `null` if its last node.|
|`preious`|`DLNode | null`|Yes|Yes|Reference to previous node. `null` if its first node.|

### Doubly Linked List
The doubly linked-list implementation is present in the `DoublyLinkedList` class. It has three fields:

|Field|Type|Getter|Setter|Description|
|-|-|-|-|-|
|`length`|`number`|Yes|No|Number of nodes present in the list.|
|`start`|`DLNode | null`|Yes|Yes|Reference to start node, `null` if list is empty.|
|`end`|`DLNode | null`|Yes|Yes|Reference to last node. `null` if list is empty.|

## Documentation
Please refer to `doc/index.html` for the complete documentation and API reference. The documentation for this project was generated using [Compodoc](https://compodoc.app/).

## Demo

```typescript
import { DoublyLinkedList, DLNode } from "./node_modules/dl-doubly-linked-list";

let list : DoublyLinkedList<any> = new DoublyLinkedList();

let nodes : DLNode<any>[] = [];
for(let i=0; i<10; i++) {
    nodes[i] = new DLNode(); 
    nodes[i].data = i * i;
    list.insertStart(nodes[i]);
}

// Inserting new node at the end
let newNode : DLNode<any> = new DLNode();
newNode.data = 300;
list.insert( newNode, 6 );

// Deleting a node
list.delete(4);

// Get array of the nodes
let array = list.toArray();

console.log(array);
```
