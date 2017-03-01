import {Component, NgFor, Input} from 'angular2/core';

export class SitesComponent {
	static get annotations() {
		return [
			new Component({
	    		selector: "sites",
	    		templateUrl: "src/app/SitesComponent.html",
				styleUrls: ['src/app/SitesComponent.css']
	  		}),
		];
	}

	constructor () {
		const qrUrl = 'http://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|1&chl=';
		this.list = [{Title:"Ynet" , QrUrl: qrUrl+ "www.ynet.co.il"},{Title:"One" , QrUrl: qrUrl + "www.one.co.il"},
		{Title: "Nrg", QrUrl: qrUrl + "www.nrg.co.il"}, {Title: "Sport5", QrUrl: qrUrl + "www.sport5.co.il"}, {Title: "Walla", QrUrl: qrUrl + "www.walla.co.il"}]
	}

	hover(site){
		this.mouseOverSite = site.Title;
	}

	stopHover(){
		this.mouseOverSite = null;
	}
}