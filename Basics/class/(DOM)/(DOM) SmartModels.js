class SmartModel {
  overlayList = [];

  constructor({ title, content, overlayColor }) {
    this.title = title;
    this.content = content;
    this.overlayColor = overlayColor;
  }

  createMarkup() {
    const overlay = document.createElement("div");

    overlay.style.background = this.overlayColor;
    overlay.style.padding = "40px";
    overlay.style.maxWidth = "500px";

    overlay.insertAdjacentHTML(
      "afterbegin",
      `<span class='title'>${this.title}</span>
       ${this.content}
       <button>Закрыть</button>`,
    );

    return overlay;
  }

  open() {
    const overlay = this.createMarkup();

    document.body.insertAdjacentElement("afterbegin", overlay);

    overlay.querySelector("button").addEventListener("click", () => {
      overlay.remove();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") overlay.remove();
    });

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    this.overlayList.push(overlay);
  }

  close() {
    const overlay = this.overlayList.pop();

    if (overlay)
      overlay.remove();
  }
}

const smartModel = new SmartModel({
  title: "Ура, работает!",
  content: "<p>Это модальное окно, созданное через класс.</p>",
  overlayColor: "rgba(0, 0, 0, 0.8)",
});

smartModel.open();
smartModel.open();
smartModel.close();
