import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';
import Signin from '../../containers/Signin';
import Banner from './Banner';

const styles = theme => ({
  root: {
    width: '100%',
    background: '#FFFFFF',
    marginBottom: '80px',
  },
  grow: {
    flexGrow: 1,
  },
  bannerButton: {
    marginLeft: 20,
    marginRight: 0,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F5F5F6',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      border: '1px solid',
      borderColor: '#696E79',
    },
    marginRight: theme.spacing.unit * 4,
    width: '100%',
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: theme.spacing.unit * 1,
      width: 'auto',
    },
  },
  searchIcon: {
    color: '#696E79',
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#696E79',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      whiteSpace: 'nowrap',
    },
  },
  list: {
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '0.3px',
    color: '#282C3F',
    font: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    const headerMenuStyle = {
      display: 'flex',
    };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <div>
              <Button
                component={Link}
                to="/"
                className={classes.bannerButton}
                color="inherit"
                aria-label="Zypher"
              >
                <Banner />
              </Button>
            </div>
            <MenuList style={headerMenuStyle}>
              <MenuItem component={Link} to="/fiction" className={classes.list}>
                Fiction
              </MenuItem>
              <MenuItem
                component={Link}
                to="/non-fiction"
                className={classes.list}
              >
                Non Fiction
              </MenuItem>
              <MenuItem component={Link} to="/explore" className={classes.list}>
                Explore
              </MenuItem>
              <MenuItem component={Link} to="/club" className={classes.list}>
                Club
              </MenuItem>
              <MenuItem component={Link} to="/plans" className={classes.list}>
                Plans
              </MenuItem>
            </MenuList>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              <Signin />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
