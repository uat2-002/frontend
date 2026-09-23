import AlertComponent from '@/pages/UiLibrary/AlertComponent';
import ButtonAddComponent from '@/pages/UiLibrary/ButtonAddComponent';
import ButtonComponent from '@/pages/UiLibrary/ButtonComponent';
import CardComponent from '@/pages/UiLibrary/CardComponent';
import EpisodeRowComponent from '@/pages/UiLibrary/EpisodeRowComponent';
import FieldComponent from '@/pages/UiLibrary/FieldComponent';
import InputComponent from '@/pages/UiLibrary/InputComponent';
import LabelComponent from '@/pages/UiLibrary/LabelComponent';
import MediaCardComponent from '@/pages/UiLibrary/MediaCardComponent';
import ModalComponent from '@/pages/UiLibrary/ModalComponent';
import SearchResultCardComponent from '@/pages/UiLibrary/SearchResultCardComponent';
import SeasonProgressBlockComponent from '@/pages/UiLibrary/SeasonProgressBlockComponent';
import SeparatorComponent from '@/pages/UiLibrary/SeparatorComponent';
import StatusPillsComponent from '@/pages/UiLibrary/StatusPillsComponent';
import ToastComponent from '@/pages/UiLibrary/ToastComponent';

const UiLibrary = () => (
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

export default UiLibrary;
