const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;
graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};

// console.log(Object.keys(graph["start"]));
// console.log(graph["start"]["a"]);

const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

const parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = null;

const processed = [];

node = find_lowest_cost_node(costs)         // Найти узел с наименьшей стоимостью среди необработанных
while (node !== null) {                     // Если обработаны все узлы, цикл while завершен
    const cost = costs[node];
    const neighbors = graph[node];
    for (let n in neighbors) {              // Перебрать всех соседей текущего узла
        new_cost = cost + neighbors[n]
        if (costs[n] > new_cost) {          // Если к соседу можно быстрее добраться через текущий узел ... 
            costs[n] = new_cost;            // ...обновить стоимость для этого узла
            parents[n] = node;              // Этот узел становится новым родителем для соседа
        }
    }
    processed.push(node);                   // Узел помечается как обработанный
    node = find_lowest_cost_node(costs);    // Найти следующий узел для обработки и повторить цикл
}

function find_lowest_cost_node(costs) {
    lowest_cost = Infinity;
    lowest_cost_node = null;
    for (let node in costs) {                                           // Перебрать все узлы
        cost = costs[node];
        if (cost < lowest_cost && processed.indexOf(node) === -1) {     // Если это узел с наименьшей стоимостью из уже виденных и он еще не был обработан... 
            lowest_cost = cost                                          // он назначается новым узлом с наименьшей стоимостью
            lowest_cost_node = node
        }
    }                                  
    return lowest_cost_node 
}

console.log(JSON.stringify(parents, '', 2));
console.log(JSON.stringify(costs, '', 2));
let path = 'fin';
makePath(parents['fin']);
console.log(path);

function makePath(prop) {
    path += ` <--- ${prop}`;
    if (prop === 'start') {
        return;
    } else {
        makePath(parents[prop]);
    }
}