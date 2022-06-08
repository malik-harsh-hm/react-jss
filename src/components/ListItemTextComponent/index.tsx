import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disableTypography : { value : boolean };
  inset : { value : boolean };
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

const ListItemTextComponent = (props: Props): JSX.Element => {
  return (<ListItemText {...mapSitecorePropsToMUIProps(props)}></ListItemText>);
};

export default ListItemTextComponent;
