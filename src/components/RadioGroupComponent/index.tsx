import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  name : { value : string };
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

const RadioGroupComponent = (props: Props): JSX.Element => {
  return (<RadioGroup {...mapSitecorePropsToMUIProps(props)}></RadioGroup>);
};

export default RadioGroupComponent;
