import * as React from 'react';
import Step from '@mui/material/Step';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  active : { value : boolean };
  className : { value : string };
  completed : { value : boolean };
  disabled : { value : boolean };
  expanded : { value : boolean };
  last : { value : boolean };
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

const StepComponent = (props: Props): JSX.Element => {
  return (<Step {...mapSitecorePropsToMUIProps(props)}></Step>);
};

export default StepComponent;
