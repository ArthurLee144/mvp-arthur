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
        console.log('yay');
        _this2.state.currentProject = results.data;
        console.log(_this2.state.currentProject);
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
      console.log(this.props);
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
          onChange: this.onChange.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidGFzayIsInNlYXJjaEZpZWxkcyIsInllYXIiLCJtYWtlIiwibW9kZWwiLCJjdXJyZW50UHJvamVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoRmllbGQiLCJheGlvcyIsImdldCIsInBhcmFtcyIsInRoZW4iLCJyZXN1bHRzIiwiZGF0YSIsImlucHV0cyIsInBvc3QiLCJ0b29scyIsIm5vdGVzIiwidXJsIiwiZW50ZXIiLCJiaW5kIiwic2VhcmNoIiwib25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsb0JBQWM7QUFDWkMsY0FBTSxFQURNO0FBRVpDLGNBQU0sRUFGTTtBQUdaQyxlQUFPLEVBSEs7QUFJWkosY0FBTTtBQUpNLE9BRkg7QUFRWEssc0JBQWdCOztBQVJMLEtBQWI7O0FBRmlCO0FBZWxCOzs7OzZCQUVRQyxLLEVBQU87QUFDZEEsWUFBTUMsY0FBTjtBQUNBOztBQUVBLFVBQUlDLE9BQU9GLE1BQU1HLE1BQU4sQ0FBYUQsSUFBeEI7QUFDQSxVQUFJRSxRQUFRSixNQUFNRyxNQUFOLENBQWFDLEtBQXpCO0FBQ0hDLGNBQVFDLEdBQVIsQ0FBWUosSUFBWjs7QUFHRyxXQUFLVCxLQUFMLENBQVdFLFlBQVgsQ0FBd0JPLElBQXhCLElBQWdDRSxLQUFoQztBQUNKQyxjQUFRQyxHQUFSLENBQVksS0FBS2IsS0FBTCxDQUFXRSxZQUF2QjtBQUdHOzs7MkJBRU9ZLFcsRUFBYTtBQUFBOztBQUVuQlAsWUFBTUMsY0FBTjtBQUNBTyxZQUFNQyxHQUFOLENBQVUsU0FBVixFQUFxQjtBQUNuQkMsZ0JBQVE7QUFDTmQsZ0JBQUtXLFlBQVlYLElBRFg7QUFFTkMsZ0JBQUtVLFlBQVlWLElBRlg7QUFHTkMsaUJBQU1TLFlBQVlULEtBSFo7QUFJTkosZ0JBQUthLFlBQVliO0FBSlg7QUFEVyxPQUFyQixFQU9HaUIsSUFQSCxDQU9RLFVBQUNDLE9BQUQsRUFBYTtBQUNuQlAsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsZUFBS2IsS0FBTCxDQUFXTSxjQUFYLEdBQTRCYSxRQUFRQyxJQUFwQztBQUNBUixnQkFBUUMsR0FBUixDQUFZLE9BQUtiLEtBQUwsQ0FBV00sY0FBdkI7QUFDRCxPQVhEO0FBWUQ7OzswQkFJTWUsTSxFQUFRO0FBQ2JULGNBQVFDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBRCxjQUFRQyxHQUFSLENBQVlRLE1BQVo7QUFDQU4sWUFBTU8sSUFBTixDQUFXLFNBQVgsRUFBc0I7QUFDcEJuQixjQUFNa0IsT0FBT2xCLElBRE87QUFFcEJDLGNBQU1pQixPQUFPakIsSUFGTztBQUdwQkMsZUFBT2dCLE9BQU9oQixLQUhNO0FBSXBCSixjQUFNb0IsT0FBT3BCLElBSk87QUFLcEJzQixlQUFPRixPQUFPRSxLQUxNO0FBTXBCQyxlQUFPSCxPQUFPRyxLQU5NO0FBT3BCQyxhQUFLSixPQUFPSTtBQVBRLE9BQXRCLEVBUUdQLElBUkgsQ0FRUSxVQUFTQyxPQUFULEVBQWlCO0FBQ3ZCUCxnQkFBUUMsR0FBUixDQUFZTSxPQUFaO0FBQ0QsT0FWRDtBQVdEOzs7NkJBRVM7QUFDUlAsY0FBUUMsR0FBUixDQUFZLEtBQUtkLEtBQWpCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxRQUFELElBQVUsU0FBUyxLQUFLMkIsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQW5CLEdBRkY7QUFHRSw0QkFBQyxNQUFELElBQVEsVUFBVSxLQUFLQyxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBbEIsRUFBMEMsY0FBZ0IsS0FBSzNCLEtBQUwsQ0FBV0UsWUFBckU7QUFDRSxvQkFBWSxLQUFLMkIsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBRGQ7QUFIRixPQURGO0FBU0Q7Ozs7RUEvRWVHLE1BQU1DLFM7O0FBc0Z4QkMsT0FBT2xDLEdBQVAsR0FBYUEsR0FBYjs7QUFFQW1DLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhc2s6ICcnLFxuICAgICAgc2VhcmNoRmllbGRzOiB7XG4gICAgICAgIHllYXI6ICcnLFxuICAgICAgICBtYWtlOiAnJyxcbiAgICAgICAgbW9kZWw6ICcnLFxuICAgICAgICB0YXNrOiAnJ1xuICAgICAgfSxcbiAgICAgIGN1cnJlbnRQcm9qZWN0OiB7fVxuXG4gICAgfTtcblxuXG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMuc2VhcmNoRmllbGRzKVxuXG4gICAgdmFyIG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gY29uc29sZS5sb2cobmFtZSlcblxuXG4gICAgdGhpcy5zdGF0ZS5zZWFyY2hGaWVsZHNbbmFtZV0gPSB2YWx1ZVxuY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWFyY2hGaWVsZHMpXG5cblxuICB9XG5cbiAgc2VhcmNoIChzZWFyY2hGaWVsZCkge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvcy5nZXQoJy9ndWlkZXMnLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgeWVhcjpzZWFyY2hGaWVsZC55ZWFyLFxuICAgICAgICBtYWtlOnNlYXJjaEZpZWxkLm1ha2UsXG4gICAgICAgIG1vZGVsOnNlYXJjaEZpZWxkLm1vZGVsLFxuICAgICAgICB0YXNrOnNlYXJjaEZpZWxkLnRhc2tcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygneWF5JylcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QgPSByZXN1bHRzLmRhdGFcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVudFByb2plY3QpXG4gICAgfSlcbiAgfVxuXG5cblxuICBlbnRlciAoaW5wdXRzKSB7XG4gICAgY29uc29sZS5sb2coJ3NlbmRpbmcgcG9zdCByZXF1ZXN0IHRvIHNlcnZlcicpXG4gICAgY29uc29sZS5sb2coaW5wdXRzKVxuICAgIGF4aW9zLnBvc3QoJy9ndWlkZXMnLCB7XG4gICAgICB5ZWFyOiBpbnB1dHMueWVhcixcbiAgICAgIG1ha2U6IGlucHV0cy5tYWtlLFxuICAgICAgbW9kZWw6IGlucHV0cy5tb2RlbCxcbiAgICAgIHRhc2s6IGlucHV0cy50YXNrLFxuICAgICAgdG9vbHM6IGlucHV0cy50b29scyxcbiAgICAgIG5vdGVzOiBpbnB1dHMubm90ZXMsXG4gICAgICB1cmw6IGlucHV0cy51cmxcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdHMpe1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+V2VsY29tZSB0byBTaGFkZVRyZWU8L2gxPlxuICAgICAgICA8TmV3RW50cnkgb25FbnRlcj17dGhpcy5lbnRlci5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8U2VhcmNoIG9uU2VhcmNoPXt0aGlzLnNlYXJjaC5iaW5kKHRoaXMpfSBzZWFyY2hGaWVsZHMgPSB7dGhpcy5zdGF0ZS5zZWFyY2hGaWVsZHN9XG4gICAgICAgICAgb25DaGFuZ2UgPSB7dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuXG5cblxud2luZG93LkFwcCA9IEFwcDtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiJdfQ==