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
      event.preventDefault();

      var name = event.target.name;
      var value = event.target.value.toUpperCase();

      this.state[name] = value;

      this.setState({ name: name });
      console.log(this.state);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL05ld0VudHJ5LmpzeCJdLCJuYW1lcyI6WyJOZXdFbnRyeSIsInByb3BzIiwic3RhdGUiLCJ5ZWFyIiwibWFrZSIsIm1vZGVsIiwidGFzayIsInRvb2xzIiwibm90ZXMiLCJ1cmwiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvbkVudGVyIiwiYWxlcnQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwib25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLOztBQUdYQyxZQUFNLEVBSEs7QUFJWEMsYUFBTyxFQUpJO0FBS1hDLFlBQU0sRUFMSztBQU1YQyxhQUFPLEVBTkk7QUFPWEMsYUFBTyxFQVBJO0FBUVhDLFdBQUs7QUFSTSxLQUFiO0FBRmlCO0FBWWxCOzs7OzZCQUVRQyxLLEVBQU87QUFDZEEsWUFBTUMsY0FBTjs7QUFFQSxVQUFJQyxPQUFPRixNQUFNRyxNQUFOLENBQWFELElBQXhCO0FBQ0EsVUFBSUUsUUFBUUosTUFBTUcsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxXQUFuQixFQUFaOztBQUdBLFdBQUtiLEtBQUwsQ0FBV1UsSUFBWCxJQUFtQkUsS0FBbkI7O0FBRUEsV0FBS0UsUUFBTCxDQUFjLEVBQUNKLFVBQUQsRUFBZDtBQUNBSyxjQUFRQyxHQUFSLENBQVksS0FBS2hCLEtBQWpCO0FBQ0Q7OztpQ0FFWVEsSyxFQUFPO0FBQ2xCQSxZQUFNQyxjQUFOO0FBQ0EsV0FBS1YsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQixLQUFLakIsS0FBeEI7QUFDQWtCLFlBQU0sc0JBQU47QUFFRDs7OzZCQUVROztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtwQixLQUFMLENBQVdDLElBQXBFLEVBQTBFLFVBQVUsS0FBS29CLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFwRjtBQUROLFdBREY7QUFHVSx5Q0FIVjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtwQixLQUFMLENBQVdFLElBQXBFLEVBQTBFLFVBQVUsS0FBS21CLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFwRjtBQUROLFdBTEY7QUFPVSx5Q0FQVjtBQVNFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEIsRUFBZ0MsYUFBWSxPQUE1QyxFQUFvRCxPQUFPLEtBQUtwQixLQUFMLENBQVdHLEtBQXRFLEVBQTZFLFVBQVUsS0FBS2tCLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF2RjtBQUROLFdBVEY7QUFXVSx5Q0FYVjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtwQixLQUFMLENBQVdJLElBQXBFLEVBQTBFLFVBQVUsS0FBS2lCLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFwRjtBQUROLFdBYkY7QUFlVSx5Q0FmVjtBQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUNNLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLGFBQVksT0FBNUMsRUFBb0QsT0FBTyxLQUFLcEIsS0FBTCxDQUFXSyxLQUF0RSxFQUE2RSxVQUFVLEtBQUtnQixRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBdkY7QUFETixXQWpCRjtBQW1CVSx5Q0FuQlY7QUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFDTSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxhQUFZLE9BQTVDLEVBQW9ELE9BQU8sS0FBS3BCLEtBQUwsQ0FBV00sS0FBdEUsRUFBNkUsVUFBVSxLQUFLZSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBdkY7QUFETixXQXJCRjtBQXVCVSx5Q0F2QlY7QUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFDTSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxLQUF4QixFQUE4QixhQUFZLEtBQTFDLEVBQWdELE9BQU8sS0FBS3BCLEtBQUwsQ0FBV08sR0FBbEUsRUFBdUUsVUFBVSxLQUFLYyxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBakY7QUFETixXQXpCRjtBQTJCVSx5Q0EzQlY7QUE2QlkseUNBQU8sV0FBVSxpQkFBakIsRUFBbUMsTUFBSyxRQUF4QyxFQUFpRCxPQUFNLFFBQXZEO0FBN0JaO0FBRkYsT0FERjtBQXFDRDs7OztFQTFFb0JFLE1BQU1DLFM7O0FBZ0Y3QkMsT0FBTzFCLFFBQVAsR0FBa0JBLFFBQWxCOztBQUVBIiwiZmlsZSI6Ik5ld0VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTmV3RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgeWVhcjogJycgLFxuXG4gICAgICBtYWtlOiAnJyxcbiAgICAgIG1vZGVsOiAnJyxcbiAgICAgIHRhc2s6ICcnLFxuICAgICAgdG9vbHM6ICcnLFxuICAgICAgbm90ZXM6ICcnLFxuICAgICAgdXJsOiAnJ1xuICAgIH07XG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG5cbiAgICB0aGlzLnN0YXRlW25hbWVdID0gdmFsdWVcblxuICAgIHRoaXMuc2V0U3RhdGUoe25hbWV9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25FbnRlcih0aGlzLnN0YXRlKVxuICAgIGFsZXJ0KCdUYXNrIGhhcyBiZWVuIGxvZ2dlZCcpO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPldoYXQgZGlkIHlvdSBjb21wbGV0ZSB0b2RheT88L2gyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGxhYmVsPiBZZWFyOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ5ZWFyXCIgcGxhY2Vob2xkZXI9XCJ5ZWFyXCIgdmFsdWU9e3RoaXMuc3RhdGUueWVhcn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBNYWtlOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYWtlXCIgcGxhY2Vob2xkZXI9XCJtYWtlXCIgdmFsdWU9e3RoaXMuc3RhdGUubWFrZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBNb2RlbDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibW9kZWxcIiBwbGFjZWhvbGRlcj1cIm1vZGVsXCIgdmFsdWU9e3RoaXMuc3RhdGUubW9kZWx9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD48YnIgLz5cblxuICAgICAgICAgIDxsYWJlbD4gVGFzazpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza1wiIHBsYWNlaG9sZGVyPVwidGFza1wiIHZhbHVlPXt0aGlzLnN0YXRlLnRhc2t9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBUb29sczpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidG9vbHNcIiBwbGFjZWhvbGRlcj1cInRvb2xzXCIgdmFsdWU9e3RoaXMuc3RhdGUudG9vbHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD48YnIgLz5cblxuICAgICAgICAgIDxsYWJlbD4gTm90ZXM6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5vdGVzXCIgcGxhY2Vob2xkZXI9XCJub3Rlc1wiIHZhbHVlPXt0aGlzLnN0YXRlLm5vdGVzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9sYWJlbD48YnIgLz5cblxuICAgICAgICAgIDxsYWJlbD4gQmVzdCBSZXNvdXJjZSBVUkw6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVybFwiIHBsYWNlaG9sZGVyPVwidXJsXCIgdmFsdWU9e3RoaXMuc3RhdGUudXJsfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9sYWJlbD48YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxud2luZG93Lk5ld0VudHJ5ID0gTmV3RW50cnk7XG5cbi8vIFJlYWN0RE9NLnJlbmRlcig8TmV3RW50cnkgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdFbnRyeScpKSJdfQ==