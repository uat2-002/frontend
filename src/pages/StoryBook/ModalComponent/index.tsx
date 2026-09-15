import Modal from '@/components/shared/Modal';
import Item from '@/components/shared/Item';

const MODAL_PROPS = [
  {
    title: 'triggerOpen',
    description: '(string) The text displayed on the trigger button that opens the modal.',
  },
  {
    title: 'title',
    description: '(string) The main title heading inside the modal.',
  },
  {
    title: 'description',
    description: '(?string) The secondary descriptive text below the title.',
  },
  {
    title: 'children',
    description: '(ReactNode) The main unique content or elements inside the modal body.',
  },
  {
    title: 'cancelText',
    description: '(?string) Text for the cancel button.',
  },
  {
    title: 'confirmText',
    description: '(?string) Text for the confirm button.',
  },
  {
    title: 'onConfirm',
    description: '() => void (optional)  Callback function triggered when confirm is clicked.',
  },
];
export default function ModalComponent() {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Modal Props</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {MODAL_PROPS.map(item => (
            <Item key={item.title} title={item.title} description={item.description} />
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Example</h3>
        <div className="flex flex-wrap gap-3">
          <Modal
            triggerOpen="Open Modal"
            title="Modal Title"
            description="This is a simple modal description."
            cancelText="Cancel"
            confirmText="Confirm"
            onConfirm={() => {}}
          >
            <p className="text-sm text-gray-500">Here is some modal content.</p>
          </Modal>
        </div>
      </section>
    </div>
  );
}
