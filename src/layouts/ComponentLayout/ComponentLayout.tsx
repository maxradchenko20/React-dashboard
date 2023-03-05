import TopBar from '@/components/TopBar';
import { LayoutType } from '@/utils/types';

const ComponentLayout = ({ children }: LayoutType) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default ComponentLayout;
