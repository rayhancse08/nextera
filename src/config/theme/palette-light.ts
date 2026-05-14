import { PaletteOptions } from '@mui/material'
import { grey } from '@mui/material/colors'

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#f0f4f8',
    paper: '#ffffff',
  },
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    disabled: grey[500],
  },
}

export default palette
