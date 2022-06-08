import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  allowScrollButtonsMobile : { value : boolean };
  arialabel : { value : string };
  arialabelledby : { value : string };
  centered : { value : boolean };
  className : { value : string };
  selectionFollowsFocus : { value : boolean };
  visibleScrollbar : { value : boolean };
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

const TabsComponent = (props: Props): JSX.Element => {
  return (<Tabs {...mapSitecorePropsToMUIProps(props)}></Tabs>);
};

export default TabsComponent;
