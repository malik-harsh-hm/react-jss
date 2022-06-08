import * as React from 'react';
import Link from '@mui/material/Link';
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

const LinkComponent = (props: Props): JSX.Element => {
  return (<Link {...mapSitecorePropsToMUIProps(props)}></Link>);
};

export default LinkComponent;
