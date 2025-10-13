# 📘 ES2015 Class Syntax 정리

## 🧩 1. 클래스(Class)란?

ES2015(ES6)부터 자바스크립트는 **클래스 문법(class syntax)**을 도입
이는 사실상 **프로토타입 기반 상속(prototype-based inheritance)**을
더 읽기 쉽게 표현한 syntactic sugar, 즉 “문법을 더 달콤하게 만든 설탕 코팅”으로 비유하기도 함.

> ✅ 클래스는 객체를 생성하는 **템플릿(청사진)** 역할을 합니다.

---

## 🏗️ 2. 기본 클래스 정의

### 예제

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);
```

### 📝 설명

* `class` 키워드를 사용하여 클래스를 정의합니다.
* `constructor`는 **인스턴스 생성 시 자동으로 호출**됩니다.
* `this`는 **새로 생성된 인스턴스**를 가리킵니다.
* `new` 키워드로 클래스를 기반으로 한 **객체를 생성**합니다.

---

## 🧠 3. 메서드(Method) 추가

### 예제

```js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0; // 지각 횟수
    this.scores = []; // 점수 배열
  }

  // 전체 이름 반환
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  // 지각 기록
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  // 점수 추가
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  // 평균 계산
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

console.log(firstStudent.fullName()); // "Your full name is Colt Steele"
console.log(firstStudent.markLate()); // "Colt Steele has been late 1 times"
firstStudent.addScore(80);
firstStudent.addScore(95);
console.log(firstStudent.calculateAverage()); // 87.5
```

### 📝 설명

* 클래스 내부에서 `function` 키워드 없이 메서드를 정의할 수 있습니다.
* 메서드는 자동으로 **프로토타입에 등록**됩니다.
* `reduce()`를 사용해 점수의 합을 구한 뒤 평균을 계산할 수 있습니다.

---

## ⚙️ 4. 정적 메서드(Static Method)

### 예제

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // 인스턴스가 아니라 클래스 자체에서 호출되는 메서드
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy); // √(dx² + dy²)
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### 📝 설명

* `static` 키워드로 선언한 메서드는 **인스턴스가 아닌 클래스 자체에서 호출**됩니다.
* `Point.distance()`는 `p1.distance()`로 호출할 수 없습니다.
* 주로 **도우미 함수(utility function)**를 정의할 때 사용합니다.

---

## 🧾 요약 정리

| 개념              | 설명                           |
| --------------- | ---------------------------- |
| **constructor** | 인스턴스 생성 시 자동 실행되는 초기화 함수     |
| **this**        | 생성된 인스턴스 객체를 참조              |
| **메서드**         | 클래스 내 정의 시 자동으로 프로토타입 메서드가 됨 |
| **static 메서드**  | 클래스에서 직접 호출 가능한 메서드 (인스턴스 X) |
| **new 키워드**     | 클래스 인스턴스 생성                  |

---

## 🚀 핵심 포인트

* 클래스 문법은 **프로토타입 기반 문법을 더 직관적으로 표현**한 것.
* 실제 동작은 기존 프로토타입 시스템과 동일함.
* `constructor`, `this`, `static`의 사용 구분을 명확히 이해해야 함.
