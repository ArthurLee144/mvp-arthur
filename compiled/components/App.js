'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      task: '',
      searchFields: {
        year: '',
        make: '',
        model: '',
        task: ''
      },
      currentProject: {}

    };

    return _this;
  }

  _createClass(App, [{
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      // console.log(props.searchFields)

      var name = event.target.name;
      var value = event.target.value;
      console.log(name);

      this.state.searchFields[name] = value;
      console.log(this.state.searchFields);
    }
  }, {
    key: 'search',
    value: function search(searchField) {
      var _this2 = this;

      event.preventDefault();
      axios.get('/guides', {
        params: {
          year: searchField.year,
          make: searchField.make,
          model: searchField.model,
          task: searchField.task
        }
      }).then(function (results) {
        console.log('yay', _this2);
        // this.state.currentProject = results.data[0]
        _this2.setState({ currentProject: results.data[0] });
        // this.setState
        // console.log('current ', this.state.currentProject)
      });
    }
  }, {
    key: 'enter',
    value: function enter(inputs) {
      console.log('sending post request to server');
      console.log(inputs);
      axios.post('/guides', {
        year: inputs.year,
        make: inputs.make,
        model: inputs.model,
        task: inputs.task,
        tools: inputs.tools,
        notes: inputs.notes,
        url: inputs.url
      }).then(function (results) {
        console.log(results);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Welcome to ShadeTree'
        ),
        React.createElement(NewEntry, { onEnter: this.enter.bind(this) }),
        React.createElement(Search, { onSearch: this.search.bind(this), searchFields: this.state.searchFields,
          onChange: this.onChange.bind(this) }),
        React.createElement(Task, { currentProject: this.state.currentProject })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInRhc2siLCJzZWFyY2hGaWVsZHMiLCJ5ZWFyIiwibWFrZSIsIm1vZGVsIiwiY3VycmVudFByb2plY3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNlYXJjaEZpZWxkIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzdWx0cyIsInNldFN0YXRlIiwiZGF0YSIsImlucHV0cyIsInBvc3QiLCJ0b29scyIsIm5vdGVzIiwidXJsIiwiZW50ZXIiLCJiaW5kIiwic2VhcmNoIiwib25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsb0JBQWM7QUFDWkMsY0FBTSxFQURNO0FBRVpDLGNBQU0sRUFGTTtBQUdaQyxlQUFPLEVBSEs7QUFJWkosY0FBTTtBQUpNLE9BRkg7QUFRWEssc0JBQWdCOztBQVJMLEtBQWI7O0FBRmlCO0FBZWxCOzs7OzZCQUVRQyxLLEVBQU87QUFDZEEsWUFBTUMsY0FBTjtBQUNBOztBQUVBLFVBQUlDLE9BQU9GLE1BQU1HLE1BQU4sQ0FBYUQsSUFBeEI7QUFDQSxVQUFJRSxRQUFRSixNQUFNRyxNQUFOLENBQWFDLEtBQXpCO0FBQ0hDLGNBQVFDLEdBQVIsQ0FBWUosSUFBWjs7QUFHRyxXQUFLVCxLQUFMLENBQVdFLFlBQVgsQ0FBd0JPLElBQXhCLElBQWdDRSxLQUFoQztBQUNKQyxjQUFRQyxHQUFSLENBQVksS0FBS2IsS0FBTCxDQUFXRSxZQUF2QjtBQUdHOzs7MkJBRU9ZLFcsRUFBYTtBQUFBOztBQUVuQlAsWUFBTUMsY0FBTjtBQUNBTyxZQUFNQyxHQUFOLENBQVUsU0FBVixFQUFxQjtBQUNuQkMsZ0JBQVE7QUFDTmQsZ0JBQUtXLFlBQVlYLElBRFg7QUFFTkMsZ0JBQUtVLFlBQVlWLElBRlg7QUFHTkMsaUJBQU1TLFlBQVlULEtBSFo7QUFJTkosZ0JBQUthLFlBQVliO0FBSlg7QUFEVyxPQUFyQixFQU9HaUIsSUFQSCxDQU9RLFVBQUNDLE9BQUQsRUFBYTtBQUNuQlAsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0E7QUFDQSxlQUFLTyxRQUFMLENBQWMsRUFBQ2QsZ0JBQWlCYSxRQUFRRSxJQUFSLENBQWEsQ0FBYixDQUFsQixFQUFkO0FBQ0E7QUFDQTtBQUNELE9BYkQ7QUFjRDs7OzBCQUlNQyxNLEVBQVE7QUFDYlYsY0FBUUMsR0FBUixDQUFZLGdDQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWVMsTUFBWjtBQUNBUCxZQUFNUSxJQUFOLENBQVcsU0FBWCxFQUFzQjtBQUNwQnBCLGNBQU1tQixPQUFPbkIsSUFETztBQUVwQkMsY0FBTWtCLE9BQU9sQixJQUZPO0FBR3BCQyxlQUFPaUIsT0FBT2pCLEtBSE07QUFJcEJKLGNBQU1xQixPQUFPckIsSUFKTztBQUtwQnVCLGVBQU9GLE9BQU9FLEtBTE07QUFNcEJDLGVBQU9ILE9BQU9HLEtBTk07QUFPcEJDLGFBQUtKLE9BQU9JO0FBUFEsT0FBdEIsRUFRR1IsSUFSSCxDQVFRLFVBQVNDLE9BQVQsRUFBaUI7QUFDdkJQLGdCQUFRQyxHQUFSLENBQVlNLE9BQVo7QUFDRCxPQVZEO0FBV0Q7Ozs2QkFFUzs7QUFFUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLFFBQUQsSUFBVSxTQUFTLEtBQUtRLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUFuQixHQUZGO0FBR0UsNEJBQUMsTUFBRCxJQUFRLFVBQVUsS0FBS0MsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQWxCLEVBQTBDLGNBQWdCLEtBQUs1QixLQUFMLENBQVdFLFlBQXJFO0FBQ0Usb0JBQVksS0FBSzRCLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQURkLEdBSEY7QUFLRSw0QkFBQyxJQUFELElBQU0sZ0JBQWtCLEtBQUs1QixLQUFMLENBQVdNLGNBQW5DO0FBTEYsT0FERjtBQVVEOzs7O0VBbEZleUIsTUFBTUMsUzs7QUF5RnhCQyxPQUFPbkMsR0FBUCxHQUFhQSxHQUFiOztBQUVBb0MsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFzazogJycsXG4gICAgICBzZWFyY2hGaWVsZHM6IHtcbiAgICAgICAgeWVhcjogJycsXG4gICAgICAgIG1ha2U6ICcnLFxuICAgICAgICBtb2RlbDogJycsXG4gICAgICAgIHRhc2s6ICcnXG4gICAgICB9LFxuICAgICAgY3VycmVudFByb2plY3Q6IHt9XG5cbiAgICB9O1xuXG5cbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5zZWFyY2hGaWVsZHMpXG5cbiAgICB2YXIgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiBjb25zb2xlLmxvZyhuYW1lKVxuXG5cbiAgICB0aGlzLnN0YXRlLnNlYXJjaEZpZWxkc1tuYW1lXSA9IHZhbHVlXG5jb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlYXJjaEZpZWxkcylcblxuXG4gIH1cblxuICBzZWFyY2ggKHNlYXJjaEZpZWxkKSB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF4aW9zLmdldCgnL2d1aWRlcycsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB5ZWFyOnNlYXJjaEZpZWxkLnllYXIsXG4gICAgICAgIG1ha2U6c2VhcmNoRmllbGQubWFrZSxcbiAgICAgICAgbW9kZWw6c2VhcmNoRmllbGQubW9kZWwsXG4gICAgICAgIHRhc2s6c2VhcmNoRmllbGQudGFza1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd5YXknLCB0aGlzKVxuICAgICAgLy8gdGhpcy5zdGF0ZS5jdXJyZW50UHJvamVjdCA9IHJlc3VsdHMuZGF0YVswXVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFByb2plY3QgOiByZXN1bHRzLmRhdGFbMF19KVxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZVxuICAgICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQgJywgdGhpcy5zdGF0ZS5jdXJyZW50UHJvamVjdClcbiAgICB9KVxuICB9XG5cblxuXG4gIGVudGVyIChpbnB1dHMpIHtcbiAgICBjb25zb2xlLmxvZygnc2VuZGluZyBwb3N0IHJlcXVlc3QgdG8gc2VydmVyJylcbiAgICBjb25zb2xlLmxvZyhpbnB1dHMpXG4gICAgYXhpb3MucG9zdCgnL2d1aWRlcycsIHtcbiAgICAgIHllYXI6IGlucHV0cy55ZWFyLFxuICAgICAgbWFrZTogaW5wdXRzLm1ha2UsXG4gICAgICBtb2RlbDogaW5wdXRzLm1vZGVsLFxuICAgICAgdGFzazogaW5wdXRzLnRhc2ssXG4gICAgICB0b29sczogaW5wdXRzLnRvb2xzLFxuICAgICAgbm90ZXM6IGlucHV0cy5ub3RlcyxcbiAgICAgIHVybDogaW5wdXRzLnVybFxuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0cyl7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIFNoYWRlVHJlZTwvaDE+XG4gICAgICAgIDxOZXdFbnRyeSBvbkVudGVyPXt0aGlzLmVudGVyLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxTZWFyY2ggb25TZWFyY2g9e3RoaXMuc2VhcmNoLmJpbmQodGhpcyl9IHNlYXJjaEZpZWxkcyA9IHt0aGlzLnN0YXRlLnNlYXJjaEZpZWxkc31cbiAgICAgICAgICBvbkNoYW5nZSA9IHt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxUYXNrIGN1cnJlbnRQcm9qZWN0ID0ge3RoaXMuc3RhdGUuY3VycmVudFByb2plY3R9IC8+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5cblxuXG53aW5kb3cuQXBwID0gQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIl19