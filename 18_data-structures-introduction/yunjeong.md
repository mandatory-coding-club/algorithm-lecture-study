## 자료 구조란?

- 값(values)들의 집합(collections)과 값들 사이의 관계, 그리고 그 데이터에 적용할 수 있는 함수와 연산들

## Class

- 객체를 생성하기 위한 청사진
- 속성(property)과 메서드(method)가 미리 정의되어 있음

### Class 문법

- 객체를 생성하기 위한 메서드는 `생성자(constructor)`라고 부른다.
- `new` 키워드로 클래스의 객체(instance)를 생성할 수 있다.

```jsx
class Student {
	constructor (firstName, lastName, year) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year;
	}
}

let student = new Student("Emil", "Katz", 3);
```

## Instance Methods

- 클래스를 사용해 생성된 개별 객체(instance)에 적용되는 메서드
- 사용법 : `생성된 객체 변수.메서드()`

## Class Methods

- `static` 키워드는 static 메소드를 정의할 수 있다.
- 클래스 메서드는 객체 생성 없이 클래스 자체에서 호출할 수 있다.
- 사용법 : `클래스명.메서드()`
