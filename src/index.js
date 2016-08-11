import angular from 'angular';
import ngMaterial from 'angular-material';
import appModule from 'config';
import 'css/master.scss';

angular.bootstrap(document, [appModule.name, ngMaterial]);
