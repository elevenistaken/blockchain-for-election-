var Election = artifacts.require("./Election.sol");

contract("Election",function(accounts) {
  var electionInstance;

  it("initializes with two candidates",function() {
  	return Election.deployed().then(function(instance){
  		return instance.candidateCount();
  	}).then(function(count){
  		assert.equal(count,2);
  	});
  });

  it("it initializes the candidates with the correct values",function(){
  	return Election.deployed().then(function(instance){
  		electionInstance = instance;
  		return electionInstance.candidates(1);
   	}).then(function(candidate){
   		assert.equal(candidate[0],1,"contain the correct id");
   		assert.equal(candidate[1],"张青龙","contain the correct name")
   		assert.equal(candidate[2],0,"contains the correct votes count");
   		return electionInstance.candidates(2);
   	}).then(function(candidate){
   		assert.equal(candidate[0],2,"contain the correct id");
   		assert.equal(candidate[1],"李白虎","contain the correct name")
   		assert.equal(candidate[2],0,"contains the correct votes count");
   	});
  });
 });
