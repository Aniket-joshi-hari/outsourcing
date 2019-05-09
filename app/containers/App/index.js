/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Explore from 'containers/Explore';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Plans from 'components/Plans';
import Header from 'components/Header';
import AuthorDetails from 'components/AuthorDetails';
import ProductDetails from 'components/ProductDetails';
import GlobalStyle from '../../global-styles';
import Signin from 'containers/Signin';
import CartPage from 'containers/CartPage';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Zypher" defaultTitle="Zypher">
        <meta name="description" content="" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Explore} />
        <Route path="/plans" component={Plans} />
        <Route path="/explore" component={Explore} />
        <Route path="/author-details" component={AuthorDetails} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
