// You can run this test from command line with this command: jasmine spec/siteComponent/siteComponentSpec.js

// Need this require because using class decorators.
require("../../node_modules/reflect-metadata/Reflect.js");

// Use the file after converting to es5.
var SitesComponent = require('../../dist/SitesComponent.js');

describe("Sites component", function() {
  it("sites list", function() {
    var component = new SitesComponent.SitesComponent();
    
    expect(component.list.length).toEqual(5);
  });
});

