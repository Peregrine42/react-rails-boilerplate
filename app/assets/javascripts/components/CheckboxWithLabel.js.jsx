(function (root, factory) {
  var dependencyName = "React";
  var moduleName = "CheckboxWithLabel";
  if (typeof define === 'function' && define.amd) {
    define([dependencyName], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require(dependencyName));
  } else {
    root[moduleName] = factory(root[dependencyName]);
  }
}(window, function(React) {
  return React.createClass({
    getInitialState: function() {
      return { checked: true }
    },
    onChange: function(e) {
      this.setState({checked: !this.state.checked })
    },
    makeList: function() {
      var list = ["ben", "duncan", "rob"];
      return list.map(function(item, index) {
        return <li key={index}>{item}</li>
      })
    },
    render: function() {
      return (
        <div>
          <input type="checkbox"
            onChange={this.onChange}
            checked={this.state.checked}></input>
          { this.state.checked ? this.props.onLabel : this.props.offLabel }
          <ul>
            {this.makeList()}
          </ul>
        </div>
      )
    }
  })
}));
