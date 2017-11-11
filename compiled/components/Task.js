'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
  _inherits(Task, _React$Component);

  function Task(props) {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, props));
  }

  _createClass(Task, [{
    key: 'render',
    value: function render() {
      console.log('Task props 1', this.props.currentProject);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Current Project: '
        ),
        React.createElement(
          'div',
          null,
          ' You will need: ',
          this.props.currentProject.tools
        ),
        React.createElement(
          'div',
          null,
          ' Here are your notes: ',
          this.props.currentProject.notes
        ),
        React.createElement(
          'div',
          null,
          ' This is your best resource: ',
          this.props.currentProject.url
        )
      );
    }
  }]);

  return Task;
}(React.Component);

window.Task = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Rhc2suanN4Il0sIm5hbWVzIjpbIlRhc2siLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50UHJvamVjdCIsInRvb2xzIiwibm90ZXMiLCJ1cmwiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLEtBQUtGLEtBQUwsQ0FBV0csY0FBdkM7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTDtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQXNCLGVBQUtILEtBQUwsQ0FBV0csY0FBWCxDQUEwQkM7QUFBaEQsU0FGRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQTRCLGVBQUtKLEtBQUwsQ0FBV0csY0FBWCxDQUEwQkU7QUFBdEQsU0FKRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQW1DLGVBQUtMLEtBQUwsQ0FBV0csY0FBWCxDQUEwQkc7QUFBN0Q7QUFORixPQURGO0FBY0Q7Ozs7RUFyQmdCQyxNQUFNQyxTOztBQTBCdkJDLE9BQU9WLElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiJUYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGFzayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdUYXNrIHByb3BzIDEnLCB0aGlzLnByb3BzLmN1cnJlbnRQcm9qZWN0KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PjxoMj5DdXJyZW50IFByb2plY3Q6IDwvaDI+XG5cbiAgICAgICAgPGRpdj4gWW91IHdpbGwgbmVlZDoge3RoaXMucHJvcHMuY3VycmVudFByb2plY3QudG9vbHN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PiBIZXJlIGFyZSB5b3VyIG5vdGVzOiB7dGhpcy5wcm9wcy5jdXJyZW50UHJvamVjdC5ub3Rlc31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+IFRoaXMgaXMgeW91ciBiZXN0IHJlc291cmNlOiB7dGhpcy5wcm9wcy5jdXJyZW50UHJvamVjdC51cmx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICApXG4gIH1cbn1cblxuXG5cbiAgd2luZG93LlRhc2sgPSBUYXNrOyJdfQ==