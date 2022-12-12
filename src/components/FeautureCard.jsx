import { features } from '../contants/';
import styles from '../styles/styles';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card `}
  >
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3  ">
      <h4 className=" font-poppins font-semibold text-white text-lg  leading-6 ">
        {title}
      </h4>

      <p className=" font-poppins font-normal text-dimWhite text-xs leading-6">
        {content}
      </p>
    </div>
  </div>
);

export default FeatureCard;
