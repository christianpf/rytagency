import styles from '@src/styles/Characteristic.module.css'

const Characteristic = ({ children }) => {
  return (
    <div className={`${styles.characteristic} h-full shadow-characteristic rounded-xl p-2 flex flex-col justify-start  transition duration-200 cursor-default hover:scale-105 bg-white `}>
      {children}
    </div>);
};

export default Characteristic;
