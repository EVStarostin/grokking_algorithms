/* 
Представьте, что вы выращиваете манго. Бы ищете продавца, который
будет продавать ваши замечательные манго. А может, продавец найдется
среди ваших контактов на Facebook? Для начала стоит поискать среди
друзей. 
*/

const GRAPH = {}
GRAPH["you"] = ["alice", "bob", "claire"]
GRAPH["bob"] = ["anuj", "peggy"]
GRAPH["alice"] = ["peggy"]
GRAPH["claire"] = ["thom", "jonny"]
GRAPH["anuj"] = []
GRAPH["peggy"] = []
GRAPH["thom"] = []
GRAPH["jonny"] = []

function person_is_seller(person) {
    return person[person.length-1] === 'm'
}

function search(name) {
    search_queue = []; // Соэдание новой очереди 
    search_queue.push(...GRAPH[name]); // Все соседи добавляются в очередь поиска
    searched = []; // Этот массив испопьзуется дпя отспеживания уже проверенных пюдей 
    while (search_queue) { // Пока очередь не пуста ... 
        person = search_queue.shift(); // из очереди извлекается первый человек
        if (searched.indexOf(person) === -1) { // Чеповек проверяется топько в том спучае, еспи он не проверяпся ранее
            if (person_is_seller(person)) { // Проверяем, является ли этот человек продавцом манго 
                console.log(person +" is а mango seller!") // Да, это продавец манго 
                return true
            } else {
                search_queue.push(...GRAPH[person]) // Нет, не является. Все друзья этого человека добавляются в очередь поиска
                searched.push(person) // Чеповек помечается как уже проверенный
            }
        }
    }
    return False // Если выполнение дошло до этой строки, значит, в очереди нет продавца манго 
}

search("you")   