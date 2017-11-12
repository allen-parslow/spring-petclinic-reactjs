import * as React from 'react';

import { Link } from 'react-router';
import { IOwner } from '../../types';

import OwnerInformation from './OwnerInformation';
import PetsTable from './PetsTable';

interface IOwnersPageProps {
  params?: { ownerId?: string };
}

interface IOwnerPageState {
  owner?: IOwner;
}

export default class OwnersPage extends React.Component<IOwnersPageProps, IOwnerPageState> {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { params } = this.props;

    if (params && params.ownerId) {
      fetch(`/api-owners/owners/${params.ownerId}`)
        .then(response => response.json())
        .then(owner => this.setState({ owner }));
    }
  }

  render() {
    const { owner } = this.state;

    if (!owner) {
      return <h2>No Owner loaded</h2>;
    }

    return (
      <span>
        <OwnerInformation owner={owner} />
        <PetsTable owner={owner} />
      </span>
    );
  }
}
