/* location.js */
(function(G){
  var kSEmpty = '';
  var _l = function( loc ){
    if ( loc === void 0 ) {
      loc = !location ? "" : location.toString();
    }
    var _loc = loc,
      _hash, _host, _hostname, _href, _pathname, _port, _protocol, _search,
      _htmlsafe = function(){
        return "http://localhost/";
      }; 

    _hash = _loc.indexOf('#') != -1 ? '#' + _loc.split(/#/)[1] : kSEmpty;
    _host = _loc.replace(/.+\/\/([^\/]+).+/, function( s, p1 ){ return p1; });
    _hostname = _host.replace(/[\[\]]/g, kSEmpty).replace(/([^:]+)(\:?.*)/, function( s, p1 ) { return p1; });
    _href = _loc;
    var q = _loc.indexOf( _host ) + _host.length;
    _pathname = _loc.substring( q ).replace( /\?.+/g, kSEmpty ).replace( /#.+/g, kSEmpty );
    _port = ( _host.indexOf(':') == -1 ) ? kSEmpty : _host.replace( /.+:([0-9]+)/, function( s, p1 ){ return p1; });
    _protocol = _loc.substring( 0, _loc.indexOf('/') );
    _search = ( _hash !== kSEmpty ) ? _loc.substring( 0, _loc.indexOf('#') ) : _loc;
    _search = ( _search.indexOf( '?' ) === -1 ) ? kSEmpty : _search.replace(/(.+)(\?.*)/, function( s, p1, p2 ){ return p2; } );
    
    this._loc = _loc;
    this.htmlSafe = _htmlsafe;
    this.hash = _hash;
    this.host = _host;
    this.hostname = _hostname;
    this.href = _loc;
    this.pathname = _pathname;
    this.port = _port;
    this.protocol = _protocol;
    this.search = _search;
  };
  G.XLocation = _l;
}(this));