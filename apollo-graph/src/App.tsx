import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Apollorender } from './components/apollo';

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
});

client
    .query({
        query: gql`
            {
                launches(limit: 5) {
                    launch_date_utc
                    launch_success
                    rocket {
                        rocket_name
                    }
                    links {
                        video_link
                    }
                    details
                }
            }
        `
    })
    .then(result => console.log(result));

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Apollorender />
            </div>
        </ApolloProvider>
    );
}

export default App;
