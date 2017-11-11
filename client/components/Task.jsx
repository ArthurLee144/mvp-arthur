class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Task props 1', this.props.currentProject)
    return (
      <div><h2>Current Project: </h2>

        <div> You will need: {this.props.currentProject.tools}
        </div>
        <div> Here are your notes: {this.props.currentProject.notes}
        </div>
        <div> This is your best resource: {this.props.currentProject.url}
        </div>
      </div>



      )
  }
}



  window.Task = Task;