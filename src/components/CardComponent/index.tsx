import * as React from 'react';
import Card from '@mui/material/Card';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
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

const CardComponent = (props: Props): JSX.Element => {
  return (<Card {...mapSitecorePropsToMUIProps(props)}></Card>);
};

export default CardComponent;
