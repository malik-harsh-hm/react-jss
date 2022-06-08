import * as React from 'react';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  open : { value : boolean };
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

const SpeedDialIconComponent = (props: Props): JSX.Element => {
  return (<SpeedDialIcon {...mapSitecorePropsToMUIProps(props)}></SpeedDialIcon>);
};

export default SpeedDialIconComponent;
