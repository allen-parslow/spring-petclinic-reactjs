import * as React from 'react';
import OwnerEditor from './OwnerEditor';

import { IOwner } from '../../types';

const newOwner = (): IOwner => ({
  id: null,
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  telephone: '',
  pets: []
});

export default () => <OwnerEditor initialOwner={newOwner()} />;