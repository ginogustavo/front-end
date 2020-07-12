/**
 * Global scope
 * ------------
 * Every varaibles functions, etc that we declare,  Ex.
 */
let first_name = "Gino";

/**
 * Local scope
 * -----------
 * When we initialize a function inside there is a local scope.
 * 
 * From my Local scope (inside myFunc) I can access whatever there is
 * in Global Scope. ex.
 */
function myFunc(){
    let last_name = "Ureta";
    let full_name = first_name +", "+ last_name;
}

/**
 * However from my Global scope I cannot access variables inside the
 * Local scope.
 * 
 * console.log(last_name);  --> last_name is not defined.
 */