export interface IParsedGame {
  id: string;
  slug: string;
  region: string;
  regionGameId: number;
  fullUrl: string;

  title: string;
  platform: string;
  rating: number | null;
  image: string | null;

  pricing: {
    price: number;
    oldPrice: number | null;
    currency: string;
    discount: {
      hasDiscount: boolean;
      percent: number | null;
      amount: number | null;
    };
    psPlus: {
      price: number | null;
      required: boolean;
    };
    psStore: {
      hasPsPlus: boolean | null;
      subtitles: string[] | null;
      voices: string[] | null;
      orginalImage: string | null;
    };
  };

  metadata: {
    fullurl: string;
    createdAt: Date;
    updatedAt: Date;
    source: 'deals' | 'store' | 'combined';
  };
}



export interface IGame {
  id: string,
  slug: string;
  region: string;
  regionId: string;
  fullUrl: string;

  title: string;
  platform: string;
  rating: number | null;
  image: string | null;
  genre: string | null,
  publisher: string | null,

  price: number;
  originalPrice: number | null;
  currency: string;

  hasDiscount: boolean;
  discountPercent: number | null;
  amount: number | null;
  psPlusPrice: number | null;
  psPlusRequired: boolean;

  hasPsPlus: boolean | null;
  subtitles: string[] | null;
  voices: string[] | null;
  originalImage: string | null;
}

