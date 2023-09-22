import { useSearchParams } from 'react-router-dom';

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({ title: '' });
  const title = searchParams.get('title');
  return (
    <div>
      <h1>Search Params</h1>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) =>
            setSearchParams(
              (v) => {
                v.set('title', e.target.value);
                return v;
              },
              { replace: true }
            )
          }
        />
      </div>
    </div>
  );
};

export default SearchParams;
