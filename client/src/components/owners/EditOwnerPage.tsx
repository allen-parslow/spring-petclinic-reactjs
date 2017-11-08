import * as React from 'react';
import OwnerEditor from './OwnerEditor';

import { IOwner } from '../../types';

interface IEditOwnerPageProps {
  params?: { ownerId?: string };
}

interface IEditOwnerPageState {
  owner: IOwner;
}

export default class EditOwnerPage extends React.Component<IEditOwnerPageProps, IEditOwnerPageState> {
  componentDidMount() {
    const { params } = this.props;

    if (params && params.ownerId) {
      const fetchUrl = `/api/owner/${params.ownerId}`;
      fetch(fetchUrl)
        .then(response => response.json())
        .then(owner => this.setState({ owner }));
    }
  }
  render() {
    const owner = this.state && this.state.owner;
    if (owner) {
      return <OwnerEditor initialOwner={owner} />;
    }
    return null;
  }
}
