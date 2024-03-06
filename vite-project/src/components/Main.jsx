import { useState } from 'react';
import { BanerSection } from './BanerSection';
import { GetRequestSection } from './GetRequestSection';
import { PostRequestSection } from './PostRequestSection';

export const Main = () => {
  const [isPostSuccess, setIsPostSuccess] = useState(false);

  return (
    <main className='main'>
      <BanerSection />
      <GetRequestSection isPostSuccess={isPostSuccess} />
      <PostRequestSection
        setIsPostSuccess={setIsPostSuccess}
        isPostSuccess={isPostSuccess}
      />
    </main>
  );
};
