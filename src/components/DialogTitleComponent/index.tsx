import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  id : { value : string };
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

const DialogTitleComponent = (props: Props): JSX.Element => {
  return (<DialogTitle {...mapSitecorePropsToMUIProps(props)}></DialogTitle>);
};

export default DialogTitleComponent;
