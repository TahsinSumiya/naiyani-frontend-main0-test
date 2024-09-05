
import { Link } from 'react-router-dom';

const AccountSubscription = () => {


  return (
    <section className='flex justify-center 'data-aos="fade-up">
      <div className="p-6 bg-gray-100 hover:bg-gray-200 border my-5 border-gray-200 rounded-xl  mx-5 "
      style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}
      >
        <h4>
          <a className='text-cyan-700' >
          Account Id: sub_1PvadyHDBXAJ2VqXvcRZuP2R
          </a>
        </h4>

        <p className='font-semibold text-lg text-cyan-700'>
          Status: <span className='text-green-600'>active</span>
        </p>

        <p className='text-lg text-cyan-700'>
          Card last: 
        </p>

        <p className='text-lg text-cyan-700'>
        Current period end: Sat Oct 05 2024 14:02:18 GMT+0600 (Bangladesh Standard Time)
        </p>

        <Link to='/cancel'  className='bg-gray-300 py-3 px-8 transition ease-in-out delay-150 
          hover:-translate-y-1 hover:scale-110 text-gray-700 rounded-2xl hover:bg-slate-300'>
          Cancel
        </Link>
      </div>
    </section>
  );
};

export default AccountSubscription;
