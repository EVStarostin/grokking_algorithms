/* 
Без рекурсии
function look_for_key(main_box) {
    pile = main_box.make_a_pile_to_look_through();
    while (pile is not empty) {
        bох = pile.grab_a_box();
        for (let item of bох) {
            if (item.is_a_box()) {
                pile.append(item);
            } else if (item.is_a_key()) {
                console.log("found the key!");
            }
        }
    }   
}   
*/        
/*     
С рекурсией
function look_for_key(bох) {
    for (let item of bох) {
        if (item.is_a_box()) {
            look_for _key(item)
        } else if (item.is_a_key()) {
            console.log("found the key!");
        }
    }
}
*/

function countdown(i) {
    console.log(i);
    if (i <= 0) { // Базовый случай
        return;
    } else { // Рекурсивный случай
        countdown(i-1);
    }
}

countdown(10);

function fact(x) {
    if (x == 1) {
        return 1
    } else {
        return x * fact(x-1) 
    }
}

let x = fact(5);
console.log(x);

