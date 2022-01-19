import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/m.jpg'
          alt='An image showing Jirawat'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jirawat</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
