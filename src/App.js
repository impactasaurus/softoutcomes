import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import normalise from './shared/global';
import { primaryTheme } from './shared/theme';
import Homepage from './homepage';
import Catalogue from './catalogue';
import Questionnaire from './questionnaire';
import Styleguide from './styleguide';
normalise();

const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URI,
});

export default () => (
    <ThemeProvider theme={primaryTheme}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/catalogue" component={Catalogue} />
                    <Route path="/questionnaire/:questionnaireId" component={Questionnaire} />
                    {process.env.REACT_APP_STYLEGUIDE_ENABLED === 'true' && <Route path="/styleguide" component={Styleguide} />}
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    </ThemeProvider>
);
