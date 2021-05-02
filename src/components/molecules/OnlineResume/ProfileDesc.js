import React from 'react';
import { Text } from '../../atoms';

const ProfileDesc = () => {
  return (
    <div className="flex my-6 | 2xl:space-x-4 xl:space-x-4 lg:space-x-4 md:space-x-4 sm:space-y-4 iphone:space-y-4 android:space-y-4 | justify-center items-center | 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col iphone:flex-col android:flex-col |">
      <img
        src="/image/profile.png"
        className=" 2xl:w-48 2xl:h-48 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-40 md:h-40 sm:w-[50%] sm:h-[50%]  iphone:w-[50%] iphone:h-[50%] android:w-[50%] android:h-[50%]"
      />

      <Text>
        Summarise your career here. You can make a PDF version of your resume
        using our free Sketch template here. Donec quam felis, ultricies nec,
        pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis,
      </Text>
    </div>
  );
};

export default ProfileDesc;
