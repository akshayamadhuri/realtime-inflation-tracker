// components/InflationStats.tsx
import { useQuery } from '@apollo/client';
import { GET_LATEST_INFLATION } from '../graphql/queries';

export default function InflationStats() {
  const { loading, error, data } = useQuery(GET_LATEST_INFLATION);

  if (loading) return <p>Loading inflation rate...</p>;
  if (error) return <p>Error fetching inflation rate.</p>;

  const inflation = data.inflations[0];

  return (
    <div className="p-6 border rounded shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-2">Latest Inflation Rate</h2>
      <p className="text-2xl text-blue-600">{inflation.rate}%</p>
      <p className="text-sm text-gray-500">Updated at: {new Date(inflation.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
}
