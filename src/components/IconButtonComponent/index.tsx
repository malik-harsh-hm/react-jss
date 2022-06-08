import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  disableFocusRipple : { value : boolean };
  disableRipple : { value : boolean };
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

const IconButtonComponent = (props: Props): JSX.Element => {
  return (<IconButton {...mapSitecorePropsToMUIProps(props)}></IconButton>);
};

export default IconButtonComponent;
