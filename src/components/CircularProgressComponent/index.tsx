import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  thickness : { value : number };
  value : { value : number };
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

const CircularProgressComponent = (props: Props): JSX.Element => {
  return (<CircularProgress {...mapSitecorePropsToMUIProps(props)}></CircularProgress>);
};

export default CircularProgressComponent;
