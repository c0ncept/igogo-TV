import {Cream, inject} from 'cakejs2-spatial';
import Reset from './Reset';
import LeftMenu from './LeftMenu';

Cream.extend({
  _namespace: 'pages.tv',
  isMenuVisible: inject('components.leftmenu.isMenuVisible'),
  startEl: null,

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
          <div className="content--title">Йа 111111 Котэ !!1111</div>

            <div className="content--start">
              <div className="content--center">
               <img src="//loremflickr.com/500/300/kitty" />
              </div>
            </div>

            <div className="content--center">
            <h2 className="content--header">A кто ты %username% ?</h2>
              <a focusable={f} ref={(ref) => { this.startEl = ref; }} className="content_button--regular" href="#/cartoons">Идиот</a>
              <a className="content_button--regular" href="#/cartoons">Гений</a>
            </div>
        </div>
      </div>
    );
  }
});

