// 1) Create two classes [1] MyDate (day, month, year) and [2] MyPoint (x, y)
// 2) Create a "main" function and within it construct two variables "d" 
//    (MyDate with 31, 12, 2016) and "p" (MyPoint with 5.5, 10)
// 3) Add a method called "printConstructor" to both MyDate and MyPoint 
//    that dumps the constructors for both d and p into the console. 
//
//    The expected output in console should be the following strings:
//       "new MyDate(31, 12, 2016)"
//       "new MyPoint(5.5, 10)"

// 4) Refactor the above code to use the visitor pattern to print both 
//    constructors. See the following links:
//       https://dzone.com/articles/design-patterns-visitor 
//       https://en.wikipedia.org/wiki/Visitor_pattern

class Visitor {
    visitMyDate(myDate) {
        console.log(`new MyDate(${myDate.day}, ${myDate.month}, ${myDate.year})`);
    }

    visitMyPoint(myPoint) {
        console.log(`new MyPoint(${myPoint.x}, ${myPoint.y})`);
    }
}

class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    accept(visitor) {
        visitor.visitMyDate(this);
    }
}

class MyPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    accept(visitor) {
        visitor.visitMyPoint(this);
    }
}

function main() {
    const d = new MyDate(31, 12, 2016);
    const p = new MyPoint(5.5, 10);
    const visitor = new Visitor();

    d.accept(visitor);
    p.accept(visitor);
}

main();
