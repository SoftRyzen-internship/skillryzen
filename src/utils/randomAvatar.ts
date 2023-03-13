import { IMAGES } from 'ui-kit/images';

const avatars = [
  IMAGES.BLUE_AVATAR,
  IMAGES.GREEN_AVATAR,
  IMAGES.RED_AVATAR,
  IMAGES.YELLOW_AVATAR,
];

export const randomAvatar = () => {
  const randomIndx = Math.round(Math.random() * (avatars.length - 1));

  return avatars[randomIndx];
};
