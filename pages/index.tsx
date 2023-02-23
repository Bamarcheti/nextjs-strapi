import axios from 'axios';
import { Card } from 'components/Card';

type AttributesType = {
	title: string;
	poster: File[];
}

type Props = {
	movies: [
		{
		  attributes: AttributesType;
		  id: number
	  }
  ]
}

const Home = ({ movies }: Props) => (
	console.log(movies),
	
    <div>
			{movies.map(movie => (
				<Card key={movie.id} movie={movie} />
			))}
    </ div>
)

export async function getServerSideProps() {
  const { NEXT_PUBLIC_API_URL } = process.env

  const res = await axios.get(`${NEXT_PUBLIC_API_URL}/api/movie?populate=*`)
  const data = res.data.data

  return {
    props: {
      movies: data
    }
  }
}

export default Home