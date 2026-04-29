"use strict";
let settings = {
  theme: "dark",
  version: "1.0",
};

Object.freeze(settings);

settings.theme = "light"; // Ошибка
settings.newProp = "test"; // Ошибка
