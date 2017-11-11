

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
      currentProject: {},
      motivation: ''

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
      console.log('yay', results)
      console.log(typeof results.data)
      if (results.data.length < 1) {
        alert("no records found for that task")
      } else {
      this.setState({currentProject : results.data[0]})
      this.setState({motivation: 'Go turn some wrenches!!!'})
      }

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

    return (
      <div>
        <h1>Welcome to ShadeTree</h1>
        <NewEntry onEnter={this.enter.bind(this)} />
        <Search onSearch={this.search.bind(this)} searchFields = {this.state.searchFields}
          onChange = {this.onChange.bind(this)} />
        <Task currentProject = {this.state.currentProject}
          wrenches = {this.state.motivation} />

      </div>
    );
  }

}




window.App = App;

ReactDOM.render(<App />, document.getElementById('app'))
