window.ga = function() {}
require('./dat.gui.min');
// require('./GLFluid.js');


function main() {
  console.log('Executing main() ..');

  // lime.embed("fluid", 0, 0, "FFFFFF");
  require('./fluid-smooth.js');
}

window.onload = main;
