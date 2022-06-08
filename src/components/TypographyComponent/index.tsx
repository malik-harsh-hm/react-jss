import * as React from 'react';
import Typography from '@mui/material/Typography';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  gutterBottom : { value : boolean };
  noWrap : { value : boolean };
  paragraph : { value : boolean };
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

const TypographyComponent = (props: Props): JSX.Element => {
  return (<Typography {...mapSitecorePropsToMUIProps(props)}></Typography>);
};

export default TypographyComponent;
