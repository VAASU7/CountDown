import React,{Fragment} from 'react'

const Clock = ({Days, Hours,Minutes,Seconds}) => {
  return (
    <Fragment>
        <section className='timer-container'>
            <section className='timer'>
                <div className='clock'>
                <section>
                    <p>{Days}</p>
                    <small> DAYS</small>
                </section>
                <span>:</span>
                <section>
                        <p>{Hours}</p>
                        <small>HOURS</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{Minutes}</p>
                        <small>MINUTES</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{Seconds}</p>
                        <small>SECONDS</small>
                    </section>
                </div>
               
            </section>
        </section>
    </Fragment>
  );
};

Clock.defaultProps={
    Days:10,
    Hours:10,
    Minutes:10,
    Seconds:10,
};

export default Clock;
