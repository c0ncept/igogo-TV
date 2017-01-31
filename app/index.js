import {create} from 'cakejs2-spatial';
import h from './tools/hyper';

window.h = h;

import './components/Home';
import './components/Tv';
import './components/Cartoons';
import './components/Film';
import './components/Series';

create({
  element: document.body,
  createRoot: false
})
.route('/tv', 'pages.tv')
.route('/cartoons', 'pages.cartoons')
.route('/film', 'pages.film')
.route('/series', 'pages.series')
.route('/', 'pages.home')
.route('*', 'pages.home');
