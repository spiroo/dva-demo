import fetch from 'dva/fetch';
import Promise from 'promise-polyfill';

// 兼容ie Promise报错问题
if (!global.window.Promise) {
  global.window.Promise = Promise;
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseErrorMessage({ data }) {
  const { status } = data;
  if (status === 0) {
    return data;
  } else {
    throw new Error('code');
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  // 添加时间戳清除ajax缓存
  const newOptions = { ...options };
  let requestMode = options.method;
  let urlIE;
  const dateParameter = `&date=${new Date().getTime()}`;
  if (requestMode) {
    requestMode = requestMode.toUpperCase();
  }
  if (requestMode === 'POST') {
    urlIE = url;
    newOptions.body += dateParameter;
  } else {
    newOptions.method = 'GET';
    urlIE = url + dateParameter;
  }

  return fetch(urlIE, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
