'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewEntry = function (_React$Component) {
  _inherits(NewEntry, _React$Component);

  function NewEntry(props) {
    _classCallCheck(this, NewEntry);

    var _this = _possibleConstructorReturn(this, (NewEntry.__proto__ || Object.getPrototypeOf(NewEntry)).call(this, props));

    _this.state = {
      year: '',

      make: '',
      model: '',
      task: '',
      tools: '',
      notes: '',
      url: ''
    };
    return _this;
  }

  _createClass(NewEntry, [{
    key: 'onChange',
    value: function onChange(event) {
      console.log(this.state);
      event.preventDefault();

      var name = event.target.name;
      var value = event.target.value;

      this.state[name] = value;

      this.setState({ name: name });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.onEnter(this.state);
      alert('Task has been logged');
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'What did you complete today?'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this) },
          React.createElement(
            'label',
            null,
            ' Year:',
            React.createElement('input', { type: 'text', name: 'year', placeholder: 'year', value: this.state.year, onChange: this.onChange.bind(this) })
          ),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            ' Make:',
            React.createElement('input', { type: 'text', name: 'make', placeholder: 'make', value: this.state.make, onChange: this.onChange.bind(this) })
          ),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            ' Model:',
            React.createElement('input', { type: 'text', name: 'model', placeholder: 'model', value: this.state.model, onChange: this.onChange.bind(this) })
          ),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            ' Task:',
            React.createElement('input', { type: 'text', name: 'task', placeholder: 'task', value: this.state.task, onChange: this.onChange.bind(this) })
          ),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            ' Tools:',
            React.createElement('input', { type: 'text', name: 'tools', placeholder: 'tools', value: this.state.tools, onChange: this.onChange.bind(this) })
          ),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            ' Notes:',
            React.createElement('input', { type: 'text', name: 'notes', placeholder: 'notes', value: this.state.notes, onChange: this.onChange.bind(this) })
          ),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            ' Best Resource URL:',
            React.createElement('input', { type: 'text', name: 'url', placeholder: 'url', value: this.state.url, onChange: this.onChange.bind(this) })
          ),
          React.createElement('br', null),
          React.createElement('input', { className: 'btn btn-primary', type: 'submit', value: 'Submit' })
        )
      );
    }
  }]);

  return NewEntry;
}(React.Component);

window.NewEntry = NewEntry;

