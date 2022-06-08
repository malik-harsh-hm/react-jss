import * as React from 'react';
import Divider from '@mui/material/Divider';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  absolute : { value : boolean };
  className : { value : string };
  flexItem : { value : boolean };
  light : { value : boolean };
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

const DividerComponent = (props: Props): JSX.Element => {
  return (<Divider {...mapSitecorePropsToMUIProps(props)}></Divider>);
};

export default DividerComponent;
