var paystack = require('../index')(process.env.KEY)
  , mocha = require('mocha')
  , expect = require('chai').expect
  ;

describe("Paystack refund", function() {

  var refund_id, refund_code;

  
  // New refund
  it("should create a new refund", function(done) {
    paystack.refund.create({
        transaction: 'tid', 
      }).then(function(body){
        expect(body).to.have.property('data');
        expect(body.data).to.have.property('id');
        expect(body.data).to.have.property('refund_code');

        refund_id = body.data.id;
        refund_code = body.data.refund_code;
        done();
      }).catch(function(error){
        return done(error);
      });
  });
 
  // Fetch refund
  it("should get details of a refund", function(done) {
    paystack.refund.get(refund_id).then(function(body){
      expect(body).to.have.property('data');
      expect(body.data).to.have.property('id');

      done();
    }).catch(function(error){
      return done(error);
    });
  });

  // List refunds
  it("should list refund", function(done) {
    paystack.refund.list().then(function(body){
      expect(body).to.have.property('data');
      expect(body.data).to.be.instanceof(Array);
      done();
    }).catch(function(error){
      return done(error);
    });
  });

});
