/**
 *
 * CartPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectBooks } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getCartList } from './actions';
import Dragula from 'dragula';
import 'dragula/dist/dragula.min.css'

/* eslint-disable react/prefer-stateless-function */
export class CartPage extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };

  render() {
    console.log(this.props.books)
    return ( 
      <div className="cartList" style={{ width: '40%', height: 'auto', margin: 'auto', border: '1px solid'}}> 
        <div>
          <h2>
            Your Cart Items
          </h2>
        </div>
          <div ref={this.dragulaDecorator}>
            {this.props.books.map((item) => (
              <div key={item.pid._id} className="content" style={{ display: 'flex', borderBottom: '1px solid' }}>
                <img style={{ width: '150px', height: '200px', margin: '4%' }} src={item.pid.imageURL} alt={item.pid.productName} />
                <h4>{item.pid.productName}</h4>
                <h6>{item.pid.authorName}</h6>
              </div>
            ))}
          </div>
      </div>
    );
  }
}

CartPage.propTypes = {
  books: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  books: makeSelectBooks(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCart: () => dispatch(getCartList()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cartPage', reducer });
const withSaga = injectSaga({ key: 'cartPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CartPage);
