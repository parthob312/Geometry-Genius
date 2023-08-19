"use strict";

const triangle = document.querySelector("#triangle");
const areaCalculation = document.querySelector("#area-calculation");

const calcTriangle = document.querySelector("#calc-triangle");
const triBase = document.querySelector("#tri-base");
const triHeight = document.querySelector("#tri-height");

calcTriangle.addEventListener("click", function () {
  const area = 0.5 * triBase.value * triHeight.value;
  const p = document.createElement("p");
  p.textContent = `Area(A) = ${area} cm`;
  triangle.appendChild(p);
  const ans = document.createElement("p");
  ans.textContent = `Triangle ${area} cm`;
  areaCalculation.appendChild(ans);
});
