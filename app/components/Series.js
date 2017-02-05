import {Cream, inject} from 'cakejs2-spatial';
import LeftMenu from './LeftMenu';
import scrollIntoView from 'scroll-into-view';
import Reset from './Reset';

Cream.extend({
  _namespace: 'pages.series',
  isMenuVisible: inject('components.leftmenu.isMenuVisible'),
  lastParent: null,

  didMount (dom) {
    if (!this.get('isMenuVisible')) {
      scrollIntoView(this.startEl);
      dom.sn.focus(this.startEl);
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

  render () {
    Reset();
    const f = !this.get('isMenuVisible');
    return (
      <div className="application">
        <LeftMenu />
        <div className="content">
          <h1 className="content--title">Блоки блоки</h1>
          <div className="film-page">
            <div className="films-container" ref={(ref) => { this.containerEl = ref; }}>
             <div className="content--block">
                <h2 className="content--header">Блок</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
                <a focusable={f} onFocusx={ this.onFocus } ref={(ref) => { this.startEl = ref; }} className="content_button--regular" href="#/cartoons">Button</a>
                <a focusable={f} onFocusx={ this.onFocus } className="content_button--regular" href="#/cartoons">Button</a>
             <div className="content--block">
                <h2 className="content--header">Блок</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>
                <a focusable={f} onFocusx={ this.onFocus } className="content_button--regular" href="#/cartoons">Button</a>
                <a focusable={f} onFocusx={ this.onFocus } className="content_button--regular" href="#/cartoons">Button</a>
             <div className="content--block">
                <h2 className="content--header">Блок</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>
                <a focusable={f} onFocusx={ this.onFocus } className="content_button--regular" href="#/cartoons">Button</a>
                <a focusable={f} onFocusx={ this.onFocus } className="content_button--regular" href="#/cartoons">Button</a>
             <div className="content--block">
                <h2 className="content--header">Футер</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

