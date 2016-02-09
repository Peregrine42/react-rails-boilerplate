(function (root, factory) {
  var dependencyName = "React";
  var moduleName = "CheckboxWithLabel";
  if (typeof define === 'function' && define.amd) {
    define([dependencyName], factory);
  } else if (typeof module === 'object' && module.exports) {
    // root[moduleName] = factory(root[dependencyName]);
    module.exports = factory(require(dependencyName));
  } else {
    root[moduleName] = factory(root[dependencyName]);
  }
}(window, function(React) {
  return React.createClass({
    render: function() {
      return (
        <div>
          
        </div>
      )
    }
  })
}));
