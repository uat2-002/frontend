import type { ReactNode } from 'react';

type ComponentSectionProps = {
  children: ReactNode;
};

const ComponentSection = ({ children }: ComponentSectionProps) => {
  return (
    <div
      className="space-y-8 p-6 border border-t-black-200/80 border-t-4 border-t-primary/20 m-2 rounded-2xl
    shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
    >
      {children}
    </div>
  );
};

export default ComponentSection;
