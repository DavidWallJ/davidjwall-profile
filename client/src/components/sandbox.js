switch (this.props.muiTheme.theme) {
  case 'lightTheme':
    return (
      <MuiThemeProvider muiTheme={muiThemeLight}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  case 'darkTheme':
    return (
      <MuiThemeProvider muiTheme={muiThemeDark}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  default:
    return (
      <MuiThemeProvider muiTheme={muiThemeLight}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
}
}
