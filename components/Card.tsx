import styled from '@emotion/styled';

export const Card = ({ movie }: any) => {
  const { NEXT_PUBLIC_API_URL } = process.env;
  const urlImage = `${NEXT_PUBLIC_API_URL}${movie.attributes.poster.data.attributes.url}`;
    
  return (
    <CardStyled>
      <div className='poster'>
        <img src={urlImage} alt='' />
      </div>

      <div className='body'>
        <h3>{movie.attributes.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.attributes.description }} />
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    
    .body {
        padding: 20px;
        
        h3 {
            margin-bottom: 20px;
        }
        
        p {
            color: #666666;
            line-height: 1.5;
        }
        
        a {
            display: inline-block;
            margin: 20px 0;
        }
       
    }
`
