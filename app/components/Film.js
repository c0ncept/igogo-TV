import {Cream, inject} from 'cakejs2-spatial';
import LeftMenu from './LeftMenu';
import Scrollabl from './Scrollabl';
import scrollIntoView from 'scroll-into-view';
import Reset from './Reset';

Cream.extend({
  _namespace: 'pages.film',
  isMenuVisible: inject('components.leftmenu.isMenuVisible'),
  lastParent: null,

  didMount (dom) {
    if (!this.get('isMenuVisible')) {
      scrollIntoView(this.startEl);
      dom.sn.focus(this.startEl);
    }
  },

  createCats (w, hi, num) {
    let cats = [];

    for (let i = 0; i < num; i++) {
      let url = '//loremflickr.com/' + w + '/' + hi + '?random=' + i + (Math.random() * 100);
      cats.push(
       <div focusable={!this.get('isMenuVisible')}>
        <img src={url} />
      </div>);
    }

    return cats;
  },

  render () {
    Reset();
    const f = !this.get('isMenuVisible');
    return (
      <div className="application">
        <LeftMenu />
        <div className="content">
          <h1 className="content--title">Kотогалерея</h1>
          <div className="film-page">
            <Scrollabl animate={true} className="film-page--items">
              <div focusable={f} ref={(ref) => { this.startEl = ref; }}><img src="//loremflickr.com/180/240/cat" /></div>
              { this.createCats(180, 240, 24) }
            </Scrollabl>
          </div>
        </div>
      </div>
    );
  }
});

