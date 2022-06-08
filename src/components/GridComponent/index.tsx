import * as React from 'react';
import Grid from '@mui/material/Grid';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  container : { value : boolean };
  item : { value : boolean };
  zeroMinWidth : { value : boolean };
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

const GridComponent = (props: Props): JSX.Element => {
  return (<Grid {...mapSitecorePropsToMUIProps(props)}></Grid>);
};

export default GridComponent;
