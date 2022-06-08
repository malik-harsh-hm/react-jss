import * as React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  focusVisibleClassName : { value : string };
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

const CardActionAreaComponent = (props: Props): JSX.Element => {
  return (<CardActionArea {...mapSitecorePropsToMUIProps(props)}></CardActionArea>);
};

export default CardActionAreaComponent;
