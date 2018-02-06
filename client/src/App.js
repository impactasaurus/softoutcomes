import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import normalise from './shared/global';
import { primaryTheme } from './shared/theme';
import Homepage from './homepage';
import Catalogue from './catalogue';
import Questionnaire from './questionnaire';
import Styleguide from './styleguide';
import reducer from './reducer';
normalise();

const store = createStore(reducer, applyMiddleware(thunk));

export default () => (
    <ThemeProvider theme={primaryTheme}>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/catalogue" component={Catalogue} />
                    <Route path="/questionnaire/:questionnaireId" component={Questionnaire} />
                    {process.env.REACT_APP_STYLEGUIDE_ENABLED === 'true' && <Route path="/styleguide" component={Styleguide} />}
                </Switch>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
);
