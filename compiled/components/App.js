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
      searchFields: {
        year: '',
        make: '',
        model: '',
        task: ''
      },
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
        React.createElement(Search, { onSearch: this.search.bind(this), searchFields: this.state.searchFields,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInRhc2siLCJzZWFyY2hGaWVsZHMiLCJ5ZWFyIiwibWFrZSIsIm1vZGVsIiwiY3VycmVudFByb2plY3QiLCJtb3RpdmF0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hGaWVsZCIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlc3VsdHMiLCJkYXRhIiwibGVuZ3RoIiwiYWxlcnQiLCJzZXRTdGF0ZSIsImlucHV0cyIsInBvc3QiLCJ0b29scyIsIm5vdGVzIiwidXJsIiwiZW50ZXIiLCJiaW5kIiwic2VhcmNoIiwib25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxvQkFBYztBQUNaQyxjQUFNLEVBRE07QUFFWkMsY0FBTSxFQUZNO0FBR1pDLGVBQU8sRUFISztBQUlaSixjQUFNO0FBSk0sT0FGSDtBQVFYSyxzQkFBZ0IsRUFSTDtBQVNYQyxrQkFBWTs7QUFURCxLQUFiOztBQUZpQjtBQWdCbEI7Ozs7NkJBRVFDLEssRUFBTztBQUNkQSxZQUFNQyxjQUFOO0FBQ0E7O0FBRUEsVUFBSUMsT0FBT0YsTUFBTUcsTUFBTixDQUFhRCxJQUF4QjtBQUNBLFVBQUlFLFFBQVFKLE1BQU1HLE1BQU4sQ0FBYUMsS0FBekI7QUFDSEMsY0FBUUMsR0FBUixDQUFZSixJQUFaOztBQUdHLFdBQUtWLEtBQUwsQ0FBV0UsWUFBWCxDQUF3QlEsSUFBeEIsSUFBZ0NFLEtBQWhDO0FBQ0pDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLZCxLQUFMLENBQVdFLFlBQXZCO0FBR0c7OzsyQkFFT2EsVyxFQUFhO0FBQUE7O0FBRW5CUCxZQUFNQyxjQUFOO0FBQ0FPLFlBQU1DLEdBQU4sQ0FBVSxTQUFWLEVBQXFCO0FBQ25CQyxnQkFBUTtBQUNOZixnQkFBS1ksWUFBWVosSUFEWDtBQUVOQyxnQkFBS1csWUFBWVgsSUFGWDtBQUdOQyxpQkFBTVUsWUFBWVYsS0FIWjtBQUlOSixnQkFBS2MsWUFBWWQ7QUFKWDtBQURXLE9BQXJCLEVBT0drQixJQVBILENBT1EsVUFBQ0MsT0FBRCxFQUFhO0FBQ25CUCxnQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJNLE9BQW5CO0FBQ0FQLGdCQUFRQyxHQUFSLFNBQW1CTSxRQUFRQyxJQUEzQjtBQUNBLFlBQUlELFFBQVFDLElBQVIsQ0FBYUMsTUFBYixHQUFzQixDQUExQixFQUE2QjtBQUMzQkMsZ0JBQU0sZ0NBQU47QUFDRCxTQUZELE1BRU87QUFDUCxpQkFBS0MsUUFBTCxDQUFjLEVBQUNsQixnQkFBaUJjLFFBQVFDLElBQVIsQ0FBYSxDQUFiLENBQWxCLEVBQWQ7QUFDQSxpQkFBS0csUUFBTCxDQUFjLEVBQUNqQixZQUFZLDBCQUFiLEVBQWQ7QUFDQztBQUVGLE9BakJEO0FBa0JEOzs7MEJBSU1rQixNLEVBQVE7QUFDYlosY0FBUUMsR0FBUixDQUFZLGdDQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWVcsTUFBWjtBQUNBVCxZQUFNVSxJQUFOLENBQVcsU0FBWCxFQUFzQjtBQUNwQnZCLGNBQU1zQixPQUFPdEIsSUFETztBQUVwQkMsY0FBTXFCLE9BQU9yQixJQUZPO0FBR3BCQyxlQUFPb0IsT0FBT3BCLEtBSE07QUFJcEJKLGNBQU13QixPQUFPeEIsSUFKTztBQUtwQjBCLGVBQU9GLE9BQU9FLEtBTE07QUFNcEJDLGVBQU9ILE9BQU9HLEtBTk07QUFPcEJDLGFBQUtKLE9BQU9JO0FBUFEsT0FBdEIsRUFRR1YsSUFSSCxDQVFRLFVBQVNDLE9BQVQsRUFBaUI7QUFDdkJQLGdCQUFRQyxHQUFSLENBQVlNLE9BQVo7QUFDRCxPQVZEO0FBV0Q7Ozs2QkFFUzs7QUFFUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLFFBQUQsSUFBVSxTQUFTLEtBQUtVLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUFuQixHQUZGO0FBR0UsNEJBQUMsTUFBRCxJQUFRLFVBQVUsS0FBS0MsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQWxCLEVBQTBDLGNBQWdCLEtBQUsvQixLQUFMLENBQVdFLFlBQXJFO0FBQ0Usb0JBQVksS0FBSytCLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQURkLEdBSEY7QUFLRSw0QkFBQyxJQUFELElBQU0sZ0JBQWtCLEtBQUsvQixLQUFMLENBQVdNLGNBQW5DO0FBQ0Usb0JBQVksS0FBS04sS0FBTCxDQUFXTyxVQUR6QjtBQUxGLE9BREY7QUFXRDs7OztFQXhGZTJCLE1BQU1DLFM7O0FBK0Z4QkMsT0FBT3RDLEdBQVAsR0FBYUEsR0FBYjs7QUFFQXVDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhc2s6ICcnLFxuICAgICAgc2VhcmNoRmllbGRzOiB7XG4gICAgICAgIHllYXI6ICcnLFxuICAgICAgICBtYWtlOiAnJyxcbiAgICAgICAgbW9kZWw6ICcnLFxuICAgICAgICB0YXNrOiAnJ1xuICAgICAgfSxcbiAgICAgIGN1cnJlbnRQcm9qZWN0OiB7fSxcbiAgICAgIG1vdGl2YXRpb246ICcnXG5cbiAgICB9O1xuXG5cbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5zZWFyY2hGaWVsZHMpXG5cbiAgICB2YXIgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiBjb25zb2xlLmxvZyhuYW1lKVxuXG5cbiAgICB0aGlzLnN0YXRlLnNlYXJjaEZpZWxkc1tuYW1lXSA9IHZhbHVlXG5jb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlYXJjaEZpZWxkcylcblxuXG4gIH1cblxuICBzZWFyY2ggKHNlYXJjaEZpZWxkKSB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF4aW9zLmdldCgnL2d1aWRlcycsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB5ZWFyOnNlYXJjaEZpZWxkLnllYXIsXG4gICAgICAgIG1ha2U6c2VhcmNoRmllbGQubWFrZSxcbiAgICAgICAgbW9kZWw6c2VhcmNoRmllbGQubW9kZWwsXG4gICAgICAgIHRhc2s6c2VhcmNoRmllbGQudGFza1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd5YXknLCByZXN1bHRzKVxuICAgICAgY29uc29sZS5sb2codHlwZW9mIHJlc3VsdHMuZGF0YSlcbiAgICAgIGlmIChyZXN1bHRzLmRhdGEubGVuZ3RoIDwgMSkge1xuICAgICAgICBhbGVydChcIm5vIHJlY29yZHMgZm91bmQgZm9yIHRoYXQgdGFza1wiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQcm9qZWN0IDogcmVzdWx0cy5kYXRhWzBdfSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21vdGl2YXRpb246ICdHbyB0dXJuIHNvbWUgd3JlbmNoZXMhISEnfSlcbiAgICAgIH1cblxuICAgIH0pXG4gIH1cblxuXG5cbiAgZW50ZXIgKGlucHV0cykge1xuICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIHBvc3QgcmVxdWVzdCB0byBzZXJ2ZXInKVxuICAgIGNvbnNvbGUubG9nKGlucHV0cylcbiAgICBheGlvcy5wb3N0KCcvZ3VpZGVzJywge1xuICAgICAgeWVhcjogaW5wdXRzLnllYXIsXG4gICAgICBtYWtlOiBpbnB1dHMubWFrZSxcbiAgICAgIG1vZGVsOiBpbnB1dHMubW9kZWwsXG4gICAgICB0YXNrOiBpbnB1dHMudGFzayxcbiAgICAgIHRvb2xzOiBpbnB1dHMudG9vbHMsXG4gICAgICBub3RlczogaW5wdXRzLm5vdGVzLFxuICAgICAgdXJsOiBpbnB1dHMudXJsXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHRzKXtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gU2hhZGVUcmVlPC9oMT5cbiAgICAgICAgPE5ld0VudHJ5IG9uRW50ZXI9e3RoaXMuZW50ZXIuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPFNlYXJjaCBvblNlYXJjaD17dGhpcy5zZWFyY2guYmluZCh0aGlzKX0gc2VhcmNoRmllbGRzID0ge3RoaXMuc3RhdGUuc2VhcmNoRmllbGRzfVxuICAgICAgICAgIG9uQ2hhbmdlID0ge3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPFRhc2sgY3VycmVudFByb2plY3QgPSB7dGhpcy5zdGF0ZS5jdXJyZW50UHJvamVjdH1cbiAgICAgICAgICB3cmVuY2hlcyA9IHt0aGlzLnN0YXRlLm1vdGl2YXRpb259IC8+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5cblxuXG53aW5kb3cuQXBwID0gQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIl19