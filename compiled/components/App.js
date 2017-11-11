'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      currentProject: {},
      motivation: ''

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
        console.log('yay', results);
        console.log(_typeof(results.data));
        if (results.data.length < 1) {
          alert("no records found for that task");
        } else {
          _this2.setState({ currentProject: results.data[0] });
          _this2.setState({ motivation: 'Go turn some wrenches!!!' });
        }
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
        React.createElement(Search, { onSearch: this.search.bind(this),
          onChange: this.onChange.bind(this) }),
        React.createElement(Task, { currentProject: this.state.currentProject,
          wrenches: this.state.motivation })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInRhc2siLCJjdXJyZW50UHJvamVjdCIsIm1vdGl2YXRpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNlYXJjaEZpZWxkcyIsInNlYXJjaEZpZWxkIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJ5ZWFyIiwibWFrZSIsIm1vZGVsIiwidGhlbiIsInJlc3VsdHMiLCJkYXRhIiwibGVuZ3RoIiwiYWxlcnQiLCJzZXRTdGF0ZSIsImlucHV0cyIsInBvc3QiLCJ0b29scyIsIm5vdGVzIiwidXJsIiwiZW50ZXIiLCJiaW5kIiwic2VhcmNoIiwib25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxzQkFBZ0IsRUFGTDtBQUdYQyxrQkFBWTs7QUFIRCxLQUFiOztBQUZpQjtBQVVsQjs7Ozs2QkFFUUMsSyxFQUFPO0FBQ2RBLFlBQU1DLGNBQU47QUFDQTs7QUFFQSxVQUFJQyxPQUFPRixNQUFNRyxNQUFOLENBQWFELElBQXhCO0FBQ0EsVUFBSUUsUUFBUUosTUFBTUcsTUFBTixDQUFhQyxLQUF6QjtBQUNIQyxjQUFRQyxHQUFSLENBQVlKLElBQVo7O0FBR0csV0FBS04sS0FBTCxDQUFXVyxZQUFYLENBQXdCTCxJQUF4QixJQUFnQ0UsS0FBaEM7QUFDSkMsY0FBUUMsR0FBUixDQUFZLEtBQUtWLEtBQUwsQ0FBV1csWUFBdkI7QUFHRzs7OzJCQUVPQyxXLEVBQWE7QUFBQTs7QUFFbkJSLFlBQU1DLGNBQU47QUFDQVEsWUFBTUMsR0FBTixDQUFVLFNBQVYsRUFBcUI7QUFDbkJDLGdCQUFRO0FBQ05DLGdCQUFLSixZQUFZSSxJQURYO0FBRU5DLGdCQUFLTCxZQUFZSyxJQUZYO0FBR05DLGlCQUFNTixZQUFZTSxLQUhaO0FBSU5qQixnQkFBS1csWUFBWVg7QUFKWDtBQURXLE9BQXJCLEVBT0drQixJQVBILENBT1EsVUFBQ0MsT0FBRCxFQUFhO0FBQ25CWCxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJVLE9BQW5CO0FBQ0FYLGdCQUFRQyxHQUFSLFNBQW1CVSxRQUFRQyxJQUEzQjtBQUNBLFlBQUlELFFBQVFDLElBQVIsQ0FBYUMsTUFBYixHQUFzQixDQUExQixFQUE2QjtBQUMzQkMsZ0JBQU0sZ0NBQU47QUFDRCxTQUZELE1BRU87QUFDUCxpQkFBS0MsUUFBTCxDQUFjLEVBQUN0QixnQkFBaUJrQixRQUFRQyxJQUFSLENBQWEsQ0FBYixDQUFsQixFQUFkO0FBQ0EsaUJBQUtHLFFBQUwsQ0FBYyxFQUFDckIsWUFBWSwwQkFBYixFQUFkO0FBQ0M7QUFFRixPQWpCRDtBQWtCRDs7OzBCQUlNc0IsTSxFQUFRO0FBQ2JoQixjQUFRQyxHQUFSLENBQVksZ0NBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZZSxNQUFaO0FBQ0FaLFlBQU1hLElBQU4sQ0FBVyxTQUFYLEVBQXNCO0FBQ3BCVixjQUFNUyxPQUFPVCxJQURPO0FBRXBCQyxjQUFNUSxPQUFPUixJQUZPO0FBR3BCQyxlQUFPTyxPQUFPUCxLQUhNO0FBSXBCakIsY0FBTXdCLE9BQU94QixJQUpPO0FBS3BCMEIsZUFBT0YsT0FBT0UsS0FMTTtBQU1wQkMsZUFBT0gsT0FBT0csS0FOTTtBQU9wQkMsYUFBS0osT0FBT0k7QUFQUSxPQUF0QixFQVFHVixJQVJILENBUVEsVUFBU0MsT0FBVCxFQUFpQjtBQUN2QlgsZ0JBQVFDLEdBQVIsQ0FBWVUsT0FBWjtBQUNELE9BVkQ7QUFXRDs7OzZCQUVTOztBQUVSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUUsNEJBQUMsUUFBRCxJQUFVLFNBQVMsS0FBS1UsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQW5CLEdBRkY7QUFHRSw0QkFBQyxNQUFELElBQVEsVUFBVSxLQUFLQyxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBbEI7QUFDUSxvQkFBWSxLQUFLRSxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FEcEIsR0FIRjtBQUtFLDRCQUFDLElBQUQsSUFBTSxnQkFBa0IsS0FBSy9CLEtBQUwsQ0FBV0UsY0FBbkM7QUFDRSxvQkFBWSxLQUFLRixLQUFMLENBQVdHLFVBRHpCO0FBTEYsT0FERjtBQVdEOzs7O0VBbEZlK0IsTUFBTUMsUzs7QUF5RnhCQyxPQUFPdEMsR0FBUCxHQUFhQSxHQUFiOztBQUVBdUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFzazogJycsXG4gICAgICBjdXJyZW50UHJvamVjdDoge30sXG4gICAgICBtb3RpdmF0aW9uOiAnJ1xuXG4gICAgfTtcblxuXG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMuc2VhcmNoRmllbGRzKVxuXG4gICAgdmFyIG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gY29uc29sZS5sb2cobmFtZSlcblxuXG4gICAgdGhpcy5zdGF0ZS5zZWFyY2hGaWVsZHNbbmFtZV0gPSB2YWx1ZVxuY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWFyY2hGaWVsZHMpXG5cblxuICB9XG5cbiAgc2VhcmNoIChzZWFyY2hGaWVsZCkge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvcy5nZXQoJy9ndWlkZXMnLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgeWVhcjpzZWFyY2hGaWVsZC55ZWFyLFxuICAgICAgICBtYWtlOnNlYXJjaEZpZWxkLm1ha2UsXG4gICAgICAgIG1vZGVsOnNlYXJjaEZpZWxkLm1vZGVsLFxuICAgICAgICB0YXNrOnNlYXJjaEZpZWxkLnRhc2tcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygneWF5JywgcmVzdWx0cylcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZXN1bHRzLmRhdGEpXG4gICAgICBpZiAocmVzdWx0cy5kYXRhLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgYWxlcnQoXCJubyByZWNvcmRzIGZvdW5kIGZvciB0aGF0IHRhc2tcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UHJvamVjdCA6IHJlc3VsdHMuZGF0YVswXX0pXG4gICAgICB0aGlzLnNldFN0YXRlKHttb3RpdmF0aW9uOiAnR28gdHVybiBzb21lIHdyZW5jaGVzISEhJ30pXG4gICAgICB9XG5cbiAgICB9KVxuICB9XG5cblxuXG4gIGVudGVyIChpbnB1dHMpIHtcbiAgICBjb25zb2xlLmxvZygnc2VuZGluZyBwb3N0IHJlcXVlc3QgdG8gc2VydmVyJylcbiAgICBjb25zb2xlLmxvZyhpbnB1dHMpXG4gICAgYXhpb3MucG9zdCgnL2d1aWRlcycsIHtcbiAgICAgIHllYXI6IGlucHV0cy55ZWFyLFxuICAgICAgbWFrZTogaW5wdXRzLm1ha2UsXG4gICAgICBtb2RlbDogaW5wdXRzLm1vZGVsLFxuICAgICAgdGFzazogaW5wdXRzLnRhc2ssXG4gICAgICB0b29sczogaW5wdXRzLnRvb2xzLFxuICAgICAgbm90ZXM6IGlucHV0cy5ub3RlcyxcbiAgICAgIHVybDogaW5wdXRzLnVybFxuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0cyl7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIFNoYWRlVHJlZTwvaDE+XG4gICAgICAgIDxOZXdFbnRyeSBvbkVudGVyPXt0aGlzLmVudGVyLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxTZWFyY2ggb25TZWFyY2g9e3RoaXMuc2VhcmNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8VGFzayBjdXJyZW50UHJvamVjdCA9IHt0aGlzLnN0YXRlLmN1cnJlbnRQcm9qZWN0fVxuICAgICAgICAgIHdyZW5jaGVzID0ge3RoaXMuc3RhdGUubW90aXZhdGlvbn0gLz5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuXG5cbndpbmRvdy5BcHAgPSBBcHA7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4iXX0=