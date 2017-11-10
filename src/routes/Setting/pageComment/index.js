import { View } from '../../../components';
import style from '../index.scss';
const { Content, Split } = View;

const createNs = () => {
  if (window.changyan !== undefined) {
  } else {
    window.changyan = {};
    window.changyan.api = {};
    window.changyan.api.config = function(conf) {
      window.changyan.api.tmpIsvPageConfig = conf;
    };
    window.changyan.api.ready = function(fn) {
      window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [];
      window.changyan.api.tmpHandles.push(fn);
    };
    window.changyan.ready = function(fn) {
      if (window.changyan.rendered) {
        fn && fn();
      } else {
        window.changyan.tmpHandles = window.changyan.tmpHandles || [];
        window.changyan.tmpHandles.push(fn);
      }
    };
  }
};

const createMobileNs = () => {
  if (window.cyan) {
    return;
  }
  window.cyan = {};
  window.cyan.api = {};
  window.cyan.api.ready = fn => {
    window.cyan.api.tmpHandles = window.cyan.api.tmpHandles || [];
    window.cyan.api.tmpHandles.push(fn);
  };
};
const loadVersionJs = () => {
  var loadJs = (src, fun) => {
    var head =
      document.getElementsByTagName('head')[0] || document.head || document.documentElement;

    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('src', src);

    if (typeof fun === 'function') {
      if (window.attachEvent) {
        script.onreadystatechange = function() {
          var r = script.readyState;
          if (r === 'loaded' || r === 'complete') {
            script.onreadystatechange = null;
            fun();
          }
        };
      } else {
        script.onload = fun;
      }
    }

    head.appendChild(script);
  };

  var ver = +new Date() + window.Math.random().toFixed(16);
  var url = 'https://changyan.itc.cn/upload/version-v4.js?' + ver;
  loadJs(url);
};

export default () => {
  createNs();
  createMobileNs();
  loadVersionJs();

  window.changyan.api.config({
    appid: 'cytjdgeJ7',
    conf: 'prod_e0ae268a3629c862b8790af46e93c5cb',
  });
  return (
    <Content key="content" className={style.content}>
      <Split className={style.title} title="评论列表" />
      <div id="SOHUCS" />
    </Content>
  );
};
