export interface IGood {
  offerId: string;
  displayName: string;
  displayType: string;
  displayDescription: string;
  price: { regularPrice: string };
  displayAssets: [{ full_background: string }];
}

export interface GoodsListProps {
  goods: IGood[];
}
