import { forwardRef } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const RadioButtonsGroup = forwardRef(({ ...props }, ref) => {
  return (
    <FormControl>
      <FormLabel>Select your position</FormLabel>
      <RadioGroup>
        <FormControlLabel
          value='1'
          control={<Radio />}
          label='Lawyer'
          ref={ref}
          {...props}
        />
        <FormControlLabel
          value='2'
          control={<Radio />}
          label='Content manager'
          ref={ref}
          {...props}
        />
        <FormControlLabel
          value='3'
          control={<Radio />}
          label='Security'
          ref={ref}
          {...props}
        />
        <FormControlLabel
          value='4'
          control={<Radio />}
          label='Designer'
          ref={ref}
          {...props}
        />
      </RadioGroup>
    </FormControl>
  );
});
RadioButtonsGroup.displayName = 'RadioButtonsGroup';
