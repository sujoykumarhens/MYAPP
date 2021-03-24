import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogOut from '@material-ui/icons/ExitToApp';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Books from './books';
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MenuBookOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Books" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DateRangeRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Lend Book" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceWalletRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Wallet" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <Divider />
    <List component="nav"  aria-label="secondary">
      <Link to='/Signin' style={{textDecoration:'none', color:'black',}}>
        <ListItem button  style={{ color: '#d32f2f' }}>
          <ListItemIcon>
            <LogOut style={{ color: '#d32f2f' }}/>
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </Link>
    </List>
  </div>
);