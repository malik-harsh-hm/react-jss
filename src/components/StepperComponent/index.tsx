import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  alternativeLabel : { value : boolean };
  className : { value : string };
  nonLinear : { value : boolean };
};

type Props = {
  /**
   * Authorable fields
   */
  fields: SitecoreFields;
  /**
   * Non-Authorable fields
   */
  /**
   * Handlers
   */
};

const StepperComponent = (props: Props): JSX.Element => {
  return (<Stepper {...mapSitecorePropsToMUIProps(props)}></Stepper>);
};

export default StepperComponent;
