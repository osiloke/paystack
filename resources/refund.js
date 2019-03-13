'use strict';

var root = '/refund';

module.exports = {

  /*
  Create refund
  */
  create: {
      method: 'post',
      endpoint: root,
      params: ['*transaction', 'amount', 'currency', 'customer_note', 'merchant_note']
    },

  /*
  Get refund
  */
  get: {
      method: 'get',
      endpoint: [root, '/{id}'].join(''),
      args: ['id']
  },

  /*
  List refund
  */
  list: {
      method: 'get',
      endpoint: root
    },

  /*
  Update refund
  */
  update: {
      method: 'put',
      endpoint: [root, '/{id}'].join(''),
      params: ['transaction', 'amount', 'currency', 'customer_note', 'merchant_note'],
      args: ['id']
    }
};
