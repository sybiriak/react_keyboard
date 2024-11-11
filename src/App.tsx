import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.savePressedKey(event.key);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.savePressedKey(event.key);
    });
  }

  savePressedKey(key: string) {
    this.setState({ pressedKey: key });
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
