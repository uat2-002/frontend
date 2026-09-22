import ButtonComponent from './ButtonComponent';
import ModalComponent from './ModalComponent';
import SeparatorComponent from './SeparatorComponent';
import InputComponent from './InputComponent';
import LabelComponent from './LabelComponent';
import FieldComponent from './FieldComponent';
import AlertComponent from './AlertComponent';
import CardComponent from './CardComponent';


import ToastComponent from '@/pages/StoryBook/ToastComponent';

import ButtonAddComponent from './ButtonAddComponent';
import StatusPillsComponent from './StatusPillsComponent';
import MediaCardComponent from './MediaCardComponent';
import SearchResultCardComponent from './SearchResultCardComponent';
import EpisodeRowComponent from './EpisodeRowComponent';
import SeasonProgressBlockComponent from './SeasonProgressBlockComponent';

const StoryBook = () => {
  return (
    <>
      <ButtonComponent />
      <ModalComponent />
      <ToastComponent />
      <SeparatorComponent />
      <InputComponent />
      <LabelComponent />
      <FieldComponent />
      <AlertComponent />
      <CardComponent />
   
      <ButtonAddComponent />
      <StatusPillsComponent />
      <MediaCardComponent />
      <SearchResultCardComponent />
      <EpisodeRowComponent />
      <SeasonProgressBlockComponent />
    </>
  );
};

export default StoryBook;
