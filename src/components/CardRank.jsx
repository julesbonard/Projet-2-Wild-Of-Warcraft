import React from 'react';
import styles from '../components/CardRank.module.css';
const CardRank = () => {
  return (
    <div className={styles.container}>
      <div className="d-flex flex-column justify-content-center">
        <div className="text-center">
          <img
            className={styles.displayed}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6bc00b5b-6315-46be-b929-605739cf0a30/d4qb62b-a8131be1-05e0-4dd4-9b64-f33c3fab31c4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiYzAwYjViLTYzMTUtNDZiZS1iOTI5LTYwNTczOWNmMGEzMFwvZDRxYjYyYi1hODEzMWJlMS0wNWUwLTRkZDQtOWI2NC1mMzNjM2ZhYjMxYzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LPzfpeqQzturkSJTfQQRsChfweTaH1QOxae5D3Ppjy4"
            alt=""
          />
        </div>
        <div>
          <h1 className={styles.title}>Raid no1:</h1>
        </div>
        <div>
          <p className={styles.text}>
            {' '}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores veritatis molestiae
            praesentium fuga expedita, ipsam nemo nihil dignissimos ex, qui nostrum quod, similique
            eaque fugit consequatur culpa. Quisquam, natus quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardRank;
