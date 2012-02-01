TestCase("LocationHtmlSafeTest",{
  testApi : function(){
    expectAsserts(1);
    var l = new XLocation();
    assertTypeOf( 'htmlsafe', 'function', l.htmlSafe );
  },
  testNormal : function(){
    expectAsserts(1);
    var h = "http://localhost/";
    var l = new XLocation( h );
    assertEquals( 'localhost ', h, l.htmlSafe() );
  }
});