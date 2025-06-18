import {
  Compose,
  FreeCategory,
  FreeCategoryInterface,
  Identity,
} from "./FreeCategory/FreeCategory";

function main() {
  const composeNumber: Compose<number> = (g, f) => (a) => g(f(a));
  const g = (b: number) => b * 2;
  const f = (a: number) => a * 2;

  const idNumber: Identity<number> = (a) => a;

  const NumberFreeCategory: FreeCategoryInterface<number> = FreeCategory(
    composeNumber,
    idNumber
  );

  // aliasing makes it look better whithout losing verbosity
  const { compose } = NumberFreeCategory;

  console.log(compose(g, f)(2));
}

main();
