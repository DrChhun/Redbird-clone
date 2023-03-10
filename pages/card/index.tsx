import React from 'react';
import Card from '@/components/NewsCard';
import news from '../../file/news.json';

function App() {
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[25px] p-8">
        {news.newsData.map(data => {
          return (
            <Card key={data.id} id={0} image={data.image} title={data.title} tag={data.tag} profile={data.profile} />
          )
        })}
      </div>
    </>
  );
}

export default App;
