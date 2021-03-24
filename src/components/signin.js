import React,{useState}  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  body: {
    background: '#ADA996',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  },
  paper: {
    padding: '140px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textDecoration: 'none',
  },
  link:{
    color: 'white',
    textDecoration: 'none',
  },
}));
/*async function loginUser(credentials) {
  return fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
*/
export default function SignIn(props) {
  const classes = useStyles();
  const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

const history = useHistory();

const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'a@a.com',
        password: '123'
    }

    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
        const token = '123456abcdef';
        window.localStorage.setItem('token', token);
        history.push('/Dashboard');
    } else {
        alert('Invalid email or password.');
    }
}
 
  return (
    <div className={classes.body}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate  onSubmit={handleLoginSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Sign In
          </Button>
          
        </form>
      </div>
    </Container>
    </div>
  );
}
