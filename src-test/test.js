TestCase("LocationTest",{
  testCompile : function(){
    expectAsserts(3);
    assertNotUndefined("location", XLocation);
    assertTypeOf('typeof XLocation', 'function', XLocation);
    var l = new XLocation();
    assertTypeOf('instance', 'object', l);
  },
  testConstructorNoArgs : function(){
    expectAsserts(2);
    var l = new XLocation();
    assertEquals('no args', location.toString(), l._loc );
    assertTypeOf('_loc', 'string', l._loc );
  },
  testConstructorWithArg : function(){
    expectAsserts(2);
    var h = 'http://www.google.com' ;
    var l = new XLocation( 'http://www.google.com' );
    assertEquals('with args', h, l._loc );
    assertTypeOf('_loc', 'string', l._loc );
  }
});