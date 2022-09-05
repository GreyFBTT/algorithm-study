// class 문법 개요
//// 간단한 메소드 추가

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOU ARE EXPELLED";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    // 직접 value에 접근할 수 있지만 class 문법 자체가 다른 사람이 사용하게끔 만들어놓은 목적이기 떄문에
    // 메소드를 이용하게끔 한다.
    addScore() {
        this.scores.push(score);
        return this.scores;
    }

    calAverage() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum / this.scores.length;
    }

    //static
    static EnrollStudents() {
        return "ENROLLING STUDENTS";
    }
}

let firstStudent = new Student("Colt", "Steele");
firstStudent.scores.push(30);
console.log(firstStudent.scores);
console.log(Student.EnrollStudents());

//static example
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
