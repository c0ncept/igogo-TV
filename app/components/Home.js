import {Cream, inject} from 'cakejs2-spatial';
import Reset from './Reset';
import LeftMenu from './LeftMenu';

Cream.extend({
  _namespace: 'pages.home',
  isMenuVisible: inject('components.leftmenu.isMenuVisible'),

  didMount (dom) {
    if (!this.get('isMenuVisible')) {
      dom.sn.focus(this.startEl);
    }
  },

  render () {
    Reset();
    const f = !this.get('isMenuVisible');
    return (
      <div className="application">
        <LeftMenu />
        <div className="content">
          <h1 className="content--title">ИГОГО</h1>
          <div className="home-page">
            <div className="home-page--links">
              <a ref={(ref) => { this.startEl = ref; }} focusable={f} href="#/tv">Котэ</a>
              <a focusable={f} href="#/film">Котогалерея</a>
              <a focusable={f} href="#/cartoons">Котофильмы</a>
              <a focusable={f} href="#/series">Блоки Блоки</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

