import rentalPressureMarkets from './rentalPressureMarkets';

const relativeValueMarkets = rentalPressureMarkets
  .filter((market) => market.name !== 'Exeter City Centre')
  .map((market) => ({
    ...market,
    rank: rentalPressureMarkets.indexOf(market) + 1,
    valueAssessment: 'Attractive',
    pricePosition: 'Below benchmark',
    growthOutlook: 'Positive',
    rentalStrength: 'High',
  }));

export default relativeValueMarkets;
