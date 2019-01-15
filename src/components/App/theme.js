import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';

export default () =>
  createMuiTheme({
    palette: {
      primary: purple,
      secondary: yellow,
    },
    status: {
      danger: 'orange',
    },
  });
