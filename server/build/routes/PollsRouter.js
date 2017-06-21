'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PollsRouter = function () {
  function PollsRouter() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api/polls';

    _classCallCheck(this, PollsRouter);

    this.router = (0, _express.Router)();
    this.path = path;
    this.init();
  }

  _createClass(PollsRouter, [{
    key: 'getAll',
    value: function getAll(req, res) {
      res.status(200).json([{
        id: '1',
        name: 'elo',
        quantity: 10,
        price: 20
      }]);
    }
  }, {
    key: 'init',
    value: function init() {
      this.router.get('/', this.getAll);
    }
  }]);

  return PollsRouter;
}();

exports.default = PollsRouter;
//# sourceMappingURL=PollsRouter.js.map
