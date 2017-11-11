

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };


  }

  render () {
    return (
      <div>
      <h1>Welcome to ShadeTree</h1>
    </div>)
  }

}


ReactDOM.render(<App />, document.getElementById('app'));