const TMDB_API_KEY = process.env.TMDB_API_KEY;

export default async function Home({ searchParams }: any) {
  const { genre } = searchParams;

  const TMDBurl = `https://api.themoviedb.org/3/movie/${
    genre == "fetchTopRated" ? "top_rated" : "popular"
  }?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

  let res = await fetch(TMDBurl, { next: { revalidate: 21400 } });

  // if (!res.ok) throw new Error("Fail to load new movies");

  let data = await res.json();
  // console.log(data.results);
  return (
    <div className="">
      God abeg
      {data &&
        data.results.map((item: any) => (
          <div key={item.id}>{item.original_title}</div>
        ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
