1. `yarn install --pure-lockfile`
2. `tsc`
3. Why does it do this?

```
$ tsc
src/mycomponent.ts:5:14 - error TS2345: Argument of type 'typeof MyComponent2' is not assignable to parameter of type 'string'.

5     return h(MyComponent2, {})
```

4. Answer: because `MyComponent` isn't passing the required prop `foo` to `MyComponent2`.
   Change it to this and it will work:

```
export class MyComponent extends Component<{}, {}> {
  render() {
    return h(MyComponent2, {foo: 1})
  }
}
```
