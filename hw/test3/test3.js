/*
===============
Submit your answers where you see the question marks. See the example below:
===============
 */
// Question:
var a = null;
var b = {name: "Mustafa", role: "Sr. Front End Developer"}
console.log(a == null); // ?
console.log(b.name); // ?
console.log(b.id); // ?

// Your answer should be in this format:
var a = null;
var b = {name: "mustafa", role: "Sr. Front End Developer"}
console.log(a == null); // true  (type: bool)
console.log(b.name); // "Mustafa" (type: string)
console.log(b.id); // undefined





/*
===============
Question: The difference between == and ===
===============
 */
(function () {
    console.log(1 == '1'); // TRUE,number value equals to string value
    console.log(1 === [1]); // FALSE, number to array mismatch
    console.log(1 == true); // TRUE, 1 means true on logic
    console.log(0 == ''); // TRUE,null value
    console.log(0 === '0'); // FALSE, type mismatch
    console.log(0 == false); // TRUE, 0 means false on logic
})();

/*
===============
Question: Differences between a variable that is: null, undefined or undeclared
===============
 */
(function () {
    var foo;
    console.log(foo); // Undefined value
    console.log(foo === undefined); // TRUE
    console.log(typeof foo === 'undefined'); //TRUE, typeof function returns string type 

    console.log(foo == null); // TRUE, value is empty

    function bar() {
    }

    var baz = bar();
    console.log(baz); // Undefined empty function.
})();

/*
===============
Question: .map()
===============
 */
(function () {
    const a = [1, 2, 3];
    const doubled = a.map(num => {
        return num * 2;
    });
    console.log(doubled); // ARRAY[2,4,6] because of map creates new array multiplying by 2. 
})();

/*
===============
Question: hoisting
===============
 */
(function () {
    console.log(foo); // undefined because declaration done after the call.
    var foo = 1;
    console.log(foo); //  1
})();
(function () {
    console.log(bar); // Throws Error because declaration done after.
    let bar = 2;
    console.log(bar); //  2
})();
(function () {
    console.log(foo); // undefined we dont call the function.
    foo(); // output is FOOOOO because function is hoisted.
    function foo() {
        console.log('FOOOOO');
    }

    console.log(foo); // output is FOOOOO after function created foo element will be FOOOO.
})();
(function () {
    console.log(bar); // bar variable is hoisted but UNDEFINED.
    bar(); // function cannot be seen because bar is hoisted.
    var bar = function () {
        console.log('BARRRR');
    };
    console.log(bar); // function cannot created and assigned to bar.
})();

/*
===============
Question: Iterate an array, uppercase and reverse the sorting
===============
 */
(function () {
    const names = ['mustafa', 'ahmet', 'mehmet'];
    const transformUppercaseAndReverse = function (names) {
        const uppercase=names.map(a => a.toUpperCase());
		const upperandreversecase=uppercase.reverse();
		return upperandreversecase;
    };
    const result = transformUppercaseAndReverse(names);
    console.log(result);  // Expected output: ['MEHMET', 'AHMET', 'MUSTAFA']
})();

/*
===============
Question: Spread Operator
===============
 */
(function () {
    function addFiveToNumbers(...numbers) {
        var copied=[...numbers];
		var b = copied.map(x => x + 5);
		return b;
    }

    const result = addFiveToNumbers(4, 5, 6, 7, 8, 9, 10);
    console.log(result) // Expected output: [9, 10, 11, 12, 13, 14, 15]
})();

/*
===============
Question: .filter()
===============
 */
(function () {
    const data = [
        {
            id: 1,
            name: "Lorem",
            department: "IT"
        },
        {
            id: 2,
            name: "Ipsum",
            department: "Accounting"
        },
        {
            id: 3,
            name: "Dolor",
            department: "Cargo"
        },
        {
            id: 4,
            name: "Adipiscing",
            department: "IT"
        }
    ];

    function showItUsersOnly(data) {
        // ? write your codes here
        const ans = data.filter(function(dat){
			return dat.department =="IT";
		});

		var ansNames = ans.map(function(person) {
		return "id: "+person.id+"\nname: "+person.name+"\ndepartment:"+person.department+"\n";
		});

		return ansNames;
    }

    const result = showItUsersOnly(data);
    console.log(result)
    /* Expected output:

        {
            id: 1,
            name: "Lorem",
            department: "IT"
        },
        {
            id: 4,
            name: "Adipiscing",
            department: "IT"
        }

    */
})();
