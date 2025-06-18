// this is pretty much just stablishing equivalences between two types
// i.e. stablishing that B is isomorphic with C
// this also means that a a type belongs to a functor, a functor to a monad, a monad to a category etc
// in some sense is the concept of having levels
type Eq<A, B, C> = [B] extends [C] // If B is assignable to C
  ? [C] extends [B] // AND C is assignable to B
    ? A // Then return A
    : never // Else (they are not mutually assignable), return never
  : never; // Else (B is not assignable to C), return never

// i have to encode that morphisms respect composition
// and identity?
// type Morphisms<M extends T1, A extends Kind<M,A>, B>

export type Identity<T> = (x: T) => T;

// if i parametrize this over A, B, C i lose the expressivity of <T> being the main type
// so with Eq we do structural equality over A, B, C, without losing T
export type Compose<T> = <
  // here pretty much we say they're all equiv
  A extends T,
  B extends Eq<A, A, B>,
  C extends Eq<B, B, C>
>(
  g: (b: B) => C,
  f: (a: A) => B
) => (a: A) => C;

// the idea is to make a category a "higher"
// type level than morphisms
// this is because we want
// to express structure at the type level
export interface IFreeCategory<T> {
  id: Identity<T>;
  compose: Compose<T>;
}

interface FreeCategoryConstructor<T> {
  morphisms: IFreeCategory<T>;
}

export const FreeCategory = <T>(
  compose: Compose<T>,
  id: Identity<T>
): IFreeCategory<T> => {
  const category: FreeCategoryConstructor<T> = {
    morphisms: { compose, id },
  };

  return { compose: category.morphisms.compose, id: category.morphisms.id };
};
