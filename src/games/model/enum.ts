import { registerEnumType } from '@nestjs/graphql';

export enum ReleaseStatus {
  RELEASED,
  PREORDER,
  COMING_SOON,
}

registerEnumType(ReleaseStatus, {
  name: 'ReleaseStatus',
});

export enum Platform {
  PS4,
  PS5,
  PS4_PS5,
  VR,
  VR2,
}

registerEnumType(Platform, {
  name: 'Platform',
});

export enum ImageType {
  SCREENSHOT,
  MAIN,
  BACKGROUND,
  COVER,
  ARTBOOK,
  ICON,
  TRAILER,
}

registerEnumType(ImageType, {
  name: 'ImageType',
});

export enum LanguageType {
  VOICE,
  SUBTITLE,
}

registerEnumType(LanguageType, {
  name: 'LanguageType',
});

export enum PsPlusType {
  ESSENTIAL,
  EXTRA,
  PREMIUM,
}

registerEnumType(PsPlusType, {
  name: 'PsPlusType',
});

export enum PriceType {
  BASE,
  DISCOUNT,
  PS_PLUS,
}

registerEnumType(PriceType, {
  name: 'PriceType',
});
