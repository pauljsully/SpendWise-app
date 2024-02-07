import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Navigation from './component/Navbar/navbar';
import Home from './pages/Home/home';
import Transactions from './pages/transactions/transactions';
import Footer from './component/Footer/footer';


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
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Navigation />
              <Routes>
                {/* Define routes for each page */}
                <Route path="/home" element={<Home />} />
                <Route path="/transactions" element={<Transactions />} />
                {/* Add more routes for other pages */}
            </Routes>
            <Footer />
        </div>
      </Router>
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
