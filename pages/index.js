import HomePage from '../components/home/HomePage';

export default function Home() {
  return <HomePage />;
}

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    props: {},
  };
}
