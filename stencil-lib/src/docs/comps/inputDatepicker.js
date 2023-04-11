(function () {
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '', description: '', defaultValue: '' },
  ];

  document.getElementById('comp-interfaces').code = `interface Title {
  ...
}`;

  document.getElementById('comp-props').tableData = [
    { name: '', description: '', type: '', default: '', required: false }
  ];
  document.getElementById('comp-events').tableData = [
    { name: '', description: '', emitsType: '' },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: '', description: '', returnType: '' },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: '', purpose: '' }
  ];
})();
