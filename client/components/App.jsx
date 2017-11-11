

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      searchField: ''
    };


  }

  render () {
    return (
      <div>
        <h1>Welcome to ShadeTree</h1>
      </div>
    );
  }

}



window.App = App;

ReactDOM.render(<App />, document.getElementById('app'))
