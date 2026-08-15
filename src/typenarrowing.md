Type narrowing in TypeScript is the process of making a variable's type more specific within a certain scope. It allows TypeScript to safely determine which properties and methods are available.

Why is it needed?

Suppose you have a variable that can hold multiple types:

function print(value: string | number) {
  console.log(value);
}

Here, value could be either a string or a number, so you can't call string-specific methods directly:

function print(value: string | number) {
  console.log(value.toUpperCase()); // ❌ Error
}

TypeScript complains because number doesn't have toUpperCase().

1. Narrowing with typeof

The most common way:

function print(value: string | number) {
  if (typeof value === "string") {
    // value is narrowed to string
    console.log(value.toUpperCase());
  } else {
    // value is narrowed to number
    console.log(value.toFixed(2));
  }
}

Inside each branch, TypeScript knows the exact type.

2. Narrowing with instanceof

Useful for classes.

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

3. Narrowing with the in operator

Check whether a property exists.

type Car = {
  drive: () => void;
};

type Bird = {
  fly: () => void;
};

function move(vehicle: Car | Bird) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.fly();
  }
}
4. Truthiness narrowing

TypeScript can remove null and undefined.

function greet(name: string | null) {
  if (name) {
    // name is string
    console.log(name.toUpperCase());
  }
}

Without the check:

name.toUpperCase(); // ❌ Error
5. Equality narrowing
function compare(a: string | number, b: string) {
  if (a === b) {
    // a must be string here
    console.log(a.toUpperCase());
  }
}

Since b is a string, a === b means a must also be a string.

6. User-defined type guards

You can create your own narrowing function.

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(animal: Fish | Bird): animal is Fish {
  return "swim" in animal;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

The return type animal is Fish tells TypeScript that isFish() narrows the type.

7. Discriminated unions (recommended)

A common TypeScript pattern is to include a common "tag" property.

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Shape = Circle | Square;

function area(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  return shape.side ** 2;
}

Checking kind narrows the type automatically.

Before vs. After Narrowing

Without narrowing:

type User = {
  name: string;
};

type Admin = {
  permissions: string[];
};

function process(person: User | Admin) {
  console.log(person.permissions); // ❌ Error
}

With narrowing:

function process(person: User | Admin) {
  if ("permissions" in person) {
    console.log(person.permissions); // ✅ Admin
  } else {
    console.log(person.name); // ✅ User
  }
}
Summary

Type narrowing lets TypeScript refine a broad type (such as a union) into a more specific one based on runtime checks. Common narrowing techniques include: