import scrollIntoView from 'scroll-into-view';
import {Cream, inject} from 'cakejs2-spatial';

const MenuComponent = Cream.extend({
  _namespace: 'components.leftmenu',
  cake: inject('cake'),
  isMenuVisible: false,
  lastSelected: null
});

export default function LeftMenu () {
  let startEl, scrollablRef, scrollablWrap;

  MenuComponent._emitter.once('didMount', focusMenuItem);

  function onFocusItem (evt) {
    scrollIntoView(evt.target, {
      time: 400,
      validTarget: function (target) { return target === scrollablWrap; },
      align: {
        top: 0.5
      }
    });
    MenuComponent.lastSelected = evt.target.getAttribute('href');
  }

  function hideMenu () {
    MenuComponent.set('isMenuVisible', false);
  }

  function enterMenu () {
    hideMenu();
  }

  function focusMenuItem (evt) {
    if (MenuComponent.isMenuVisible) {
      let element = [].slice.call(scrollablRef.childNodes)
        .filter((e) => e.getAttribute('href') === MenuComponent.lastSelected)[0];
      MenuComponent.get('cake').tree.sn.focus((element || startEl));
    }
  }

  function onFocusMenu (evt) {
    MenuComponent.set('isMenuVisible', true);
  }

  return (
    <div className={ MenuComponent.isMenuVisible ? 'left-menu' : 'left-menu hidden' }>
      { MenuComponent.isMenuVisible === true
        ? <div ref={(ref) => { scrollablWrap = ref; }} className="left-menu--wrapper" id="menu-wrapper">
         <div focusable={MenuComponent.isMenuVisible} onFocus={hideMenu} className="left-menu--overlay"></div>
         <div ref={(ref) => { scrollablRef = ref; }} className="left-menu--items">
          <a ref={(ref) => { startEl = ref; }} focusable={true} onEnterx={enterMenu} onFocus={onFocusItem} className="left-menu--item-iconed" href="#/profile">
              <i className="fa fa-user-circle-o"></i>Профиль
            </a>
            <a focusable={true} onEnterx={enterMenu} onFocus={onFocusItem} className="left-menu--item-iconed" href="#/search">
              <i className="fa fa-search"></i>Поиск
            </a>
            <a focusable={true} onEnterx={enterMenu} onFocus={onFocusItem} className="left-menu--item-iconed" href="#/myvideos">
              <i className="fa fa-video-camera"></i>Я Смотрю
            </a>
            <a focusable={true} onEnterx={enterMenu} onFocus={onFocusItem} className="left-menu--item" href="#/">Глагне</a>
            <a focusable={true} onEnterx={enterMenu} onFocus={onFocusItem} className="left-menu--item" href="#/tv">Котэ</a>
            <a focusable={true} onEnterx={enterMenu} onFocus={onFocusItem} className="left-menu--item" href="#/film">Котогалерея</a>
            <a focusable={true} onEnterx={enterMenu} onFocus={onFocusItem} className="left-menu--item" href="#/cartoons">Котофильмы</a>
            <a focusable={true} onEnterx={enterMenu} onFocus={onFocusItem} className="left-menu--item" href="#/series">Блоки Блоки</a>
          </div>
        </div>
        : <div className="left-menu--button" focusable={true} onClick={onFocusMenu} onEnterx={onFocusMenu}>
            <span className="left-menu--dashes"></span>
            <span className="left-menu--dashes"></span>
            <span className="left-menu--dashes"></span>
         </div>
      }
    </div>
  );
};
