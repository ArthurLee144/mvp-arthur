class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '' ,
      make: '',
      model: '',
      task: '',
    };
  }

onChange(event) {
    event.preventDefault();
    // console.log(props.searchFields)

    var name = event.target.name;
    var value = event.target.value.toUpperCase();



    this.state[name] = value
    this.setState({name})



  }



  handleSubmit(event) {
    // alert('db has been searched');
    event.preventDefault();
    this.props.onSearch(this.state)


  }

  render() {
  return (
    <div>
      <h2>What are you working on?</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Year:
                <input type="text" name="year" placeholder="year" value={this.state.year} onChange={this.onChange.bind(this)} />
          </label><br />

          <label> Make:
                <input type="text" name="make" placeholder="make" value={this.state.make} onChange={this.onChange.bind(this)}/>
          </label><br />

          <label> Model:
                <input type="text" name="model" placeholder="model" value={this.state.model} onChange={this.onChange.bind(this)} />
          </label><br />

          <label> Task:
                <input type="text" name="task" placeholder="task" value={this.state.task} onChange={this.onChange.bind(this)}/>
          </label><br />

          <input className="btn btn-primary" type="submit" value="Search" />
        </form>
    </div>
  )
  }
}

window.Search = Search;