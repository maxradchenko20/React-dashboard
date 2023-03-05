import ActionBlock from '@/components/TopBar/components/ActionBlock';
import InfoBlock from '@/components/TopBar/components/InfoBlock';
import Wrapper from '@/components/TopBar/components/Wrapper/Wrapper';

const TopBar = () => {
  return (
    <Wrapper>
      <InfoBlock />
      <ActionBlock />
    </Wrapper>
  );
};

export default TopBar;
