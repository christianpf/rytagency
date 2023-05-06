import { useEffect, useState } from 'react'

const useScrollPos = () => {
  
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    if(sessionStorage.getItem('scrollpos')) {
      window.scroll(0 ,sessionStorage.getItem('scrollpos'))
    }
  }, [])

  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(window.scrollY);
      sessionStorage.setItem("scrollpos", e.target.documentElement.scrollTop)
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);

  return scrollValue ;
}

export default useScrollPos