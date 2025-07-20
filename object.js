let obj = {
    firstname: "jaskirat",
    middlename: "singh",
    endname: "gogia"
};
function my(obj1) {
    let count = 0;
    for (let key in obj1) {
        count++;
    }
    return count;
}
let c = my(obj);
console.log(c);