import { FC } from 'react';

import { useSiteStore } from 'services/store';
import { Link, Text } from 'components/core';
import DynamicTime from 'components/DynamicTime';
import DynamicTagline from 'components/DynamicTagline';
import DynamicCurrentStatus from 'components/DynamicCurrentStatus';

const About: FC = () => {
  const { talkingPoint, currentCity } = useSiteStore(
    'talkingPoint',
    'currentCity'
  );

  return (
    <>
      <div>
        <Text as="p">
          I’m a{' '}
          <Text bold>
            <DynamicTagline />
          </Text>{' '}
          that's currently studying computer science at the University of
          Waterloo.
        </Text>
      </div>

      <div>
        <Text as="p">
          It’s currently{' '}
          <Text bold>
            <DynamicTime />
          </Text>{' '}
          for me in <Text bold>{currentCity}</Text>; <DynamicCurrentStatus />
        </Text>
      </div>

      <div>
        <Text as="p">
          Wanna chat about <Text bold>{talkingPoint}</Text>? Shoot me a message
          at <Link href="mailto:alex@xie.codes">alex@xie.codes</Link> and let's
          talk.
        </Text>
      </div>
    </>
  );
};

export default About;
