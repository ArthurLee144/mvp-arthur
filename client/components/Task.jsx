class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Task props 1', this.props.currentProject)
    return (
      <div><h2>Current Project: {this.props.currentProject.year} {this.props.currentProject.make} {this.props.currentProject.model} {this.props.currentProject.task}</h2>

        <div><b>You will need: </b>{this.props.currentProject.tools}
        </div>
        <div><b>Here are your notes: </b>{this.props.currentProject.notes}
        </div>
        <div><b>This is your best resource: </b><a href={this.props.currentProject.url} >{this.props.currentProject.url}</a>
        </div>
        <div>
        <h3>{this.props.wrenches}</h3>
        </div>
      </div>



      )
  }
}



  window.Task = Task;