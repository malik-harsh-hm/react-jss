import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disableSpacing : { value : boolean };
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

const CardActionsComponent = (props: Props): JSX.Element => {
  return (<CardActions {...mapSitecorePropsToMUIProps(props)}></CardActions>);
};

export default CardActionsComponent;
