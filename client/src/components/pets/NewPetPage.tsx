import * as React from 'react';

import { IOwner, IEditablePet, ISelectOption } from '../../types';

import LoadingPanel from './LoadingPanel';
import PetEditor from './PetEditor';

interface INewPetPageProps {
  params: { ownerId: string };
}

interface INewPetPageState {
  pet?: IEditablePet;
  owner?: IOwner;
  pettypes?: ISelectOption[];
};

const NEW_PET: IEditablePet = {
  id: null,
  name: '',
  birthDate: null,
  typeId: null
};

export default class NewPetPage extends React.Component<INewPetPageProps, INewPetPageState> {

  componentDidMount() {
    fetch('/api-owners/owners/' + this.props.params.ownerId)
    .then(response => response.json())
    .then(model => { this.setState({ owner: model }); });
  }

  render() {
    if (!this.state) {
      return <LoadingPanel />;
    }

    return <PetEditor {...this.state} />;
  }
}