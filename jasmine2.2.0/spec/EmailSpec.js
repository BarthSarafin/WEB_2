describe("email", function() {
  var email,emptymail,server;

  beforeEach(function() {
    email = new Email("ToHuman","FromHuman","Why?","BecausICan","FromHumanSigned");
    emptymail = new Email(null,"EmptyFrom","WHyEmpty?","WhyNotEmpty?","FromEmptyHuman");
    server = new Server();
  });

  it("should get the data in the email", function(){
      expect(email.getTo()).toEqual("ToHuman");
      expect(email.getSignature()).toEqual("FromHumanSigned");
  });

  it("tracks that the Server was called", function(){
    spyOn(server,"sendEmail");
    email.deliver(server);
    expect(server.sendEmail).toHaveBeenCalled();
  });

  it("tracks that the Server was called with", function(){
    spyOn(server,"sendEmail");
    email.deliver(server);
    expect(server.sendEmail).toHaveBeenCalledWith(email);
  });

  it("tracks when the fake has been called", function(){
    spyOn(server,"sendEmail").and.callFake(function(email){
      if(email.getTo()){
        return true;
      } else {
        return false;
      }
    });
    var received = emptymail.deliver(server);
    expect(server.sendEmail).toHaveBeenCalled();
    expect(received).toEqual(false);
  });
});
