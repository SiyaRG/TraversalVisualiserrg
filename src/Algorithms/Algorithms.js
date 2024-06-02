export const BFS = (
    tree,
    rootNode,
    destination,
    visited = [],
    queue = [rootNode]
) => {
    let count = 1;
    while (rootNode !== null) {
        while (queue.length !== 0 && visited.indexOf(rootNode) !== -1) {
            queue.shift();
            rootNode = queue.length !== 0 ? queue[0] : null;
        }

        if (rootNode !== null) {
            visited.push(rootNode);
            queue.shift();
            queue.push(...tree[rootNode]);
        }
        if (rootNode === destination) {
            return {
                found: true,
                checked: [...visited]
            };
        } else if (queue.length === 0) {
            return { found: false, checked: [...visited] };
        } else {
            rootNode = queue[0];
        }
    }
};

export const DFS = (
    tree,
    rootNode,
    destination,
    visited = [],
    stack = [rootNode]
) => {
    let count = 1;
    while (rootNode !== null) {
        while (stack.length !== 0 && visited.indexOf(rootNode) !== -1) {
            stack.shift();
            rootNode = stack.length !== 0 ? stack[0] : null;
        }

        if (rootNode !== null) {
            visited.push(rootNode);
            stack.shift();
            stack.unshift(...tree[rootNode]);
        }
        if (rootNode === destination) {
            return {
                found: true,
                checked: [...visited]
            };
        } else if (stack.length === 0) {
            return { found: false, checked: [...visited] };
        } else {
            rootNode = stack[0];
        }
    }
    /*  
	0: [10,1]
	1:[0,11,2]
	2:[1,12,3]
	3:[2,13,4]
	4:[3,14,5]
	10:[20,11,0]
	11:[10,21,12,1]
	12:[11,22,13,2]
	13:[12,23,14,3]
	20:[30,21,10]
	
	rootNode: 20
	visited: 0 10, 20
	stack: 30,31,10,11,0, 1
	
	
	*/
};
export const Djk = (tree, rootNode, destination, queue = [rootNode]) => {
    const graph = {};

    for (let i = 0; i < tree.length; i++) {
        let ch = [];
        for (let j = 0; j < tree[i].length; j++) {
            ch.push([Number(tree[i][j]), 0.01]);
        }
        graph[`${i}`] = { value: 999999999, sequence: [], children: [...ch] };
    }

    graph[rootNode].value = 0;

    while (queue.length !== 0) {
        rootNode = queue[0];
        queue.shift();

        graph[rootNode].children.forEach(child => {
            if (graph[`${child[0]}`].value > graph[rootNode].value + child[1]) {
                graph[`${child[0]}`].value = graph[rootNode].value + child[1];
                graph[`${child[0]}`].sequence = [
                    ...graph[rootNode].sequence,
                    rootNode
                ];

                queue.push(`${child[0]}`);
            }
        });
    }
    graph[destination].sequence = [...graph[destination].sequence, destination];

    return graph[destination].sequence;
};

/*
                  1 
               5     8 
             13 6 0 7  11
              20
             3
          
          {
            1: [[5,17],[8,3]],
            5: [[13,7],[6,1],[1,17]],
            8 :[[7,5],[11,1],[1,3]],
            13:[[20,1],[5,7],
            6: [[20,5],[0,3],[5,1]],
            0: [[6,3],[7,1]],
            7: [[0,1],[11,4]],
            11: [[8,1],[7,4]],
            20: [[13,1],[6,5],[3,27]],
            3: [[20,27]]
          }
         .....
         object: 
         rootNode: 
         currentNode: 
         queue: 
         
         1: {0,[1]}
         5:{13,[1,8,7,0,6,5]}
         8:{3,[1,8]}
         13:{18,[1,8,7,0,6,20,13]}
         6:{12,[1,8,7,0,6]}
         7: {8,[1,8,7]}
         11: {4,[1,8,11]}
         20: {17,[1,8,7,0,6,20]}
         0: {9,[1,8,7,0]}
         3: {44,[1,8,7,0,6,20]}
         
         
        while queue !empty
         check if (current dist + difference) < child distance
          {
            update child value
            child sequenc= [...parentSeq,child]
          if not in queue  add Child to queue
          }
          return object[destination]
          ...........
          
         
 */
export const Astar = (
    tree,
    rootNode,
    destination,
    queue = [rootNode],
    visited = []
) => {
    const or = rootNode;
    const graph = {};
    let dY = Math.floor(Number(destination) / 20);
    let dX = Number(destination) % 20;
    for (let i = 0; i < tree.length; i++) {
        let ch = [];

        for (let j = 0; j < tree[i].length; j++) {
            ch.push([Number(tree[i][j]), 1]);
        }
        let iY = Math.floor(i / 20);
        let iX = i % 20;
        let h = Math.sqrt(Math.pow(iY - dY, 2) + Math.pow(iX - dX, 2));
        graph[`${i}`] = {
            value: 999999999,
            sequence: [],
            children: [...ch],
            heuristic: h
        };
    }
    graph[rootNode].value = 0;

    while (queue.length !== 0 && graph[rootNode].heuristic !== 0) {
        queue = queue.filter(node => {
            return node !== rootNode;
        });
        let min = 999999999;
        let nRoot = rootNode;
        graph[rootNode].children.forEach(child => {
            if (visited.indexOf(`${child[0]}`) === -1) {
                graph[`${child[0]}`].value = graph[rootNode].value + child[1];
                graph[`${child[0]}`].sequence = [
                    ...graph[rootNode].sequence,
                    rootNode
                ];
                visited.push(`${child[0]}`);
                queue.push(`${child[0]}`);
            }
        });

        if (queue.length === 0) alert("");
        queue.forEach(prospect => {
            if (graph[prospect].value + graph[prospect].heuristic < min) {
                min = graph[prospect].value + graph[prospect].heuristic;
                nRoot = prospect;
            }
        });
        rootNode = nRoot;
    }

    return graph[destination].sequence;
};
/*
tree: {"1":{h: 5, g: 0,
       prev: "", 
       children: ["2",6],["4",1]},
       "2":{h: 3, g: 0,
       prev: "", 
       children: ["7",1],["2",4]}
  
}
rootNode: "1"
destination: "100"
*/
