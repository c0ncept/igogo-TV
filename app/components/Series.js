import {Cream, inject} from 'cakejs2-spatial';
import LeftMenu from './LeftMenu';
import Scrollabl from './Scrollabl';
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
          <h1 className="content--title">Блоки блоки</h1>
          <div className="film-page">
            <Scrollabl animate={true}>
             <div className="content--block">
                <h2 className="content--header">Блок</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
                <a focusable={f} ref={(ref) => { this.startEl = ref; }} className="content_button--regular" href="#/cartoons">Button</a>
                <a focusable={f} className="content_button--regular" href="#/cartoons">Button</a>
             <div className="content--block">
                <h2 className="content--header">Блок</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>
                <a focusable={f} className="content_button--regular" href="#/cartoons">Button</a>
                <a focusable={f} className="content_button--regular" href="#/cartoons">Button</a>
             <div className="content--block">
                <h2 className="content--header">Блок</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>
                <a focusable={f} className="content_button--regular" href="#/cartoons">Button</a>
                <a focusable={f} className="content_button--regular" href="#/cartoons">Button</a>
             <div className="content--block">
                <h2 className="content--header">Футер</h2>
              </div>
            </Scrollabl>
          </div>
        </div>
      </div>
    );
  }
});

