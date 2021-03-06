import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const styles = theme => ({
  avatar: {
    margin: 10,
  },
  cartButton: {
    marginRight: '20px',
  }
})

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
        }
    }

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };
    
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const { classes } = this.props;
        return(
          <div style={{ display: 'flex'}}>
            <IconButton component={Link} to="/cart" className={classes.cartButton} color="inherit" aria-label="cart">
              <ShoppingCartIcon />
            </IconButton>
            <Grid container justify="center" alignItems="center">
              <Avatar alt={this.props.fullName} src={this.props.userImageURL} onClick={this.handleMenu} className={classes.avatar} />
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.props.signOut}>logout</MenuItem>
                  <MenuItem onClick={console.log("clicked")}>My account</MenuItem>
                </Menu>
            </Grid>
          </div>
        );
    }
}

export default LoggedIn;