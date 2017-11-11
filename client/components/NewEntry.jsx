class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '' ,

      make: '',
      model: '',
      task: '',
      tools: '',
      notes: '',
      url: ''
    };
  }

  onChange(event) {
    console.log(this.state)
    event.preventDefault();

    var name = event.target.name;
    var value = event.target.value;


    this.state[name] = value

    this.setState({name})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onEnter(this.state)
    alert('Task has been logged');

  }

  render() {

    return (
      <div>
        <h2>What did you complete today?</h2>
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

          <label> Tools:
                <input type="text" name="tools" placeholder="tools" value={this.state.tools} onChange={this.onChange.bind(this)} />
          </label><br />

          <label> Notes:
                <input type="text" name="notes" placeholder="notes" value={this.state.notes} onChange={this.onChange.bind(this)}/>
          </label><br />

          <label> Best Resource URL:
                <input type="text" name="url" placeholder="url" value={this.state.url} onChange={this.onChange.bind(this)}/>
          </label><br />

                    <input className="btn btn-primary" type="submit" value="Submit" />
           </form>

      </div>
    )
  }
}




window.NewEntry = NewEntry;

// ReactDOM.render(<NewEntry />, document.getElementById('newEntry'))