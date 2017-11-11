

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      searchFields: {
        year: '',
        make: '',
        model: '',
        task: ''
      },
      currentProject: {}

    };


  }

  onChange(event) {
    event.preventDefault();
    // console.log(props.searchFields)

    var name = event.target.name;
    var value = event.target.value;
 console.log(name)


    this.state.searchFields[name] = value
console.log(this.state.searchFields)


  }

  search (searchField) {

    event.preventDefault();
    axios.get('/guides', {
      params: {
        year:searchField.year,
        make:searchField.make,
        model:searchField.model,
        task:searchField.task
      }
    }).then((results) => {
      console.log('yay')
      this.state.currentProject = results.data
      console.log(this.state.currentProject)
    })
  }



  enter (inputs) {
    console.log('sending post request to server')
    console.log(inputs)
    axios.post('/guides', {
      year: inputs.year,
      make: inputs.make,
      model: inputs.model,
      task: inputs.task,
      tools: inputs.tools,
      notes: inputs.notes,
      url: inputs.url
    }).then(function(results){
      console.log(results)
    })
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <h1>Welcome to ShadeTree</h1>
        <NewEntry onEnter={this.enter.bind(this)} />
        <Search onSearch={this.search.bind(this)} searchFields = {this.state.searchFields}
          onChange = {this.onChange.bind(this)} />
      </div>
    );
  }

}




window.App = App;

ReactDOM.render(<App />, document.getElementById('app'))
