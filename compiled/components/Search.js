'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      year: '',
      make: '',
      model: '',
      task: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      // console.log(props.searchFields)

      var name = event.target.name;
      var value = event.target.value.toUpperCase();

      this.state[name] = value;
      this.setState({ name: name });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      // alert('db has been searched');
      event.preventDefault();
      this.props.onSearch(this.state);
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
          'What are you working on?'
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
          React.createElement('input', { className: 'btn btn-primary', type: 'submit', value: 'Search' })
        )
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInllYXIiLCJtYWtlIiwibW9kZWwiLCJ0YXNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwic2V0U3RhdGUiLCJvblNlYXJjaCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJvbkNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsWUFBTSxFQUZLO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxZQUFNO0FBSkssS0FBYjtBQUZpQjtBQVFsQjs7Ozs2QkFFTUMsSyxFQUFPO0FBQ1pBLFlBQU1DLGNBQU47QUFDQTs7QUFFQSxVQUFJQyxPQUFPRixNQUFNRyxNQUFOLENBQWFELElBQXhCO0FBQ0EsVUFBSUUsUUFBUUosTUFBTUcsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxXQUFuQixFQUFaOztBQUlBLFdBQUtWLEtBQUwsQ0FBV08sSUFBWCxJQUFtQkUsS0FBbkI7QUFDQSxXQUFLRSxRQUFMLENBQWMsRUFBQ0osVUFBRCxFQUFkO0FBSUQ7OztpQ0FJWUYsSyxFQUFPO0FBQ2xCO0FBQ0FBLFlBQU1DLGNBQU47QUFDQSxXQUFLUCxLQUFMLENBQVdhLFFBQVgsQ0FBb0IsS0FBS1osS0FBekI7QUFHRDs7OzZCQUVRO0FBQ1QsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFSTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUthLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDTSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixhQUFZLE1BQTNDLEVBQWtELE9BQU8sS0FBS2QsS0FBTCxDQUFXQyxJQUFwRSxFQUEwRSxVQUFVLEtBQUtjLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFwRjtBQUROLFdBREY7QUFHVSx5Q0FIVjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtkLEtBQUwsQ0FBV0UsSUFBcEUsRUFBMEUsVUFBVSxLQUFLYSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBcEY7QUFETixXQUxGO0FBT1UseUNBUFY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUNNLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLGFBQVksT0FBNUMsRUFBb0QsT0FBTyxLQUFLZCxLQUFMLENBQVdHLEtBQXRFLEVBQTZFLFVBQVUsS0FBS1ksUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQXZGO0FBRE4sV0FURjtBQVdVLHlDQVhWO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFDTSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixhQUFZLE1BQTNDLEVBQWtELE9BQU8sS0FBS2QsS0FBTCxDQUFXSSxJQUFwRSxFQUEwRSxVQUFVLEtBQUtXLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFwRjtBQUROLFdBYkY7QUFlVSx5Q0FmVjtBQWlCRSx5Q0FBTyxXQUFVLGlCQUFqQixFQUFtQyxNQUFLLFFBQXhDLEVBQWlELE9BQU0sUUFBdkQ7QUFqQkY7QUFGSixPQURGO0FBd0JDOzs7O0VBOURrQkUsTUFBTUMsUzs7QUFpRTNCQyxPQUFPcEIsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHllYXI6ICcnICxcbiAgICAgIG1ha2U6ICcnLFxuICAgICAgbW9kZWw6ICcnLFxuICAgICAgdGFzazogJycsXG4gICAgfTtcbiAgfVxuXG5vbkNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMuc2VhcmNoRmllbGRzKVxuXG4gICAgdmFyIG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKTtcblxuXG5cbiAgICB0aGlzLnN0YXRlW25hbWVdID0gdmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lfSlcblxuXG5cbiAgfVxuXG5cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAvLyBhbGVydCgnZGIgaGFzIGJlZW4gc2VhcmNoZWQnKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25TZWFyY2godGhpcy5zdGF0ZSlcblxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5XaGF0IGFyZSB5b3Ugd29ya2luZyBvbj88L2gyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGxhYmVsPiBZZWFyOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ5ZWFyXCIgcGxhY2Vob2xkZXI9XCJ5ZWFyXCIgdmFsdWU9e3RoaXMuc3RhdGUueWVhcn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBNYWtlOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYWtlXCIgcGxhY2Vob2xkZXI9XCJtYWtlXCIgdmFsdWU9e3RoaXMuc3RhdGUubWFrZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvbGFiZWw+PGJyIC8+XG5cbiAgICAgICAgICA8bGFiZWw+IE1vZGVsOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtb2RlbFwiIHBsYWNlaG9sZGVyPVwibW9kZWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tb2RlbH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPjxiciAvPlxuXG4gICAgICAgICAgPGxhYmVsPiBUYXNrOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrXCIgcGxhY2Vob2xkZXI9XCJ0YXNrXCIgdmFsdWU9e3RoaXMuc3RhdGUudGFza30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvbGFiZWw+PGJyIC8+XG5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG4gIH1cbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDsiXX0=