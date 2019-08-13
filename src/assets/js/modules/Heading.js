class Heading {
  constructor() {
    this.headerHeadings = document.querySelectorAll(".header_h");
    this.count = 2;
    this.interval = setInterval(() => {
      this.headingAnimate();
    }, 3000);
  }

  headerHide() {
    this.headerHeadings.forEach(heading => {
      heading.style.display = "none";
      heading.classList.remove("header_h--show");
    });
  }

  headingAnimate() {
    this.headerHide();

    const headerCurrent = document.querySelector(`.header_h--${this.count}`);
    headerCurrent.style.display = "block";
    headerCurrent.classList.add("header_h--show");

    this.count += 1;

    if (this.count >= 4) {
      this.count = 1;
    }
    console.log(this.count);
  }
}

export default Heading;
