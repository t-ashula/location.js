TestCase("LocationLocationTest",{
  testHash : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'hash', 'string', l.hash );
    assertEquals( 'hash', '#test', l.hash );
  },
  testNoHash : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo";
    var l = new XLocation( h );
    assertTypeOf( 'hash', 'string', l.hash );
    assertEquals( 'hash', '', l.hash );      
  },
  testHost : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'host', 'string', l.host );
    assertEquals( 'host', '[www.google.com]:80', l.host );
  },
  testHostNoPort : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'host', 'string', l.host );
    assertEquals( 'host', '[www.google.com]:80', l.host );
  },
  testHostname : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'hostname', 'string', l.hostname );
    assertEquals( 'hostname', 'www.google.com', l.hostname );
  },
  testHostnameNoPort : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'hostname', 'string', l.hostname );
    assertEquals( 'hostname', 'www.google.com', l.hostname );
  },
  testHostnameNoBracket : function(){
    expectAsserts(2);
    var h = "http://www.google.com:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'hostname', 'string', l.hostname );
    assertEquals( 'hostname', 'www.google.com', l.hostname );
  },
  testHostnameNoPortNoBracket : function(){
    expectAsserts(2);
    var h = "http://www.google.com/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'hostname', 'string', l.hostname );
    assertEquals( 'hostname', 'www.google.com', l.hostname );
  },
  testHref : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'href', 'string', l.href );
    assertEquals( 'href', h, l.href );
  },
  testPathname : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'pathname', 'string', l.pathname );
    assertEquals( 'pathname', '/search', l.pathname ); 
  },
  testPort : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'port', 'string', l.port );
    assertEquals( 'port', '80', l.port );
  },
  testNoPort : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'port', 'string', l.port );
    assertEquals( 'port', '', l.port );
  },
  testProtocol : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'protocol', 'string', l.protocol );
    assertEquals( 'protocol', 'http:', l.protocol );
  },
  testSearch : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo#test";
    var l = new XLocation( h );
    assertTypeOf( 'search', 'string', l.search );
    assertEquals( 'search', '?q=devmo', l.search );
  },
  testNoSearch : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search#test";
    var l = new XLocation( h );
    assertTypeOf( 'search', 'string', l.search );
    assertEquals( 'search', '', l.search );
  },
  testSearchNoHash : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search?q=devmo";
    var l = new XLocation( h );
    assertTypeOf( 'search', 'string', l.search );
    assertEquals( 'search', '?q=devmo', l.search );
  },
  testSearchInHash : function(){
    expectAsserts(2);
    var h = "http://[www.google.com]:80/search#hash?q=aa";
    var l = new XLocation( h );
    assertTypeOf( 'search', 'string', l.search );
    assertEquals( 'search', '', l.search );
  }
});