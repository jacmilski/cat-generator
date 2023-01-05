import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1a2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    margin: '0 40px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '400px',
    opacity: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

}));