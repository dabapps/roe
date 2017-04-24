const LIVERELOAD_URL = 'http://localhost:35729/livereload.js?snipver=1';

const setupLivereload = () => {
  const element = document.createElement('script');
  element.type = 'text/javascript';
  element.src = LIVERELOAD_URL;

  document.body.appendChild(element);
};

if (process.env.LIVERELOAD === 'true') {
  setupLivereload();
}
