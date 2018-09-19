import { h, render, Component } from 'preact-8.2.9.min'

export class MyComponent extends Component<{}, {}> {
  render() {
    return h(MyComponent2, {})
  }
}

export interface Props {
  foo: number
}

export class MyComponent2 extends Component<Props, {}> {
  render(props: Props) {
    return h('div', {}, 'It worked!')
  }
}
