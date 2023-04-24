export interface DealDetailProps {
  availableQuantity: number;
  cause: Cause;
  charity: {
    name: string;
    description: string;
    website: string;
  };
  charityDescription: string;
  charityName: string;
  charityWebsit: string;
  dealType: string;
  description: string;
  geoLocation: string;
  key: string;
  makerPercentage: 0;
  media: string[];
  price: number;
  tags: string;
  title: string;
  url: string;
  user: {
    avatar: string;
    name: string;
  };
}

export interface DealsProps {
  deals: Deal[];
  onItemPress: (dealId: string | null) => void;
}
export interface Deal {
  cause: Cause;
  key: string;
  id: string;
  media: string[];
  price: number;
  title: string;
  onItemPress: (dealId: string | null) => void;
}
export interface Cause {
  name: string;
}