// ReactDOM.render(<NewEntry />, document.getElementById('newEntry'))
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvTmV3RW50cnkuanN4Il0sIm5hbWVzIjpbIk5ld0VudHJ5IiwicHJvcHMiLCJzdGF0ZSIsInllYXIiLCJtYWtlIiwibW9kZWwiLCJ0YXNrIiwidG9vbHMiLCJub3RlcyIsInVybCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJvbkVudGVyIiwiYWxlcnQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwib25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLOztBQUdYQyxZQUFNLEVBSEs7QUFJWEMsYUFBTyxFQUpJO0FBS1hDLFlBQU0sRUFMSztBQU1YQyxhQUFPLEVBTkk7QUFPWEMsYUFBTyxFQVBJO0FBUVhDLFdBQUs7QUFSTSxLQUFiO0FBRmlCO0FBWWxCOzs7OzZCQUVRQyxLLEVBQU87QUFDZEMsY0FBUUMsR0FBUixDQUFZLEtBQUtWLEtBQWpCO0FBQ0FRLFlBQU1HLGNBQU47O0FBRUEsVUFBSUMsT0FBT0osTUFBTUssTUFBTixDQUFhRCxJQUF4QjtBQUNBLFVBQUlFLFFBQVFOLE1BQU1LLE1BQU4sQ0FBYUMsS0FBekI7O0FBR0EsV0FBS2QsS0FBTCxDQUFXWSxJQUFYLElBQW1CRSxLQUFuQjs7QUFFQSxXQUFLQyxRQUFMLENBQWMsRUFBQ0gsVUFBRCxFQUFkO0FBQ0Q7OztpQ0FFWUosSyxFQUFPO0FBQ2xCQSxZQUFNRyxjQUFOO0FBQ0EsV0FBS1osS0FBTCxDQUFXaUIsT0FBWCxDQUFtQixLQUFLaEIsS0FBeEI7QUFDQWlCLFlBQU0sc0JBQU47QUFFRDs7OzZCQUVROztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtuQixLQUFMLENBQVdDLElBQXBFLEVBQTBFLFVBQVUsS0FBS21CLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFwRjtBQUROLFdBREY7QUFHVSx5Q0FIVjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtuQixLQUFMLENBQVdFLElBQXBFLEVBQTBFLFVBQVUsS0FBS2tCLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFwRjtBQUROLFdBTEY7QUFPVSx5Q0FQVjtBQVNFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEIsRUFBZ0MsYUFBWSxPQUE1QyxFQUFvRCxPQUFPLEtBQUtuQixLQUFMLENBQVdHLEtBQXRFLEVBQTZFLFVBQVUsS0FBS2lCLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF2RjtBQUROLFdBVEY7QUFXVSx5Q0FYVjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtuQixLQUFMLENBQVdJLElBQXBFLEVBQTBFLFVBQVUsS0FBS2dCLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFwRjtBQUROLFdBYkY7QUFlVSx5Q0FmVjtBQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUNNLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLGFBQVksT0FBNUMsRUFBb0QsT0FBTyxLQUFLbkIsS0FBTCxDQUFXSyxLQUF0RSxFQUE2RSxVQUFVLEtBQUtlLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF2RjtBQUROLFdBakJGO0FBbUJVLHlDQW5CVjtBQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUNNLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLGFBQVksT0FBNUMsRUFBb0QsT0FBTyxLQUFLbkIsS0FBTCxDQUFXTSxLQUF0RSxFQUE2RSxVQUFVLEtBQUtjLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF2RjtBQUROLFdBckJGO0FBdUJVLHlDQXZCVjtBQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUNNLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLEtBQXhCLEVBQThCLGFBQVksS0FBMUMsRUFBZ0QsT0FBTyxLQUFLbkIsS0FBTCxDQUFXTyxHQUFsRSxFQUF1RSxVQUFVLEtBQUthLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFqRjtBQUROLFdBekJGO0FBMkJVLHlDQTNCVjtBQTZCWSx5Q0FBTyxXQUFVLGlCQUFqQixFQUFtQyxNQUFLLFFBQXhDLEVBQWlELE9BQU0sUUFBdkQ7QUE3Qlo7QUFGRixPQURGO0FBcUNEOzs7O0VBMUVvQkUsTUFBTUMsUzs7QUFnRjdCQyxPQUFPekIsUUFBUCxHQUFrQkEsUUFBbEI7O0FBRUEiLCJmaWxlIjoiTmV3RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOZXdFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB5ZWFyOiAnJyAsXG5cbiAgICAgIG1ha2U6ICcnLFxuICAgICAgbW9kZWw6ICcnLFxuICAgICAgdGFzazogJycsXG4gICAgICB0b29sczogJycsXG4gICAgICBub3RlczogJycsXG4gICAgICB1cmw6ICcnXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cblxuICAgIHRoaXMuc3RhdGVbbmFtZV0gPSB2YWx1ZVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7bmFtZX0pXG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25FbnRlcih0aGlzLnN0YXRlKVxuICAgIGFsZXJ0KCdUYXNrIGhhcyBiZWVuIGxvZ2dlZCcpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPldoYXQgZGlkIHlvdSBjb21wbGV0ZSB0b2RheT88L2gyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGxhYmVsPiBZZWFyOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ5ZWFyXCIgcGxhY2Vob2xkZXI9XCJ5ZWFyXCIgdmFsdWU9e3RoaXMuc3RhdGUueWVhcn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBNYWtlOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYWtlXCIgcGxhY2Vob2xkZXI9XCJtYWtlXCIgdmFsdWU9e3RoaXMuc3RhdGUubWFrZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvbGFiZWw+PGJyIC8+XG5cbiAgICAgICAgICA8bGFiZWw+IE1vZGVsOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtb2RlbFwiIHBsYWNlaG9sZGVyPVwibW9kZWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tb2RlbH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBUYXNrOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrXCIgcGxhY2Vob2xkZXI9XCJ0YXNrXCIgdmFsdWU9e3RoaXMuc3RhdGUudGFza30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvbGFiZWw+PGJyIC8+XG5cbiAgICAgICAgICA8bGFiZWw+IFRvb2xzOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0b29sc1wiIHBsYWNlaG9sZGVyPVwidG9vbHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS50b29sc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBOb3RlczpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibm90ZXNcIiBwbGFjZWhvbGRlcj1cIm5vdGVzXCIgdmFsdWU9e3RoaXMuc3RhdGUubm90ZXN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBCZXN0IFJlc291cmNlIFVSTDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXJsXCIgcGxhY2Vob2xkZXI9XCJ1cmxcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cmx9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG53aW5kb3cuTmV3RW50cnkgPSBOZXdFbnRyeTtcblxuLy8gUmVhY3RET00ucmVuZGVyKDxOZXdFbnRyeSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0VudHJ5JykpIl19