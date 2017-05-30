angular
  .module('app')
  .provider('message', message);

/** @ngInject */
function message() {
  var service = {
    _messages: [],
    show: show,
    dismiss: dismiss,
    getMessages: getMessages,
    withHeader: withHeader,
    withType: withType,
    withList: withList,
    $get: function () {
      return this;
    }
  };

  function show(message) {
    this._messages.push({
      message: message,
      visible: true
    });
    return this;
  }

  function dismiss(message) {
    _.pull(this._messages, message);
    return this;
  }

  function withType(type) {
    _.set(_.last(this._messages), 'type', type);
    return this;
  }

  function withHeader(header) {
    _.set(_.last(this._messages), 'header', header);
    return this;
  }

  function withList(obj) {
    _.set(_.last(this._messages), 'list', obj);
    return this;
  }

  function getMessages() {
    return this._messages;
  }

  return service;

}
