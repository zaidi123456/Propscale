import emergingInvestmentMarkets from './emergingInvestmentMarkets';

const regionByCity = {
  Bradford: 'Yorkshire and the Humber',
  Bristol: 'South West',
  Cardiff: 'Wales',
  Coventry: 'West Midlands',
  Glasgow: 'Scotland',
  Leeds: 'Yorkshire and the Humber',
  Leicester: 'East Midlands',
  Liverpool: 'North West',
  London: 'Greater London',
  Manchester: 'North West',
  'Milton Keynes': 'South East',
  Newcastle: 'North East',
  Nottingham: 'East Midlands',
  Portsmouth: 'South East',
  Reading: 'South East',
  Sheffield: 'Yorkshire and the Humber',
  Southampton: 'South East',
  Sunderland: 'North East',
  Birmingham: 'West Midlands',
};

const opportunityGrades = [
  'A',
  'A',
  'A',
  'A',
  'A',
  'B',
  'B',
  'A',
  'B',
  'A',
  'A',
  'A',
  'B',
  'B',
  'A',
  'A',
  'A',
  'A',
  'B',
  'A',
];

const liquidityInsights = {
  'Leeds South Bank': 'Low rental pressure and rising growth momentum.',
  'Liverpool City Centre': 'Low tenant demand and strong investor interest.',
  'Reading Town Centre': 'Strong commuter demand and limited supply.',
};

const liquidityExpansionMarkets = emergingInvestmentMarkets.map(
  (market, index) => ({
    name: market.name,
    city: market.city,
    postcode: market.postcode,
    region: regionByCity[market.city],
    rank: index + 1,
    liquidity: 'Improving',
    activityTrend: 'Rising',
    riskSignal: 'Low',
    opportunityGrade: opportunityGrades[index],
    insight: liquidityInsights[market.name] ?? market.insight,
  }),
);

export default liquidityExpansionMarkets;
