import mobileBg from "../images/bg-mobile-dark.jpg"
import desktopBg from "../images/bg-desktop-dark.jpg"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <picture>
          <source media="(min-width: 375px)" srcSet={desktopBg} />
          <img src={mobileBg} alt="" className="bg-image" />
        </picture>
      </section>
    </>
  )
}

export default Showcase
