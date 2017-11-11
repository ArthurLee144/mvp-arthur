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
          'Current Project: ',
          this.props.currentProject.year,
          ' ',
          this.props.currentProject.make,
          ' ',
          this.props.currentProject.model,
          ' ',
          this.props.currentProject.task
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'b',
            null,
            'You will need: '
          ),
          this.props.currentProject.tools
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'b',
            null,
            'Here are your notes: '
          ),
          this.props.currentProject.notes
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'b',
            null,
            'This is your best resource: '
          ),
          React.createElement(
            'a',
            { href: this.props.currentProject.url },
            this.props.currentProject.url
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'h3',
            null,
            this.props.wrenches
          )
        )
      );
    }
  }]);

  return Task;
}(React.Component);

window.Task = Task;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Rhc2suanN4Il0sIm5hbWVzIjpbIlRhc2siLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50UHJvamVjdCIsInllYXIiLCJtYWtlIiwibW9kZWwiLCJ0YXNrIiwidG9vbHMiLCJub3RlcyIsInVybCIsIndyZW5jaGVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQQyxjQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QixLQUFLRixLQUFMLENBQVdHLGNBQXZDO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFzQixlQUFLSCxLQUFMLENBQVdHLGNBQVgsQ0FBMEJDLElBQWhEO0FBQUE7QUFBdUQsZUFBS0osS0FBTCxDQUFXRyxjQUFYLENBQTBCRSxJQUFqRjtBQUFBO0FBQXdGLGVBQUtMLEtBQUwsQ0FBV0csY0FBWCxDQUEwQkcsS0FBbEg7QUFBQTtBQUEwSCxlQUFLTixLQUFMLENBQVdHLGNBQVgsQ0FBMEJJO0FBQXBKLFNBQUw7QUFFRTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUw7QUFBNEIsZUFBS1AsS0FBTCxDQUFXRyxjQUFYLENBQTBCSztBQUF0RCxTQUZGO0FBSUU7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFMO0FBQWtDLGVBQUtSLEtBQUwsQ0FBV0csY0FBWCxDQUEwQk07QUFBNUQsU0FKRjtBQU1FO0FBQUE7QUFBQTtBQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTDtBQUF3QztBQUFBO0FBQUEsY0FBRyxNQUFNLEtBQUtULEtBQUwsQ0FBV0csY0FBWCxDQUEwQk8sR0FBbkM7QUFBMEMsaUJBQUtWLEtBQUwsQ0FBV0csY0FBWCxDQUEwQk87QUFBcEU7QUFBeEMsU0FORjtBQVFFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFLLGlCQUFLVixLQUFMLENBQVdXO0FBQWhCO0FBREE7QUFSRixPQURGO0FBaUJEOzs7O0VBeEJnQkMsTUFBTUMsUzs7QUE2QnZCQyxPQUFPZixJQUFQLEdBQWNBLElBQWQiLCJmaWxlIjoiVGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRhc2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnVGFzayBwcm9wcyAxJywgdGhpcy5wcm9wcy5jdXJyZW50UHJvamVjdClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj48aDI+Q3VycmVudCBQcm9qZWN0OiB7dGhpcy5wcm9wcy5jdXJyZW50UHJvamVjdC55ZWFyfSB7dGhpcy5wcm9wcy5jdXJyZW50UHJvamVjdC5tYWtlfSB7dGhpcy5wcm9wcy5jdXJyZW50UHJvamVjdC5tb2RlbH0ge3RoaXMucHJvcHMuY3VycmVudFByb2plY3QudGFza308L2gyPlxuXG4gICAgICAgIDxkaXY+PGI+WW91IHdpbGwgbmVlZDogPC9iPnt0aGlzLnByb3BzLmN1cnJlbnRQcm9qZWN0LnRvb2xzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48Yj5IZXJlIGFyZSB5b3VyIG5vdGVzOiA8L2I+e3RoaXMucHJvcHMuY3VycmVudFByb2plY3Qubm90ZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PjxiPlRoaXMgaXMgeW91ciBiZXN0IHJlc291cmNlOiA8L2I+PGEgaHJlZj17dGhpcy5wcm9wcy5jdXJyZW50UHJvamVjdC51cmx9ID57dGhpcy5wcm9wcy5jdXJyZW50UHJvamVjdC51cmx9PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgzPnt0aGlzLnByb3BzLndyZW5jaGVzfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICApXG4gIH1cbn1cblxuXG5cbiAgd2luZG93LlRhc2sgPSBUYXNrOyJdfQ==