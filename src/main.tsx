import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ConfigProvider} from "antd";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#c50505',
                colorInfo: '#c50505'
            }
        }}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </ConfigProvider>
    </StrictMode>
)
