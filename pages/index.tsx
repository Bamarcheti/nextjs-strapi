import axios from "axios";
import { Card } from "components/Card";
import { Box, Flex } from "reflexbox";

type AttributesType = {
  title: string;
  poster: File[];
};

type Props = {
  movies: [
    {
      attributes: AttributesType;
      id: number;
    }
  ];
};

const Home = ({ movies }: Props) => {
  return (
    <Box variant="container">
      <Box my={40} as="h2">Latest Movies</Box>
        <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row" }}>
          {movies.map((movie) => (
            <Box key={movie.id} width={{ _: "100%", md: "30%" }}>
              <Card movie={movie} />
            </Box>
          ))}
        </Flex>
    </Box>
  );
};

export async function getServerSideProps() {
    const { NEXT_PUBLIC_API_URL } = process.env;

    const res = await axios.get(`${NEXT_PUBLIC_API_URL}/api/movie?populate=*`);
    const data = res.data.data;

    return {
        props: {
            movies: data,
        },
    };
}

export default Home;

