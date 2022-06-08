import * as React from 'react';
import Chip from '@mui/material/Chip';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  clickable : { value : boolean };
  disabled : { value : boolean };
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

const ChipComponent = (props: Props): JSX.Element => {
  return (<Chip {...mapSitecorePropsToMUIProps(props)}></Chip>);
};

export default ChipComponent;
