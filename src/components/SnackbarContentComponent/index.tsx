import * as React from 'react';
import SnackbarContent from '@mui/material/SnackbarContent';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  role : { value : string };
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

const SnackbarContentComponent = (props: Props): JSX.Element => {
  return (<SnackbarContent {...mapSitecorePropsToMUIProps(props)}></SnackbarContent>);
};

export default SnackbarContentComponent;
