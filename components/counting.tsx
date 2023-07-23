"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import getAllHilighter from '@/lib/getAllHilighter';
import CountUp from 'react-countup';

interface Hilighter {
  id: number;
  icon_image: string;
  title: string;
  number: number;
}

const Factfiger: React.FC = () => {
  const [hilighterData, setHilighterData] = useState<Hilighter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllHilighter();
        setHilighterData(data);
      } catch (error) {
        console.error('Error fetching hilighter data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='factAndFigurs'>
      <div className='container'>
        <div className='row justify-content-center'>
          {hilighterData.map((item) => (
            <div key={item.id} className='crops col-sm-6 col-md-2'>
              <div className='cropsinner'>
                <Image className="hilightericon" width={80} src={`http://admin.agrilfoods.com/uploads/highlighter/${item.icon_image}`} alt='image' height="80" />
                <div className='countnum'>
                  <span className='number'>
                    <CountUp end={item.number} duration={5} />
                  </span>
                  <span className='plusIcon'>+</span>
                </div>
                <span className='itemname'>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Factfiger;
