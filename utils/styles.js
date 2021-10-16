import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: '80vh',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '1rem',
  },

  footer: {
    textAlign: 'center',
    marginTop: 10,
  },
  pageHolder: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '10rem',
  },
});
export default useStyles;
