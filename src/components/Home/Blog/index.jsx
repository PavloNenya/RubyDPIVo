import "./index.scss";

export const Blog = () => {
  return (
    <section className="page__blog blog">
      <div className="blog__container">
        <div className="blog__body">
          <div className="blog__title-block title-block">
            <h2 className="title-block__title title-2">Our Blog</h2>
            <div className="title-block__button button-wrapper">
              <a className="button button_md button_ghost" href="#">
                <img className="button__icon" src="img/icons/arrow-black.svg" alt="arrow" />
                <p>View All</p>
              </a>
            </div>
          </div>
          <div className="blog__items">
            <div className="blog__item ibg">
              <img src="img/blog/blog-1.jpg" alt="blog-1" />
              <div className="blog__button button-wrapper">
                <a className="button button_lg button_transparent" href="#">
                  <p>2023 Lookbook</p>
                  <img className="button__icon" src="img/icons/arrow-white.svg" alt="arrow" />
                </a>
              </div>
              <div className="blog__content">
                <h2 className="blog__title title-2--reverse">New Release</h2>
                <p className="blog__text text-light">Presenting new trends of 2023</p>
              </div>
              <div className="blog__line"></div>
            </div>
            <div className="blog__item ibg">
              <img src="img/blog/blog-2.jpg" alt="blog-2" />
              <div className="blog__button button-wrapper">
                <a className="button button_lg button_transparent" href="#">
                  <img className="button__icon" src="img/icons/play.svg" alt="arrow" />
                  Watch Trending
                </a>
              </div>
              <div className="blog__content">
                <h2 className="blog__title title-2--reverse">New Release</h2>
                <p className="blog__text text-light">Presenting new trends of 2023</p>
              </div>
              <div className="blog__line"></div>
            </div>
            <div className="blog__item ibg">
              <img src="img/blog/blog-3.jpg" alt="blog-3" />
              <div className="blog__button button-wrapper">
                <a className="button button_lg button_reverse" href="#">
                  <span>Subscribe</span>
                </a>
              </div>
              <div className="blog__content">
                <p className="blog__text text-light">
                  Subscribe to the newsletter and receive new offers from our store with hot offers.
                </p>
              </div>
              <ul className="blog__icons icons">
                <li className="icons__item">
                  <img src="img/blog/icons/icons-1.png" alt="icons-1" />
                </li>
                <li className="icons__item">
                  <img src="img/blog/icons/icons-2.png" alt="icons-2" />
                </li>
                <li className="icons__item">
                  <img src="img/blog/icons/icons-3.png" alt="icons-3" />
                </li>
              </ul>
              <div className="blog__line blog__line_small"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
