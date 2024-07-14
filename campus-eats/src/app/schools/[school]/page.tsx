import DiningMap from '../../../components/school/DiningMap';
interface SchoolProps {
  params: {
    school: string;
  };
}

const schoolData = {
  'university-of-california-san-diego': { name: 'UC San Diego', description: 'Description for UCSD', image: '/images/ucsd.jpg' },
  'university-of-california-irvine': { name: 'UC Irvine', description: 'Description for UCI', image: '/images/uci.jpg' },
  'university-of-california-los-angeles': { name: 'UC Los Angeles', description: 'Description for UCLA', image: '/images/ucla.jpg' },
};

const SchoolPage = ({ params }: SchoolProps) => {
  //temp but make a get response from request of earlier form to get this data
  const { school } = params;
  const data = schoolData['university-of-california-san-diego'];

  if (!data) {
    return <div>School not found</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <DiningMap />
      <p>{data.description}</p>
      <img src={data.image} alt={`${data.name} image`} />
    </div>
  );
};

export const generateStaticParams = async () => {
  return Object.keys(schoolData).map((school) => ({
    school,
  }));
};

// export const generateMetadata = async ({ params }: SchoolProps) => {
//   const { school } = params;
//   const data = schoolData[school];
//   return {
//     title: data ? `School: ${data.name}` : 'School not found',
//   };
// };

export default SchoolPage;