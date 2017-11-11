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
      var value = event.target.value;

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
          'h4',
          null,
          'Search for Task'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvU2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJwcm9wcyIsInN0YXRlIiwieWVhciIsIm1ha2UiLCJtb2RlbCIsInRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJvblNlYXJjaCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJvbkNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsWUFBTSxFQUZLO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxZQUFNO0FBSkssS0FBYjtBQUZpQjtBQVFsQjs7Ozs2QkFFTUMsSyxFQUFPO0FBQ1pBLFlBQU1DLGNBQU47QUFDQTs7QUFFQSxVQUFJQyxPQUFPRixNQUFNRyxNQUFOLENBQWFELElBQXhCO0FBQ0EsVUFBSUUsUUFBUUosTUFBTUcsTUFBTixDQUFhQyxLQUF6Qjs7QUFJQSxXQUFLVCxLQUFMLENBQVdPLElBQVgsSUFBbUJFLEtBQW5CO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUNILFVBQUQsRUFBZDtBQUlEOzs7aUNBSVlGLEssRUFBTztBQUNsQjtBQUNBQSxZQUFNQyxjQUFOO0FBQ0EsV0FBS1AsS0FBTCxDQUFXWSxRQUFYLENBQW9CLEtBQUtYLEtBQXpCO0FBR0Q7Ozs2QkFFUTtBQUNULGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUk7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLWSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtiLEtBQUwsQ0FBV0MsSUFBcEUsRUFBMEUsVUFBVSxLQUFLYSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBcEY7QUFETixXQURGO0FBR1UseUNBSFY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUNNLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLGFBQVksTUFBM0MsRUFBa0QsT0FBTyxLQUFLYixLQUFMLENBQVdFLElBQXBFLEVBQTBFLFVBQVUsS0FBS1ksUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQXBGO0FBRE4sV0FMRjtBQU9VLHlDQVBWO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFDTSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxhQUFZLE9BQTVDLEVBQW9ELE9BQU8sS0FBS2IsS0FBTCxDQUFXRyxLQUF0RSxFQUE2RSxVQUFVLEtBQUtXLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUF2RjtBQUROLFdBVEY7QUFXVSx5Q0FYVjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQ00sMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxPQUFPLEtBQUtiLEtBQUwsQ0FBV0ksSUFBcEUsRUFBMEUsVUFBVSxLQUFLVSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBcEY7QUFETixXQWJGO0FBZVUseUNBZlY7QUFpQkUseUNBQU8sV0FBVSxpQkFBakIsRUFBbUMsTUFBSyxRQUF4QyxFQUFpRCxPQUFNLFFBQXZEO0FBakJGO0FBRkosT0FERjtBQXdCQzs7OztFQTlEa0JFLE1BQU1DLFM7O0FBaUUzQkMsT0FBT25CLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB5ZWFyOiAnJyAsXG4gICAgICBtYWtlOiAnJyxcbiAgICAgIG1vZGVsOiAnJyxcbiAgICAgIHRhc2s6ICcnLFxuICAgIH07XG4gIH1cblxub25DaGFuZ2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLnNlYXJjaEZpZWxkcylcblxuICAgIHZhciBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgdmFyIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG5cblxuICAgIHRoaXMuc3RhdGVbbmFtZV0gPSB2YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe25hbWV9KVxuXG5cblxuICB9XG5cblxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIC8vIGFsZXJ0KCdkYiBoYXMgYmVlbiBzZWFyY2hlZCcpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaCh0aGlzLnN0YXRlKVxuXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0PlNlYXJjaCBmb3IgVGFzazwvaDQ+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8bGFiZWw+IFllYXI6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInllYXJcIiBwbGFjZWhvbGRlcj1cInllYXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS55ZWFyfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDwvbGFiZWw+PGJyIC8+XG5cbiAgICAgICAgICA8bGFiZWw+IE1ha2U6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1ha2VcIiBwbGFjZWhvbGRlcj1cIm1ha2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tYWtlfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9sYWJlbD48YnIgLz5cblxuICAgICAgICAgIDxsYWJlbD4gTW9kZWw6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1vZGVsXCIgcGxhY2Vob2xkZXI9XCJtb2RlbFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1vZGVsfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDwvbGFiZWw+PGJyIC8+XG5cbiAgICAgICAgICA8bGFiZWw+IFRhc2s6XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tcIiBwbGFjZWhvbGRlcj1cInRhc2tcIiB2YWx1ZT17dGhpcy5zdGF0ZS50YXNrfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9sYWJlbD48YnIgLz5cblxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZWFyY2hcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbiAgfVxufVxuXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==