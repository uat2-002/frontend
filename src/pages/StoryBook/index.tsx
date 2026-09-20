import ButtonComponent from './ButtonComponent';
import ModalComponent from './ModalComponent';
import SeparatorComponent from './SeparatorComponent';
import InputComponent from './InputComponent';
import LabelComponent from './LabelComponent';
import FieldComponent from './FieldComponent';
import AlertComponent from './AlertComponent';
import CardComponent from './CardComponent';

import ButtonAComponent from './ButtonAComponent';
import StatusPillComponent from './StatusPillComponent';
import MediaCardComponent from './MediaCardComponent';
import EpisodeRowComponent from './EpisodeRowComponent';
import SearchResultCardComponent from './SearchResultCardComponent';
import SeasonProgressBlockComponent from './SeasonProgressBlockComponent';
import ToastComponent from '@/pages/StoryBook/ToastComponent';



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
      <ButtonAComponent />
      <StatusPillComponent />
      <MediaCardComponent />
      <SearchResultCardComponent />
      <EpisodeRowComponent />
      <SeasonProgressBlockComponent />
    </>
  );
};

export default StoryBook;
