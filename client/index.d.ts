// FSA (Flux Standart Action - https://github.com/redux-utilities/flux-standard-action)
interface FSA<T extends string, P = unknown, E = boolean, M = unknown> {
  type: T;
  payload?: P;
  error?: E;
  meta?: M;
}
