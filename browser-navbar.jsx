function normalizedUri(input) {
  var prefix = 'http://';

  if (!/^([^:\/]+)(:\/\/)/g.test(input) && !prefix.includes(input)) {
    input = prefix + input;
  }

  return input;
}

var BrowserNavbarBtn = React.createClass({
  render: function () {
    return <a href="#" className={this.props.disabled ? 'disabled' : ''} title={this.props.title} onClick={this.props.onClick}><i className={'fa fa-' + this.props.icon} /></a>
  }
})

//Handle the provided link in the url bar
var BrowserNavbarLocation = React.createClass({
  onKeyDown: function (e) {
    if (e.keyCode == 13)
      this.props.onEnterLocation(normalizedUri(e.target.value))
  },
  onChange: function (e) {
    this.props.onChangeLocation(normalizedUri(e.target.value))
  },
  render: function () {
    return <input type="text" onKeyDown={this.onKeyDown} onChange={this.onChange} onContextMenu={this.props.onContextMenu} value={this.props.page.location} />
  }
})


//Generate interface
var BrowserNavbar = React.createClass({
  render: function () {
    return <div id="browser-navbar">
      <BrowserNavbarBtn title="Back to start" icon="fast-backward   fa-lg" onClick={this.props.onClickHome} disabled={!this.props.page.canGoBack} />
      <BrowserNavbarBtn title="Go back a page" icon="arrow-left fa-lg" onClick={this.props.onClickBack} disabled={!this.props.page.canGoBack} />
      <BrowserNavbarBtn title="Go forward a page" icon="arrow-right fa-lg" onClick={this.props.onClickForward} disabled={!this.props.page.canGoForward} />
      <BrowserNavbarBtn title="Refresh the page" icon="refresh fa-lg" onClick={this.props.onClickRefresh} disabled={!this.props.page.canRefresh} />
      <div className="input-group">
        <BrowserNavbarLocation onEnterLocation={this.props.onEnterLocation} onChangeLocation={this.props.onChangeLocation} onContextMenu={this.props.onLocationContextMenu} page={this.props.page} />
      </div>
    </div>
  }
})
