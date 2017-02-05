import {Cream, inject} from 'cakejs2-spatial';
import LeftMenu from './LeftMenu';
import Scrollabl from './Scrollabl';
import scrollIntoView from 'scroll-into-view';

Cream.extend({
  _namespace: 'pages.cartoons',
  isMenuVisible: inject('components.leftmenu.isMenuVisible'),
  lastParent: null,

  didMount (dom) {
    if (!this.get('isMenuVisible')) {
      scrollIntoView(this.startEl);
    }
  },

  onFocus (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    scrollIntoView(evt.target, {
      time: 400,
      validTarget: (target) => target === this.containerEl,
      align: {
        top: 0.5
      }
    }, () => evt.target.focus());
  },

  createCats (w, hi, num) {
    let cats = [];
    const rad = Math.round(Math.random() * 100);

    for (let i = 0; i < num; i++) {
      let url = '//loremflickr.com/' + w + '/' + hi + '?random=' + rad; // + '?random=' + i + (Math.random() * 100);
      cats.push(
       <div focusable={!this.get('isMenuVisible')} onFocus={this.onFocus}>
        <img src={url} />
      </div>);
    }

    return cats;
  },

  render () {
    const f = !this.get('isMenuVisible');
    return (
      <div className="application">
        <LeftMenu />
        <div className="content">
          <h1 className="content--title">Kотофильмы</h1>
          <div className="cartoons-page" ref={(ref) => { this.containerEl = ref; }}>
            <Scrollabl activate="active" animate={true} className="cartoons-page--carousel">
              <div className="nome"></div>
              <div focusable={f} ref={(ref) => { this.startEl = ref; }} onUnfocusx={this.onUnfocus}
                onFocusx={this.onFocus} className="active"><img src="//loremflickr.com/500/180/cat" /></div>
              { this.createCats(500, 180, 5) }
              <div></div>
            </Scrollabl>

            <h2 className="content--header">Тупосписок</h2>

            <div className="cartoons-page--wrap">
            <Scrollabl animate={true} className="cartoons-page--gallery">
              <div></div>
              { this.createCats(200, 340, 15) }
              <div></div>
            </Scrollabl>
            </div>

            <h2 className="content--header">Тестабля перманентного селехта</h2>

            <div className="cartoons-page--wrap">
            <Scrollabl activate="active" animate={true} className="cartoons-page--gallery">
              <div></div>
              { this.createCats(200, 340, 15) }
              <div></div>
            </Scrollabl>
            </div>

            <h2 className="content--header">Kнопкотест</h2>

            <div className="content--center">
              <a focusable={f} className="content_button--regular" href="#/">Йа Кнопко</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

