import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
  
  import { setContext } from '@apollo/client/link/context';
  import { Outlet } from 'react-router-dom';

  import './App.css';
  
  import  Header  from './components/Header';
  import  Footer  from './components/Footer';
  
  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {

    const token = localStorage.getItem('id_token');
    
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    uri: 'http://localhost:3001',
  });
  
  function App() {
    return (
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">

          <header>
            <Header />
          </header>
          
          <div className="body-main">
            <Outlet />
          </div>

          <footer>
            <Footer />
          </footer>
          
        </div>
      </ApolloProvider>
    );
  }
  
  export default App;