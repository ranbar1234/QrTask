"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SitesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require("angular2/core");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SitesComponent = exports.SitesComponent = function () {
	_createClass(SitesComponent, null, [{
		key: "annotations",
		get: function get() {
			return [new _core.Component({
				selector: "sites",
				templateUrl: "src/app/SitesComponent.html"
			})];
		}
	}]);

	function SitesComponent() {
		_classCallCheck(this, SitesComponent);

		var qrUrl = 'http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|1&chl=';
		this.list = [{ Title: "Ynet", QrUrl: qrUrl + "www.ynet.co.il" }, { Title: "One", QrUrl: qrUrl + "www.one.co.il" }, { Title: "Nrg", QrUrl: qrUrl + "www.nrg.co.il" }, { Title: "Sport5", QrUrl: qrUrl + "www.sport5.co.il" }, { Title: "Walla", QrUrl: qrUrl + "www.walla.co.il" }];
	}

	_createClass(SitesComponent, [{
		key: "hover",
		value: function hover(site) {
			this.mouseOverSite = site.Title;
		}
	}, {
		key: "stopHover",
		value: function stopHover() {
			this.mouseOverSite = null;
		}
	}]);

	return SitesComponent;
}();