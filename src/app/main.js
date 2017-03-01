import {bootstrap} from 'angular2/platform/browser';
import {SitesComponent} from './SitesComponent';

let boot = document.addEventListener('DOMContentLoaded', () => {  	
  $('<sites name="pop">Loading...</sites>').appendTo('body');
  bootstrap(SitesComponent);
});

module.exports = boot;